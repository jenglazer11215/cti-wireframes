// ── Shared state & helpers ───────────────────────────────────────────────────
// Vanilla-JS port of the React primitives in the original App.tsx.
// Every render*() function in pages.js/pages2.js returns an HTML string built
// from these helpers, using the exact Tailwind class names from the source
// (styles.css hand-compiles just the utility classes actually used).

const S = {
  page: "home",
  selectedEventId: null, // set in app.js after FORUM_EVENTS loads
  selectedReportTitle: null, // set in app.js after LAB_REPORTS loads
  forumPublic: { filter: "All" },
  lab: { series: "All", tag: "All" },
  consequentialArchive: { type: "All", topic: "All" },
  engage: { tab: "membership", openFaq: null, openForm: null, selectedNeeds: [] },
  advisoryMember: { openForm: null },
  playbooks: { theme: "All" },
  forumCalendar: { view: "list", access: "All", theme: "All" },
  pastEventDetail: { tab: "synthesis" },
  eventDetailMember: { registered: false },
  luminaryExchange: { topic: "All" },
  ui: { searchOpen: false, needHelpOpen: false },
};

function esc(str) {
  if (str === null || str === undefined) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function nav(page) {
  S.page = page;
  render();
  window.scrollTo(0, 0);
}

function navEngage(tab) {
  S.engage.tab = tab;
  nav("engage");
}

function navToEvent(eventId, target) {
  S.selectedEventId = eventId;
  nav(target);
}

function selectReport(title) {
  S.selectedReportTitle = title;
}

function getSelectedEvent() {
  return FORUM_EVENTS.find(e => e.id === S.selectedEventId) || FORUM_EVENTS[0];
}

function getSelectedReport() {
  return LAB_REPORTS.find(r => r.title === S.selectedReportTitle) || LAB_REPORTS[0];
}

// Generic patch-and-rerender helper used by inline onclick handlers.
// path is a dot path into S, e.g. "lab.tag"
function setState(path, value) {
  const parts = path.split(".");
  let obj = S;
  for (let i = 0; i < parts.length - 1; i++) obj = obj[parts[i]];
  obj[parts[parts.length - 1]] = value;
  render();
}

function toggleState(path) {
  const parts = path.split(".");
  let obj = S;
  for (let i = 0; i < parts.length - 1; i++) obj = obj[parts[i]];
  obj[parts[parts.length - 1]] = !obj[parts[parts.length - 1]];
  render();
}

function toggleEngageNeed(opt) {
  const arr = S.engage.selectedNeeds;
  const i = arr.indexOf(opt);
  if (i === -1) arr.push(opt); else arr.splice(i, 1);
  render();
}

function scrollToFormId(id) {
  requestAnimationFrame(() => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  });
}

// ── Primitives ────────────────────────────────────────────────────────────────

function Btn(label, { onclick = "", v = "outline", extraClass = "" } = {}) {
  const styles = {
    outline: "border border-gray-800 text-gray-800 px-4 py-1.5 text-xs font-mono hover:bg-gray-100 cursor-pointer inline-block",
    solid: "bg-gray-900 text-white px-4 py-1.5 text-xs font-mono hover:bg-gray-700 cursor-pointer inline-block",
    ghost: "text-gray-700 underline text-xs font-mono hover:text-gray-900 cursor-pointer inline-block",
  };
  return `<button ${onclick ? `onclick="${onclick}"` : ""} class="${styles[v]} ${extraClass}">${label}</button>`;
}

function GrayBox({ h = "h-32", w = "w-full", label = "IMAGE" } = {}) {
  return `<div class="${w} ${h} bg-gray-200 border border-gray-300 flex items-center justify-center flex-shrink-0">
    <span class="text-gray-400 text-xs font-mono uppercase tracking-wide">${esc(label)}</span>
  </div>`;
}

function Lbl(text) {
  return `<span class="text-xs font-mono uppercase tracking-widest text-gray-500">${text}</span>`;
}

function TagEl(text) {
  return `<span class="inline-block text-xs border border-gray-400 text-gray-600 px-2 py-0.5 font-mono leading-none">${esc(text)}</span>`;
}

function HR() {
  return `<hr class="border-gray-200 my-8">`;
}

function Card(inner, { onclick = "", className = "" } = {}) {
  return `<div ${onclick ? `onclick="${onclick}"` : ""} class="border border-gray-300 p-4 bg-white ${onclick ? "cursor-pointer hover:bg-gray-50" : ""} ${className}">${inner}</div>`;
}

// items: [[label, page], ...]. A page value of "engage:<tab>" routes to the
// Engage page with that tab active instead of navigating to a distinct page.
function SectionNav(section, items, active) {
  return `<div class="bg-gray-50 border-b border-gray-200">
    <div class="max-w-6xl mx-auto px-6 flex items-center gap-0">
      <span class="text-xs font-mono uppercase tracking-widest text-gray-400 pr-6 border-r border-gray-300 py-2.5 flex-shrink-0">${esc(section)}</span>
      <div class="flex items-center ml-2">
        ${items.map(([label, page]) => {
          const isEngageTab = page.startsWith("engage:");
          const tab = isEngageTab ? page.slice("engage:".length) : null;
          const onclick = isEngageTab ? `navEngage('${tab}')` : `nav('${page}')`;
          const isActive = isEngageTab ? (active === "engage" && S.engage.tab === tab) : active === page;
          return `
          <button onclick="${onclick}" class="text-xs font-mono px-4 py-2.5 border-b-2 -mb-px transition-colors ${isActive ? "border-gray-900 text-gray-900 font-medium" : "border-transparent text-gray-500 hover:text-gray-800 hover:border-gray-400"}">
            ${esc(label)}
          </button>`;
        }).join("")}
      </div>
    </div>
  </div>`;
}

// onChangePath: dot-path into S to set with the clicked option value
function Filters(options, active, onChangePath, label = "Filter by") {
  return `<div class="flex items-center gap-3 flex-wrap">
    <span class="text-xs font-mono text-gray-400 flex-shrink-0">${esc(label)}:</span>
    <div class="flex gap-2 flex-wrap">
      ${options.map(o => `
        <button onclick="setState('${onChangePath}', '${esc(o).replace(/'/g, "\\'")}')" class="text-xs font-mono border rounded-full px-3 py-0.5 ${active === o ? "bg-gray-900 text-white border-gray-900" : "border-gray-400 text-gray-600 hover:border-gray-800 bg-white"}">
          ${esc(o)}
        </button>`).join("")}
    </div>
  </div>`;
}

function Field(label, { tall = false } = {}) {
  return `<div>
    <div class="text-xs font-mono text-gray-600 mb-1 uppercase tracking-wide">${esc(label)}</div>
    <div class="border border-gray-300 bg-gray-50 w-full ${tall ? "h-20" : "h-9"}"></div>
  </div>`;
}

function FooterCTA() {
  return `<section class="bg-gray-900 text-white px-6 py-14 mt-12">
    <div class="max-w-6xl mx-auto text-center">
      ${Lbl("CENTER FOR TALENT INNOVATION")}
      <h2 class="text-3xl font-semibold mt-4 mb-3">Be in the room.</h2>
      <p class="text-gray-400 text-sm mb-8">Membership means a seat at the table where the work happens.</p>
      <button onclick="nav('request-form')" class="border border-white text-white px-6 py-3 font-mono text-xs hover:bg-white hover:text-gray-900 transition-colors">
        Request a Conversation
      </button>
    </div>
  </section>`;
}

// ── Navigation ────────────────────────────────────────────────────────────────

function toggleSearchOpen() {
  S.ui.searchOpen = !S.ui.searchOpen;
  S.ui.needHelpOpen = false;
  render();
}

function toggleNeedHelpOpen() {
  S.ui.needHelpOpen = !S.ui.needHelpOpen;
  S.ui.searchOpen = false;
  render();
}

// Full-width bar rendered directly under the primary nav — matches the site's
// existing pattern of stacked utility bars (breadcrumb strip, section nav,
// anchor nav) rather than a floating dropdown, so no new CSS positioning is
// needed. Search has no real query logic yet — placeholder input only.
function SearchBar(dark) {
  if (!S.ui.searchOpen) return "";
  const barClass = dark ? "bg-gray-800 border-b border-gray-700" : "bg-gray-50 border-b border-gray-200";
  const inputClass = dark ? "bg-gray-900 border-gray-600 text-white placeholder-gray-500" : "bg-white border-gray-300 text-gray-900";
  return `<div class="${barClass} px-6 py-3">
    <div class="max-w-6xl mx-auto flex items-center gap-3">
      <span class="text-xs font-mono ${dark ? "text-gray-400" : "text-gray-400"}">🔍</span>
      <input type="text" placeholder="Search research, events, courses, playbooks…" class="border ${inputClass} text-sm px-3 py-1.5 flex-1" />
      <button onclick="toggleSearchOpen()" class="text-xs font-mono ${dark ? "text-gray-400 hover:text-white" : "text-gray-500 hover:text-gray-900"}">Close</button>
    </div>
  </div>`;
}

function NeedHelpBar() {
  if (!S.ui.needHelpOpen) return "";
  const items = [
    ["Book Time", "request-form"], ["Book a Speaker", "engage:speaking"],
    ["Request Advisory", "advisory-member"], ["Press Inquiry", "engage:press"],
    ["Contact CTI", "request-form"], ["Website Help", "request-form"],
  ];
  return `<div class="bg-gray-800 border-b border-gray-700 px-6 py-3">
    <div class="max-w-6xl mx-auto flex items-center gap-6 flex-wrap">
      <span class="text-xs font-mono text-gray-400 flex-shrink-0">Need Help?</span>
      ${items.map(([label, target]) => {
        const onclick = target.startsWith("engage:") ? `navEngage('${target.slice(7)}')` : `nav('${target}')`;
        return `<button onclick="${onclick}" class="text-xs font-mono text-gray-300 hover:text-white whitespace-nowrap">${esc(label)}</button>`;
      }).join("")}
    </div>
  </div>`;
}

function PublicNav(page) {
  const items = [
    ["Home", "home"], ["Global Lab", "lab"], ["Luminary Exchange", "luminary-exchange"],
    ["The Forum", "forum-public"], ["Consequential", "consequential-archive"], ["Engage", "engage"],
  ];
  return `<nav class="border-b border-gray-300 bg-white sticky top-0 z-50">
    <div class="max-w-6xl mx-auto px-6 py-3 flex items-center gap-6">
      <button onclick="nav('home')" class="font-mono font-bold text-gray-900 text-sm tracking-widest flex-shrink-0">CTI</button>
      <div class="flex items-center gap-5 flex-1 overflow-x-auto">
        ${items.map(([label, p]) => `
          <button onclick="nav('${p}')" class="text-xs font-mono uppercase tracking-wide whitespace-nowrap hover:text-gray-900 ${page === p ? "text-gray-900 border-b border-gray-900 pb-0.5" : "text-gray-500"}">
            ${esc(label)}
          </button>`).join("")}
      </div>
      <div class="flex items-center gap-3 flex-shrink-0">
        <button onclick="toggleSearchOpen()" class="text-xs font-mono text-gray-500 hover:text-gray-900" title="Search">🔍</button>
        <button onclick="nav('request-form')" class="text-xs font-mono text-gray-600 hover:text-gray-900 whitespace-nowrap">Book Time</button>
        <button onclick="nav('dashboard')" class="text-xs font-mono border border-gray-800 px-3 py-1.5 hover:bg-gray-100 whitespace-nowrap">
          Member Login
        </button>
      </div>
    </div>
    ${SearchBar(false)}
  </nav>`;
}

function MemberNav(page) {
  const items = [
    ["Home", "dashboard"], ["Global Lab", "lab"], ["Luminary Exchange", "luminary-exchange"],
    ["The Forum", "forum-calendar"], ["Consequential", "consequential-member"], ["My Membership", "my-membership"],
  ];
  return `<nav class="border-b border-gray-700 bg-gray-900 sticky top-0 z-50">
    <div class="max-w-6xl mx-auto px-6 py-3 flex items-center gap-6">
      <button onclick="nav('dashboard')" class="font-mono font-bold text-white text-xs tracking-widest flex-shrink-0">CTI MEMBERS</button>
      <div class="flex items-center gap-6 flex-1">
        ${items.map(([label, p]) => `
          <button onclick="nav('${p}')" class="text-xs font-mono uppercase tracking-wide whitespace-nowrap hover:text-white ${page === p ? "text-white border-b border-white pb-0.5" : "text-gray-400"}">
            ${esc(label)}
          </button>`).join("")}
      </div>
      <div class="flex items-center gap-3 flex-shrink-0">
        <button onclick="toggleSearchOpen()" class="text-xs font-mono text-gray-400 hover:text-white" title="Search">🔍</button>
        <button onclick="nav('request-form')" class="text-xs font-mono text-gray-400 hover:text-white whitespace-nowrap">Book Time</button>
        <button onclick="toggleNeedHelpOpen()" class="text-xs font-mono text-gray-400 hover:text-white whitespace-nowrap">Need Help? ▾</button>
        <button onclick="nav('my-membership')" class="text-xs font-mono text-gray-400 hover:text-white">Profile</button>
        <button onclick="nav('home')" class="text-xs font-mono border border-gray-600 text-gray-400 px-3 py-1.5 hover:border-gray-300 hover:text-white">Log Out</button>
      </div>
    </div>
    ${SearchBar(true)}
    ${NeedHelpBar()}
  </nav>`;
}
