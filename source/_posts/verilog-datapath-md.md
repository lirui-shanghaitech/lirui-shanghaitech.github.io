---
title: Datapath synthesize in Verilog
date: 2021-02-21 20:30:17
tags: Verilog 
categories: Verilog
---

###### 锁存器的综合：

```verilog
module latch (
    output q_out,
    input data_in, enable, rst_b
);
    assign q_out = !(rst_b == 1'b0) ? 0:enable ? data_in:q_out;
endmodule
```
<!--more-->

* 当一条带条件操作符的连续赋值语句出现反馈时，综合工具将判断出它具有一个锁存器的功能，并给出它的硬件实现。
* 在赋值表达式的右逻辑发生变化的所有情况下，必须给行为中包含的所有变量赋值，否则会产生不想要的锁存器。因此所有用以实现组合逻辑的电平敏感行为电路的输入信号都必须包含于事件控制表达式中
* 电平敏感周期型行为中，赋值语句的右表达式中任意信号都不再出现于其左表达式中 （如果想要生成组合逻辑电路）

```verilog
//有意综合锁存器，注意非阻塞赋值<= 的运用

// 综合成带反馈的多路复用器结构
module latch_if1 (
    output reg [3: 0] data_out, 
    input [3: 0] data_in, input latch_enable
); 
    always @ (*)
        if (latch_enable) data_out <= data_in; 
        else data_out <= data_out; 
endmodule

// 综合成硬件锁存器
module latch_if2 (
    output reg [3: 0] data_out, 
    input [3: 0] data_in, input latch_enable
); 
    always @ (*)
        if (latch_enable) data_out <= data_in; 
endmodule
```

* In a level-sensitive cyclic behavior. If a case statement has a default assignment with feedback (i.e., the variable is explicitly assigned to itself), the synthesis tool will form a mux structure with feedback. 
* Likewise, if an if statement in a level-sensitive behavior assigns a variable to itself, the result will be a mux structure with feedback.
* If the conditional operator is used in a continuous assignment, the result will be a mux with feedback. If it is used in a level-sensitive cyclic behavior, the result will be a hardware latch. 
* If the conditional operator is used in an edge-sensitive cyclic behavior, the result will be a register with a gated data path in a feedback configuration with the output of the register.



###### 触发器的综合：

A register variable in an edge-sensitive behavior will be synthesized as a flip-flop

(1) A variable that is referenced within an edge-sensitive behavior before it is assigned value in the behavior will be synthesized as the output of a flip-flop.

(2) if it is referenced within the behavior before it is assigned value.

(3) if it is assigned value in only some of the branches of the activity within the behavior.

```verilog
// 异步复位D触发器
module asynch_df_behav (
	input data, set_b, rst_b, clk,
	output reg q, outputq_bar
); 
    always @(posedge clk, negedge set_b, negedge rst_b) begin
        if(rst_b == 1'b0)q <= 0;
        else if(set_b == 1'b0)q <= 1; 
    	else q <= data; // synchronized activity 
    end
endmodule
```

* 综合工具只支持全部为边缘敏感或全部为电平敏感的事件控制表达式
* always中的语句块为顺序执行，并且反复无限的执行
* Recall that an incomplete conditional statement (i.e., an if ... else statement or a case statement) in a level-sensitive cyclic behavior will synthesize to a latch. However, if the behavior is edge-sensitive, these types of statements will not create latches, but they will synthesize logic that implements a "clock enable," because the incompletestatements imply that the affected variables should not change under the conditions implied by the logic, even though the clock makes a transition.



###### 比较器的综合 (连续赋值与寄存器传输模型的比较)：

```verilog
module compare_32_CA #(parameter word__size = 32)(
    output A_gt_B,A_lt_B,A_eq_B, 
    input [word__size-1:O] A, B
); 
    assign A_gt_B = (A> B);
	assign A_lt_B = (A< B); 
    assign A_eq_B = (A== B); 
endmodule
```

* 关键词```assign``` 定义了连续赋值，将右边等式的布尔表达式与左边的变量联系起来
* 基于连续赋值的建模方式用于描述电平敏感的行为，连续赋值语句之间，基本门之间以及描述中的所有行为模块之间都是并行执行的

```verilog
module Comp_2_RTL (
    output reg A_lt_B,A_gt_B,A_eq_B, 
    input A1, A0, B1, B0
);
    always @ (A0, A1, B0, B1) begin 
        A_lt_B = ({A1, A0} < {B1, B0}); 
        A_gt_B = ({A1, A0} > {B1, B0}); 
        A_eq_B = ({A1, A0} == {B1, B0}); 
    end 
endmodule
```

* 无论数据通道的哪一位在任何时间发生变化，电平敏感的周期性行为都将不断的进行，不断更新它的输出
* 周期性行为的语句```顺序执行```，无限循环



###### 移位寄存器的综合 (阻塞与非阻塞赋值的区别)：

```verilog
module shiftreg_PA (
    output reg A, 
    input E, clk, rst
); 
    reg B, C, D; 
    always @ (posedge clk, posedge rst) begin 
        if (rst == 1'b1) begin 
            A=0; B=0; C= 0; D= 0; 
        end else begin 
            A=B; B= C; C= D; D= E; 
        end
    end 
endmodule
```

* 阻塞赋值```=``` ，进行过程赋值的语句必须在行为中的下一条语句执行之前完成执行过程（把结果写入寄存器中）。紧随其后的过程赋值语句被阻塞执行，直到正在执行的过程赋值语句完成执行任务时为止

```verilog
module shiftreg_nb_V05 (
	output reg A,
    input E, clk, rst
); 
    reg B,C, D; 
    always @ (posedge clk, posedge rst) begin 
        if(rst== 1'b1) begin A<=0; B<=0;C<=0; D<= 0; end 
    	else begin 
            A <= B; // D <= E; 
            B <= C; // C <= D; 
            C <= D; // B <= C; 
            D <= E; // A <= B; 
        end
    end 
endmodule
```

* 非阻塞赋值```<=``` , 非阻塞赋值语句可以并发的执行，语句在列表中的排列顺序对最终的结果没有影响，一般仿真器在给左边目标赋值之前要计算每一个右表达式的值
* 非阻塞赋值表达式的左变量必须为```reg```类型
* 边沿敏感（同步）操作尽量用非阻塞赋值来完成，组合逻辑尽量用阻塞赋值来描述



###### 计数器的综合：



###### 移位寄存器的综合：



###### 寄存器的综合：

```verilog
module Register_File #(parameter word_size = 32, addr_size =5)(
    output [word_size-1: 0] Data_Out_1, Data_Out_2, 
	input [word_size-1:0] Data_in, 
	input [addr_size-1:0] Read_Addr_1, Read_Addr_2, Write_Addr, 
	input Write_Enable, Clock
); 
    reg [word_size-1:0] Reg_File [31:0]; // 32bit x32 word memory declaration 
	assign Data_Out_1 = Reg_File[Read_Addr_1];
	assign Data_Out_2 = Reg_File[Read_Addr_2];
	always @ (posedge Clock) begin 
        if (Write_Enable == 1'b1) Reg_File[Write_Addr] <= Data_in; 
    end 
endmodule
```



###### 组合逻辑的综合：

* 结构化的原语网表
* 一系列连续赋值语句
* 电平敏感的周期性行为 （内部无反馈并且没有锁存器）



###### ```for```的综合：

* Provide a shorter way to express a series of statements
* Loop index variables must be integer type
* Step, start & end value must be constant
* In synthesis, for loops loops are “unrolled” , and then synthesized

```verilog
always@( a or b )
	begin
		for( i=0; i<4; i=i+1 )
			c[i] = a[i] & b[i];
	end
```

Unrolled版本

```verilog
always@( a or b )
    begin
        c[0] = a[0] & b[0];
        c[1] = a[1] & b[1];
        c[2] = a[2] & b[2];
        c[3] = a[3] & b[3];
	end
```



###### ```Case```和```if```的综合：

```verilog
// 优先级选择器
module mux_4pri (
    output reg y, 
    input a, b, c, d, sel_a, sel_b, sel_c
); 
    always @ (sel_a, sel_b, sel_c, a, b, c, d)
//  always @ (") Optional wildcard token for complete sensitivity list 
    if (sel_a==1) y = a; 
        else if (sel_b==0) y = b; 
            else if (sel_c ==1) y = c; 
                else y = d; 
endmodule
```

* ```case```和```if```语句一般被综合成组合电路
* ```case```语句通常隐含的对首先解码的选项赋予较高优先权，而```if```语句则隐含指定第一个分支具有更高优先权。综合工具会先判断```case```中的分支选择是否互斥，如果互斥，综合工具认为它们具有相同的优先级，综合成为一个多路选择器，如何不互斥则综合为优先级结构

```verilog
module alu_with_z1 (
    output alu_out, 
    input [3: 0] data_a, data_b, input [2: 0] opcode, input enable
); 
    reg [3: 0] alu_reg; 
    assign alu_out = (enable == 1) ? alu_reg : 4'bz; 
    always @ (opcode, data_a, data_b)
        case (opcode)
            3'b001: alu_reg = data_a |data_b;
            3'b010: alu_reg = data_a ^ data_b;
            3'b110: alu_reg = ~data_b; 
            default: alu_reg = 4'b0; // alu_with_z2 has default: alu_reg = 4'bx; 
        endcase 
endmodule
```

* 缺少默认赋值语句会使```寄存器变量```输出锁存，综合工具会自动生成锁存器 （在条件未定义时保持输出原值）
* 当对默认赋值语句没有限制时（e.g., 4'bx）综合工具将视为无关紧要条件，减少电路所需逻辑
* 如果一个条件操作符将```z```值放在电平敏感行为中连续赋值的右表达式中，那么该语句将会综合成通过组合逻辑驱动的一个三态器件中