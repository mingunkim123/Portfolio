const API_URL = "/api/cv";

const byId = (id) => document.getElementById(id);

const renderItem = (item, options = {}) => {
  const root = document.createElement("div");
  root.className = "item";

  const title = document.createElement("h3");
  title.textContent = item.title || item.name || item.institution || item.organization;
  root.appendChild(title);

  const metaParts = [item.role, item.result, item.location, item.period, item.year].filter(Boolean);
  if (metaParts.length) {
    const meta = document.createElement("p");
    meta.className = "meta";
    meta.textContent = metaParts.join(" | ");
    root.appendChild(meta);
  }

  if (item.degree) {
    const degree = document.createElement("p");
    degree.textContent = item.degree;
    root.appendChild(degree);
  }

  if (item.summary || item.description) {
    const desc = document.createElement("p");
    desc.textContent = item.summary || item.description;
    root.appendChild(desc);
  }

  if (Array.isArray(item.details) && item.details.length) {
    const ul = document.createElement("ul");
    item.details.forEach((detail) => {
      const li = document.createElement("li");
      li.textContent = detail;
      ul.appendChild(li);
    });
    root.appendChild(ul);
  }

  if (Array.isArray(item.highlights) && item.highlights.length) {
    const ul = document.createElement("ul");
    item.highlights.forEach((highlight) => {
      const li = document.createElement("li");
      li.textContent = highlight;
      ul.appendChild(li);
    });
    root.appendChild(ul);
  }

  if (options.showStack && Array.isArray(item.stack) && item.stack.length) {
    const stackWrap = document.createElement("div");
    stackWrap.className = "chip-wrap";
    item.stack.forEach((tech) => {
      const chip = document.createElement("span");
      chip.className = "chip";
      chip.textContent = tech;
      stackWrap.appendChild(chip);
    });
    root.appendChild(stackWrap);
  }

  return root;
};

const renderList = (targetId, list, options = {}) => {
  const target = byId(targetId);
  target.innerHTML = "";
  list.forEach((entry) => {
    target.appendChild(renderItem(entry, options));
  });
};

const renderSkills = (skills) => {
  const container = byId("skills");
  container.innerHTML = "";

  const labelMap = {
    languages: "Languages",
    frameworks: "Frameworks & Libraries",
    embedded_platforms: "Embedded Platforms",
    tools: "Tools",
  };

  Object.entries(skills).forEach(([key, values]) => {
    const group = document.createElement("div");
    group.className = "skill-group";

    const title = document.createElement("h3");
    title.textContent = labelMap[key] || key;
    group.appendChild(title);

    const chips = document.createElement("div");
    chips.className = "chip-wrap";

    values.forEach((value) => {
      const chip = document.createElement("span");
      chip.className = "chip";
      chip.textContent = value;
      chips.appendChild(chip);
    });

    group.appendChild(chips);
    container.appendChild(group);
  });
};

const renderInterests = (interests) => {
  const container = byId("interests");
  container.innerHTML = "";
  interests.forEach((interest) => {
    const chip = document.createElement("span");
    chip.className = "chip";
    chip.textContent = interest;
    container.appendChild(chip);
  });
};

const renderBasics = (basics) => {
  // ── 메인 헤더 ──
  byId("name").textContent = basics.name;
  byId("headline").textContent = basics.headline;

  const contact = byId("contact");
  contact.innerHTML = `
    <a href="mailto:${basics.email}">${basics.email}</a>
    <span>${basics.phone}</span>
    <span>${basics.location}</span>
  `;

  // ── 사이드바: 이름 / 헤드라인 ──
  const sidebarName = byId("sidebar-name");
  const sidebarHeadline = byId("sidebar-headline");
  if (sidebarName) sidebarName.textContent = basics.name;
  if (sidebarHeadline) sidebarHeadline.textContent = basics.headline;

  // ── 사이드바: GitHub 링크 ──
  const ghWrap = byId("sidebar-github");
  if (ghWrap && basics.github) {
    const githubUrl = basics.github.startsWith("http")
      ? basics.github
      : `https://github.com/${basics.github}`;
    const displayText = basics.github.replace(/^https?:\/\//, "");

    ghWrap.innerHTML = `
      <span class="gh-label">GitHub</span>
      <a href="${githubUrl}" target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 16 16" aria-hidden="true">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38
            0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13
            -.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66
            .07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15
            -.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27
            .68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12
            .51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48
            0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
        </svg>
        ${displayText}
      </a>
    `;
  }
};

const renderCv = (cv) => {
  renderBasics(cv.basics);
  renderInterests(cv.interests);
  renderList("education", cv.education);
  renderList("experience", cv.experience);
  renderList("awards", cv.awards);
  renderSkills(cv.skills);
  renderList("projects", cv.projects, { showStack: true });
  renderList("activities", cv.activities);
};

const renderError = (message) => {
  document.body.innerHTML = `<main class="page"><section class="card"><h1>Failed to load CV data</h1><p>${message}</p></section></main>`;
};

fetch(API_URL)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    return response.json();
  })
  .then(renderCv)
  .catch((error) => {
    renderError(`Cannot reach API at ${API_URL}. (${error.message})`);
  });
