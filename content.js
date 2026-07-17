/*
 * EDIT THIS FILE to update the website.
 *
 * To add a portrait:
 * 1. Replace assets/profile.png
 * 2. Keep profileImage below as "./assets/profile.png"
 */
window.SITE_CONTENT = {
  displayOptions: {
    // Organization logos can be controlled independently for each section.
    showEducationBadges: true,
    showAwardBadges: true,
  },

  name: "Rui Li",
  initials: "RL",
  profileImage: "./assets/profile.png",
  role: "Postdoctoral Fellow",
  institution: "The Hong Kong University of Science and Technology (HKUST)",
  currentSince: "Since April 2026",
  field: "Electronic Design Automation",
  email: "eeruili@ust.hk",
  location: "Hong Kong",
  advisorUrl: "https://faculty.sist.shanghaitech.edu.cn/faculty/hayj/",
  hkustUrl: "https://hkust.edu.hk/",
  departmentUrl: "https://ece.hkust.edu.hk/",
  shanghaiTechUrl: "https://www.shanghaitech.edu.cn/en/",

  links: [
    {
      label: "Google Scholar",
      url: "https://scholar.google.com/citations?user=ap0NpgIAAAAJ&hl=en",
      icon: "./assets/google-scholar.svg",
    },
    {
      label: "ORCID",
      url: "https://orcid.org/0000-0002-2953-9742",
      icon: "./assets/orcid.svg",
      iconClass: "orcid-icon",
    },
    {
      label: "GitHub",
      url: "https://github.com/lirui-shanghaitech",
      icon: "./assets/github.svg",
    },
    {
      label: "DBLP",
      url: "https://dblp.org/pid/96/4282-95.html",
      icon: "./assets/dblp.svg",
    },
  ],

  skills: ["C/C++", "Python", "Rust", "Verilog", "MLIR"],

  visitorCounter: {
    enabled: true,
    label: "Unique visits",
    serviceBaseUrl: "https://page-views-api.ratneshc.com/api/v1",
    site: "lirui-shanghaitech.github.io",
    path: "/",
    trackOnHosts: ["lirui-shanghaitech.github.io"],
    deduplicationNote: "Counted once per visitor every 30 minutes.",
  },

  biography: [
    "I am currently a Postdoctoral Fellow in the Department of Electronic and Computer Engineering at The Hong Kong University of Science and Technology (HKUST), starting in April 2026. I received my Ph.D. in Electronic Science and Technology from ShanghaiTech University in January 2026, where I was supervised by Prof. Yajun Ha, and my B.Eng. in Electronic Information Engineering from ShanghaiTech University in July 2020.",
    "My research focuses on electronic design automation, including high-level and logic synthesis, formal verification of arithmetic circuits, reliable FPGA computing, and AI-assisted EDA.",
  ],
  researchInterests: [
    "Electronic Design Automation (EDA)",
    "Compiler",
    "High-Level Synthesis (HLS)",
    "Logic Synthesis",
    "Formal Verification",
    "FPGA",
  ],

  publications: [
    {
      label: "TCAS-I'26",
      title:
        "Event-Driven Asynchronous Graph Neural Network FPGA Accelerator for Real-Time Edge Vision",
      authors:
        "Tianhang Liu, Shen Zhang, Guangyao Yan, Runhua Wang, Rui Li, Shijie Meng, Hao Sun, and Yajun Ha",
      citation:
        "IEEE Transactions on Circuits and Systems I: Regular Papers, 2026",
      doi: "10.1109/TCSI.2026.3679753",
    },
    {
      label: "TCAD'26",
      ccf: "CCF-A",
      title:
        "ESACO: Fast E-Graph Extraction via Orchestrated Simulated Annealing-Based Local Search and Ant Colony Optimization-Based Global Search",
      authors: "Rui Li, Lin Li, Heng Yu, and Yajun Ha",
      citation:
        "IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems, vol. 45, no. 5, pp. 2179–2192, 2026",
      doi: "10.1109/TCAD.2025.3611101",
    },
    {
      label: "TODAES'26",
      ccf: "CCF-B",
      title:
        "FPGA Routing Congestion Prediction via Graph Learning-Aided Conditional GAN",
      authors:
        "Qingyu Yang, Jingjin Li, Rui Li, Yuting He, Yajun Ha, Linlin Shen, Ruibin Bai, and Heng Yu",
      citation:
        "ACM Transactions on Design Automation of Electronic Systems, vol. 31, no. 2, pp. 21:1–21:24, 2026",
      doi: "10.1145/3773770",
    },
    {
      label: "TVLSI'26",
      title:
        "DSHD-CAM: High-Throughput RRAM CAM Leveraging Dynamic Shifted Hamming Distance for Genome Analysis",
      authors:
        "Chenxin Jiang, Shen Zhang, Tiankuo Zheng, Rui Li, Yuhao Shu, and Yajun Ha",
      citation:
        "IEEE Transactions on Very Large Scale Integration Systems, vol. 34, no. 5, pp. 1514–1527, 2026",
      doi: "10.1109/TVLSI.2026.3666678",
    },
    {
      label: "TCAD'25",
      ccf: "CCF-A",
      title:
        "LibSCAT: Library-Based Formal Verification of Heavily Optimized Multipliers via GNN-Guided Reference Selection",
      authors:
        "Rui Li, Masahiro Fujita, Heng Yu, Guangyao Yan, Lin Li, and Yajun Ha",
      citation:
        "IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems, 2025",
      doi: "10.1109/TCAD.2025.3645205",
    },
    {
      label: "TCAD'25",
      ccf: "CCF-A",
      title:
        "Fast FPGA Accelerator of Graph Cut Algorithm Based on Cached Folding Grid Architecture",
      authors:
        "Guangyao Yan, Rui Li, Shen Zhang, Hao Sun, Weixiong Jiang, Hui Wang, and Yajun Ha",
      citation:
        "IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems, 2025",
      doi: "10.1109/TCAD.2025.3646550",
    },
    {
      label: "TCAD'25",
      ccf: "CCF-A",
      title:
        "RefSCAT-2.0: Formal Verification of Large-Scale Optimized Multipliers via Quantum-Inspired Ant Colony Optimization-Based Reference Generation",
      authors:
        "Rui Li, Lin Li, Heng Yu, Masahiro Fujita, Weixiong Jiang, and Yajun Ha",
      citation:
        "IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems, vol. 44, no. 12, pp. 4828–4841, 2025",
      doi: "10.1109/TCAD.2025.3567883",
    },
    {
      label: "TCAD'25",
      ccf: "CCF-A",
      title:
        "RefSCAT: Formal Verification of Logic-Optimized Multipliers via Automated Reference Multiplier Generation and SCA-SAT Synergy",
      authors:
        "Rui Li, Lin Li, Heng Yu, Masahiro Fujita, Weixiong Jiang, and Yajun Ha",
      citation:
        "IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems, vol. 44, no. 2, pp. 791–804, 2025",
      doi: "10.1109/TCAD.2024.3442987",
    },
    {
      label: "TCAD'23",
      ccf: "CCF-A",
      title:
        "Criticality-Aware Negotiation-Driven Scrubbing Scheduling for Reliability Maximization in SRAM-Based FPGAs",
      authors: "Rui Li, Heng Yu, Lin Li, and Yajun Ha",
      citation:
        "IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems, vol. 42, no. 11, pp. 3881–3894, 2023",
      doi: "10.1109/TCAD.2023.3257710",
    },
    {
      label: "TCAD'23",
      ccf: "CCF-A",
      title:
        "A Recursion and Lock-Free GPU-Based Logic Rewriting Framework Exploiting Both Intranode and Internode Parallelism",
      authors: "Lin Li, Rui Li, and Yajun Ha",
      citation:
        "IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems, vol. 42, no. 11, pp. 3972–3984, 2023",
      doi: "10.1109/TCAD.2023.3251741",
    },
    {
      label: "TVLSI'22",
      title:
        "FODM: A Framework for Accurate Online Delay Measurement Supporting All Timing Paths in FPGA",
      authors:
        "Weixiong Jiang, Heng Yu, Hongtu Zhang, Yuhao Shu, Rui Li, Jian Chen, and Yajun Ha",
      citation:
        "IEEE Transactions on Very Large Scale Integration Systems, vol. 30, no. 4, pp. 502–514, 2022",
      doi: "10.1109/TVLSI.2022.3144321",
    },
    {
      label: "DAC'21",
      ccf: "CCF-A",
      title:
        "TAIT: One-Shot Full-Integer Lightweight DNN Quantization via Tunable Activation Imbalance Transfer",
      authors:
        "Weixiong Jiang, Heng Yu, Xinzhe Liu, Hao Sun, Rui Li, and Yajun Ha",
      citation:
        "58th ACM/IEEE Design Automation Conference, pp. 1027–1032, 2021",
    },
    {
      label: "DAC'20",
      ccf: "CCF-A",
      title:
        "DVFS-Based Scrubbing Scheduling for Reliability Maximization on Parallel Tasks in SRAM-Based FPGAs",
      authors: "Rui Li, Heng Yu, Weixiong Jiang, and Yajun Ha",
      citation:
        "57th ACM/IEEE Design Automation Conference, pp. 1–6, 2020",
      doi: "10.1109/DAC18072.2020.9218574",
    },
    {
      label: "ISCAS'20",
      ccf: "CCF-B",
      title: "An Accurate FPGA Online Delay Monitor Supporting All Timing Paths",
      authors: "Weixiong Jiang, Rui Li, Heng Yu, and Yajun Ha",
      citation:
        "IEEE International Symposium on Circuits and Systems, pp. 1–5, 2020",
    },
  ],

  patents: [
    {
      title:
        "Method for Implementing Formal Verification of Optimized Multiplier via SCA-SAT Synergy",
      inventors: "Yajun Ha, Rui Li, and Lin Li",
      number: "US 12,292,946",
      date: "Jun. 5, 2025",
      type: "US Patent",
      status: "Granted",
    },
    {
      title: "Window-Based Dynamic Scrubbing Scheduling Method",
      inventors: "Yajun Ha and Rui Li",
      number: "US 2024/0281282",
      date: "Aug. 22, 2024",
      type: "US Patent",
      status: "Granted",
    },
    {
      title:
        "SCA-SAT Synergy-Based Formal Verification Method for Optimized Multipliers",
      inventors: "Yajun Ha, Rui Li, and Lin Li",
      number: "CN 117785112 A",
      date: "Mar. 29, 2024",
      type: "CN Patent",
      status: "Published",
    },
    {
      title: "Window-Based Dynamic Scrubbing Scheduling Method",
      inventors: "Yajun Ha and Rui Li",
      number: "CN 115964977",
      date: "Apr. 14, 2023",
      type: "CN Patent",
      status: "Granted",
    },
    {
      title:
        "Optimized Reconfiguration Algorithm Based on Dynamic Voltage and Frequency Scaling",
      inventors: "Yajun Ha and Rui Li",
      number: "US 2022/0309217",
      date: "Dec. 27, 2022",
      type: "US Patent",
      status: "Granted",
    },
    {
      title:
        "Dynamic-Voltage-and-Frequency-Scaling-Based Optimized Reconfiguration Method",
      inventors: "Yajun Ha and Rui Li",
      number: "CN 111858463",
      date: "Oct. 30, 2020",
      type: "CN Patent",
      status: "Granted",
    },
  ],

  background: [
    {
      period: "Apr. 2026–Present",
      title: "Postdoctoral Fellow",
      place: "The Hong Kong University of Science and Technology",
      placeLinkText: "The Hong Kong University of Science and Technology",
      placeUrl: "https://hkust.edu.hk/",
      detail: "",
      logo: "./assets/hkust-logo.svg",
    },
    {
      period: "Sep. 2020–Jan. 2026",
      title: "Ph.D. in Electronic Science and Technology",
      place: "ShanghaiTech University · Advisor: Prof. Yajun Ha",
      detail: "",
      logo: "./assets/shanghaitech-logo.svg",
    },
    {
      period: "Sep. 2021–Mar. 2022",
      title: "Software Engineering Intern",
      place: "Cadence, Machine Learning R&D Group",
      placeLinkText: "Cadence",
      placeUrl: "https://www.cadence.com/en_US/home.html",
      detail: "",
      logo: "./assets/cadence-logo.svg?v=2",
    },
    {
      period: "Sep. 2016–Jul. 2020",
      title: "B.Eng. in Electronic Information Engineering",
      place: "ShanghaiTech University",
      detail: "",
      logo: "./assets/shanghaitech-logo.svg",
    },
  ],

  academicServices: [
    {
      role: "Reviewer",
      badge: "TRETS",
      organization:
        "ACM Transactions on Reconfigurable Technology and Systems",
    },
    {
      role: "Reviewer",
      badge: "TCAD",
      organization:
        "IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems",
    },
    {
      role: "Reviewer",
      badge: "TCAS-II",
      organization:
        "IEEE Transactions on Circuits and Systems II: Express Briefs",
    },
    {
      role: "Reviewer",
      badge: "FPT'25",
      organization:
        "IEEE International Conference on Field-Programmable Technology",
    },
  ],

  awards: [
    {
      year: "2022",
      title: "First Prize",
      badge: "gold",
      organization: "4th Integrated Circuit EDA Elite Challenge",
      logo: "./assets/award-eda-elite.png",
      logoAlt: "Integrated Circuit EDA Elite Challenge",
      link: "https://eda.nctieda.com/",
    },
    {
      year: "2021",
      title: "Honor Award",
      badge: "honor",
      organization: "IEEE/ACM ICCAD CAD Contest",
      logo: "./assets/award-iccad-2021.jpg",
      logoAlt: "ICCAD 2021 CAD Contest",
      link: "https://www.iccad-contest.org/2021/",
    },
    {
      year: "2021",
      title: "Champion",
      badge: "gold",
      organization: "IEEE CEDA EDAThon",
      logo: "./assets/award-ieee-ceda.png",
      logoAlt: "IEEE CEDA",
      link: "https://ieee-ceda.org/",
    },
    {
      year: "2020",
      title: "Champion",
      badge: "gold",
      organization:
        "2nd Fuwei Cup National Electronic Design Competition, Software Track",
      logo: "./assets/award-fudan-micro.jpg",
      logoAlt: "Fudan Microelectronics",
      link: "https://www.fuweibei.com/",
    },
    {
      year: "2020",
      title: "Runner-up",
      badge: "silver",
      organization: "IEEE/ACM DAC System Design Contest",
      logo: "./assets/award-dac-2020.png",
      logoAlt: "57th Design Automation Conference",
      link: "https://archive.dac.com/about/conference-archive/57th-dac-2020.html",
    },
    {
      year: "2020",
      title: "Shanghai Outstanding Graduate",
      badge: "scholarship",
      organization: "Shanghai Municipal Education Commission",
      logo: "./assets/award-shanghai-education.png",
      logoAlt: "Shanghai Education",
      link: "https://edu.sh.gov.cn/",
    },
    {
      year: "2019",
      title: "Dean's Scholarship",
      badge: "scholarship",
      organization: "ShanghaiTech University",
      logo: "./assets/shanghaitech-logo.svg",
      logoAlt: "ShanghaiTech University",
      link: "https://www.shanghaitech.edu.cn/",
    },
    {
      year: "2019",
      title: "Outstanding Winner",
      badge: "gold",
      organization: "Mathematical Contest in Modeling",
      logo: "./assets/award-comap.svg",
      logoAlt: "COMAP",
      link: "https://www.comap.com/contests/mcm-icm",
    },
  ],
};
