(function () {
  const data = window.SITE_CONTENT;
  const showEducationBadges =
    data.displayOptions?.showEducationBadges !== false;
  const showAwardBadges = data.displayOptions?.showAwardBadges !== false;

  const escapeHtml = (value) =>
    String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  const emphasizeName = (value) =>
    escapeHtml(value).replaceAll("Rui Li", "<strong>Rui Li</strong>");

  const linkAdvisor = (value) =>
    escapeHtml(value)
      .replace(
        "Prof. Yajun Ha",
        `<a href="${escapeHtml(data.advisorUrl)}" target="_blank" rel="noreferrer">Prof. Yajun Ha</a>`,
      )
      .replace(
        "Department of Electronic and Computer Engineering",
        `<a href="${escapeHtml(data.departmentUrl)}" target="_blank" rel="noreferrer">Department of Electronic and Computer Engineering</a>`,
      )
      .replace(
        "The Hong Kong University of Science and Technology (HKUST)",
        `<a href="${escapeHtml(data.hkustUrl)}" target="_blank" rel="noreferrer">The Hong Kong University of Science and Technology (HKUST)</a>`,
      )
      .replaceAll(
        "ShanghaiTech University",
        `<a href="${escapeHtml(data.shanghaiTechUrl)}" target="_blank" rel="noreferrer">ShanghaiTech University</a>`,
      );

  const linkBackgroundPlace = (item) => {
    const linkedPlace = linkAdvisor(item.place);

    if (!item.placeLinkText || !item.placeUrl) {
      return linkedPlace;
    }

    const label = escapeHtml(item.placeLinkText);
    return linkedPlace.replace(
      label,
      `<a href="${escapeHtml(item.placeUrl)}" target="_blank" rel="noreferrer">${label}</a>`,
    );
  };

  const renderAwardBadge = (type) => {
    const badges = {
      gold: { label: "Champion", icon: "★" },
      silver: { label: "Runner-up", icon: "★" },
      honor: { label: "Honor Award", icon: "★" },
      scholarship: {
        label: "Scholarship",
        icon: `<svg class="award-badge-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 2 8l10 5 8-4v6h2V8L12 3Zm-6 8v5c3 2.4 9 2.4 12 0v-5l-6 3-6-3Z"/></svg>`,
      },
    };
    const badge = badges[type];

    if (!badge) {
      return "";
    }

    return `<span class="award-medal ${escapeHtml(type)}" role="img" aria-label="${escapeHtml(badge.label)} badge" title="${escapeHtml(badge.label)}">${badge.icon}</span>`;
  };

  const profile = document.querySelector("#profile-image");
  profile.innerHTML = data.profileImage
    ? `<img src="${escapeHtml(data.profileImage)}" alt="${escapeHtml(data.name)}" />`
    : `<div class="profile-placeholder" aria-label="${escapeHtml(data.name)}">${escapeHtml(data.initials)}</div>`;

  document.querySelector("#contact").innerHTML = `
    <ul class="profile-links">
      <li>
        <span class="profile-link-static">
          <svg class="contact-icon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z"/>
          </svg>
          <span>${escapeHtml(data.location)}</span>
        </span>
      </li>
      <li>
        <a class="profile-meta-link" href="${escapeHtml(data.hkustUrl)}" target="_blank" rel="noreferrer">
          <svg class="contact-icon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="m12 2 10 5v2H2V7l10-5ZM4 11h3v7H4v-7Zm5 0h3v7H9v-7Zm5 0h3v7h-3v-7Zm5 0h2v7h-2v-7ZM2 20h20v2H2v-2Z"/>
          </svg>
          <span>HKUST</span>
        </a>
      </li>
      <li class="profile-line-break" aria-hidden="true"></li>
      <li>
        <a href="mailto:${escapeHtml(data.email)}" title="${escapeHtml(data.email)}">
          <svg class="contact-icon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M3 5h18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm9 7 8-5H4l8 5Zm0 2.3L3 8.7V17h18V8.7l-9 5.6Z"/>
          </svg>
          <span>Email</span>
        </a>
      </li>
      ${data.links
        .map(
          (link) =>
            `<li><a href="${escapeHtml(link.url)}" target="_blank" rel="noreferrer">${link.icon ? `<img class="profile-link-icon${link.iconClass ? ` ${escapeHtml(link.iconClass)}` : ""}" src="${escapeHtml(link.icon)}" alt="" aria-hidden="true" />` : ""}<span>${escapeHtml(link.label)}</span></a></li>`,
        )
        .join("")}
      <li class="profile-line-break" aria-hidden="true"></li>
      <li class="profile-skills" aria-label="Technical skills">
        ${data.skills
          .map(
            (skill) =>
              `<span class="profile-skill-tag">${escapeHtml(skill)}</span>`,
          )
          .join("")}
      </li>
    </ul>
  `;

  document.querySelector("#identity").innerHTML = `
    <h1>${escapeHtml(data.name)}</h1>
  `;

  document.querySelector("#biography-content").innerHTML = data.biography
    .map((paragraph) => {
      const linkedParagraph = linkAdvisor(paragraph);
      return `<p>${linkedParagraph}</p>`;
    })
    .join("") +
    `<div class="research-tags" aria-label="Research interests">
      ${data.researchInterests
        .map(
          (interest) =>
            `<span class="research-tag">${escapeHtml(interest)}</span>`,
        )
        .join("")}
    </div>`;

  document.querySelector("#publication-list").innerHTML = data.publications
    .map(
      (publication) => {
        const title = publication.doi
          ? `<a class="publication-title" href="https://doi.org/${escapeHtml(publication.doi)}" target="_blank" rel="noreferrer">${escapeHtml(publication.title)}</a>`
          : `<span class="publication-title">${escapeHtml(publication.title)}</span>`;

        return `
          <li>
            <span class="venue-badge">${escapeHtml(publication.label)}</span>
            ${publication.ccf ? `<span class="ccf-badge ${publication.ccf === "CCF-A" ? "ccf-a" : "ccf-b"}">${escapeHtml(publication.ccf)}</span>` : ""}
            <span class="publication-authors">${emphasizeName(publication.authors)}</span>,
            “${title}”,
            <span class="publication-venue">${escapeHtml(publication.citation)}.</span>
          </li>
        `;
      },
    )
    .join("");

  document.querySelector("#patent-list").innerHTML = data.patents
    .map(
      (patent) => `
        <li>
          <span class="venue-badge patent-type">${escapeHtml(patent.type)}</span>
          <span class="ccf-badge patent-status ${patent.status === "Granted" ? "granted" : "published"}">${escapeHtml(patent.status)}</span>
          <span class="publication-authors">${emphasizeName(patent.inventors)}</span>,
          “<span class="publication-title">${escapeHtml(patent.title)}</span>”,
          <span class="publication-venue">${escapeHtml(patent.number)}, ${escapeHtml(patent.date)}.</span>
        </li>
      `,
    )
    .join("");

  document.querySelector("#background-list").innerHTML = data.background
    .map(
      (item) => `
        <article class="background-item${showEducationBadges ? "" : " no-logo"}">
          <div class="date">${escapeHtml(item.period)}</div>
          <div class="background-copy">
            <h3>${escapeHtml(item.title)}</h3>
            <p class="background-place">${linkBackgroundPlace(item)}</p>
            ${item.detail ? `<p class="detail">${escapeHtml(item.detail)}</p>` : ""}
          </div>
          ${showEducationBadges && item.logo ? `<span class="background-logo-frame" aria-hidden="true"><img class="background-logo" src="${escapeHtml(item.logo)}" alt="" /></span>` : ""}
        </article>
      `,
    )
    .join("");

  document.querySelector("#service-list").innerHTML = data.academicServices
    .map(
      (service) => `
        <article class="service-item">
          <strong>${escapeHtml(service.role)}</strong>
          <span>
            ${service.badge ? `<span class="service-badge">${escapeHtml(service.badge)}</span>` : ""}
            ${escapeHtml(service.organization)}
          </span>
        </article>
      `,
    )
    .join("");

  document.querySelector("#award-list").innerHTML = data.awards
    .map(
      (award) => `
        <article class="award-item${showAwardBadges ? "" : " no-logo"}">
          <span class="date">${escapeHtml(award.year)}</span>
          <span class="award-medal-slot">
            ${renderAwardBadge(award.badge)}
          </span>
          <strong>${escapeHtml(award.title)}</strong>
          <p>${escapeHtml(award.organization)}</p>
          ${
            showAwardBadges && award.logo
              ? `<a class="award-logo-frame" href="${escapeHtml(award.link)}" target="_blank" rel="noreferrer" aria-label="${escapeHtml(award.logoAlt)} official website"><img class="award-logo" src="${escapeHtml(award.logo)}" alt="${escapeHtml(award.logoAlt)}" /></a>`
              : ""
          }
        </article>
      `,
    )
    .join("");

  document.querySelector("#copyright").textContent =
    `© ${new Date().getFullYear()} ${data.name}`;
})();
