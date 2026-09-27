let internships = [];
let selected = new Set();
let saved = new Set(JSON.parse(localStorage.getItem("internmatch_saved") || "[]"));
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

async function fetchJobs() {
  cards.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 40px; color: #667085;">Loading real opportunities from Remotive API...</p>';
  try {
    const res = await fetch('https://remotive.com/api/remote-jobs?limit=50');
    const data = await res.json();
    internships = data.jobs.map(job => ({
      id: job.id,
      company: job.company_name,
      role: job.title,
      description: job.description.replace(/<[^>]+>/g, '').substring(0, 100) + '...',
      skills: job.tags && job.tags.length > 0 ? job.tags.slice(0, 3) : ['Tech'],
      location: job.candidate_required_location || 'Remote',
      stipend: job.salary ? job.salary : 'Depends on exp',
      mode: job.job_type === 'full_time' ? 'Remote' : 'Contract',
      deadline: new Date(job.publication_date).toLocaleDateString()
    }));
    render();
  } catch(e) {
    cards.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: red;">Failed to load opportunities.</p>';
  }
}

function skillTokens() {
  return skills.value.toLowerCase().split(",").map(x => x.trim()).filter(Boolean);
}

function filtered() {
  const q = search.value.toLowerCase().trim();
  const toks = skillTokens();
  return internships.filter(x => {
    const text = (x.company + " " + x.role + " " + x.skills.join(" ")).toLowerCase();
    const qok = !q || text.includes(q);
    const lok = !locationEl.value || x.location.toLowerCase().includes(locationEl.value.toLowerCase());
    const mok = !mode.value || x.mode === mode.value;
    const tok = !discoveryActive || (toks.length > 0 && toks.some(t => x.skills.join(" ").toLowerCase().includes(t)));
    return qok && lok && mok && tok;
  });
}

function render() {
  const data = filtered();
  cards.innerHTML = "";
  emptyState.classList.toggle("hidden", data.length !== 0);
  
  data.forEach(x => {
    const div = document.createElement("article");
    div.className = "card";
    div.innerHTML = 
      <input class="check" type="checkbox"  + (selected.has(x.id) ? "checked" : "") +  aria-label="Select  + x.role + ">
      <div class="card-top">
        <div class="company"> + x.company + </div>
        <div class="muted"> + x.mode + </div>
      </div>
      <div class="role"> + x.role + </div>
      <div class="muted"> + x.description + </div>
      <div class="tags"> + x.skills.map(s => '<span class="tag">' + s + '</span>').join("") + </div>
      <div class="details">
        <div class="detail">Location <strong> + x.location.substring(0,25) + </strong></div>
        <div class="detail">Salary <strong> + x.stipend.substring(0,25) + </strong></div>
        <div class="detail">Posted <strong> + x.deadline + </strong></div>
        <div class="detail">ID <strong># + String(x.id).substring(0, 6) + </strong></div>
      </div>
      <div class="card-actions">
        <button class="save  + (saved.has(x.id) ? "saved" : "") + "> + (saved.has(x.id) ? "✓ Saved" : "Save opportunity") + </button>
      </div>
    ;
    div.querySelector(".check").addEventListener("change", e => {
      if (e.target.checked) {
        if (selected.size >= 2) {
          e.target.checked = false;
          alert("Select up to two opportunities to compare.");
          return;
        }
        selected.add(x.id);
      } else {
        selected.delete(x.id);
      }
      updateCounts();
    });
    div.querySelector(".save").addEventListener("click", () => {
      if (saved.has(x.id)) { saved.delete(x.id); } else { saved.add(x.id); }
      localStorage.setItem("internmatch_saved", JSON.stringify([...saved]));
      render();
      updateCounts();
    });
    cards.appendChild(div);
  });

  resultMeta.textContent = data.length + " opportunities shown • " + selected.size + "/2 selected for comparison";
  updateCounts();
}

function updateCounts() {
  compareCount.textContent = selected.size;
  savedCount.textContent = saved.size;
}

function showCompare() {
  if (selected.size !== 2) {
    alert("Select exactly two opportunities to compare.");
    return;
  }
  const items = internships.filter(x => selected.has(x.id));
  compareTableWrap.innerHTML = '<table class="compare-table"><tbody>' + 
    '<tr><th>Role</th>' + items.map(x => '<td><strong>' + x.role + '</strong><br>' + x.company + '</td>').join("") + '</tr>' +
    '<tr><th>Location</th>' + items.map(x => '<td>' + x.location + '</td>').join("") + '</tr>' +
    '<tr><th>Mode</th>' + items.map(x => '<td>' + x.mode + '</td>').join("") + '</tr>' +
    '<tr><th>Salary</th>' + items.map(x => '<td>' + x.stipend + '</td>').join("") + '</tr>' +
    '<tr><th>Posted</th>' + items.map(x => '<td>' + x.deadline + '</td>').join("") + '</tr>' +
    '<tr><th>Skills</th>' + items.map(x => '<td>' + x.skills.join(", ") + '</td>').join("") + '</tr>' +
    '<tr><th>Description</th>' + items.map(x => '<td>' + x.description + '</td>').join("") + '</tr>' +
    '</tbody></table>';
  comparePanel.classList.remove("hidden");
  comparePanel.scrollIntoView({ behavior: "smooth" });
}

document.getElementById("discoverBtn").addEventListener("click", () => { discoveryActive = true; render(); });
[search, locationEl, mode].forEach(el => { el.addEventListener("input", render); });
compareBtn.addEventListener("click", showCompare);
document.getElementById("closeCompare").addEventListener("click", () => { comparePanel.classList.add("hidden"); });

fetchJobs();
