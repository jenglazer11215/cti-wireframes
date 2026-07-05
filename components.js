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
  lab: { series: "All", tag: "All", geography: "All", resourceType: "All", query: "" },
  consequentialArchive: { type: "All", topic: "All" },
  engage: { tab: "membership", openFaq: null, openForm: null, selectedNeeds: [] },
  advisoryMember: { openForm: null },
  playbooks: { theme: "All" },
  forumCalendar: { view: "list", access: "All", theme: "All" },
  pastEventDetail: { tab: "synthesis" },
  eventDetailMember: { registered: false },
  luminaryExchange: { topic: "All" },
  ui: { searchOpen: false, needHelpOpen: false, searchQuery: "" },
  postLoginTarget: null,
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

// Simulates "Register" on a public event requiring member login: stash which
// event the user was trying to register for, send them through a login step,
// and land back on that same event's member registration page — instead of
// dumping them on the generic dashboard with no memory of what they wanted.
function loginAndRegister(eventId) {
  S.selectedEventId = eventId;
  S.postLoginTarget = "event-detail-member";
  nav("member-login");
}

function completeLogin() {
  const target = S.postLoginTarget || "dashboard";
  S.postLoginTarget = null;
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
  if (!S.ui.searchOpen) S.ui.searchQuery = "";
  render();
}

function toggleNeedHelpOpen() {
  S.ui.needHelpOpen = !S.ui.needHelpOpen;
  S.ui.searchOpen = false;
  render();
}

// Flattens every content collection into one array of
// { kind, title, subtitle, onclick } entries — a unified knowledge-search
// index across Reports, Events, Courses, Playbooks, Assessments, and
// Articles (matches the spec's result groups; no Video content exists in
// the dataset today so that group simply never populates).
function buildSearchIndex() {
  const isMember = MEMBER_PAGES.includes(S.page);
  const consequential = isMember ? CONSEQUENTIAL_MEMBER_POSTS : CONSEQUENTIAL_POSTS;
  const eventDetailTarget = isMember ? "event-detail-member" : "event-detail";
  const postTarget = isMember ? "post-member" : "blog-post";
  const items = [];

  LAB_REPORTS.forEach(r => items.push({
    kind: "Reports", title: r.title, subtitle: `${r.date}${r.gated ? " · Members Only" : ""}`,
    onclick: `selectReport('${r.title.replace(/'/g, "\\'")}'); nav('lab-report')`,
  }));
  FORUM_EVENTS.forEach(e => items.push({
    kind: "Events", title: e.title, subtitle: e.date,
    onclick: `navToEvent('${e.id}', '${eventDetailTarget}')`,
  }));
  CTILEARNING_PROGRAMS.forEach(c => items.push({
    kind: "Courses", title: c.t, subtitle: "CTILearning",
    onclick: `nav('ctilearning')`,
  }));
  PLAYBOOKS.forEach(p => items.push({
    kind: "Playbooks", title: p.t, subtitle: p.fmt,
    onclick: `nav('playbook-detail')`,
  }));
  ASSESSMENTS.forEach(a => items.push({
    kind: "Assessments", title: a.t, subtitle: "Assessment",
    onclick: `nav('playbooks')`,
  }));
  consequential.forEach(c => items.push({
    kind: "Articles", title: c.title, subtitle: c.type,
    onclick: `nav('${postTarget}')`,
  }));
  // Video archive is a member benefit — not surfaced in public search.
  if (isMember) {
    SUMMIT_VIDEOS.forEach(v => items.push({
      kind: "Videos", title: v.title, subtitle: v.summit,
      onclick: `nav('summit-member')`,
    }));
  }

  return items;
}

function SearchResults(query, dark) {
  if (!query) return "";
  const matches = buildSearchIndex().filter(item => item.title.toLowerCase().includes(query.toLowerCase()));
  if (matches.length === 0) {
    return `<p class="text-xs font-mono ${dark ? "text-gray-500" : "text-gray-400"} mt-3">No results for "${esc(query)}"</p>`;
  }
  const groups = {};
  matches.forEach(m => { (groups[m.kind] = groups[m.kind] || []).push(m); });
  const order = ["Reports", "Events", "Courses", "Playbooks", "Assessments", "Articles", "Videos"];
  return `<div class="mt-3 grid grid-cols-3 gap-4">
    ${order.filter(kind => groups[kind]).map(kind => `
      <div>
        <p class="text-xs font-mono ${dark ? "text-gray-500" : "text-gray-400"} uppercase tracking-wide mb-1.5">${kind}</p>
        ${groups[kind].slice(0, 5).map(m => `
          <button onclick="${m.onclick}" class="block w-full text-left text-xs ${dark ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-gray-900"} py-1 leading-snug">
            ${esc(m.title)}
          </button>`).join("")}
      </div>`).join("")}
  </div>`;
}

// Full-width bar rendered directly under the primary nav — matches the site's
// existing pattern of stacked utility bars (breadcrumb strip, section nav,
// anchor nav) rather than a floating dropdown, so no new CSS positioning is
// needed.
function SearchBar(dark) {
  if (!S.ui.searchOpen) return "";
  const barClass = dark ? "bg-gray-800 border-b border-gray-700" : "bg-gray-50 border-b border-gray-200";
  const inputClass = dark ? "bg-gray-900 border-gray-600 text-white placeholder-gray-500" : "bg-white border-gray-300 text-gray-900";
  return `<div class="${barClass} px-6 py-3">
    <div class="max-w-6xl mx-auto">
      <div class="flex items-center gap-3">
        <span class="text-xs font-mono ${dark ? "text-gray-400" : "text-gray-400"}">🔍</span>
        <input id="global-search" type="text" value="${esc(S.ui.searchQuery)}" oninput="setState('ui.searchQuery', this.value)" placeholder="Search research, events, courses, playbooks…" class="border ${inputClass} text-sm px-3 py-1.5 flex-1" />
        <button onclick="toggleSearchOpen()" class="text-xs font-mono ${dark ? "text-gray-400 hover:text-white" : "text-gray-500 hover:text-gray-900"}">Close</button>
      </div>
      ${SearchResults(S.ui.searchQuery, dark)}
    </div>
  </div>`;
}

// Every major piece of content should surface related content from across
// the CTI ecosystem (Research → Related Forum Events → Related Learning →
// Related Consequential → Related Advisory). Computed dynamically off the
// shared `topic` taxonomy field added in the last pass, instead of the
// one-off hardcoded single links that used to sit on these pages.
function RelatedContent(topic, { excludeTitle = null, isMember = false, includeAdvisory = true } = {}) {
  const eventTarget = isMember ? "event-detail-member" : "event-detail";
  const postTarget = isMember ? "post-member" : "blog-post";
  const consequential = isMember ? CONSEQUENTIAL_MEMBER_POSTS : CONSEQUENTIAL_POSTS;

  const event = FORUM_EVENTS.find(e => e.topic === topic && !e.past);
  const report = LAB_REPORTS.find(r => r.topic === topic && r.title !== excludeTitle);
  const playbook = isMember ? PLAYBOOKS.find(p => p.topic === topic) : null;
  const course = isMember ? CTILEARNING_PROGRAMS.find(c => c.topic === topic) : null;
  const learning = playbook || course;
  const article = consequential.find(c => c.title !== excludeTitle && c.topic === topic);
  const video = isMember ? SUMMIT_VIDEOS.find(v => v.topic === topic) : null;

  const blocks = [];
  if (report) blocks.push({ label: "Related Research", title: report.title, onclick: `selectReport('${report.title.replace(/'/g, "\\'")}'); nav('lab-report')` });
  if (event) blocks.push({ label: "Related Forum Event", title: event.title, onclick: `navToEvent('${event.id}', '${eventTarget}')` });
  if (learning) blocks.push({ label: "Related Learning", title: learning.t, onclick: playbook ? "nav('playbook-detail')" : "nav('ctilearning')" });
  if (article) blocks.push({ label: "Related Consequential", title: article.title, onclick: `nav('${postTarget}')` });
  if (video) blocks.push({ label: "Related Video", title: video.title, onclick: "nav('summit-member')" });

  const advisoryTarget = isMember ? "advisory-member" : null;
  return `<div class="space-y-4">
    ${blocks.map(b => Card(`
        ${Lbl(b.label)}
        <p class="text-sm font-medium text-gray-900 mt-1 mb-2 leading-snug">${esc(b.title)}</p>
        ${Btn("View →", { onclick: b.onclick, v: "ghost" })}
      `, { onclick: b.onclick })).join("")}
    ${includeAdvisory ? `
      <div class="bg-gray-900 text-white p-4">
        <p class="text-sm font-medium mb-2">Related Advisory</p>
        <p class="text-xs text-gray-400 mb-3">CTI can bring this topic to your organization through an advisory conversation.</p>
        <button onclick="${advisoryTarget ? `nav('${advisoryTarget}')` : "navEngage('advisory')"}" class="text-xs font-mono border border-gray-600 text-gray-300 px-3 py-2 hover:border-white hover:text-white w-full">Request Advisory</button>
      </div>` : ""}
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
    ["Home", "dashboard"], ["Global Lab", "research"], ["Luminary Exchange", "luminary-exchange-member"],
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
