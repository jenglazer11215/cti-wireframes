// ── PUBLIC PAGES ──────────────────────────────────────────────────────────────

function renderHome() {
  return `<div>
    <section class="max-w-6xl mx-auto px-6 py-16">
      ${Lbl("THE COALITION IS CURRENTLY WORKING ON")}
      <h1 class="text-5xl font-semibold text-gray-900 mt-4 mb-4 leading-tight max-w-3xl">
        What happens when entry-level work stops teaching judgment?
      </h1>
      <p class="text-gray-600 text-base max-w-2xl mb-8 leading-relaxed">
        AI is restructuring the early career pipeline. The coalition is examining what this means for talent strategy, sponsorship, and long-term leadership development.
      </p>
      <div class="flex items-center gap-4 flex-wrap">
        ${Btn("See The Forum →", { onclick: "nav('forum-public')", v: "solid" })}
        ${Btn("Latest from the Lab", { onclick: "nav('lab')" })}
        ${Btn("Request a Conversation →", { onclick: "nav('request-form')", v: "ghost" })}
      </div>
    </section>

    <section class="bg-gray-100 border-y border-gray-300 px-6 py-5">
      <div class="max-w-6xl mx-auto grid grid-cols-3 gap-8">
        ${[
          { label: "Next Forum Session", title: "The Judgment Gap: AI and Early Career Learning", sub: "September 18, 2025 · Virtual" },
          { label: "Latest from Consequential", title: "Signal Briefing: The Hidden Cost of Hybrid Rollbacks", sub: "Published August 2025" },
          { label: "CTI Staff Signal", title: "We are hearing from Co-Chairs: DEI rollbacks are creating a vocabulary crisis.", sub: "" },
        ].map(({ label, title, sub }) => `
          <div>
            ${Lbl(label)}
            <p class="text-sm text-gray-900 mt-1.5 font-medium leading-snug">${esc(title)}</p>
            ${sub ? `<p class="text-xs text-gray-500 mt-0.5">${esc(sub)}</p>` : ""}
          </div>`).join("")}
      </div>
    </section>

    <section class="max-w-6xl mx-auto px-6 py-12">
      ${Lbl("The CTI Ecosystem")}
      <h2 class="font-semibold text-gray-900 mt-2 mb-6 text-2xl">Four ways CTI works on your behalf.</h2>
      <div class="grid grid-cols-4 gap-5">
        ${[
          { label: "Coqual Global Lab", body: "Research at the frontier of work, talent, and leadership.", page: "lab" },
          { label: "The Forum", body: "CTI's executive convening program — bring your real challenge, leave with clearer thinking.", page: "forum-public" },
          { label: "Consequential", body: "Signal briefings, research reports, horizon scans, and commentary from the CTI network.", page: "consequential-archive" },
          { label: "Luminary Exchange", body: "Practitioner scholars and senior advisors available for thought partnership.", page: "luminary-exchange" },
        ].map(({ label, body, page }) => Card(`
            <h3 class="font-semibold text-gray-900 mb-2 text-sm">${esc(label)}</h3>
            <p class="text-xs text-gray-600 mb-4 leading-relaxed">${esc(body)}</p>
            ${Btn("Explore →", { onclick: `nav('${page}')`, v: "ghost" })}
          `, { onclick: `nav('${page}')` })).join("")}
      </div>
    </section>

    <section class="max-w-6xl mx-auto px-6 pb-12">
      <p class="text-xs font-mono uppercase tracking-widest text-gray-500 mb-6">What the coalition is focused on</p>
      <div class="grid grid-cols-3 gap-6">
        ${[
          { label: "In The Forum", body: "The coalition is working on how AI restructures the early-career pipeline and what that means for judgment, mentorship, and talent strategy.", cta: "See The Forum", page: "forum-public" },
          { label: "From the Coqual Global Lab", body: "New research on how hybrid work policies are affecting promotion rates for women and underrepresented leaders across Fortune 500 companies.", cta: "View Research", page: "lab" },
          { label: "What members are bringing us", body: "Co-Chairs are raising questions about sponsorship pipelines eroding in remote-first environments. This will inform the next Forum session.", cta: "Latest Consequential", page: "consequential-archive" },
        ].map(({ label, body, cta, page }) => Card(`
            ${Lbl(label)}
            <p class="text-sm text-gray-700 mt-3 mb-4 leading-relaxed">${esc(body)}</p>
            ${Btn(cta + " →", { onclick: `nav('${page}')`, v: "ghost" })}
          `, { onclick: `nav('${page}')` })).join("")}
      </div>
    </section>

    ${HR()}

    <section class="max-w-6xl mx-auto px-6 pb-12">
      <div class="flex items-center justify-between mb-6">
        <h2 class="font-semibold text-gray-900">From Consequential</h2>
        ${Btn("View all →", { onclick: "nav('consequential-archive')", v: "ghost" })}
      </div>
      <div class="grid grid-cols-3 gap-6">
        ${[
          { type: "Signal Briefing", title: "The Hidden Cost of Hybrid Rollbacks", date: "Aug 2025", time: "6 min", tag: "Workforce Design" },
          { type: "Research Report", title: "Sponsorship in the Age of Distributed Work", date: "Jul 2025", time: "12 min", tag: "Talent Strategy" },
          { type: "Horizon Scan", title: "What Generative AI Means for DEI Measurement", date: "Jun 2025", time: "8 min", tag: "AI + Work" },
        ].map(({ type, title, date, time, tag }) => Card(`
            ${Lbl(type)}
            <h3 class="font-semibold text-gray-900 mt-2 mb-1 text-sm leading-snug">${esc(title)}</h3>
            <p class="text-xs text-gray-500 mb-3">${esc(date)} · ${esc(time)} read</p>
            ${TagEl(tag)}
            <div class="mt-3">${Btn("Read →", { onclick: "nav('blog-post')", v: "ghost" })}</div>
          `, { onclick: "nav('blog-post')" })).join("")}
      </div>
    </section>

    ${HR()}

    <section class="max-w-6xl mx-auto px-6 pb-12">
      <h2 class="font-semibold text-gray-900 mb-4">Next in The Forum</h2>
      <div class="border border-gray-300 p-6 grid grid-cols-4 gap-8">
        <div class="col-span-3">
          ${Lbl("Upcoming Session · September 18, 2025")}
          <h3 class="text-xl font-semibold text-gray-900 mt-2 mb-2">The Judgment Gap: AI and Early Career Learning</h3>
          <p class="text-gray-500 text-sm mb-1">2:00–4:00 PM ET · Virtual</p>
          <p class="text-sm text-gray-700 mb-6 leading-relaxed">Can organizations build judgment at scale when AI handles the work that used to teach it? This session asks what the coalition will do about the disappearing development pathway.</p>
          <div class="flex gap-3 flex-wrap">
            ${Btn("See The Forum", { onclick: "nav('forum-public')", v: "solid" })}
            ${Btn("Request a Membership Conversation", { onclick: "nav('request-form')" })}
          </div>
        </div>
        ${GrayBox({ h: "h-36", label: "Event Image" })}
      </div>
    </section>

    ${HR()}

    <section class="max-w-6xl mx-auto px-6 pb-12">
      <div class="flex items-center justify-between mb-6">
        <h2 class="font-semibold text-gray-900">Luminary Exchange</h2>
        ${Lbl("Members only")}
      </div>
      <div class="grid grid-cols-3 gap-6">
        ${[
          { prov: "What if the performance review is the problem, not the solution?", name: "Dr. Aisha Mensah", exp: "Organizational Performance · Culture Transformation" },
          { prov: "Sponsorship without proximity is just networking. We have to do better.", name: "James Okonkwo", exp: "Talent Strategy · Executive Development" },
          { prov: "The real DEI crisis is a measurement crisis. We are measuring the wrong things.", name: "Dr. Fatima Al-Rashid", exp: "DEI Evolution · Research Methodology" },
        ].map(({ prov, name, exp }) => Card(`
            <p class="text-sm font-medium text-gray-900 italic mb-4 leading-snug">"${esc(prov)}"</p>
            ${Lbl(name)}
            <p class="text-xs text-gray-500 mt-1 mb-3">${esc(exp)}</p>
            ${Btn("View Profile →", { onclick: "nav('request-form')", v: "ghost" })}
          `, { onclick: "nav('request-form')" })).join("")}
      </div>
    </section>

    <section class="max-w-6xl mx-auto px-6 pb-12 text-center">
      <p class="text-sm text-gray-600 mb-3">Working through a live challenge? Talk to CTI directly.</p>
      ${Btn("Start an Advisory Conversation →", { onclick: "navEngage('advisory')", v: "ghost" })}
    </section>

    ${FooterCTA()}
  </div>`;
}

function renderEngageAboutCTI() {
  return `<div>
    <section class="border-b border-gray-300 bg-white px-6 py-16">
      <div class="max-w-6xl mx-auto">
        ${Lbl("About CTI")}
        <h1 class="text-5xl font-semibold text-gray-900 mt-4 mb-4 leading-tight max-w-3xl">Who We Are</h1>
        <p class="text-lg text-gray-600 max-w-2xl leading-relaxed">
          CTI helps organizations navigate complexity, strengthen leadership, build trust, and design better work futures.
        </p>
      </div>
    </section>

    <div class="max-w-6xl mx-auto px-6 py-12">
      <section class="mb-16 max-w-2xl">
        <h2 class="font-semibold text-gray-900 mb-3 text-xl">About CTI</h2>
        <p class="text-sm text-gray-600 leading-relaxed">
          CTI is a global think tank that helps companies redesign how they work and lead.
        </p>
      </section>

      <section class="mb-16 max-w-2xl">
        <h2 class="font-semibold text-gray-900 mb-3 text-xl">Our Story</h2>
        <p class="text-sm text-gray-600 leading-relaxed">
          CTI is a global think tank with more than two decades of experience helping organizations navigate change and create conditions where people and ideas thrive. Our work blends rigorous research with cultural insight and practical tools that help leaders turn knowledge into action. The Coqual Global Lab is our applied innovation center — designed to test, refine, and share what works in real time, supporting organizations as they design for the future of work.
        </p>
      </section>

      <section id="leadership" class="mb-16">
        <h2 class="font-semibold text-gray-900 mb-6 text-xl">Leadership</h2>
        <div class="grid grid-cols-4 gap-6">
          ${TEAM_AND_FELLOWS.map(({ name, title }) => `
            <div class="flex flex-col items-center text-center">
              ${GrayBox({ w: "w-full", h: "h-36", label: "Photo" })}
              <p class="font-medium text-gray-900 text-sm mt-3">${esc(name)}</p>
              <p class="text-xs text-gray-500 mt-1 leading-snug whitespace-pre-line">${esc(title)}</p>
            </div>`).join("")}
        </div>
      </section>

      <section id="board" class="mb-16">
        <h2 class="font-semibold text-gray-900 mb-6 text-xl">Board of Directors</h2>
        <div class="grid grid-cols-4 gap-6">
          ${BOARD.map(({ name, title }) => `
            <div class="flex flex-col items-center text-center">
              ${GrayBox({ w: "w-full", h: "h-36", label: "Photo" })}
              <p class="font-medium text-gray-900 text-sm mt-3">${esc(name)}</p>
              <p class="text-xs text-gray-500 mt-1 leading-snug whitespace-pre-line">${esc(title)}</p>
            </div>`).join("")}
        </div>
      </section>

      <section class="bg-gray-900 text-white p-10 text-center">
        <h2 class="text-2xl font-semibold mb-3">Be in the room.</h2>
        <p class="text-gray-400 text-sm mb-6 max-w-xl mx-auto">Membership means a seat at the table where the work happens.</p>
        <button onclick="navEngage('membership')" class="border border-white text-white px-6 py-3 font-mono text-xs hover:bg-white hover:text-gray-900 transition-colors">
          Request a Membership Conversation
        </button>
      </section>
    </div>
  </div>`;
}

function renderForumPublic() {
  const filter = S.forumPublic.filter;
  const filterOptions = ["All", "Public", "Members Only"];
  const upcoming = FORUM_EVENTS.filter(e => !e.past);
  const filtered = filter === "Public" ? upcoming.filter(e => !e.membersOnly)
    : filter === "Members Only" ? upcoming.filter(e => e.membersOnly)
    : upcoming;

  return `<div>
    ${SectionNav("The Forum", [["Summit", "summit"]], "forum-public")}
    <div class="max-w-6xl mx-auto px-6 py-12">
      ${Lbl("THE COALITION IS CURRENTLY WORKING ON")}
      <h1 class="text-4xl font-semibold text-gray-900 mt-3 mb-4 max-w-2xl leading-tight">
        What happens when entry-level work stops teaching judgment?
      </h1>
      <p class="text-gray-600 mb-10 max-w-2xl leading-relaxed">
        AI is restructuring the early career pipeline. The coalition is examining what this means for talent strategy, sponsorship, and long-term leadership development.
      </p>
      ${HR()}

      <section class="mb-12">
        <div class="flex items-center justify-between mb-4">
          <h2 class="font-semibold text-gray-900">Upcoming Forum Events</h2>
          ${Filters(filterOptions, filter, "forumPublic.filter")}
        </div>
        <div class="space-y-3">
          ${filtered.map(e => `
            <div class="border border-gray-300 bg-white p-4 flex items-center gap-5 hover:bg-gray-50 cursor-pointer" onclick="navToEvent('${e.id}', 'event-detail')">
              <div class="border border-gray-300 bg-gray-50 p-2 text-center w-14 flex-shrink-0">
                <p class="text-xs font-mono text-gray-500">${e.month}</p>
                <p class="text-lg font-semibold text-gray-900">${e.day}</p>
              </div>
              <div class="flex-1 min-w-0">
                <div class="flex items-center gap-2 mb-1 flex-wrap">
                  <span class="text-xs font-mono bg-gray-900 text-white px-2 py-0.5">MEMBERS ONLY</span>
                  ${TagEl(e.format)}
                  ${TagEl(e.tag)}
                </div>
                <h3 class="font-medium text-gray-900 text-sm">${esc(e.title)}</h3>
                <p class="text-xs text-gray-500 mt-0.5">${e.date} · ${e.timeNYC} · ${e.location}</p>
              </div>
              <div class="flex-shrink-0 flex items-center gap-2" onclick="event.stopPropagation()">
                ${Btn("View", { onclick: `navToEvent('${e.id}', 'event-detail')`, v: "outline" })}
                <button onclick="loginAndRegister('${e.id}')" class="bg-gray-900 text-white text-xs font-mono px-4 py-1.5 hover:bg-gray-700">
                  🔒 Login to Register
                </button>
              </div>
            </div>`).join("")}
        </div>
        <p class="text-xs text-gray-500 mt-4 font-mono">
          🔒 Members-only events require a CTI membership. <button onclick="nav('request-form')" class="underline text-gray-700">Request a Membership Conversation →</button>
        </p>
      </section>

      ${HR()}

      <div class="grid grid-cols-3 gap-12">
        <div class="col-span-2 space-y-8">
          <div>
            <h2 class="font-semibold text-gray-900 mb-3">What the coalition concluded last time</h2>
            ${Card(`
              ${Lbl("Previous Session · June 2025")}
              <h3 class="font-medium text-gray-900 mt-2 mb-2 text-sm">The Sponsorship Proximity Problem</h3>
              <p class="text-sm text-gray-600 leading-relaxed">The coalition concluded that sponsorship in distributed environments has collapsed into mentorship — and that this is a structural problem, not a motivation problem. Co-Chairs are actively piloting proximity-independent sponsorship frameworks.</p>
            `)}
          </div>
          <div>
            <h2 class="font-semibold text-gray-900 mb-2">Weigh in from the outside</h2>
            <p class="text-sm text-gray-500 mb-4">What is your current challenge on this question? CTI staff will review. Recurring challenges inform future Forum sessions.</p>
            <div class="border border-gray-300 p-5 space-y-4">
              ${Field("Your organization")}
              ${Field("Your current challenge on this question", { tall: true })}
              ${Btn("Submit", { v: "solid" })}
            </div>
          </div>
        </div>
        <div>
          <h2 class="font-semibold text-gray-900 mb-4">Who is in the room</h2>
          ${["Fortune 500 CHROs", "Global TA Leaders", "Chief People Officers", "Executive Development Leaders", "Talent Strategy Consultants"].map(r => `
            <div class="flex items-center gap-2 py-2 border-b border-gray-200">
              <div class="w-2 h-2 bg-gray-400 rounded-full"></div>
              <span class="text-xs text-gray-700">${esc(r)}</span>
            </div>`).join("")}
          <div class="mt-6">
            ${GrayBox({ h: "h-20", label: "Summit teaser" })}
            <p class="text-xs text-gray-500 mt-2">Annual Summit · March 2026 · New York</p>
            ${Btn("Learn more →", { onclick: "nav('summit')", v: "ghost" })}
          </div>
        </div>
      </div>
      <div class="bg-gray-100 border border-gray-300 p-8 text-center mt-12">
        <h2 class="text-xl font-semibold text-gray-900 mb-2">Be in the room.</h2>
        <p class="text-gray-600 text-sm mb-6">Forum membership gives you a seat in the conversation, access to session recordings, and synthesis from every session.</p>
        ${Btn("Request a Membership Conversation", { onclick: "nav('request-form')", v: "solid" })}
      </div>
    </div>
    </div>`;
}

function renderSummit() {
  return `<div>
    ${SectionNav("The Forum", [["Summit", "summit"]], "summit")}
    <div class="max-w-6xl mx-auto px-6 py-12">
      ${Lbl("The Forum · Annual Summit")}
      <h1 class="text-4xl font-semibold text-gray-900 mt-3 mb-2">Work Reimagined: The Summit for Organizational Leaders</h1>
      <p class="text-gray-500 text-sm mb-6">March 12–13, 2026 · New York, NY</p>
      <div class="inline-block border border-gray-400 bg-gray-100 px-4 py-2 mb-8">
        ${Lbl("Members-only event · Invitation required")}
      </div>
      ${GrayBox({ h: "h-64", label: "Summit venue image" })}
      <div class="grid grid-cols-3 gap-6 mt-10">
        ${["Dr. Sylvia Ann Hewlett", "Marcus Buckingham", "Dr. Tomas Chamorro-Premuzic"].map(n => Card(`
            ${GrayBox({ h: "h-24", label: "Speaker photo" })}
            <p class="font-medium text-gray-900 mt-3 text-sm">${esc(n)}</p>
            <p class="text-xs text-gray-500 mt-1">Keynote Speaker</p>
          `)).join("")}
      </div>
      <div class="mt-10 bg-gray-100 border border-gray-300 p-8 text-center">
        <p class="text-sm text-gray-600 mb-4">Summit attendance is a member benefit. Full agenda, registration, and pre-reads are available in the member area.</p>
        ${Btn("Request a Membership Conversation", { onclick: "nav('request-form')", v: "solid" })}
      </div>
    </div>
    </div>`;
}

function getDetail(r) {
  return REPORT_DETAIL[r.title] || {
    subtitle: [r.issues, r.market, r.identities].filter(Boolean).join(" · "),
    description: "This report examines how organizations can redesign their systems and cultures to unlock the full contribution of their people. Key findings available to CTI members.",
    keyFindings: ["Key findings available to CTI members."],
    methodology: "Coqual Global Lab mixed-methods research.",
    quote: { text: "Research finding placeholder.", source: `Coqual Global Lab, ${r.title}, ${r.date}` },
    downloads: [
      { label: "Press Release", desc: "One-page media summary", gated: false },
      { label: "Executive Summary", desc: "Key findings overview", gated: r.gated },
      { label: "Full Report (PDF)", desc: "Complete research report", gated: r.gated },
    ],
  };
}

function renderLabReport() {
  const report = getSelectedReport();
  const d = getDetail(report);
  const seriesReports = report.series ? LAB_REPORTS.filter(r => r.series === report.series && r.title !== report.title) : [];

  return `<div>
    <div class="max-w-6xl mx-auto px-6 py-10">
      <button onclick="nav('lab')" class="text-xs font-mono text-gray-500 hover:text-gray-900 mb-6 flex items-center gap-1">← All Research</button>

      <div class="grid grid-cols-3 gap-10">
        <div class="col-span-2">
          <div class="flex items-center gap-2 mb-3 flex-wrap">
            ${Lbl("Coqual Global Lab · Research Report")}
            ${!report.gated
              ? `<span class="text-xs font-mono border border-gray-400 text-gray-600 px-2 py-0.5">Open Access</span>`
              : `<span class="text-xs font-mono bg-gray-900 text-white px-2 py-0.5">Members Only</span>`}
            ${report.series ? TagEl(report.series + " Series") : ""}
            ${TagEl(report.tag)}
          </div>
          <h1 class="text-3xl font-semibold text-gray-900 mb-2 leading-tight">${esc(report.title)}</h1>
          <p class="text-base text-gray-600 italic mb-1 leading-snug">${esc(d.subtitle)}</p>
          <p class="text-xs text-gray-400 mb-8 font-mono">
            ${report.date}${report.market ? " · " + report.market : ""}
          </p>

          <div class="mb-8">
            <h2 class="font-semibold text-gray-900 mb-3 text-sm">About This Research</h2>
            <p class="text-sm text-gray-700 leading-relaxed">${esc(d.description)}</p>
          </div>

          <div class="mb-8">
            <h2 class="font-semibold text-gray-900 mb-4 text-sm">Key Findings</h2>
            ${report.gated ? `
              <div class="border border-gray-300 bg-gray-50 p-5">
                <p class="text-sm text-gray-600 mb-3">Full key findings are available to CTI members.</p>
                ${Btn("Request a Membership Conversation", { onclick: "nav('request-form')", v: "solid" })}
              </div>` : `
              <div class="space-y-3">
                ${d.keyFindings.map((f, i) => `
                  <div class="flex gap-4 border border-gray-200 p-4">
                    <div class="w-6 h-6 border border-gray-400 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-mono text-gray-500">${i + 1}</div>
                    <p class="text-sm text-gray-800 leading-relaxed">${esc(f)}</p>
                  </div>`).join("")}
              </div>`}
          </div>

          ${!report.gated ? `
            <div class="bg-gray-100 border-l-4 border-gray-900 p-6 mb-8">
              <p class="text-base font-medium text-gray-900 italic leading-relaxed">"${esc(d.quote.text)}"</p>
              <p class="text-xs text-gray-500 mt-3 font-mono">${esc(d.quote.source)}</p>
            </div>` : ""}

          <div class="mb-8">
            <h2 class="font-semibold text-gray-900 mb-2 text-sm">Methodology</h2>
            <p class="text-sm text-gray-600 leading-relaxed">${esc(d.methodology)}</p>
          </div>

          ${d.relatedForum ? Card(`
              ${Lbl("Related Forum Session")}
              <p class="text-sm font-medium text-gray-900 mt-1 mb-2">${esc(d.relatedForum)}</p>
              ${Btn("See The Forum →", { onclick: "nav('forum-public')", v: "ghost" })}
            `, { onclick: "nav('forum-public')" }) : ""}
        </div>

        <div class="space-y-4">
          <div class="border border-gray-300 p-4">
            <h3 class="font-semibold text-gray-900 mb-4 text-sm">Downloads</h3>
            <div class="space-y-2">
              ${d.downloads.map(({ label, desc, gated }) => `
                <div class="flex items-center justify-between border p-3 ${gated ? "border-gray-100 bg-gray-50 opacity-60" : "border-gray-300 hover:bg-gray-50 cursor-pointer"}">
                  <div>
                    <p class="text-xs font-medium text-gray-900">${esc(label)}</p>
                    <p class="text-xs text-gray-500">${esc(desc)}</p>
                  </div>
                  ${gated ? `<span class="text-gray-400 text-xs ml-2 flex-shrink-0">🔒</span>` : `<span class="text-xs font-mono text-gray-500 ml-2 flex-shrink-0">↓</span>`}
                </div>`).join("")}
            </div>
            ${d.downloads.some(dl => dl.gated) ? `
              <div class="mt-4 pt-3 border-t border-gray-200">
                <p class="text-xs text-gray-500 mb-2">Gated downloads require CTI membership.</p>
                ${Btn("Request Membership", { onclick: "nav('request-form')" })}
              </div>` : ""}
          </div>

          <div class="border border-gray-300 p-4">
            <h3 class="font-semibold text-gray-900 mb-2 text-sm">Press & Permissions</h3>
            <p class="text-xs text-gray-600 leading-relaxed mb-3">For media inquiries, quote permissions, or speaker requests related to this research, contact the Coqual Global Lab.</p>
            ${Btn("Contact the Lab", { onclick: "navEngage('press')" })}
          </div>

          <div class="bg-gray-900 text-white p-4">
            <p class="text-sm font-medium mb-2">Bring this research to your organization.</p>
            <p class="text-xs text-gray-400 mb-3">Available for executive briefings, board presentations, leadership retreats, and company-wide sessions.</p>
            <button onclick="navEngage('speaking')" class="text-xs font-mono border border-gray-600 text-gray-300 px-3 py-2 hover:border-white hover:text-white w-full">Book a Speaker</button>
          </div>

          ${seriesReports.length > 0 ? `
            <div class="border border-gray-300 p-4">
              <h3 class="font-semibold text-gray-900 mb-3 text-sm">${esc(report.series)} Series</h3>
              ${seriesReports.slice(0, 5).map(r => `
                <div class="py-2 border-b border-gray-100 last:border-0">
                  <p class="text-xs font-medium text-gray-800 leading-snug">${esc(r.title)}</p>
                  <p class="text-xs text-gray-400">${r.date}</p>
                </div>`).join("")}
            </div>` : ""}
        </div>
      </div>
    </div>
  </div>`;
}

const LAB_GEOGRAPHY_OPTIONS = ["All", "Global", "United States", "United Kingdom", "Germany", "India", "Brazil", "Japan", "Canada", "Australia", "China", "France", "Hong Kong", "Mexico", "Russia", "Singapore", "South Africa", "Turkey", "UAE"];
const LAB_RESOURCE_TYPE_OPTIONS = ["All", "Research Report", "Executive Brief", "Playbook", "Assessment", "Toolkit", "Webinar Recording", "Video", "Course", "Article", "Infographic"];

function renderLab() {
  const { series: seriesFilter, tag: tagFilter, geography: geoFilter, resourceType: resourceTypeFilter, query } = S.lab;
  const seriesOptions = ["All", "Belonging", "Sponsorship"];
  const tagOptions = ["All", "DEI Evolution", "Talent Strategy", "Leadership + Culture", "Organizational Performance"];
  const publicReports = LAB_REPORTS.filter(r => !r.gated);
  const filtered = publicReports.filter(p => {
    const seriesMatch = seriesFilter === "All" || p.series === seriesFilter;
    const tagMatch = tagFilter === "All" || p.tag === tagFilter;
    const geoMatch = geoFilter === "All" || p.geography.includes(geoFilter);
    const resourceTypeMatch = resourceTypeFilter === "All" || p.resourceType === resourceTypeFilter;
    const queryMatch = !query || p.title.toLowerCase().includes(query.toLowerCase());
    return seriesMatch && tagMatch && geoMatch && resourceTypeMatch && queryMatch;
  });
  const featured = LAB_REPORTS[0];

  return `<div>
    <div class="max-w-6xl mx-auto px-6 py-12">
      ${Lbl("Coqual Global Lab")}
      <h1 class="text-4xl font-semibold text-gray-900 mt-3 mb-3">Research at the frontier of work, talent, and leadership.</h1>
      <p class="text-gray-600 text-sm mb-2">
        Full reports available to CTI members. <button onclick="navEngage('press')" class="underline text-gray-800">Citing our research or requesting a speaker? Contact the Lab.</button>
      </p>
      <p class="text-xs text-gray-500 mb-8 font-mono">
        ${publicReports.length} reports available · Full research library available to CTI members.
      </p>

      <div class="border border-gray-300 p-6 mb-8 grid grid-cols-3 gap-6 cursor-pointer hover:bg-gray-50" onclick="selectReport('${esc(featured.title).replace(/'/g, "\\'")}'); nav('lab-report')">
        <div class="col-span-2">
          ${Lbl("Featured · Most Recent · Open Access")}
          <h2 class="text-xl font-semibold text-gray-900 mt-2 mb-2">${esc(featured.title)}</h2>
          <p class="text-sm text-gray-600 mb-4 leading-relaxed">
            How the best leaders in France, Germany, and the U.K. are combining strength and humanity — and what it takes to develop them at scale.
          </p>
          <div class="flex items-center gap-3 mb-4">
            ${TagEl(featured.tag)}
            <span class="text-xs text-gray-500">${featured.date} · France, Germany, U.K.</span>
          </div>
          <div class="flex gap-3" onclick="event.stopPropagation()">
            ${Btn("Read Report &amp; Key Findings →", { onclick: `selectReport('${esc(featured.title).replace(/'/g, "\\'")}'); nav('lab-report')`, v: "solid" })}
            ${Btn("Download PDF", {})}
          </div>
        </div>
        ${GrayBox({ label: "Report cover" })}
      </div>

      <div class="mb-6">
        <input id="lab-search" type="text" value="${esc(query)}" oninput="setState('lab.query', this.value)" placeholder="Search research by title…" class="border border-gray-300 text-sm px-3 py-2 w-full" />
      </div>

      <div class="space-y-3 mb-6">
        ${Filters(seriesOptions, seriesFilter, "lab.series", "Series")}
        ${Filters(tagOptions, tagFilter, "lab.tag", "Topic")}
        ${Filters(LAB_GEOGRAPHY_OPTIONS, geoFilter, "lab.geography", "Geography")}
        ${Filters(LAB_RESOURCE_TYPE_OPTIONS, resourceTypeFilter, "lab.resourceType", "Resource Type")}
      </div>
      <p class="text-xs text-gray-400 mb-4 font-mono">Showing ${filtered.length} of ${publicReports.length} available reports</p>

      <div class="grid grid-cols-3 gap-6">
        ${filtered.map(report => `
          <div class="border border-gray-300 p-4 bg-white cursor-pointer hover:bg-gray-50" onclick="selectReport('${esc(report.title).replace(/'/g, "\\'")}'); nav('lab-report')">
            <div class="flex items-start justify-between mb-1">${Lbl("Research Report")}</div>
            <h3 class="font-medium text-gray-900 mt-2 mb-1 text-sm leading-snug">${esc(report.title)}</h3>
            <p class="text-xs text-gray-400 mb-2">${report.date}</p>
            <div class="flex flex-wrap gap-1 mb-2">
              ${TagEl(report.tag)}
              ${report.series ? TagEl(report.series + " Series") : ""}
            </div>
            ${report.market ? `<p class="text-xs text-gray-400 leading-snug mb-1">${esc(report.market)}</p>` : ""}
            ${report.identities ? `<p class="text-xs text-gray-400 leading-snug mb-3">${esc(report.identities)}</p>` : ""}
            <div class="mt-3 flex gap-3 flex-wrap" onclick="event.stopPropagation()">
              ${Btn("Key Findings →", { onclick: `selectReport('${esc(report.title).replace(/'/g, "\\'")}'); nav('lab-report')`, v: "ghost" })}
            </div>
          </div>`).join("")}
      </div>
    </div>
  </div>`;
}

// Member version of Global Lab — same LAB_REPORTS data and filter state as
// renderLab(), but full library access (no gated restriction) since members
// can see everything, and no "Members Only" gating badge on cards.
function renderResearch() {
  const { series: seriesFilter, tag: tagFilter, geography: geoFilter, resourceType: resourceTypeFilter, query } = S.lab;
  const seriesOptions = ["All", "Belonging", "Sponsorship"];
  const tagOptions = ["All", "DEI Evolution", "Talent Strategy", "Leadership + Culture", "Organizational Performance"];
  const filtered = LAB_REPORTS.filter(p => {
    const seriesMatch = seriesFilter === "All" || p.series === seriesFilter;
    const tagMatch = tagFilter === "All" || p.tag === tagFilter;
    const geoMatch = geoFilter === "All" || p.geography.includes(geoFilter);
    const resourceTypeMatch = resourceTypeFilter === "All" || p.resourceType === resourceTypeFilter;
    const queryMatch = !query || p.title.toLowerCase().includes(query.toLowerCase());
    return seriesMatch && tagMatch && geoMatch && resourceTypeMatch && queryMatch;
  });

  return `<div class="max-w-6xl mx-auto px-6 py-8">
    ${Lbl("Research")}
    <h1 class="text-2xl font-semibold text-gray-900 mt-1 mb-2">The full Coqual Global Lab library.</h1>
    <p class="text-gray-600 text-sm mb-8">${LAB_REPORTS.length} reports available — your membership includes full access.</p>

    <div class="mb-6">
      <input id="research-search" type="text" value="${esc(query)}" oninput="setState('lab.query', this.value)" placeholder="Search research by title…" class="border border-gray-300 text-sm px-3 py-2 w-full" />
    </div>

    <div class="space-y-3 mb-6">
      ${Filters(seriesOptions, seriesFilter, "lab.series", "Series")}
      ${Filters(tagOptions, tagFilter, "lab.tag", "Topic")}
      ${Filters(LAB_GEOGRAPHY_OPTIONS, geoFilter, "lab.geography", "Geography")}
      ${Filters(LAB_RESOURCE_TYPE_OPTIONS, resourceTypeFilter, "lab.resourceType", "Resource Type")}
    </div>
    <p class="text-xs text-gray-400 mb-4 font-mono">Showing ${filtered.length} of ${LAB_REPORTS.length} reports</p>

    <div class="grid grid-cols-3 gap-6">
      ${filtered.map(report => `
        <div class="border border-gray-300 p-4 bg-white cursor-pointer hover:bg-gray-50" onclick="selectReport('${esc(report.title).replace(/'/g, "\\'")}'); nav('lab-report')">
          <div class="flex items-start justify-between mb-1">${Lbl("Research Report")}</div>
          <h3 class="font-medium text-gray-900 mt-2 mb-1 text-sm leading-snug">${esc(report.title)}</h3>
          <p class="text-xs text-gray-400 mb-2">${report.date}</p>
          <div class="flex flex-wrap gap-1 mb-2">
            ${TagEl(report.tag)}
            ${report.series ? TagEl(report.series + " Series") : ""}
          </div>
          ${report.market ? `<p class="text-xs text-gray-400 leading-snug mb-1">${esc(report.market)}</p>` : ""}
          ${report.identities ? `<p class="text-xs text-gray-400 leading-snug mb-3">${esc(report.identities)}</p>` : ""}
          <div class="mt-3 flex gap-3 flex-wrap" onclick="event.stopPropagation()">
            ${Btn("Key Findings →", { onclick: `selectReport('${esc(report.title).replace(/'/g, "\\'")}'); nav('lab-report')`, v: "ghost" })}
          </div>
        </div>`).join("")}
    </div>
  </div>`;
}

const CONSEQUENTIAL_POSTS = [
  { type: "Blog Post", title: "Take Up Space Anyway", excerpt: "On the particular exhaustion of being asked to make yourself smaller — and why the antidote is not patience.", date: "Jun 25, 2026", time: "5 min", tag: "Leadership + Culture", topic: "Leadership", geography: ["Global"], resourceType: "Article", gated: false },
  { type: "Blog Post", title: "The Talent Was Never the Problem", excerpt: "Organizations keep redesigning their talent programs. They rarely redesign the conditions that cause talent to leave.", date: "Jun 18, 2026", time: "6 min", tag: "Talent Strategy", topic: "Talent & Performance", geography: ["Global"], resourceType: "Article", gated: false },
  { type: "Blog Post", title: "Not a Monolith, But United by Common Threads", excerpt: "What happens when we stop treating communities as uniform and start designing for the patterns that actually connect them.", date: "May 31, 2026", time: "5 min", tag: "DEI Evolution", topic: "Organizational Culture & Trust", geography: ["Global"], resourceType: "Article", gated: false },
  { type: "Blog Post", title: "On Being Chinese: To Eat a Culture and Promote it Too", excerpt: "Identity at work is not a performance. But organizations have made it one — and employees are paying the cost.", date: "Mar 31, 2026", time: "7 min", tag: "DEI Evolution", topic: "Organizational Culture & Trust", geography: ["Global"], resourceType: "Article", gated: false },
  { type: "Blog Post", title: "What ERGs Reveal About Leadership, Trust And How Change Really Works", excerpt: "Employee resource groups are a real-time signal about how much an organization actually trusts its people.", date: "Jan 16, 2026", time: "6 min", tag: "Trust + Institutional Risk", topic: "Organizational Culture & Trust", geography: ["Global"], resourceType: "Article", gated: false },
  { type: "Blog Post", title: "How To Lead In A World Of Many Minds", excerpt: "Cognitive diversity is the differentiator organizations say they want and the thing they most systematically eliminate under pressure.", date: "Nov 25, 2025", time: "5 min", tag: "Leadership + Culture", topic: "Leadership", geography: ["Global"], resourceType: "Article", gated: false },
  { type: "Blog Post", title: "Uncertainty Fatigue Is Replacing Change Fatigue: What It Means For Leaders", excerpt: "Change fatigue assumes there's a destination. Uncertainty fatigue is what happens when your people stop believing there is one.", date: "Oct 3, 2025", time: "6 min", tag: "Organizational Performance", topic: "Talent & Performance", geography: ["Global"], resourceType: "Article", gated: false },
  { type: "Blog Post", title: "AI Is Here. The Trust Isn't.", excerpt: "Organizations are deploying AI faster than they are building the internal trust required for people to use it honestly.", date: "Aug 20, 2025", time: "7 min", tag: "AI + Work", topic: "AI & Workforce", geography: ["Global"], resourceType: "Article", gated: false },
  { type: "Blog Post", title: "How to Find Your Next Big Move Before It's Obvious", excerpt: "The leaders who make consequential career moves don't wait for the opportunity to announce itself. They read the conditions first.", date: "Aug 11, 2025", time: "5 min", tag: "Talent Strategy", topic: "Talent & Performance", geography: ["Global"], resourceType: "Article", gated: false },
  { type: "Blog Post", title: "The Certainty Trap: Clarity Is a Discipline, Not a Message", excerpt: "Leaders confuse certainty with clarity. One is a performance. The other is a practice. Only one survives contact with reality.", date: "Jul 10, 2025", time: "6 min", tag: "Leadership + Culture", topic: "Leadership", geography: ["Global"], resourceType: "Article", gated: false },
  { type: "Blog Post", title: "PRIDE Under Pressure: Notes from a Queer Millennial", excerpt: "Corporate LGBTQ+ commitments are being tested in real time. What this moment reveals about the difference between allyship and accountability.", date: "Jun 24, 2025", time: "8 min", tag: "DEI Evolution", topic: "Organizational Culture & Trust", geography: ["Global"], resourceType: "Article", gated: false },
  { type: "Blog Post", title: "Juneteenth 2025: A Moment to Learn, Listen, and Lead Together", excerpt: "Organizational observance without organizational change is performance. This is the distinction that matters.", date: "Jun 19, 2025", time: "4 min", tag: "DEI Evolution", topic: "Organizational Culture & Trust", geography: ["Global"], resourceType: "Article", gated: false },
  { type: "Blog Post", title: "The Leadership Paradox: What We're Asking Leaders to Hold (and How to Help Them Walk the Tightrope)", excerpt: "Leaders are being asked to be certain and humble, decisive and inclusive, resilient and human. The tightrope is getting narrower.", date: "Jun 7, 2025", time: "7 min", tag: "Leadership + Culture", topic: "Leadership", geography: ["Global"], resourceType: "Article", gated: false },
  { type: "Blog Post", title: "The Moment My World Stopped", excerpt: "A personal essay on grief, leadership, and what it means to return to work as someone your organization has never seen before.", date: "May 29, 2025", time: "6 min", tag: "Leadership + Culture", topic: "Leadership", geography: ["Global"], resourceType: "Article", gated: false },
  { type: "Blog Post", title: "If Culture Is \"Just How We Do Things Around Here,\" Then Who's Doing the Designing?", excerpt: "Culture is not organic. It is designed — by default or by intent. Most organizations are running a design they never chose.", date: "Apr 24, 2025", time: "6 min", tag: "Organizational Performance", topic: "Talent & Performance", geography: ["Global"], resourceType: "Article", gated: false },
  { type: "Blog Post", title: "Mixed Messages Are Costing You Trust—Here's How to Fix It", excerpt: "When what leaders say and what they do diverge, employees do not split the difference. They default to what they observe.", date: "Mar 3, 2025", time: "5 min", tag: "Trust + Institutional Risk", topic: "Organizational Culture & Trust", geography: ["Global"], resourceType: "Article", gated: false },
  { type: "Blog Post", title: "Leading Through Uncertainty: How to Bring Clarity When Everyone's Afraid", excerpt: "Clarity in uncertainty is not about having answers. It is about giving people enough to navigate the next 90 days with confidence.", date: "Feb 26, 2025", time: "6 min", tag: "Leadership + Culture", topic: "Leadership", geography: ["Global"], resourceType: "Article", gated: false },
  { type: "Blog Post", title: "What Actually Builds Resilient Teams? (Hint: It's Not Free Lunch and Yoga)", excerpt: "Resilience is not a perk. It is a structural property of how teams are built, led, and given permission to fail.", date: "Feb 11, 2025", time: "5 min", tag: "Organizational Performance", topic: "Talent & Performance", geography: ["Global"], resourceType: "Article", gated: false },
  { type: "Blog Post", title: "Black History Month: Bringing Teams Together Through Stories", excerpt: "Story is not supplemental to organizational culture. It is how culture transmits. This month is an invitation to use it intentionally.", date: "Feb 7, 2025", time: "4 min", tag: "DEI Evolution", topic: "Organizational Culture & Trust", geography: ["Global"], resourceType: "Article", gated: false },
  { type: "Blog Post", title: "Rethinking Work: The Five Questions Leaders Aren't Asking (But Should)", excerpt: "The questions organizations are not asking are more revealing than the ones they are. These five sit at the center of most leadership failures.", date: "Jan 15, 2025", time: "7 min", tag: "Future of Work", topic: "Future of Work", geography: ["Global"], resourceType: "Article", gated: false },
  { type: "Blog Post", title: "Five Generations, One Workforce: The Untapped Superpower", excerpt: "Generational diversity is real. But the organizations treating it as a problem to manage are missing the opportunity it represents.", date: "Jan 7, 2025", time: "6 min", tag: "Workforce Design", topic: "Future of Work", geography: ["Global"], resourceType: "Article", gated: false },
  { type: "Blog Post", title: "Robots Are People Too (Sort Of?): The Future of Inclusive Team Leadership", excerpt: "As AI agents become team members in practice, leadership will require a new grammar — one that doesn't exist yet.", date: "Nov 20, 2024", time: "5 min", tag: "AI + Work", topic: "AI & Workforce", geography: ["Global"], resourceType: "Article", gated: false },
];

function renderConsequentialArchive() {
  const { type: activeType, topic: activeTopic } = S.consequentialArchive;
  const types = ["All", "Signal Briefing", "Research Report", "Horizon Scan", "Blog Post", "Podcast"];
  const topics = ["All", "AI + Work", "Talent Strategy", "Leadership + Culture", "Workforce Design", "Trust + Institutional Risk", "Organizational Performance", "Future of Work", "DEI Evolution"];

  return `<>
    <div class="max-w-6xl mx-auto px-6 py-12">
      ${Lbl("Editorial")}
      <h1 class="text-4xl font-semibold text-gray-900 mt-3 mb-2">Consequential</h1>
      <p class="text-gray-600 text-sm mb-8">Signal briefings, research reports, horizon scans, and commentary from the CTI network.</p>
      <div class="border border-gray-300 p-8 mb-10 grid grid-cols-3 gap-8">
        <div class="col-span-2">
          ${Lbl("Featured · Blog Post")}
          <h2 class="text-2xl font-semibold text-gray-900 mt-2 mb-2 leading-tight">Take Up Space Anyway</h2>
          <p class="text-gray-600 text-sm mb-4 leading-relaxed">On the particular exhaustion of being asked to make yourself smaller — and why the antidote is not patience.</p>
          <p class="text-xs text-gray-400 mb-4">June 25, 2026 · 5 min read</p>
          <div class="flex gap-2 mb-4 flex-wrap">${TagEl("Leadership + Culture")}</div>
          ${Btn("Read →", { onclick: "nav('blog-post')", v: "solid" })}
        </div>
        ${GrayBox({ label: "Featured image" })}
      </div>
      <div class="mb-3">${Filters(types, activeType, "consequentialArchive.type")}</div>
      <div class="mb-8">${Filters(topics, activeTopic, "consequentialArchive.topic")}</div>
      <div class="grid grid-cols-3 gap-6">
        ${CONSEQUENTIAL_POSTS.map(({ type, title, excerpt, date, time, tag, gated }) => Card(`
            <div class="flex items-start justify-between mb-1">
              ${Lbl(type)}
              ${gated ? `<span class="text-gray-400 text-xs">🔒</span>` : ""}
            </div>
            <h3 class="font-medium text-gray-900 mt-2 mb-1 text-sm leading-snug">${esc(title)}</h3>
            <p class="text-xs text-gray-500 mb-2 leading-relaxed">${esc(excerpt)}</p>
            <p class="text-xs text-gray-400 mb-3">${date} · ${time} read</p>
            ${TagEl(tag)}
            <div class="mt-3 flex gap-3 flex-wrap">
              ${Btn("Read →", { onclick: "nav('blog-post')", v: "ghost" })}
              ${gated ? Btn("Request Membership →", { onclick: "nav('request-form')", v: "ghost" }) : ""}
            </div>
          `, { onclick: "nav('blog-post')" })).join("")}
      </div>
      <div class="mt-12 border border-gray-300 bg-gray-100 p-6">
        <div class="flex items-center justify-between mb-4">
          <div>${Lbl("Consequential Podcast")}<h3 class="font-semibold text-gray-900 mt-1 text-sm">Listen to the latest episodes</h3></div>
          ${Btn("All Episodes →", {})}
        </div>
        <div class="grid grid-cols-3 gap-4">
          ${["The Trust Deficit", "Luminary Thinking with Dr. Fatima Al-Rashid", "What DEI Rollbacks Really Signal"].map(ep => `
            <div class="flex items-center gap-3 bg-white border border-gray-200 p-3">
              <div class="w-10 h-10 bg-gray-300 flex items-center justify-center flex-shrink-0"><span class="text-gray-500 text-xs">▶</span></div>
              <span class="text-xs text-gray-700">${esc(ep)}</span>
            </div>`).join("")}
        </div>
      </div>
    </div>
    </>`;
}

function renderBlogPost() {
  return `<div class="max-w-3xl mx-auto px-6 py-12">
    ${Lbl("Consequential")}
    <div class="mt-1 mb-3">${Lbl("Blog Post")}</div>
    <div class="flex gap-2 mb-4 flex-wrap">${TagEl("AI + Work")}${TagEl("Talent Strategy")}${TagEl("Future of Work")}</div>
    <h1 class="text-3xl font-semibold text-gray-900 mb-3 leading-tight">What happens when entry-level work stops teaching judgment?</h1>
    <p class="text-base text-gray-600 mb-4 leading-relaxed">AI is restructuring the early career pipeline in ways that may permanently alter how organizations build leadership bench strength.</p>
    <p class="text-xs text-gray-500 mb-8">Dr. Katherine Giscombe · September 12, 2025 · 7 min read</p>
    ${HR()}
    <div class="text-gray-700 text-sm space-y-4 leading-relaxed">
      <p>For most of the twentieth century, organizations built judgment the same way. You gave people difficult, low-stakes work. You watched how they handled ambiguity. You promoted the ones who developed an instinct for what mattered.</p>
      <p>That model is under pressure in ways that most talent leaders have not fully reckoned with. The entry-level work that once taught judgment — drafting, reviewing, triaging, synthesizing — is now being handled by AI systems that are faster, cheaper, and never need a performance review.</p>
      <p>This is not a story about automation replacing jobs. Most of those jobs still exist. It is a story about what those jobs now involve — and what they no longer teach.</p>
    </div>
    <div class="bg-gray-100 border-l-4 border-gray-800 p-6 my-8">
      <p class="text-lg font-medium text-gray-900 italic leading-relaxed">"The question is not whether AI is good at entry-level work. It is. The question is what we lose when humans no longer do it."</p>
      <p class="text-xs text-gray-500 mt-3">From the CTI Forum, June 2025</p>
    </div>
    <div class="text-gray-700 text-sm space-y-4 leading-relaxed mb-8">
      <p>The coalition spent three sessions on this question in 2025. What emerged was a concern that most CHROs had been circling without naming: the apprenticeship model is being disrupted from the bottom up.</p>
      <p>The entry-level analyst who once spent three years learning to read a room, manage a client expectation, and hold a position under pressure is now spending those years managing AI outputs. That is different work. It develops different instincts.</p>
    </div>
    ${HR()}
    <div class="mb-6">
      <h3 class="font-semibold text-gray-900 mb-4 text-sm">Related Research</h3>
      ${["Sponsorship in the Age of Distributed Work", "AI and the Disappearing Apprenticeship Model"].map(r => `
        <div onclick="nav('lab')" class="flex items-center gap-3 border border-gray-200 p-3 cursor-pointer hover:bg-gray-50 mb-2">
          <span class="text-xs text-gray-400 font-mono">RESEARCH</span>
          <span class="text-sm text-gray-800">${esc(r)}</span>
        </div>`).join("")}
    </div>
    <div class="mb-6">
      <h3 class="font-semibold text-gray-900 mb-3 text-sm">Related Forum Session</h3>
      ${Card(`
        ${Lbl("Upcoming · September 18, 2025")}
        <p class="font-medium text-gray-900 mt-1 mb-2 text-sm">The Judgment Gap: AI and Early Career Learning</p>
        ${Btn("See The Forum →", { onclick: "nav('forum-public')", v: "ghost" })}
      `, { onclick: "nav('forum-public')" })}
    </div>
    <div class="mb-10">
      <h3 class="font-semibold text-gray-900 mb-3 text-sm">Related Playbook</h3>
      ${Card(`
        <div class="flex items-start justify-between">
          <div>
            ${Lbl("Playbook · Members Only")}
            <p class="font-medium text-gray-900 mt-1 text-sm">Building Judgment in AI-Augmented Teams</p>
            <p class="text-xs text-gray-500 mt-1">Available in the member area</p>
          </div>
          <span class="text-gray-400">🔒</span>
        </div>
        <div class="mt-3">${Btn("Request Membership →", { onclick: "nav('request-form')", v: "ghost" })}</div>
      `, { onclick: "nav('request-form')" })}
    </div>
    <div class="bg-gray-900 text-white p-8 text-center">
      <h3 class="font-semibold mb-2">Bring this conversation to your organization.</h3>
      <p class="text-gray-400 text-sm mb-6">CTI is available for executive briefings, leadership retreats, and board presentations on this and related topics.</p>
      ${Btn("Start a Conversation", { onclick: "nav('request-form')", v: "solid" })}
    </div>
  </div>`;
}

const HIDDEN_PAGES = [
  { label: "Sponsor Prospectus", page: "sponsor-prospectus" },
  { label: "Media Kit", page: "media-kit" },
  { label: "Partnership Prospectus", page: "partnership-prospectus" },
  { label: "Executive Briefing Request", page: "executive-briefing-request" },
];

function HiddenPagesBlock() {
  return `<div class="border-t border-gray-200 bg-gray-50 px-6 py-8 mt-4">
    <div class="max-w-6xl mx-auto">
      <p class="text-xs font-mono text-gray-400 uppercase tracking-widest mb-3">Sales &amp; marketing pages (not in navigation)</p>
      <div class="flex flex-wrap gap-3">
        ${HIDDEN_PAGES.map(({ label, page }) => `
          <button onclick="nav('${page}')" class="text-xs font-mono border border-gray-300 text-gray-600 px-3 py-1.5 hover:border-gray-500 hover:text-gray-900 bg-white">
            ${esc(label)} <span class="text-gray-400">(Hidden / Direct URL)</span>
          </button>`).join("")}
      </div>
    </div>
  </div>`;
}

function renderEngage() {
  const tab = S.engage.tab;
  const items = [
    ["Membership", "engage:membership"], ["Advisory", "engage:advisory"],
    ["Speaking", "engage:speaking"], ["Press", "engage:press"],
    ["About CTI", "engage:about"], ["Contact", "request-form"],
  ];
  const content = tab === "speaking" ? renderEngageSpeaking()
    : tab === "membership" ? renderEngageMembership()
    : tab === "press" ? renderEngagePress()
    : tab === "about" ? renderEngageAboutCTI()
    : renderEngageAdvisory();
  return `<div>
    ${SectionNav("Engage", items, "engage")}
    ${content}
    ${HiddenPagesBlock()}
  </div>`;
}

function renderEngageSpeaking() {
  const selectedNeeds = S.engage.selectedNeeds;

  const offers = [
    { id: "book-a-speaker", title: "Book a Speaker", desc: "CTI leaders, researchers, and Luminary Exchange speakers for keynotes, panels, fireside chats, employee forums, ERG/BRG events, and leadership meetings.", bestFor: "Company-wide events, leadership offsites, inclusion summits, heritage month programs, future-of-work events, and employee community moments.", cta: "Book a Speaker", need: "Speaker or keynote" },
    { id: "erg-brg", title: "Plan an ERG/BRG Event", desc: "Speaker, facilitator, or session support for employee resource groups, business resource groups, sponsors, and employee communities.", bestFor: "Heritage months, ERG/BRG summits, sponsor sessions, career mobility conversations, cross-ERG leadership forums, neuroinclusion sessions, and belonging or trust conversations.", cta: "Plan an ERG/BRG Event", need: "ERG/BRG event" },
    { id: "executive-briefing", title: "Request an Executive Briefing", desc: "Research-backed briefings for CHROs, executive teams, boards, HR leadership teams, senior sponsors, and business leaders.", bestFor: "Board or ELT education, HR strategy meetings, executive sponsor briefings, leadership retreats, and preparing leaders for emerging workforce issues.", cta: "Request an Executive Briefing", need: "Executive briefing" },
    { id: "working-session", title: "Plan a Working Session", desc: "Facilitated sessions that help teams move from a complex question to clearer choices, shared language, and next steps.", bestFor: "Leadership offsites, strategy sessions, impact or inclusion redesign, future-of-work planning, ERG/BRG strategy, talent planning, AI and workforce implications, and culture conversations.", cta: "Plan a Working Session", need: "Facilitated working session" },
    { id: "research-to-practice", title: "Bring CTI Research to Your Team", desc: "Research-to-practice workshops that turn CTI research into practical internal conversations, tools, and next steps.", bestFor: "Leadership teams, managers, practitioners, ERG/BRG leaders, learning teams, and employee audiences.", cta: "Bring CTI Research to Your Team", need: "Research-to-practice workshop" },
    { id: "luminary", title: "Request a Luminary Match", desc: "Curated access to thinkers, practitioners, authors, researchers, operators, and speakers who can bring outside perspective into your organization.", bestFor: "Executive briefings, board conversations, private salons, leadership retreats, employee events, ERG/BRG events, and strategy sessions.", cta: "Request a Luminary Match", need: "Luminary Exchange engagement" },
    { id: "in-residence", title: "Explore CTI-in-Residence", desc: "Deeper CTI support around a defined workforce, leadership, talent, inclusion, AI, culture, or employee community priority.", bestFor: "Major internal transitions, workforce strategy, leadership capability, ERG/BRG transformation, AI and work redesign, culture and trust work, or building a future-facing people agenda.", cta: "Explore CTI-in-Residence", need: "CTI-in-Residence" },
  ];

  const topics = ["AI and work", "Future of work", "Human-first leadership", "Neuroinclusion and accessibility", "Sponsorship and career mobility", "ERG/BRG leadership and impact", "Culture and trust", "Belonging", "Multi-generational teams", "Talent strategy", "Employee communities", "Workforce innovation", "Leadership in uncertainty", "Early-career pathways", "Inclusion strategy in a changing environment"];
  const deliverables = ["Executive briefing deck", "Session title and description", "Speaker recommendation", "Moderator questions", "Audience discussion prompts", "Facilitation plan", "Working session materials", "Post-session synthesis", "What to Try tool", "Discussion guide", "Playbook or worksheet", "Recommended next-step memo", "Luminary recommendations", "Internal activation plan"];
  const steps = [
    { n: "01", title: "Tell us the moment.", body: "Share the audience, topic, timing, and what you need people to leave with." },
    { n: "02", title: "We recommend the right format.", body: "CTI may recommend a speaker, executive briefing, Luminary, working session, research-to-practice workshop, or CTI-in-Residence engagement." },
    { n: "03", title: "We shape the session with you.", body: "We align on audience, goals, tone, materials, and follow-through." },
    { n: "04", title: "CTI brings research, perspective, and practical tools.", body: "Depending on the engagement, you leave with a stronger conversation, clearer next steps, and materials your team can use." },
  ];

  const needOptions = ["Speaker or keynote", "ERG/BRG event", "Executive briefing", "Research-to-practice workshop", "Facilitated working session", "Luminary Exchange engagement", "CTI-in-Residence", "Advisory support", "Not sure yet"];
  const audienceOptions = ["Board", "Executive team", "CHRO / HR leadership", "ERG/BRG leaders", "ERG/BRG members", "Executive sponsors", "Managers", "Employees", "Talent / learning / inclusion team", "Client-facing leaders", "Other"];
  const topicOptions = ["AI and work", "Leadership", "Neuroinclusion", "Accessibility", "Sponsorship and career mobility", "ERGs / BRGs", "Culture and trust", "Belonging", "Future of work", "Talent strategy", "Employee communities", "Workforce innovation", "Other"];
  const momentOptions = ["Heritage month or awareness event", "Leadership offsite", "Employee event", "Executive briefing", "Board / ELT conversation", "ERG/BRG summit", "Internal strategy session", "Learning program", "Other"];

  return `<div>
    <section class="border-b border-gray-300 bg-white px-6 py-16">
      <div class="max-w-6xl mx-auto">
        ${Lbl("Speaking")}
        <h1 class="text-5xl font-semibold text-gray-900 mt-4 mb-4 leading-tight max-w-3xl">
          Bring CTI into your next leadership, workforce, or employee community moment.
        </h1>
        <p class="text-base text-gray-600 mb-8 max-w-2xl leading-relaxed">
          Book CTI for research-backed briefings, speakers, Luminary engagements, ERG/BRG events, working sessions, and custom support.
        </p>
        <div class="flex gap-3 flex-wrap mb-6">
          <button onclick="scrollToFormId('wwu-form')" class="bg-gray-900 text-white text-xs font-mono px-5 py-2.5 hover:bg-gray-700">Request CTI Support</button>
          <button onclick="setState('engage.selectedNeeds', ['Speaker or keynote']); scrollToFormId('wwu-form')" class="border border-gray-800 text-gray-800 text-xs font-mono px-5 py-2.5 hover:bg-gray-100">Book a Speaker</button>
        </div>
        <p class="text-xs text-gray-500 italic">
          Not sure what you need? Tell us the audience, topic, and outcome. We will recommend the right CTI speaker, Luminary, briefing, or working session.
        </p>
      </div>
    </section>

    <nav class="border-b border-gray-200 bg-gray-50 sticky top-[49px] z-40">
      <div class="max-w-6xl mx-auto px-6 flex gap-0 overflow-x-auto">
        ${[
          ["Book a Speaker", "book-a-speaker"], ["ERG/BRG Events", "erg-brg"], ["Executive Briefings", "executive-briefing"],
          ["Working Sessions", "working-session"], ["Research-to-Practice", "research-to-practice"], ["Luminary Exchange", "luminary"],
          ["CTI-in-Residence", "in-residence"], ["Request CTI Support", "wwu-form"],
        ].map(([label, id]) => `
          <a href="#${id}" class="text-xs font-mono text-gray-500 hover:text-gray-900 px-4 py-2.5 whitespace-nowrap border-b-2 border-transparent hover:border-gray-600 -mb-px">
            ${esc(label)}
          </a>`).join("")}
      </div>
    </nav>

    <div class="max-w-6xl mx-auto px-6 py-12 space-y-16">

      <section>
        <h2 class="text-2xl font-semibold text-gray-900 mb-2">Choose what you need</h2>
        <p class="text-sm text-gray-500 mb-8">Seven ways CTI can support your next moment.</p>
        <div class="grid grid-cols-2 gap-5">
          ${offers.map(offer => `
            <div id="${offer.id}" class="border border-gray-300 p-5 bg-white">
              <h3 class="font-semibold text-gray-900 mb-2">${esc(offer.title)}</h3>
              <p class="text-sm text-gray-700 mb-4 leading-relaxed">${esc(offer.desc)}</p>
              <div class="mb-4">
                <p class="text-xs font-mono text-gray-400 mb-1 uppercase tracking-wide">Best for</p>
                <p class="text-xs text-gray-600 leading-relaxed">${esc(offer.bestFor)}</p>
              </div>
              <button onclick="setState('engage.selectedNeeds', ['${esc(offer.need).replace(/'/g, "\\'")}']); scrollToFormId('wwu-form')" class="text-xs font-mono border border-gray-800 text-gray-800 px-4 py-1.5 hover:bg-gray-100">
                ${esc(offer.cta)}
              </button>
            </div>`).join("")}
        </div>
      </section>

      <section>
        <h2 class="text-2xl font-semibold text-gray-900 mb-6">Topics we can support</h2>
        <div class="flex flex-wrap gap-2">
          ${topics.map(t => `<span class="border border-gray-400 text-gray-700 text-xs font-mono px-3 py-1.5">${esc(t)}</span>`).join("")}
        </div>
      </section>

      <section>
        <h2 class="text-2xl font-semibold text-gray-900 mb-3">What you can leave with</h2>
        <p class="text-sm text-gray-600 mb-6">Depending on the engagement, CTI can provide:</p>
        <div class="grid grid-cols-2 gap-2">
          ${deliverables.map(d => `
            <div class="flex items-center gap-3 border border-gray-200 px-4 py-2.5">
              <div class="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></div>
              <span class="text-sm text-gray-700">${esc(d)}</span>
            </div>`).join("")}
        </div>
      </section>

      <section>
        <h2 class="text-2xl font-semibold text-gray-900 mb-8">How it works</h2>
        <div class="grid grid-cols-4 gap-6">
          ${steps.map(({ n, title, body }) => `
            <div class="border border-gray-300 p-5">
              <p class="text-2xl font-semibold text-gray-300 font-mono mb-3">${n}</p>
              <h3 class="font-semibold text-gray-900 mb-2 text-sm">${esc(title)}</h3>
              <p class="text-xs text-gray-600 leading-relaxed">${esc(body)}</p>
            </div>`).join("")}
        </div>
      </section>

      <section id="wwu-form">
        <div class="border border-gray-300 p-8">
          <h2 class="text-2xl font-semibold text-gray-900 mb-2">Request CTI Support</h2>
          <p class="text-sm text-gray-600 mb-8 max-w-xl leading-relaxed">
            Tell us what you are planning. We will follow up to recommend the right CTI speaker, Luminary, briefing, working session, or custom engagement.
          </p>

          <div class="space-y-8">
            <div>
              <p class="text-xs font-mono text-gray-600 mb-3 uppercase tracking-wide">What do you need?</p>
              <div class="grid grid-cols-3 gap-2">
                ${needOptions.map(opt => `
                  <label class="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                    <div class="w-4 h-4 border flex-shrink-0 flex items-center justify-center ${selectedNeeds.includes(opt) ? "border-gray-900 bg-gray-900" : "border-gray-400"}" onclick="toggleEngageNeed('${esc(opt).replace(/'/g, "\\'")}')">
                      ${selectedNeeds.includes(opt) ? `<span class="text-white text-xs">✓</span>` : ""}
                    </div>
                    <span onclick="toggleEngageNeed('${esc(opt).replace(/'/g, "\\'")}')">${esc(opt)}</span>
                  </label>`).join("")}
              </div>
            </div>

            <div>
              <p class="text-xs font-mono text-gray-600 mb-3 uppercase tracking-wide">Who is the audience?</p>
              <div class="grid grid-cols-3 gap-2">
                ${audienceOptions.map(opt => `
                  <label class="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                    <div class="w-4 h-4 border border-gray-400 flex-shrink-0"></div>
                    ${esc(opt)}
                  </label>`).join("")}
              </div>
            </div>

            <div>
              <p class="text-xs font-mono text-gray-600 mb-3 uppercase tracking-wide">What topic are you focused on?</p>
              <div class="grid grid-cols-3 gap-2">
                ${topicOptions.map(opt => `
                  <label class="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                    <div class="w-4 h-4 border border-gray-400 flex-shrink-0"></div>
                    ${esc(opt)}
                  </label>`).join("")}
              </div>
            </div>

            <div>
              <p class="text-xs font-mono text-gray-600 mb-3 uppercase tracking-wide">What kind of moment is this?</p>
              <div class="grid grid-cols-3 gap-2">
                ${momentOptions.map(opt => `
                  <label class="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                    <div class="w-4 h-4 border border-gray-400 flex-shrink-0"></div>
                    ${esc(opt)}
                  </label>`).join("")}
              </div>
            </div>

            <div>
              <p class="text-xs font-mono text-gray-600 mb-2 uppercase tracking-wide">What do you want people to leave with?</p>
              <div class="border border-gray-300 bg-gray-50 w-full h-24"></div>
            </div>

            <div>
              <p class="text-xs font-mono text-gray-600 mb-3 uppercase tracking-wide">When is it?</p>
              <div class="flex gap-6">
                ${["Date confirmed", "Month / quarter", "Still planning"].map(opt => `
                  <label class="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                    <div class="w-4 h-4 border border-gray-400 rounded-full flex-shrink-0"></div>
                    ${esc(opt)}
                  </label>`).join("")}
              </div>
            </div>

            <div>
              <p class="text-xs font-mono text-gray-600 mb-4 uppercase tracking-wide">Your contact information</p>
              <div class="grid grid-cols-2 gap-4">
                ${["Name", "Organization", "Title", "Email", "Phone (optional)"].map(f => `
                  <div>
                    <div class="text-xs font-mono text-gray-500 mb-1">${f}</div>
                    <div class="border border-gray-300 bg-gray-50 h-9 w-full"></div>
                  </div>`).join("")}
              </div>
            </div>

            <button onclick="nav('thank-you')" class="bg-gray-900 text-white text-xs font-mono px-6 py-3 hover:bg-gray-700">
              Request CTI Support
            </button>
          </div>
        </div>
      </section>

    </div>
  </div>`;
}

function renderEngageAdvisory() {
  const openForm = S.engage.openForm;
  const cards = [
    { id: "advisory", title: "Decision Support / Advisory", sub: "For organizations or Co-Chairs needing thought partnership on a live challenge.", items: ["Issue framing", "Expert consultation", "Research synthesis", "Strategic guidance"], cta: "Request Decision Support" },
  ];
  return `<div class="max-w-6xl mx-auto px-6 py-12">
    ${Lbl("Advisory")}
    <h1 class="text-4xl font-semibold text-gray-900 mt-3 mb-8">How we can help your organization.</h1>
    <div class="grid grid-cols-2 gap-6 max-w-3xl">
      ${cards.map(({ id, title, sub, items, cta }) => `
        <div>
          ${Card(`
            <h2 class="font-semibold text-gray-900 mb-1">${esc(title)}</h2>
            <p class="text-sm text-gray-500 mb-4">${esc(sub)}</p>
            <ul class="space-y-1.5 mb-6">
              ${items.map(item => `
                <li class="flex items-center gap-2 text-sm text-gray-700">
                  <div class="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></div>${esc(item)}
                </li>`).join("")}
            </ul>
            <button onclick="setState('engage.openForm', ${JSON.stringify(openForm === id ? null : id)})" class="bg-gray-900 text-white px-4 py-1.5 text-xs font-mono hover:bg-gray-700 cursor-pointer inline-block">${esc(cta)}</button>
          `)}
          ${openForm === id ? `
            <div class="border border-gray-300 border-t-0 bg-gray-50 p-4 space-y-3">
              ${Lbl("Request form")}
              ${Field("Name")}${Field("Organization")}${Field("Email")}${Field("Message", { tall: true })}
              ${Btn("Submit", { v: "solid" })}
            </div>` : ""}
        </div>`).join("")}
    </div>
  </div>`;
}

function renderEngagePress() {
  const openForm = S.engage.openForm;
  const cards = [
    { id: "press", title: "Press", sub: "For journalists and media.", items: ["Rapid response comment", "Expert spokespeople", "Embargoed research access", "Press kit download", "Quote clearance"], cta: "Contact the Press Team" },
  ];
  return `<div class="max-w-6xl mx-auto px-6 py-12">
    ${Lbl("Press")}
    <h1 class="text-4xl font-semibold text-gray-900 mt-3 mb-8">For journalists and media.</h1>
    <div class="grid grid-cols-2 gap-6 max-w-3xl">
      ${cards.map(({ id, title, sub, items, cta }) => `
        <div>
          ${Card(`
            <h2 class="font-semibold text-gray-900 mb-1">${esc(title)}</h2>
            <p class="text-sm text-gray-500 mb-4">${esc(sub)}</p>
            <ul class="space-y-1.5 mb-6">
              ${items.map(item => `
                <li class="flex items-center gap-2 text-sm text-gray-700">
                  <div class="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></div>${esc(item)}
                </li>`).join("")}
            </ul>
            <button onclick="setState('engage.openForm', ${JSON.stringify(openForm === id ? null : id)})" class="bg-gray-900 text-white px-4 py-1.5 text-xs font-mono hover:bg-gray-700 cursor-pointer inline-block">${esc(cta)}</button>
          `)}
          ${openForm === id ? `
            <div class="border border-gray-300 border-t-0 bg-gray-50 p-4 space-y-3">
              ${Lbl("Request form")}
              ${Field("Name")}${Field("Organization")}${Field("Email")}${Field("Message", { tall: true })}
              ${Btn("Submit", { v: "solid" })}
            </div>` : ""}
        </div>`).join("")}
    </div>
  </div>`;
}

function renderEngageMembership() {
  const openFaq = S.engage.openFaq;
  const faqs = [
    { q: "How do I join?", a: "We begin with a conversation. There is no application form or self-service signup. Membership is extended after a conversation with a member of the CTI team." },
    { q: "What does membership include?", a: "Forum access (all sessions + recordings), Coqual Global Lab research, Consequential full archive, Luminary Exchange, Playbooks and assessments, Advisory support, and CTILearning access." },
    { q: "Is this like a traditional membership organization?", a: "No. CTI is a working coalition. Members come to work on live problems, not to access benefits. The value is in the room, not in the portal." },
    { q: "Why isn't pricing on the website?", a: "Membership is a relationship. We have a conversation first." },
  ];
  return `<div class="max-w-6xl mx-auto px-6 py-12">
    ${Lbl("Membership")}
    <h1 class="text-4xl font-semibold text-gray-900 mt-3 mb-4">Join the Coalition of Consequence</h1>
    <p class="text-base text-gray-600 mb-8 max-w-2xl leading-relaxed">A selective network of global leaders redesigning work, talent, and leadership. Membership means a seat in The Forum, predictive intelligence from the Coqual Global Lab, access to the Luminary Exchange, and a peer network you cannot find anywhere else.</p>
    ${Btn("Request a Membership Conversation", { onclick: "nav('request-form')", v: "solid" })}
    ${HR()}
    <div class="grid grid-cols-3 gap-6">
      ${[
        { t: "A Room You Cannot Get Into Anywhere Else", b: "The Forum is CTI's executive convening program. Bring your real challenge. Leave with clearer thinking and sharper language." },
        { t: "Intelligence That Names What Others Haven't", b: "The Coqual Global Lab surfaces emerging workforce signals before they become headlines. Consequential briefings give you intelligence you can act on." },
        { t: "Thinking Partners, Not Just Content", b: "Membership includes the Luminary Exchange and Advisory access for pressing challenges." },
      ].map(({ t, b }) => Card(`
          ${GrayBox({ h: "h-16", label: "Illustration" })}
          <h3 class="font-semibold text-gray-900 mt-4 mb-2 text-sm">${esc(t)}</h3>
          <p class="text-sm text-gray-600 leading-relaxed">${esc(b)}</p>
        `)).join("")}
    </div>
    ${HR()}
    <div class="max-w-xl">
      <h2 class="font-semibold text-gray-900 mb-4">Frequently Asked Questions</h2>
      ${faqs.map(({ q, a }, i) => `
        <div class="border-b border-gray-200">
          <button onclick="setState('engage.openFaq', ${openFaq === i ? "null" : i})" class="flex items-center justify-between w-full py-4 text-left">
            <span class="text-sm font-medium text-gray-900">${esc(q)}</span>
            <span class="text-gray-400 text-lg ml-4">${openFaq === i ? "−" : "+"}</span>
          </button>
          ${openFaq === i ? `<p class="text-sm text-gray-600 pb-4 leading-relaxed">${esc(a)}</p>` : ""}
        </div>`).join("")}
    </div>
  </div>`;
}

function renderSponsorProspectus() {
  return `<div>
    ${HiddenPageBanner("Sponsor Prospectus")}
    <div class="max-w-4xl mx-auto px-6 py-14">

    <div class="flex items-center justify-between mb-12 pb-6 border-b border-gray-300">
      <div>
        <p class="font-mono font-bold text-gray-900 text-sm tracking-widest">CTI</p>
        <p class="text-xs text-gray-500 mt-0.5 font-mono">Sponsor Prospectus</p>
      </div>
      <div class="text-right">
        <p class="text-xs text-gray-500 font-mono">Coqual Global Lab</p>
        <p class="text-xs text-gray-500 font-mono">2025–2026 Research Study</p>
      </div>
    </div>

    <div class="mb-12">
      ${Lbl("Research Sponsorship Opportunity")}
      <h1 class="text-4xl font-semibold text-gray-900 mt-4 mb-6 leading-tight max-w-2xl">
        Seeing Talent Clearly: What Neurodivergent Employees Reveal About Performance Systems
      </h1>
      <p class="text-base text-gray-600 leading-relaxed max-w-2xl">
        Across organizations, leaders are looking for clearer ways to understand contribution in a world where work is evolving. Performance systems sit at the heart of that understanding. They influence how careers take shape, how potential becomes visible, and how organizations recognize the people who move them forward.
      </p>
    </div>

    ${HR()}

    <section class="mb-10">
      <h2 class="text-xl font-semibold text-gray-900 mb-4">Why This Lens Expands Possibility</h2>
      <p class="text-sm text-gray-700 leading-relaxed mb-4">
        As work becomes more interconnected and cognitively diverse, organizations are discovering new ways that talent shows up. Communication looks different. Focus looks different. Problem solving takes forms that were not always anticipated when traditional performance frameworks were created.
      </p>
      <p class="text-sm text-gray-700 leading-relaxed mb-4">
        Neurodivergent professionals are present across every dimension of the workforce. They contribute in every region, discipline, and level of an organization. Their experiences allow leaders to observe how evaluation systems respond to different ways of thinking and working — and where opportunities exist to see talent more fully.
      </p>
      <p class="text-sm text-gray-700 leading-relaxed">
        Many neurodivergent professionals work in fields that are shaping the future of work, contributing strengths in analytical depth, pattern recognition, systems thinking, and technical insight.
      </p>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold text-gray-900 mb-4">What the Research Explores</h2>
      <p class="text-sm text-gray-700 leading-relaxed mb-5">
        This study examines how performance and feedback systems interpret contribution in the flow of modern work. It looks at how managers understand signals of strong performance, how feedback routines shape development, and how future potential is recognized.
      </p>
      <div class="space-y-2">
        ${[
          "How managers weigh different forms of contribution and interpret signals of both performance and potential",
          "Opportunities to improve feedback processes for clarity and impact in dynamic environments",
          "How different work styles, strengths, and contributions appear within evaluation systems",
          "How existing performance structures shape — and limit — growth, advancement, and succession planning",
        ].map(item => `
          <div class="flex gap-3 items-start">
            <div class="w-1.5 h-1.5 bg-gray-500 rounded-full flex-shrink-0 mt-1.5"></div>
            <p class="text-sm text-gray-700">${esc(item)}</p>
          </div>`).join("")}
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold text-gray-900 mb-4">A Three-Market Perspective</h2>
      <p class="text-sm text-gray-700 leading-relaxed mb-4">
        The study examines performance systems across the United States, India, and Germany. Each market brings its own leadership traditions, cultural patterns, and organizational rhythms. Studying them together reveals insights that can move across borders and also highlight local nuances that shape decision making.
      </p>
      <div class="grid grid-cols-3 gap-4 mt-5">
        ${["United States", "India", "Germany"].map(m => `
          <div class="border border-gray-300 p-4 text-center">
            ${GrayBox({ h: "h-12", label: "Market" })}
            <p class="text-sm font-medium text-gray-900 mt-3">${esc(m)}</p>
          </div>`).join("")}
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold text-gray-900 mb-4">What Leaders Receive</h2>
      <p class="text-sm text-gray-700 leading-relaxed mb-5">
        Sponsors receive early insight into how performance systems operate across organizations and markets. The research takes place inside systems companies already use, allowing sponsors to apply findings directly to their own structures. The study explores:
      </p>
      <div class="grid grid-cols-2 gap-3 mb-5">
        ${["Performance reviews", "Talent reviews", "Feedback practices", "Promotion pathways", "Leadership development routines"].map(item => `
          <div class="flex gap-2 items-center border border-gray-200 px-3 py-2">
            <div class="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></div>
            <span class="text-sm text-gray-700">${esc(item)}</span>
          </div>`).join("")}
      </div>
      <p class="text-sm text-gray-600 leading-relaxed italic">
        Sponsors help shape the inquiry, contribute questions that matter to their teams, and stay closely connected as insights emerge. Lead and Project Sponsors join working sessions with CTI researchers to interpret findings and explore new routines.
      </p>
    </section>

    ${HR()}

    <section class="mb-12">
      <h2 class="text-xl font-semibold text-gray-900 mb-8">Sponsor Levels</h2>
      <div class="space-y-6">

        <div class="border-2 border-gray-900 p-6">
          <div class="flex items-start justify-between mb-4">
            <div>
              <h3 class="font-semibold text-gray-900 text-lg">Lead Sponsor</h3>
              <p class="text-xs text-gray-500 font-mono mt-0.5">Central role in shaping research direction</p>
            </div>
            <div class="text-right"><p class="text-2xl font-semibold text-gray-900">$100,000</p></div>
          </div>
          <div class="grid grid-cols-2 gap-2">
            ${[
              "A dedicated advisory project connected to an existing performance system",
              "Strategic sessions with CTI researchers",
              "Early influence on research framing and stakeholder questions",
              "First access to findings, tools, and insights",
              "A featured organizational case example",
              "A speaker role in private and public convenings",
              "The opportunity to host and headline the global launch event",
              "All Project and Supporting Sponsor benefits",
            ].map(b => `
              <div class="flex gap-2 items-start">
                <div class="w-1.5 h-1.5 bg-gray-700 rounded-full flex-shrink-0 mt-1.5"></div>
                <p class="text-xs text-gray-700">${esc(b)}</p>
              </div>`).join("")}
          </div>
        </div>

        <div class="border border-gray-400 p-6">
          <div class="flex items-start justify-between mb-4">
            <div>
              <h3 class="font-semibold text-gray-900 text-lg">Project Sponsor</h3>
              <p class="text-xs text-gray-500 font-mono mt-0.5">Close participation with pilot engagement</p>
            </div>
            <div class="text-right"><p class="text-2xl font-semibold text-gray-900">$40,000</p></div>
          </div>
          <div class="grid grid-cols-2 gap-2">
            ${[
              "A pilot advisory engagement",
              "Early access to findings and pre-publication insights",
              "Participation in sponsor roundtables and working sessions",
              "Recognition in research materials and launch events",
              "A tailored findings snapshot with strategic discussion",
              "All Supporting Sponsor benefits",
            ].map(b => `
              <div class="flex gap-2 items-start">
                <div class="w-1.5 h-1.5 bg-gray-500 rounded-full flex-shrink-0 mt-1.5"></div>
                <p class="text-xs text-gray-700">${esc(b)}</p>
              </div>`).join("")}
          </div>
        </div>

        <div class="border border-gray-300 p-6">
          <div class="flex items-start justify-between mb-4">
            <div>
              <h3 class="font-semibold text-gray-900 text-lg">Supporting Sponsor</h3>
              <p class="text-xs text-gray-500 font-mono mt-0.5">Connected to early insights and emerging findings</p>
            </div>
            <div class="text-right"><p class="text-2xl font-semibold text-gray-900">$15,000</p></div>
          </div>
          <div class="grid grid-cols-2 gap-2">
            ${[
              "Recognition in the final report and launch",
              "Access to sponsor briefings and emerging insights",
              "Opportunities to participate through interviews or focus groups",
              "Sponsor-specific insights when participation thresholds are met",
              "Access to the research toolkit for internal use",
            ].map(b => `
              <div class="flex gap-2 items-start">
                <div class="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0 mt-1.5"></div>
                <p class="text-xs text-gray-700">${esc(b)}</p>
              </div>`).join("")}
          </div>
        </div>
      </div>
    </section>

    <section class="bg-gray-900 text-white p-10 mb-12">
      <h2 class="text-2xl font-semibold mb-4">An Invitation to Build What Comes Next</h2>
      <p class="text-gray-300 text-sm leading-relaxed mb-6 max-w-xl">
        This study brings together organizations that want to shape the future of performance with clarity and intention. The sponsor group remains small so the work can stay connected, applied, and meaningful. If seeing talent more fully is a priority for your 2026 decisions, and if you want to help build systems that support the wide range of strengths in today's workforce, we invite you to join us.
      </p>
      <div class="flex gap-3">
        <button onclick="nav('request-form')" class="bg-white text-gray-900 text-xs font-mono px-5 py-2.5 hover:bg-gray-100">Start a Conversation</button>
        <button class="border border-gray-600 text-gray-300 text-xs font-mono px-5 py-2.5 hover:border-white hover:text-white">Download This Prospectus</button>
      </div>
    </section>

    <section class="border-t border-gray-200 pt-8">
      <h3 class="font-semibold text-gray-900 mb-3 text-sm">About CTI</h3>
      <p class="text-sm text-gray-600 leading-relaxed max-w-2xl">
        CTI is a global think tank with more than two decades of experience helping organizations navigate change and create conditions where people and ideas thrive. Our work blends rigorous research with cultural insight and practical tools that help leaders turn knowledge into action. The Global Lab at CTI is our applied innovation center — designed to test, refine, and share what works in real time, supporting organizations as they design for the future of work.
      </p>
      <div class="mt-6 flex items-center gap-6">
        <button onclick="navEngage('press')" class="text-xs font-mono text-gray-600 underline hover:text-gray-900">Contact the Lab</button>
        <button onclick="nav('lab')" class="text-xs font-mono text-gray-600 underline hover:text-gray-900">View All Research</button>
        <button onclick="nav('request-form')" class="text-xs font-mono text-gray-600 underline hover:text-gray-900">Request a Conversation</button>
      </div>
    </section>

  </div>
  </div>`;
}

function HiddenPageBanner(label) {
  return `<div class="bg-gray-100 border-b border-gray-300 px-6 py-2 text-center">
    <span class="text-xs font-mono text-gray-500">${esc(label)} — Hidden / Direct URL page, not linked from primary navigation</span>
  </div>`;
}

function renderMediaKit() {
  return `<div>
    ${HiddenPageBanner("Media Kit")}
    <div class="max-w-4xl mx-auto px-6 py-14">
      ${Lbl("For Press &amp; Media")}
      <h1 class="text-4xl font-semibold text-gray-900 mt-4 mb-6 leading-tight max-w-2xl">Media Kit</h1>
      <p class="text-base text-gray-600 leading-relaxed max-w-2xl mb-10">
        Logos, boilerplate, executive headshots, and factsheets for press covering CTI, our research, or our leadership.
      </p>
      ${HR()}
      <div class="grid grid-cols-2 gap-4 mb-10">
        ${[
          { t: "CTI Boilerplate &amp; Fact Sheet", d: "Approved organizational description and key statistics." },
          { t: "Logo Package", d: "CTI logo in PNG, SVG, and EPS formats, light and dark variants." },
          { t: "Executive Headshots", d: "High-resolution photos of CTI leadership and spokespeople." },
          { t: "Brand Guidelines", d: "Usage rules for the CTI name, logo, and color palette." },
        ].map(({ t, d }) => Card(`
            ${GrayBox({ h: "h-24", label: "Asset preview" })}
            <h3 class="font-medium text-gray-900 mt-3 mb-1 text-sm">${t}</h3>
            <p class="text-xs text-gray-500 mb-3">${d}</p>
            <span class="text-xs font-mono text-gray-600">↓ Download</span>
          `)).join("")}
      </div>
      ${HR()}
      <h2 class="font-semibold text-gray-900 mb-3 text-sm">Media Contact</h2>
      <p class="text-sm text-gray-600 mb-6">For interview requests, quote approval, or additional assets, contact the CTI press team.</p>
      ${Btn("Contact the Press Team", { onclick: "navEngage('press')", v: "solid" })}
    </div>
  </div>`;
}

function renderPartnershipProspectus() {
  return `<div>
    ${HiddenPageBanner("Partnership Prospectus")}
    <div class="max-w-4xl mx-auto px-6 py-14">
      ${Lbl("Corporate Partnership Opportunity")}
      <h1 class="text-4xl font-semibold text-gray-900 mt-4 mb-6 leading-tight max-w-2xl">Partner With CTI</h1>
      <p class="text-base text-gray-600 leading-relaxed max-w-2xl mb-10">
        A structured overview of how organizations can partner with CTI beyond standard membership — co-branded research, Summit underwriting, and Forum session sponsorship.
      </p>
      ${HR()}
      <div class="space-y-6 mb-10">
        ${[
          { t: "Summit Underwriting", d: "Visible presence at CTI's flagship annual convening, including a speaking role and attendee list access." },
          { t: "Co-Branded Research", d: "Joint research initiatives with the Coqual Global Lab, tailored to a shared strategic question." },
          { t: "Forum Session Sponsorship", d: "Sponsor a themed Forum session and shape the discussion agenda." },
        ].map(({ t, d }) => `
          <div class="border border-gray-300 p-6">
            <h3 class="font-semibold text-gray-900 text-lg mb-2">${t}</h3>
            <p class="text-sm text-gray-600 leading-relaxed">${d}</p>
          </div>`).join("")}
      </div>
      ${HR()}
      <div class="bg-gray-900 text-white p-10 text-center">
        <h2 class="text-2xl font-semibold mb-3">Let's shape a partnership.</h2>
        <p class="text-gray-400 text-sm mb-6 max-w-xl mx-auto">Tell us what you're looking to accomplish and we'll follow up with a tailored proposal.</p>
        <button onclick="nav('request-form')" class="border border-white text-white px-6 py-3 font-mono text-xs hover:bg-white hover:text-gray-900 transition-colors">
          Start a Conversation
        </button>
      </div>
    </div>
  </div>`;
}

function renderExecutiveBriefingRequest() {
  return `<div>
    ${HiddenPageBanner("Executive Briefing Request")}
    <div class="max-w-2xl mx-auto px-6 py-14">
      ${Lbl("Executive Briefings")}
      <h1 class="text-4xl font-semibold text-gray-900 mt-4 mb-4 leading-tight">Request an Executive Briefing</h1>
      <p class="text-base text-gray-600 leading-relaxed mb-10">
        Research-backed briefings for CHROs, executive teams, boards, and senior HR leadership. Tell us the audience and topic and CTI will follow up to schedule.
      </p>
      <div class="space-y-5">
        ${Field("Name")}${Field("Organization")}${Field("Title")}${Field("Email")}
        ${Field("Audience (e.g. board, ELT, HR leadership)")}
        ${Field("Topic or business challenge", { tall: true })}
        ${Field("Preferred timing")}
        ${Btn("Submit Request", { onclick: "nav('thank-you')", v: "solid" })}
      </div>
    </div>
  </div>`;
}

function renderRequestForm() {
  return `<div class="max-w-2xl mx-auto px-6 py-12">
    ${Lbl("Contact")}
    <h1 class="text-3xl font-semibold text-gray-900 mt-3 mb-2">Request a Conversation</h1>
    <p class="text-gray-600 text-sm mb-8">A member of the CTI team will follow up to schedule a call.</p>
    <div class="space-y-5">
      ${Field("Name")}${Field("Organization")}${Field("Role")}${Field("Email")}
      ${Field("What brought you here?", { tall: true })}
      ${Field("What would you like to discuss?", { tall: true })}
      <div>
        <div class="text-xs font-mono text-gray-600 mb-2 uppercase tracking-wide">Interest area</div>
        <div class="grid grid-cols-2 gap-2">
          ${["Membership", "Advisory", "Speaker Booking", "Press", "Research Sponsorship", "Summit Underwriting", "Luminary Sponsorship", "Other"].map(opt => `
            <label class="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
              <div class="w-4 h-4 border border-gray-400 flex-shrink-0"></div>${esc(opt)}
            </label>`).join("")}
        </div>
      </div>
      ${Btn("Submit", { onclick: "nav('thank-you')", v: "solid" })}
    </div>
  </div>`;
}

function renderMemberLogin() {
  return `<div class="max-w-sm mx-auto px-6 py-24">
    ${Lbl("CTI Members")}
    <h1 class="text-2xl font-semibold text-gray-900 mt-3 mb-8">Log in to your account.</h1>
    <div class="space-y-4">
      ${Field("Email")}
      ${Field("Password")}
      ${Btn("Log In", { onclick: "completeLogin()", v: "solid", extraClass: "w-full text-center" })}
    </div>
    <p class="text-xs text-gray-500 mt-6">Not a member? ${`<button onclick="nav('request-form')" class="underline text-gray-700">Request a Membership Conversation</button>`}</p>
  </div>`;
}

function renderThankYou() {
  return `<div class="max-w-2xl mx-auto px-6 py-24 text-center">
    <div class="w-12 h-12 border border-gray-400 mx-auto mb-8 flex items-center justify-center">
      <span class="text-gray-600 text-xl">✓</span>
    </div>
    <h1 class="text-2xl font-semibold text-gray-900 mb-4">Thank you.</h1>
    <p class="text-gray-600 mb-8">A member of the CTI team will follow up to schedule a conversation.</p>
    ${Btn("Return to the site", { onclick: "nav('home')" })}
  </div>`;
}

function renderEventDetail() {
  const event = getSelectedEvent();
  const isPublic = !event.membersOnly;
  return `<div class="max-w-6xl mx-auto px-6 py-12">
    <button onclick="nav('forum-public')" class="text-xs font-mono text-gray-500 hover:text-gray-900 mb-6 flex items-center gap-1">← Back to The Forum</button>

    <div class="grid grid-cols-3 gap-10">
      <div class="col-span-2">
        <div class="flex items-center gap-2 mb-3 flex-wrap">
          ${event.membersOnly
            ? `<span class="text-xs font-mono bg-gray-900 text-white px-2 py-0.5">MEMBERS ONLY</span>`
            : `<span class="text-xs font-mono border border-gray-500 text-gray-700 px-2 py-0.5">OPEN TO PUBLIC</span>`}
          ${TagEl(event.tag)}
          ${TagEl(event.format)}
        </div>
        <h1 class="text-3xl font-semibold text-gray-900 mb-3 leading-tight">${esc(event.title)}</h1>
        <p class="text-gray-500 text-sm mb-6">${event.date} · ${event.timeNYC} · ${event.location}</p>

        <div class="text-sm text-gray-700 leading-relaxed mb-8 p-5 bg-gray-50 border border-gray-200">
          <p>${esc(event.description)}</p>
        </div>

        <div class="mb-6">
          <h2 class="font-semibold text-gray-900 mb-1 text-sm">Who this session is for</h2>
          <p class="text-sm text-gray-600">${esc(event.audience)}</p>
        </div>

        <div class="mb-8">
          <h2 class="font-semibold text-gray-900 mb-4 text-sm">Speakers &amp; Facilitators</h2>
          <div class="grid grid-cols-2 gap-4">
            ${event.speakers.map(({ name, role }) => `
              <div class="flex items-center gap-3 border border-gray-200 p-3">
                ${GrayBox({ w: "w-10", h: "h-10", label: "" })}
                <div>
                  <p class="font-medium text-gray-900 text-sm">${esc(name)}</p>
                  <p class="text-xs text-gray-500">${esc(role)}</p>
                </div>
              </div>`).join("")}
          </div>
          <p class="text-xs text-gray-400 mt-2 font-mono">Full speaker list confirmed closer to event date.</p>
        </div>

        <div class="mb-8">
          <h2 class="font-semibold text-gray-900 mb-3 text-sm">What to expect</h2>
          <div class="space-y-2">
            ${[
              "2-hour facilitated discussion — not a presentation",
              "Chatham House rules — findings shared, speakers not attributed",
              "Pre-session intake reviewed and integrated into discussion structure",
              "Session synthesis published to members within 5 business days",
            ].map(item => `
              <div class="flex gap-3 text-sm text-gray-700">
                <div class="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0 mt-1.5"></div>
                ${esc(item)}
              </div>`).join("")}
          </div>
        </div>

        ${isPublic ? `
          <div class="mb-8">
            <h2 class="font-semibold text-gray-900 mb-3 text-sm">Pre-reads</h2>
            ${["Blog Post: What happens when entry-level work stops teaching judgment?"].map(r => `
              <div onclick="nav('blog-post')" class="flex items-center gap-3 border border-gray-200 p-3 cursor-pointer hover:bg-gray-50 mb-2">
                <span class="text-xs text-gray-400 font-mono">ARTICLE</span>
                <span class="text-sm text-gray-800 underline">${esc(r)}</span>
              </div>`).join("")}
          </div>` : `
          <div class="border border-gray-300 bg-gray-50 p-4 mb-8">
            <p class="text-xs font-mono text-gray-500 mb-2">MEMBERS ONLY</p>
            <p class="text-sm text-gray-700 mb-3">Full pre-reads, pre-session intake form, and session synthesis are available to CTI members.</p>
            ${Btn("Login to access", { onclick: "nav('dashboard')", v: "solid" })}
            <span class="mx-3 text-gray-400 text-xs">or</span>
            ${Btn("Request a Membership Conversation", { onclick: "nav('request-form')" })}
          </div>`}

        <div class="border border-gray-300 p-5">
          <h2 class="font-semibold text-gray-900 mb-1 text-sm">Weigh in before the session</h2>
          <p class="text-xs text-gray-500 mb-4">What is your current challenge on this question? CTI staff will review. Recurring challenges inform the discussion structure.</p>
          <div class="space-y-3">
            ${Field("Your organization")}
            ${Field("Your challenge on this question", { tall: true })}
            ${Btn("Submit", { v: "solid" })}
          </div>
        </div>
      </div>

      <div class="space-y-4">
        <div class="border-2 border-gray-900 p-5">
          <h3 class="font-semibold text-gray-900 mb-1 text-sm">Event Details</h3>
          <div class="space-y-2 my-4 text-sm text-gray-700">
            ${[
              ["DATE", event.date], ["TIME", event.timeNYC], ["FORMAT", event.format],
              ["ACCESS", event.access], ["LOCATION", event.location],
            ].map(([label, val]) => `
              <div class="flex gap-2"><span class="text-gray-400 w-16 flex-shrink-0 font-mono text-xs pt-0.5">${label}</span><span>${esc(val)}</span></div>`).join("")}
          </div>
          ${HR()}
          <div class="space-y-2">
            <button onclick="loginAndRegister('${event.id}')" class="w-full bg-gray-900 text-white text-sm font-mono py-3 hover:bg-gray-700">
              Login to Register
            </button>
            <p class="text-xs text-gray-500 pt-1">Not a member?</p>
            <button onclick="nav('request-form')" class="w-full border border-gray-400 text-gray-700 text-xs font-mono py-2 hover:border-gray-800">
              Request a Membership Conversation
            </button>
          </div>
        </div>

        <div class="border border-gray-300 p-4">
          <h3 class="font-semibold text-gray-900 mb-3 text-sm">Add to calendar</h3>
          <div class="space-y-1">
            ${["Google Calendar", "Apple Calendar (.ics)", "Outlook (.ics)"].map(c => `
              <button class="block w-full text-left text-xs font-mono text-gray-600 hover:text-gray-900 py-1 border-b border-gray-100">${c} →</button>`).join("")}
          </div>
        </div>

        ${Card(`
          ${Lbl("Related Consequential")}
          <p class="text-sm text-gray-800 mt-1 mb-2 leading-snug">What happens when entry-level work stops teaching judgment?</p>
          ${Btn("Read →", { onclick: "nav('blog-post')", v: "ghost" })}
        `)}

        ${Card(`
          ${Lbl("Related Research")}
          <p class="text-sm text-gray-800 mt-1 mb-2 leading-snug">AI and the Disappearing Apprenticeship Model</p>
          ${Btn("View →", { onclick: "nav('lab')", v: "ghost" })}
        `, { onclick: "nav('lab')" })}
      </div>
    </div>
  </div>`;
}

function renderLuminaryExchange() {
  const activeTopic = S.luminaryExchange.topic;
  const topics = ["All", "AI + Work", "Talent Strategy", "Leadership + Culture", "DEI Evolution", "Future of Work", "Trust + Institutional Risk", "Organizational Performance", "Workforce Design"];
  const filtered = activeTopic === "All" ? LUMINARIES : LUMINARIES.filter(l => l.tags.includes(activeTopic));

  return `<div>
    <section class="border-b border-gray-300">
      <div class="max-w-6xl mx-auto px-6 py-16">
        ${Lbl("CTI Luminary Exchange")}
        <h1 class="text-5xl font-semibold text-gray-900 mt-4 mb-6 leading-tight max-w-3xl">
          Three forces are converging.
        </h1>
        <p class="text-base font-medium text-gray-900 max-w-2xl mb-8">
          The Luminary Exchange is where leaders who are already doing it think together with the people who can see what comes next.
        </p>

        <div class="grid grid-cols-3 gap-6 mt-10">
          ${[
            { n: "01", title: "The talent pipeline is permanently narrowing.", body: "By 2033, annual deaths will exceed annual births in the U.S. The Asia-Pacific workforce begins permanent decline around 2035. Organizations can no longer afford to discard talent." },
            { n: "02", title: "AI is replacing decisions, not just tasks.", body: "AI is not replacing workers. It's replacing the decisions that used to require them: hiring, development, opportunity, performance — with no one answerable for the outcomes." },
            { n: "03", title: "Human judgment is the only remaining differentiator.", body: "When every company has access to the same tools, the only competitive edge is the quality of human judgment, ingenuity, and trust inside the organization." },
          ].map(({ n, title, body }) => `
            <div class="border border-gray-300 p-5">
              <p class="text-xs font-mono text-gray-400 mb-3">${n}</p>
              <h3 class="font-semibold text-gray-900 mb-2 text-sm leading-snug">${esc(title)}</h3>
              <p class="text-xs text-gray-600 leading-relaxed">${esc(body)}</p>
            </div>`).join("")}
        </div>

        <div class="mt-8 flex items-center gap-6">
          <div class="border border-gray-300 px-6 py-3 flex items-center gap-3">
            <span class="text-2xl font-semibold text-gray-900">465,000</span>
            <span class="text-xs text-gray-500 font-mono">people follow our Luminaries</span>
          </div>
          <span class="text-xs text-gray-500">13 Luminaries · 9 topic areas · Practitioners + scholars</span>
        </div>

        <div class="mt-8">
          ${Btn("Learn More About Becoming a Luminary", { onclick: "nav('request-form')", v: "solid" })}
        </div>
      </div>
    </section>

    <section class="bg-gray-100 border-b border-gray-300 px-6 py-8">
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-3 gap-8 items-start">
          <div class="col-span-2">
            ${Lbl("The Problem After Next")}
            <p class="text-lg font-medium text-gray-900 mt-2 leading-snug">
              Every Luminary is working on the question that will matter in five years — not the one that's already a headline.
            </p>
            <p class="text-sm text-gray-600 mt-3 leading-relaxed">
              The Luminary Exchange is organized around the problems that practitioners have not yet named and researchers are only beginning to see. We call these "the problem after next." Each Luminary profile leads with what they are watching — not with their credential.
            </p>
          </div>
          <div class="flex flex-col gap-2">
            ${Btn("Book a Speaker", { onclick: "nav('request-form')", v: "solid" })}
            ${Btn("Request a Conversation", { onclick: "nav('request-form')" })}
          </div>
        </div>
      </div>
    </section>

    <section class="max-w-6xl mx-auto px-6 py-12">
      <div class="flex items-center justify-between mb-6">
        <h2 class="font-semibold text-gray-900">The Luminaries</h2>
        <span class="text-xs text-gray-500 font-mono">${filtered.length} of ${LUMINARIES.length}</span>
      </div>
      <div class="mb-6">${Filters(topics, activeTopic, "luminaryExchange.topic")}</div>

      <div class="space-y-5">
        ${filtered.map(l => `
          <div class="border border-gray-300 p-5 grid grid-cols-4 gap-6 hover:bg-gray-50">
            <div class="flex flex-col items-start gap-3">
              ${GrayBox({ w: "w-20", h: "h-20", label: "" })}
              <div>
                <p class="font-semibold text-gray-900 text-sm">${esc(l.name)}</p>
                <p class="text-xs text-gray-500 mt-0.5 leading-snug">${esc(l.title)}</p>
                <p class="text-xs text-gray-400 mt-0.5">${esc(l.org)}</p>
                <div class="flex flex-wrap gap-1 mt-2">${l.tags.map(t => TagEl(t)).join("")}</div>
              </div>
            </div>

            <div>
              ${Lbl("Provocation")}
              <p class="text-sm font-medium text-gray-900 italic mt-2 leading-snug">"${esc(l.provocation)}"</p>
            </div>

            <div>
              ${Lbl("The Problem After Next")}
              <p class="text-xs text-gray-600 mt-2 leading-relaxed">${esc(l.problemAfterNext)}</p>
            </div>

            <div class="flex flex-col justify-between">
              <div class="space-y-3">
                ${l.blog ? `
                  <div onclick="nav('blog-post')" class="flex items-start gap-2 border border-gray-200 p-2 cursor-pointer hover:bg-white">
                    <span class="text-xs font-mono text-gray-400 flex-shrink-0 pt-0.5">ARTICLE</span>
                    <span class="text-xs text-gray-700 leading-snug">${esc(l.blog)}</span>
                  </div>` : ""}
                ${l.podcast ? `
                  <div class="flex items-start gap-2 border border-gray-200 p-2 cursor-pointer hover:bg-white">
                    <span class="text-xs font-mono text-gray-400 flex-shrink-0 pt-0.5">POD</span>
                    <span class="text-xs text-gray-700 leading-snug">${esc(l.podcast)}</span>
                  </div>` : ""}
                ${l.book ? `
                  <div class="flex items-start gap-2 border border-gray-200 p-2">
                    <span class="text-xs font-mono text-gray-400 flex-shrink-0 pt-0.5">BOOK</span>
                    <span class="text-xs text-gray-700 leading-snug">${esc(l.book)}</span>
                  </div>` : ""}
              </div>
              <div class="mt-3 flex gap-2 flex-wrap">
                ${Btn("View Profile", { onclick: "nav('luminary-profile')" })}
                ${Btn("Book →", { onclick: "nav('request-form')", v: "ghost" })}
              </div>
            </div>
          </div>`).join("")}
      </div>
    </section>

    ${HR()}

    <section class="max-w-6xl mx-auto px-6 pb-12">
      <h2 class="font-semibold text-gray-900 mb-2">Luminary Podcast Episodes</h2>
      <p class="text-sm text-gray-500 mb-6">Conversations with Luminaries on the problems most organizations are not yet asking.</p>
      <div class="grid grid-cols-3 gap-4">
        ${LUMINARY_PODCAST_EPISODES.map(({ luminary, episode, duration }) => `
          <div class="border border-gray-300 p-4 hover:bg-gray-50 cursor-pointer">
            <div class="flex items-center gap-3 mb-3">
              <div class="w-10 h-10 bg-gray-200 flex items-center justify-center flex-shrink-0">
                <span class="text-gray-500 text-xs">▶</span>
              </div>
              <div>${Lbl(luminary)}<p class="text-xs text-gray-400">${duration}</p></div>
            </div>
            <p class="text-sm text-gray-800 leading-snug">${esc(episode)}</p>
          </div>`).join("")}
      </div>
    </section>

    <section class="border-t border-gray-300 bg-gray-100 px-6 py-12">
      <div class="max-w-6xl mx-auto grid grid-cols-3 gap-8 items-start">
        <div class="col-span-2">
          ${Lbl("Speaking & Advisory")}
          <h2 class="text-2xl font-semibold text-gray-900 mt-2 mb-3">Book a Luminary for your organization.</h2>
          <p class="text-sm text-gray-600 leading-relaxed mb-1">Luminaries are available for keynotes, executive briefings, board presentations, leadership retreats, and company-wide Forum sessions.</p>
          <p class="text-sm text-gray-600 leading-relaxed">Advisory conversations are available through CTI membership. <button onclick="nav('request-form')" class="underline text-gray-800">Request a membership conversation →</button></p>
        </div>
        <div class="border border-gray-300 bg-white p-5 space-y-3">
          <h3 class="font-semibold text-gray-900 text-sm">Start here</h3>
          ${Field("Name")}
          ${Field("Organization")}
          ${Field("Email")}
          <div>
            <div class="text-xs font-mono text-gray-600 mb-2 uppercase tracking-wide">I'm interested in</div>
            <div class="space-y-1">
              ${["Keynote / Conference", "Executive Briefing", "Board Presentation", "Leadership Retreat", "Advisory Conversation"].map(opt => `
                <label class="flex items-center gap-2 text-xs text-gray-700 cursor-pointer">
                  <div class="w-3.5 h-3.5 border border-gray-400 flex-shrink-0"></div>${esc(opt)}
                </label>`).join("")}
            </div>
          </div>
          ${Btn("Submit Request", { onclick: "nav('thank-you')", v: "solid" })}
        </div>
      </div>
    </section>
  </div>`;
}
