const internships = [
  {
    id: 1,
    company: "Northstar Labs",
    role: "Software Engineering Intern",
    location: "Bengaluru",
    mode: "Hybrid",
    stipend: "₹25k–35k/mo",
    deadline: "15 Oct 2026",
    skills: ["Python", "SQL", "Git"],
    description:
      "Build internal web services and automation with a small engineering team."
  },
  {
    id: 2,
    company: "Civic Data Works",
    role: "Data Analyst Intern",
    location: "Remote",
    mode: "Remote",
    stipend: "₹18k–25k/mo",
    deadline: "20 Oct 2026",
    skills: ["Python", "SQL", "Pandas"],
    description:
      "Clean datasets and create decision-ready analysis for public-interest projects."
  },
  {
    id: 3,
    company: "PixelForge",
    role: "Frontend Developer Intern",
    location: "Pune",
    mode: "On-site",
    stipend: "₹20k–30k/mo",
    deadline: "08 Oct 2026",
    skills: ["JavaScript", "React", "CSS"],
    description:
      "Implement accessible product interfaces and reusable UI components."
  },
  {
    id: 4,
    company: "FinEdge",
    role: "Backend Developer Intern",
    location: "Mumbai",
    mode: "Hybrid",
    stipend: "₹25k–40k/mo",
    deadline: "28 Oct 2026",
    skills: ["Python", "FastAPI", "SQL"],
    description:
      "Create APIs and data services for a financial analytics product."
  },
  {
    id: 5,
    company: "GreenGrid AI",
    role: "ML Engineering Intern",
    location: "Remote",
    mode: "Remote",
    stipend: "₹22k–32k/mo",
    deadline: "02 Nov 2026",
    skills: ["Python", "ML", "Pandas"],
    description:
      "Prepare datasets and evaluate lightweight machine-learning models."
  },
  {
    id: 6,
    company: "Orbit Systems",
    role: "Java Developer Intern",
    location: "Delhi",
    mode: "Hybrid",
    stipend: "₹18k–28k/mo",
    deadline: "12 Oct 2026",
    skills: ["Java", "SQL", "Git"],
    description:
      "Work on backend modules, testing, and API integrations."
  },
  {
    id: 7,
    company: "HealthStack",
    role: "Product Data Intern",
    location: "Bengaluru",
    mode: "On-site",
    stipend: "₹20k–30k/mo",
    deadline: "30 Oct 2026",
    skills: ["SQL", "Excel", "Analytics"],
    description:
      "Turn product usage data into concise insights for the operations team."
  },
  {
    id: 8,
    company: "CloudNest",
    role: "Cloud Engineering Intern",
    location: "Remote",
    mode: "Remote",
    stipend: "₹24k–34k/mo",
    deadline: "05 Nov 2026",
    skills: ["Python", "Linux", "Git"],
    description:
      "Support cloud automation, monitoring, and deployment workflows."
  }
];

let selected = new Set();

let saved = new Set(
  JSON.parse(localStorage.getItem("internmatch_saved") || "[]")
);

let discoveryActive = false;

const cards = document.getElementById("cards");
const search = document.getElementById("search");

const skills = document.getElementById("skills");
const locationEl = document.getElementById("location");
const mode = document.getElementById("mode");

const compareBtn = document.getElementById("compareBtn");
const compareCount = document.getElementById("compareCount");
const savedCount = document.getElementById("savedCount");

const emptyState = document.getElementById("emptyState");
const resultMeta = document.getElementById("resultMeta");

const comparePanel = document.getElementById("comparePanel");
const compareTableWrap = document.getElementById("compareTableWrap");


function skillTokens() {
  return skills.value
    .toLowerCase()
    .split(",")
    .map(x => x.trim())
    .filter(Boolean);
}


function filtered() {
  const q = search.value.toLowerCase().trim();
  const toks = skillTokens();

  return internships.filter(x => {

    const text = (
      x.company +
      " " +
      x.role +
      " " +
      x.skills.join(" ")
    ).toLowerCase();

    const qok = !q || text.includes(q);

    const lok =
      !locationEl.value ||
      x.location === locationEl.value;

    const mok =
      !mode.value ||
      x.mode === mode.value;

    const tok =
      !discoveryActive ||
      (
        toks.length > 0 &&
        toks.some(t =>
          x.skills.join(" ").toLowerCase().includes(t)
        )
      );

    return qok && lok && mok && tok;
  });
}


function render() {

  const data = filtered();

  cards.innerHTML = "";

  emptyState.classList.toggle(
    "hidden",
    data.length !== 0
  );

  data.forEach(x => {

    const div = document.createElement("article");

    div.className = "card";

    div.innerHTML = `
      <input
        class="check"
        type="checkbox"
        ${selected.has(x.id) ? "checked" : ""}
        aria-label="Select ${x.role}"
      >

      <div class="card-top">
        <div class="company">${x.company}</div>
        <div class="muted">${x.mode}</div>
      </div>

      <div class="role">${x.role}</div>

      <div class="muted">
        ${x.description}
      </div>

      <div class="tags">
        ${x.skills
          .map(s => `<span class="tag">${s}</span>`)
          .join("")}
      </div>

      <div class="details">

        <div class="detail">
          Location
          <strong>${x.location}</strong>
        </div>

        <div class="detail">
          Stipend
          <strong>${x.stipend}</strong>
        </div>

        <div class="detail">
          Deadline
          <strong>${x.deadline}</strong>
        </div>

        <div class="detail">
          ID
          <strong>#${String(x.id).padStart(3, "0")}</strong>
        </div>

      </div>

      <div class="card-actions">

        <button class="save ${saved.has(x.id) ? "saved" : ""}">
          ${saved.has(x.id) ? "✓ Saved" : "Save opportunity"}
        </button>

      </div>
    `;


    div
      .querySelector(".check")
      .addEventListener("change", e => {

        if (e.target.checked) {

          if (selected.size >= 2) {

            e.target.checked = false;

            alert(
              "Select up to two opportunities to compare."
            );

            return;
          }

          selected.add(x.id);

        } else {

          selected.delete(x.id);
        }

        updateCounts();
      });


    div
      .querySelector(".save")
      .addEventListener("click", () => {

        if (saved.has(x.id)) {

          saved.delete(x.id);

        } else {

          saved.add(x.id);
        }

        localStorage.setItem(
          "internmatch_saved",
          JSON.stringify([...saved])
        );

        render();
        updateCounts();
      });


    cards.appendChild(div);
  });


  resultMeta.textContent =
    `${data.length} opportunit${
      data.length === 1 ? "y" : "ies"
    } shown · ${selected.size}/2 selected for comparison`;

  updateCounts();
}


function updateCounts() {

  compareCount.textContent = selected.size;

  savedCount.textContent = saved.size;
}


function showCompare() {

  if (selected.size !== 2) {

    alert(
      "Select exactly two opportunities to compare."
    );

    return;
  }

  const items = internships.filter(x =>
    selected.has(x.id)
  );

  compareTableWrap.innerHTML = `
    <table class="compare-table">
      <tbody>

        <tr>
          <th>Role</th>
          ${items
            .map(
              x =>
                `<td>
                  <strong>${x.role}</strong>
                  <br>
                  ${x.company}
                </td>`
            )
            .join("")}
        </tr>

        <tr>
          <th>Location</th>
          ${items
            .map(x => `<td>${x.location}</td>`)
            .join("")}
        </tr>

        <tr>
          <th>Mode</th>
          ${items
            .map(x => `<td>${x.mode}</td>`)
            .join("")}
        </tr>

        <tr>
          <th>Stipend</th>
          ${items
            .map(x => `<td>${x.stipend}</td>`)
            .join("")}
        </tr>

        <tr>
          <th>Deadline</th>
          ${items
            .map(x => `<td>${x.deadline}</td>`)
            .join("")}
        </tr>

        <tr>
          <th>Skills</th>
          ${items
            .map(x => `<td>${x.skills.join(", ")}</td>`)
            .join("")}
        </tr>

        <tr>
          <th>Description</th>
          ${items
            .map(x => `<td>${x.description}</td>`)
            .join("")}
        </tr>

      </tbody>
    </table>
  `;

  comparePanel.classList.remove("hidden");

  comparePanel.scrollIntoView({
    behavior: "smooth"
  });
}


document
  .getElementById("discoverBtn")
  .addEventListener("click", () => {

    discoveryActive = true;

    render();
  });


[search, locationEl, mode].forEach(el => {

  el.addEventListener("input", render);

});


compareBtn.addEventListener(
  "click",
  showCompare
);


document
  .getElementById("closeCompare")
  .addEventListener("click", () => {

    comparePanel.classList.add("hidden");

  });


render();