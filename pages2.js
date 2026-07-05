// ── MEMBER PAGES ──────────────────────────────────────────────────────────────

function renderDashboard() {
  const quickActions = [
    ["Register for Forum", "session-before"], ["Access CTILearning", "ctilearning"],
    ["Open Playbooks", "playbooks"], ["Start Assessment", "playbooks"],
    ["Book Debrief", "advisory-member"], ["Request Luminary Match", "luminary-archive"],
    ["Request Advisory", "advisory-member"], ["Contact Support", "my-membership"],
  ];
  return `<div class="max-w-6xl mx-auto px-6 py-8">
    <div class="flex items-start justify-between mb-8 gap-6">
      <div>
        ${Lbl("Member Dashboard")}
        <h1 class="text-2xl font-semibold text-gray-900 mt-1">Welcome back, Sarah.</h1>
      </div>
      <div class="flex gap-2 flex-wrap justify-end">
        ${quickActions.map(([label, p]) => `
          <button onclick="nav('${p}')" class="text-xs font-mono border border-gray-400 text-gray-600 px-3 py-1.5 hover:border-gray-800 hover:text-gray-900 whitespace-nowrap">${esc(label)}</button>`).join("")}
      </div>
    </div>
    <div class="grid grid-cols-3 gap-6">
      <div class="col-span-2 space-y-5">
        ${Card(`
          ${Lbl("What We're Watching")}
          <p class="font-medium text-gray-900 mt-2 mb-1 text-sm">The coalition is watching how AI restructuring of early-career work is affecting sponsorship pipelines.</p>
          <p class="text-xs text-gray-500">Updated this week · Informed by Co-Chair input</p>
        `)}
        ${Card(`
          ${Lbl("Next in The Forum")}
          <div class="flex items-start gap-4 mt-3">
            <div class="flex-1">
              <h3 class="font-medium text-gray-900 text-sm">The Judgment Gap: AI and Early Career Learning</h3>
              <p class="text-xs text-gray-500 mt-1">September 18, 2025 · 2:00–4:00 PM ET · Virtual</p>
              <div class="flex gap-2 mt-4">
                ${Btn("View Session", { onclick: "nav('session-before')", v: "solid" })}
                ${Btn("Register", { onclick: "nav('session-before')" })}
              </div>
            </div>
            <div class="w-20 flex-shrink-0 border border-gray-300 p-2 text-center">
              <p class="text-xs font-mono text-gray-500">SEP</p>
              <p class="text-2xl font-semibold text-gray-900">18</p>
            </div>
          </div>
        `)}
        ${Card(`
          ${Lbl("This Week from the Coqual Global Lab")}
          <h3 class="font-medium text-gray-900 mt-2 mb-1 text-sm">Working Paper: AI and the Disappearing Apprenticeship Model</h3>
          <p class="text-xs text-gray-500 mb-3">Published September 10, 2025</p>
          ${Btn("Read →", { onclick: "nav('lab')", v: "ghost" })}
        `)}
        ${Card(`
          ${Lbl("New in Consequential")}
          <div class="mt-2">
            ${["Signal Briefing: The Hidden Cost of Hybrid Rollbacks", "Blog Post: What happens when entry-level work stops teaching judgment?"].map(t => `
              <div onclick="nav('post-member')" class="flex items-center gap-3 py-2 border-b border-gray-100 cursor-pointer hover:bg-gray-50">
                <span class="text-xs text-gray-700 flex-1">${esc(t)}</span>
                <span class="text-gray-400 text-xs">→</span>
              </div>`).join("")}
          </div>
        `)}
      </div>
      <div>
        ${Card(`
          ${Lbl("Your Next Action")}
          <div class="mt-3 space-y-3">
            <div class="border-l-2 border-gray-700 pl-3">
              <p class="text-xs font-medium text-gray-900">Register for the September Forum session</p>
              <p class="text-xs text-gray-500">Sep 18 · 3 days away</p>
            </div>
            <div class="border-l-2 border-gray-200 pl-3">
              <p class="text-xs font-medium text-gray-700">Complete your leadership assessment</p>
              <p class="text-xs text-gray-500">Started July 2025</p>
            </div>
            <div class="border-l-2 border-gray-200 pl-3">
              <p class="text-xs font-medium text-gray-700">Review Playbook: Distributed Sponsorship</p>
              <p class="text-xs text-gray-500">Added to your list</p>
            </div>
          </div>
        `)}
        <div class="mt-4">
          ${GrayBox({ h: "h-28", label: "Member tier badge" })}
          <button onclick="nav('my-membership')" class="text-xs text-gray-500 mt-2 underline block">View My Membership</button>
        </div>
      </div>
    </div>
  </div>`;
}

function renderForumCalendar() {
  const { view, access: activeAccess, theme: activeTheme } = S.forumCalendar;
  const accessOptions = ["All", "Premium", "Co-Chair"];
  const themes = ["All", "AI + Work", "Talent Strategy", "Leadership + Culture", "DEI Evolution", "Future of Work", "Organizational Performance", "Workforce Design", "Co-Chair"];
  const upcoming = FORUM_EVENTS.filter(e => !e.past);
  const past = FORUM_EVENTS.filter(e => e.past);
  const applyFilters = events => events
    .filter(e => activeAccess === "All" || e.access === activeAccess || (activeAccess === "Premium" && e.access === "Premium + Co-Chair"))
    .filter(e => activeTheme === "All" || e.tag === activeTheme);

  return `<div>
    ${SectionNav("The Forum", [["Dashboard", "dashboard"], ["Calendar", "forum-calendar"], ["Summit", "summit"]], "forum-calendar")}
    <div class="max-w-6xl mx-auto px-6 py-8">
      <div class="flex items-center justify-between mb-6">
        <div>${Lbl("The Forum · 2027 Calendar")}<h1 class="text-2xl font-semibold text-gray-900 mt-1">Session Calendar</h1></div>
        <div class="flex items-center gap-3">
          <button class="text-xs font-mono border border-gray-400 text-gray-600 px-3 py-1.5 hover:border-gray-800">Subscribe to Calendar</button>
          <div class="flex border border-gray-300">
            ${["list", "month"].map(v => `
              <button onclick="setState('forumCalendar.view', '${v}')" class="text-xs font-mono px-3 py-1.5 capitalize ${view === v ? "bg-gray-900 text-white" : "text-gray-600 hover:bg-gray-100"}">${v}</button>`).join("")}
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-3 mb-6">
        ${Filters(accessOptions, activeAccess, "forumCalendar.access", "Access")}
        ${Filters(themes, activeTheme, "forumCalendar.theme", "Topic")}
      </div>

      ${view === "list" ? `
        <div class="space-y-2">
          <p class="text-xs font-mono text-gray-500 uppercase tracking-wide pb-2 border-b border-gray-300">Upcoming Sessions · 2027</p>
          ${applyFilters(upcoming).map(s => `
            <div class="border border-gray-300 bg-white flex items-center gap-5 p-4 cursor-pointer hover:bg-gray-50" onclick="navToEvent('${s.id}', 'event-detail-member')">
              <div class="border border-gray-300 bg-gray-50 p-2 text-center w-14 flex-shrink-0">
                <p class="text-xs font-mono text-gray-500">${s.month}</p>
                <p class="text-lg font-semibold text-gray-900">${s.day}</p>
              </div>
              <div class="flex-1 min-w-0">
                <div class="flex items-center gap-2 mb-1 flex-wrap">
                  <span class="text-xs font-mono px-2 py-0.5 ${s.access === "Co-Chair" ? "bg-gray-600 text-white" : "bg-gray-900 text-white"}">
                    ${s.access === "Co-Chair" ? "CO-CHAIR" : s.access === "Premium + Co-Chair" ? "ALL MEMBERS" : "PREMIUM"}
                  </span>
                  ${TagEl(s.format)}
                  ${TagEl(s.tag)}
                </div>
                <h3 class="font-medium text-gray-900 text-sm">${esc(s.title)}</h3>
                <p class="text-xs text-gray-500 mt-0.5">${s.date} · ${s.timeNYC} · ${s.location}</p>
                <div class="flex items-center gap-2 mt-1 flex-wrap">
                  ${s.speakers.map(sp => `<span class="text-xs text-gray-400 font-mono">${esc(sp.name)}</span>`).join("")}
                </div>
              </div>
              <div class="flex items-center gap-2 flex-shrink-0" onclick="event.stopPropagation()">
                ${Btn("View", { onclick: `navToEvent('${s.id}', 'event-detail-member')`, v: "outline" })}
                <button onclick="navToEvent('${s.id}', 'event-detail-member')" class="bg-gray-900 text-white text-xs font-mono px-4 py-1.5 hover:bg-gray-700">
                  Register
                </button>
              </div>
            </div>`).join("")}

          <p class="text-xs font-mono text-gray-500 uppercase tracking-wide pb-2 border-b border-gray-300 mt-8">Past Sessions</p>
          ${applyFilters(past).length === 0 ? `<p class="text-xs text-gray-400 py-4">No past sessions yet for 2027.</p>` : ""}
          ${applyFilters(past).map(s => `
            <div class="border border-gray-200 flex items-center gap-5 p-4 opacity-65 hover:opacity-100 hover:bg-gray-50 transition-opacity cursor-pointer" onclick="navToEvent('${s.id}', 'past-event-detail')">
              <div class="border border-gray-200 p-2 text-center w-14 flex-shrink-0 bg-gray-50">
                <p class="text-xs font-mono text-gray-400">${s.month}</p>
                <p class="text-lg font-semibold text-gray-400">${s.day}</p>
              </div>
              <div class="flex-1 min-w-0">
                <div class="flex items-center gap-2 mb-1 flex-wrap">
                  <span class="text-xs font-mono border border-gray-300 text-gray-400 px-2 py-0.5">${s.access}</span>
                  ${TagEl(s.format)}${TagEl(s.tag)}
                </div>
                <h3 class="font-medium text-gray-600 text-sm">${esc(s.title)}</h3>
                <p class="text-xs text-gray-400 mt-0.5">${s.date} · ${s.location}</p>
              </div>
              <div class="flex-shrink-0" onclick="event.stopPropagation()">
                ${Btn("View Replay + Synthesis →", { onclick: `navToEvent('${s.id}', 'past-event-detail')`, v: "ghost" })}
              </div>
            </div>`).join("")}
        </div>` : GrayBox({ h: "h-96", label: "Month view — event calendar plugin" })}
    </div>
  </div>`;
}

function renderSessionBefore() {
  return `<div class="max-w-6xl mx-auto px-6 py-8">
    ${Lbl("The Forum · Upcoming Session")}
    <div class="flex gap-2 my-3 flex-wrap">${TagEl("AI + Work")}${TagEl("Talent Strategy")}${TagEl("Virtual")}</div>
    <h1 class="text-3xl font-semibold text-gray-900 mb-2">The Judgment Gap: AI and Early Career Learning</h1>
    <p class="text-gray-500 text-sm mb-6">September 18, 2025 · 2:00–4:00 PM ET · Virtual · Member Session</p>
    <div class="bg-gray-100 border-l-4 border-gray-800 p-6 mb-8 text-lg font-medium text-gray-900 italic leading-snug">
      "Can organizations build judgment at scale when AI handles the work that used to teach it?"
    </div>
    <div class="grid grid-cols-3 gap-10">
      <div class="col-span-2 space-y-6">
        <div>
          <h2 class="font-semibold text-gray-900 mb-3 text-sm">Pre-reads</h2>
          ${["Blog Post: What happens when entry-level work stops teaching judgment?", "Working Paper: AI and the Disappearing Apprenticeship Model"].map(r => `
            <div onclick="nav('post-member')" class="flex items-center gap-3 border border-gray-200 p-3 cursor-pointer hover:bg-gray-50 mb-2">
              <span class="text-xs text-gray-400 font-mono">PDF</span>
              <span class="text-sm text-gray-800">${esc(r)}</span>
            </div>`).join("")}
        </div>
        <div>
          <h2 class="font-semibold text-gray-900 mb-3 text-sm">Pre-session intake</h2>
          <div class="border border-gray-300 p-5 space-y-4">
            <p class="text-xs text-gray-500">Share your current challenge on this topic so facilitators can shape the discussion.</p>
            ${Field("What is your current challenge on this question?", { tall: true })}
            ${Field("What outcome would be most useful from this session?", { tall: true })}
            ${Btn("Submit intake", { v: "solid" })}
          </div>
        </div>
      </div>
      <div class="space-y-4">
        <div class="border border-gray-300 p-4">
          <h3 class="font-semibold text-gray-900 mb-4 text-sm">Session actions</h3>
          <div class="space-y-2">
            ${Btn("Register for this session", { v: "solid" })}
            ${Btn("Add to Calendar", {})}
            ${Btn("Nominate a colleague", {})}
          </div>
        </div>
        ${Card(`${Lbl("Format")}<p class="text-sm text-gray-700 mt-1">Virtual · 2 hours · Facilitated discussion · Chatham House rules</p>`)}
      </div>
    </div>
  </div>`;
}

function renderSessionAfter() {
  return `<div class="max-w-6xl mx-auto px-6 py-8">
    ${Lbl("The Forum · Session Synthesis")}
    <p class="text-xs text-gray-500 mt-1 mb-4">What the coalition concluded in The Sponsorship Proximity Problem · June 19, 2025</p>
    <h1 class="text-3xl font-semibold text-gray-900 mb-8 max-w-3xl leading-tight">
      Sponsorship in distributed environments has collapsed into mentorship — and that is a structural failure, not a motivation problem.
    </h1>
    <div class="grid grid-cols-3 gap-10">
      <div class="col-span-2">
        <div class="bg-gray-100 border border-gray-300 p-6 mb-6">
          ${Lbl("Three Key Tensions")}
          <div class="space-y-4 mt-4">
            ${[
              "Proximity drove sponsorship. Remote work ended proximity. Organizations have not rebuilt the mechanism.",
              "Managers who sponsor remotely lack the informal visibility that makes sponsorship credible. They cannot advocate convincingly for what they have not seen.",
              "The organizations that are succeeding have made sponsorship a structured process, not a relationship.",
            ].map((t, i) => `
              <div class="flex gap-3">
                <div class="w-5 h-5 border border-gray-400 flex items-center justify-center flex-shrink-0 mt-0.5"><span class="text-xs text-gray-500">${i + 1}</span></div>
                <p class="text-sm text-gray-700 leading-relaxed">${esc(t)}</p>
              </div>`).join("")}
          </div>
        </div>
        <div class="flex items-center gap-4 border border-gray-300 p-4 mb-6">
          <div class="w-10 h-10 bg-gray-200 flex items-center justify-center flex-shrink-0"><span class="text-gray-400 text-xs">▶</span></div>
          <div class="flex-1">
            <p class="text-sm font-medium text-gray-900">Session recording · June 19, 2025 · 1h 47m</p>
            <p class="text-xs text-gray-500">Gated · Available to registered session attendees</p>
          </div>
          ${Btn("Watch Recording", {})}
        </div>
        <h2 class="font-semibold text-gray-900 mb-3 text-sm">Related Consequential pieces</h2>
        ${["Sponsorship in the Age of Distributed Work", "Signal Briefing: The Hidden Cost of Hybrid Rollbacks"].map(t => `
          <div onclick="nav('post-member')" class="flex items-center gap-3 border border-gray-200 p-3 cursor-pointer hover:bg-gray-50 mb-2">
            <span class="text-xs text-gray-400 font-mono">ARTICLE</span>
            <span class="text-sm text-gray-800">${esc(t)}</span>
          </div>`).join("")}
      </div>
      <div class="space-y-4">
        ${Card(`
          ${Lbl("Related Playbook")}
          <p class="font-medium text-gray-900 mt-1 text-sm mb-3">Distributed Sponsorship: A Framework for Remote Organizations</p>
          ${Btn("Open Playbook", { onclick: "nav('playbooks')" })}
        `, { onclick: "nav('playbooks')" })}
        <div class="bg-gray-900 text-white p-4">
          <p class="text-sm font-medium mb-2">Bring this to your organization.</p>
          <p class="text-xs text-gray-400 mb-4">CTI is available for team workshops on distributed sponsorship and related topics.</p>
          <button onclick="nav('advisory-member')" class="text-xs font-mono border border-gray-600 text-gray-300 px-3 py-2 hover:border-white hover:text-white w-full">Request Advisory</button>
        </div>
      </div>
    </div>
  </div>`;
}

const CONSEQUENTIAL_MEMBER_POSTS = [
  { type: "Blog Post", title: "Take Up Space Anyway", date: "Jun 25, 2026", tag: "Leadership + Culture", forum: "The Judgment Gap session", playbook: "Building Judgment in AI-Augmented Teams" },
  { type: "Blog Post", title: "The Talent Was Never the Problem", date: "Jun 18, 2026", tag: "Talent Strategy", forum: "Sponsorship Proximity session", playbook: "Distributed Sponsorship Framework" },
  { type: "Blog Post", title: "Not a Monolith, But United by Common Threads", date: "May 31, 2026", tag: "DEI Evolution", forum: "DEI Measurement session", playbook: "DEI Language After the Rollbacks" },
  { type: "Blog Post", title: "On Being Chinese: To Eat a Culture and Promote it Too", date: "Mar 31, 2026", tag: "DEI Evolution", forum: "DEI Measurement session", playbook: "DEI Language After the Rollbacks" },
  { type: "Blog Post", title: "What ERGs Reveal About Leadership, Trust And How Change Really Works", date: "Jan 16, 2026", tag: "Trust + Institutional Risk", forum: "Sponsorship Proximity session", playbook: "Distributed Sponsorship Framework" },
  { type: "Blog Post", title: "How To Lead In A World Of Many Minds", date: "Nov 25, 2025", tag: "Leadership + Culture", forum: "The Judgment Gap session", playbook: "Building Judgment in AI-Augmented Teams" },
  { type: "Blog Post", title: "Uncertainty Fatigue Is Replacing Change Fatigue: What It Means For Leaders", date: "Oct 3, 2025", tag: "Organizational Performance", forum: "The Judgment Gap session", playbook: "Hybrid Policy Design" },
  { type: "Blog Post", title: "AI Is Here. The Trust Isn't.", date: "Aug 20, 2025", tag: "AI + Work", forum: "The Judgment Gap session", playbook: "Building Judgment in AI-Augmented Teams" },
  { type: "Blog Post", title: "How to Find Your Next Big Move Before It's Obvious", date: "Aug 11, 2025", tag: "Talent Strategy", forum: "Sponsorship Proximity session", playbook: "Distributed Sponsorship Framework" },
  { type: "Blog Post", title: "The Certainty Trap: Clarity Is a Discipline, Not a Message", date: "Jul 10, 2025", tag: "Leadership + Culture", forum: "The Judgment Gap session", playbook: "Building Judgment in AI-Augmented Teams" },
  { type: "Blog Post", title: "PRIDE Under Pressure: Notes from a Queer Millennial", date: "Jun 24, 2025", tag: "DEI Evolution", forum: "DEI Measurement session", playbook: "DEI Language After the Rollbacks" },
  { type: "Blog Post", title: "Juneteenth 2025: A Moment to Learn, Listen, and Lead Together", date: "Jun 19, 2025", tag: "DEI Evolution", forum: "DEI Measurement session", playbook: "DEI Language After the Rollbacks" },
  { type: "Blog Post", title: "The Leadership Paradox: What We're Asking Leaders to Hold (and How to Help Them Walk the Tightrope)", date: "Jun 7, 2025", tag: "Leadership + Culture", forum: "The Judgment Gap session", playbook: "Building Judgment in AI-Augmented Teams" },
  { type: "Blog Post", title: "The Moment My World Stopped", date: "May 29, 2025", tag: "Leadership + Culture", forum: "The Judgment Gap session", playbook: "Building Judgment in AI-Augmented Teams" },
  { type: "Blog Post", title: "If Culture Is \"Just How We Do Things Around Here,\" Then Who's Doing the Designing?", date: "Apr 24, 2025", tag: "Organizational Performance", forum: "The Judgment Gap session", playbook: "Hybrid Policy Design" },
  { type: "Blog Post", title: "Mixed Messages Are Costing You Trust—Here's How to Fix It", date: "Mar 3, 2025", tag: "Trust + Institutional Risk", forum: "Sponsorship Proximity session", playbook: "Distributed Sponsorship Framework" },
  { type: "Blog Post", title: "Leading Through Uncertainty: How to Bring Clarity When Everyone's Afraid", date: "Feb 26, 2025", tag: "Leadership + Culture", forum: "The Judgment Gap session", playbook: "Building Judgment in AI-Augmented Teams" },
  { type: "Blog Post", title: "What Actually Builds Resilient Teams? (Hint: It's Not Free Lunch and Yoga)", date: "Feb 11, 2025", tag: "Organizational Performance", forum: "The Judgment Gap session", playbook: "Hybrid Policy Design" },
  { type: "Blog Post", title: "Black History Month: Bringing Teams Together Through Stories", date: "Feb 7, 2025", tag: "DEI Evolution", forum: "DEI Measurement session", playbook: "DEI Language After the Rollbacks" },
  { type: "Blog Post", title: "Rethinking Work: The Five Questions Leaders Aren't Asking (But Should)", date: "Jan 15, 2025", tag: "Future of Work", forum: "The Judgment Gap session", playbook: "Hybrid Policy Design" },
  { type: "Blog Post", title: "Five Generations, One Workforce: The Untapped Superpower", date: "Jan 7, 2025", tag: "Workforce Design", forum: "The Judgment Gap session", playbook: "Hybrid Policy Design" },
  { type: "Blog Post", title: "Robots Are People Too (Sort Of?): The Future of Inclusive Team Leadership", date: "Nov 20, 2024", tag: "AI + Work", forum: "The Judgment Gap session", playbook: "Building Judgment in AI-Augmented Teams" },
];

function renderConsequentialMember() {
  const activeType = S.consequentialArchive.type;
  const types = ["All", "Signal Briefing", "Research Report", "Horizon Scan", "Blog Post", "Podcast"];
  return `<div class="max-w-6xl mx-auto px-6 py-8">
    ${Lbl("Member Archive")}
    <h1 class="text-2xl font-semibold text-gray-900 mt-1 mb-6">Consequential</h1>
    <div class="mb-6">${Filters(types, activeType, "consequentialArchive.type")}</div>
    <div class="space-y-3">
      ${CONSEQUENTIAL_MEMBER_POSTS.map(({ type, title, date, tag, forum, playbook }) => Card(`
          <div class="col-span-2">
            <div class="flex items-center gap-2 mb-1">${Lbl(type)}<span class="text-xs text-gray-400">${date}</span></div>
            <h3 class="font-medium text-gray-900 text-sm leading-snug mb-1">${esc(title)}</h3>
            ${TagEl(tag)}
          </div>
          <div>
            <p class="text-xs text-gray-500 mb-1">Related Forum</p>
            <button onclick="event.stopPropagation(); nav('session-after')" class="text-xs text-gray-700 underline leading-snug">${esc(forum)}</button>
          </div>
          <div>
            <p class="text-xs text-gray-500 mb-1">Related Playbook</p>
            <button onclick="event.stopPropagation(); nav('playbook-detail')" class="text-xs text-gray-700 underline leading-snug">${esc(playbook)}</button>
          </div>
        `, { onclick: "nav('post-member')", className: "grid grid-cols-4 gap-4 items-start" })).join("")}
    </div>
  </div>`;
}

function renderPostMember() {
  return `<div class="max-w-3xl mx-auto px-6 py-8">
    ${Lbl("Consequential · Blog Post")}
    <div class="flex gap-2 my-3 flex-wrap">${TagEl("AI + Work")}${TagEl("Talent Strategy")}</div>
    <h1 class="text-2xl font-semibold text-gray-900 mb-2 leading-tight">What happens when entry-level work stops teaching judgment?</h1>
    <p class="text-xs text-gray-500 mb-6">Dr. Katherine Giscombe · September 12, 2025 · 7 min read</p>
    ${HR()}
    <div class="text-gray-700 text-sm space-y-4 leading-relaxed">
      <p>For most of the twentieth century, organizations built judgment the same way. You gave people difficult, low-stakes work. You watched how they handled ambiguity. You promoted the ones who developed an instinct for what mattered.</p>
      <p>That model is under pressure in ways that most talent leaders have not fully reckoned with. The entry-level work that once taught judgment — drafting, reviewing, triaging, synthesizing — is now being handled by AI systems.</p>
    </div>
    <div class="bg-gray-100 border-l-4 border-gray-800 p-5 my-6">
      <p class="text-base font-medium text-gray-900 italic">"The question is not whether AI is good at entry-level work. It is. The question is what we lose when humans no longer do it."</p>
    </div>
    <div class="text-gray-700 text-sm space-y-4 leading-relaxed mb-8">
      <p>The coalition spent three sessions on this question in 2025. What emerged was a concern that most CHROs had been circling without naming: the apprenticeship model is being disrupted from the bottom up.</p>
    </div>
    ${HR()}
    <div class="space-y-4">
      ${Card(`
        ${Lbl("Related Forum Session")}
        <p class="text-sm font-medium text-gray-900 mt-1 mb-2">The Judgment Gap: AI and Early Career Learning</p>
        ${Btn("View Session →", { onclick: "nav('session-after')", v: "ghost" })}
      `, { onclick: "nav('session-after')" })}
      ${Card(`
        ${Lbl("Related Playbook")}
        <p class="text-sm font-medium text-gray-900 mt-1 mb-2">Building Judgment in AI-Augmented Teams</p>
        ${Btn("Open Playbook →", { onclick: "nav('playbook-detail')", v: "ghost" })}
      `, { onclick: "nav('playbook-detail')" })}
    </div>
    <div class="bg-gray-900 text-white p-6 mt-8 text-center">
      <p class="font-medium mb-2 text-sm">Bring this to The Forum.</p>
      <p class="text-gray-400 text-xs mb-4">Raise this challenge in the next session intake.</p>
      <button onclick="nav('session-before')" class="text-xs font-mono border border-gray-600 text-gray-300 px-4 py-2 hover:border-white hover:text-white">Go to Session Intake</button>
    </div>
  </div>`;
}

function renderPlaybooks() {
  const activeTheme = S.playbooks.theme;
  const themes = ["All", "AI + Work", "Talent Strategy", "DEI Evolution", "Workforce Design"];
  const playbooks = [
    { t: "Distributed Sponsorship Framework", c: "How do you maintain sponsorship relationships in remote organizations?", fmt: "Framework", tag: "Talent Strategy", level: "Standard" },
    { t: "Building Judgment in AI-Augmented Teams", c: "How do you develop judgment when AI handles the formative work?", fmt: "Playbook", tag: "AI + Work", level: "Standard" },
    { t: "DEI Language After the Rollbacks", c: "How do you maintain DEI commitments when the vocabulary is contested?", fmt: "Guide", tag: "DEI Evolution", level: "Co-Chair" },
    { t: "Hybrid Policy Design", c: "How do you set hybrid policies that support both productivity and inclusion?", fmt: "Framework", tag: "Workforce Design", level: "Standard" },
  ];
  return `<div class="max-w-6xl mx-auto px-6 py-8">
    ${Lbl("Member Resources")}
    <h1 class="text-2xl font-semibold text-gray-900 mt-1 mb-6">Playbooks</h1>
    <div class="mb-6">${Filters(themes, activeTheme, "playbooks.theme")}</div>
    <div class="grid grid-cols-2 gap-4 mb-10">
      ${playbooks.map(({ t, c, fmt, tag, level }) => Card(`
          <div class="flex items-start justify-between mb-2">${Lbl(fmt)}${TagEl(level)}</div>
          <h3 class="font-medium text-gray-900 mb-1 text-sm">${esc(t)}</h3>
          <p class="text-xs text-gray-500 mb-3 italic">${esc(c)}</p>
          <div class="flex items-center gap-3">${TagEl(tag)}${Btn("Open →", { onclick: "nav('playbook-detail')", v: "ghost" })}</div>
        `, { onclick: "nav('playbook-detail')" })).join("")}
    </div>
    ${HR()}
    <h2 class="font-semibold text-gray-900 mb-4">Assessments</h2>
    <div class="grid grid-cols-2 gap-4">
      ${[
        { t: "Sponsorship Effectiveness Assessment", d: "Benchmark your organization's sponsorship practices against the coalition baseline." },
        { t: "Hybrid Inclusion Audit", d: "Identify gaps in how your hybrid policy is affecting promotion and belonging." },
      ].map(({ t, d }) => Card(`
          <h3 class="font-medium text-gray-900 text-sm mb-1">${esc(t)}</h3>
          <p class="text-xs text-gray-500 mb-4 leading-relaxed">${esc(d)}</p>
          <div class="flex gap-2">
            ${Btn("Start in Agolix", { v: "solid" })}
            ${Btn("Book Debrief", { onclick: "nav('advisory-member')" })}
          </div>
        `)).join("")}
    </div>
  </div>`;
}

function renderPlaybookDetail() {
  return `<div class="max-w-6xl mx-auto px-6 py-8">
    ${Lbl("Playbook · Framework")}
    <div class="flex gap-2 my-2">${TagEl("Talent Strategy")}${TagEl("Standard Member")}</div>
    <h1 class="text-2xl font-semibold text-gray-900 mb-8">Distributed Sponsorship Framework</h1>
    <div class="grid grid-cols-3 gap-10">
      <div class="col-span-2 space-y-6">
        <div>
          <h2 class="font-semibold text-gray-900 mb-2 text-sm">What problem this solves</h2>
          <p class="text-sm text-gray-600 leading-relaxed">Sponsorship in distributed organizations has collapsed into mentorship because it relied on informal proximity that remote work eliminated. This framework gives organizations a structured replacement.</p>
        </div>
        <div>
          <h2 class="font-semibold text-gray-900 mb-3 text-sm">How to use it</h2>
          ${["Map your current sponsorship relationships", "Identify proximity dependencies", "Apply the structured visibility model", "Set quarterly sponsorship reviews"].map((step, i) => `
            <div class="flex gap-3 items-start mb-2">
              <div class="w-5 h-5 border border-gray-400 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs text-gray-500">${i + 1}</div>
              <span class="text-sm text-gray-700">${esc(step)}</span>
            </div>`).join("")}
        </div>
        <div>
          <h2 class="font-semibold text-gray-900 mb-3 text-sm">Discussion prompts</h2>
          ${["Where do your sponsorship relationships depend on in-person visibility?", "What would structured remote sponsorship look like in your organization?"].map(q => `
            <div class="border-l-2 border-gray-300 pl-3 mb-3"><p class="text-sm text-gray-600 italic">${esc(q)}</p></div>`).join("")}
        </div>
        <div>
          <h2 class="font-semibold text-gray-900 mb-3 text-sm">Related Research</h2>
          ${["Sponsorship in the Age of Distributed Work", "The Sponsorship Proximity Problem · Forum Synthesis"].map(r => `
            <div onclick="nav('post-member')" class="flex items-center gap-3 border border-gray-200 p-3 cursor-pointer hover:bg-gray-50 mb-2">
              <span class="text-xs text-gray-400 font-mono">RESEARCH</span>
              <span class="text-sm text-gray-800">${esc(r)}</span>
            </div>`).join("")}
        </div>
      </div>
      <div class="space-y-4">
        <div class="border border-gray-300 p-4">
          <h3 class="font-semibold text-gray-900 mb-3 text-sm">Download tool</h3>
          ${GrayBox({ h: "h-24", label: "Playbook preview" })}
          <div class="mt-3 space-y-2">${Btn("Download PDF", { v: "solid" })}${Btn("Read Inline", {})}</div>
        </div>
        ${Card(`
          ${Lbl("Related Forum Session")}
          <p class="text-sm font-medium text-gray-900 mt-1 mb-2">The Sponsorship Proximity Problem</p>
          ${Btn("View Session →", { onclick: "nav('session-after')", v: "ghost" })}
        `, { onclick: "nav('session-after')" })}
        <div class="bg-gray-900 text-white p-4">
          <p class="text-sm font-medium mb-2">Use this with your team.</p>
          <p class="text-xs text-gray-400 mb-3">CTI can facilitate a team workshop using this framework.</p>
          <button onclick="nav('advisory-member')" class="text-xs font-mono border border-gray-600 text-gray-300 px-3 py-2 hover:border-white hover:text-white w-full">Request Advisory</button>
        </div>
      </div>
    </div>
  </div>`;
}

function renderCoalition() {
  const cards = [
    { t: "Member Directory", d: "Connect with peers across the coalition. Search by organization, role, or thematic interests.", cta: "Browse Directory", page: "member-directory" },
    { t: "Luminary Exchange", d: "Practitioner scholars and senior advisors available for thought partnership. Browse by provocation, not bio.", cta: "Browse Luminaries", page: "luminary-archive" },
    { t: "Advisory", d: "Request decision support, speaker booking, or facilitation from CTI and Luminary advisors.", cta: "Request Advisory", page: "advisory-member" },
    { t: "CTILearning", d: "Professional development programs for emerging leaders and ERG/BRG leads. Powered by Sensa LMS.", cta: "Access CTILearning", page: "ctilearning" },
  ];
  return `<div class="max-w-6xl mx-auto px-6 py-8">
    ${Lbl("Member Network")}
    <h1 class="text-2xl font-semibold text-gray-900 mt-1 mb-8">Coalition</h1>
    <div class="grid grid-cols-2 gap-6">
      ${cards.map(({ t, d, cta, page }) => Card(`
          ${GrayBox({ h: "h-16", label: "Icon" })}
          <h2 class="font-semibold text-gray-900 mt-4 mb-2">${esc(t)}</h2>
          <p class="text-sm text-gray-600 mb-6 leading-relaxed">${esc(d)}</p>
          ${Btn(cta, { onclick: `nav('${page}')`, v: "solid" })}
        `, { onclick: `nav('${page}')`, className: "p-6" })).join("")}
    </div>
  </div>`;
}

const LUMINARY_ARCHIVE_ROWS = [
  { prov: "What if the performance review is the problem, not the solution?", name: "Dr. Aisha Mensah", exp: "Organizational Performance · Culture Transformation", tag: "Organizational Performance" },
  { prov: "Sponsorship without proximity is just networking. We have to do better.", name: "James Okonkwo", exp: "Talent Strategy · Executive Development", tag: "Talent Strategy" },
  { prov: "The real DEI crisis is a measurement crisis. We are measuring the wrong things.", name: "Dr. Fatima Al-Rashid", exp: "DEI Evolution · Research Methodology", tag: "DEI Evolution" },
  { prov: "AI does not replace human judgment. It reveals how little we trusted it to begin with.", name: "Marcus Chen", exp: "AI + Work · Organizational Design", tag: "AI + Work" },
  { prov: "The future of work is not about hybrid. It is about whether organizations deserve loyalty.", name: "Dr. Ingrid Sorenson", exp: "Trust + Institutional Risk · Leadership", tag: "Trust + Institutional Risk" },
  { prov: "We promoted people into leadership and then stripped away all the work that made them leaders.", name: "Dr. Samuel Adeyemi", exp: "Leadership + Culture · Executive Coaching", tag: "Leadership + Culture" },
];

function renderLuminaryArchive() {
  return `<div class="max-w-6xl mx-auto px-6 py-8">
    ${Lbl("Coalition · Luminary Exchange")}
    <h1 class="text-2xl font-semibold text-gray-900 mt-1 mb-2">Luminary Exchange</h1>
    <p class="text-gray-600 text-sm mb-8">Practitioner scholars and senior advisors available for thought partnership. Profiles led by provocation, not bio.</p>
    <div class="grid grid-cols-3 gap-6">
      ${LUMINARY_ARCHIVE_ROWS.map(({ prov, name, exp, tag }) => Card(`
          ${GrayBox({ w: "w-10", h: "h-10", label: "" })}
          <p class="text-sm font-medium text-gray-900 italic mt-3 mb-3 leading-snug">"${esc(prov)}"</p>
          <p class="text-xs font-semibold text-gray-800">${esc(name)}</p>
          <p class="text-xs text-gray-500 mt-0.5 mb-3 leading-snug">${esc(exp)}</p>
          ${TagEl(tag)}
          <div class="mt-3">${Btn("View Profile →", { onclick: "nav('luminary-profile')", v: "ghost" })}</div>
        `, { onclick: "nav('luminary-profile')" })).join("")}
    </div>
  </div>`;
}

function renderLuminaryProfile() {
  return `<div class="max-w-6xl mx-auto px-6 py-8">
    ${Lbl("Luminary Exchange")}
    <div class="grid grid-cols-3 gap-10 mt-6">
      <div class="col-span-2">
        ${GrayBox({ h: "h-20", w: "w-20", label: "Photo" })}
        <h1 class="text-2xl font-semibold text-gray-900 mt-4 mb-1">Dr. Aisha Mensah</h1>
        <p class="text-sm text-gray-500 mb-4">Organizational Performance · Culture Transformation</p>
        <div class="bg-gray-100 border-l-4 border-gray-800 p-5 mb-6">
          <p class="text-lg font-medium text-gray-900 italic leading-snug">"What if the performance review is the problem, not the solution?"</p>
        </div>
        <div class="space-y-5">
          <div>
            <h2 class="font-semibold text-gray-900 text-sm mb-2">Current Engagement</h2>
            <p class="text-sm text-gray-600 leading-relaxed">Working with three Fortune 500 organizations on replacing annual performance reviews with continuous feedback architectures.</p>
          </div>
          <div>
            <h2 class="font-semibold text-gray-900 text-sm mb-2">Bio</h2>
            <p class="text-sm text-gray-600 leading-relaxed">Dr. Mensah is a professor of organizational behavior at Georgetown University and a senior fellow at the Coqual Global Lab. She has advised over 40 organizations on performance management redesign and published research in the Harvard Business Review and MIT Sloan Management Review.</p>
          </div>
          <div>
            <h2 class="font-semibold text-gray-900 text-sm mb-2">Affiliated Forum Sessions</h2>
            ${["The Judgment Gap: AI and Early Career Learning", "Performance Review Redesign · Summit Workshop"].map(s => `
              <div onclick="nav('session-after')" class="flex items-center gap-3 border border-gray-200 p-3 cursor-pointer hover:bg-gray-50 mb-2">
                <span class="text-xs text-gray-400 font-mono">SESSION</span>
                <span class="text-sm text-gray-800">${esc(s)}</span>
              </div>`).join("")}
          </div>
        </div>
      </div>
      <div class="space-y-4">
        <div class="border border-gray-300 p-4">
          <h3 class="font-semibold text-gray-900 mb-4 text-sm">Work with Dr. Mensah</h3>
          <div class="space-y-2">
            ${Btn("Request Advisory", { onclick: "nav('advisory-member')", v: "solid" })}
            ${Btn("Book as Speaker", { onclick: "nav('advisory-member')" })}
          </div>
        </div>
        ${Card(`
          ${Lbl("Theme Areas")}
          <div class="flex flex-wrap gap-1 mt-2">
            ${["Organizational Performance", "Leadership + Culture", "Workforce Design"].map(t => TagEl(t)).join("")}
          </div>
        `)}
      </div>
    </div>
  </div>`;
}

function renderAdvisoryMember() {
  const openForm = S.advisoryMember.openForm;
  const cards = [
    { id: "decision", t: "Decision Support", d: "Thought partnership on a live organizational challenge. CTI staff and Luminary advisors work with you to frame the problem and explore options." },
    { id: "speaker", t: "Speaker Booking", d: "Book a CTI expert or Luminary for a keynote, executive briefing, board presentation, or company-wide session." },
  ];
  return `<div class="max-w-6xl mx-auto px-6 py-8">
    ${Lbl("Coalition · Advisory")}
    <h1 class="text-2xl font-semibold text-gray-900 mt-1 mb-8">Advisory</h1>
    <div class="grid grid-cols-2 gap-6 mb-10">
      ${cards.map(({ id, t, d }) => `
        <div>
          ${Card(`
            <h2 class="font-semibold text-gray-900 mb-2">${esc(t)}</h2>
            <p class="text-sm text-gray-600 mb-4 leading-relaxed">${esc(d)}</p>
            <button onclick="setState('advisoryMember.openForm', ${JSON.stringify(openForm === id ? null : id)})" class="bg-gray-900 text-white px-4 py-1.5 text-xs font-mono hover:bg-gray-700 cursor-pointer inline-block">Request ${esc(t)}</button>
          `)}
          ${openForm === id ? `
            <div class="border border-gray-300 border-t-0 bg-gray-50 p-4 space-y-3">
              ${Field("Name")}${Field("Organization")}${Field("Challenge or topic", { tall: true })}${Field("Preferred timing")}
              ${Btn("Submit Request", { v: "solid" })}
            </div>` : ""}
        </div>`).join("")}
    </div>
    ${HR()}
    <h2 class="font-semibold text-gray-900 mb-4 text-sm">Premium Member Actions</h2>
    <div class="grid grid-cols-3 gap-3 mb-8">
      ${["Book assessment debrief", "Request Luminary topic matching", "Preferred support inquiry"].map(a => `
        <button class="border border-gray-300 text-gray-700 text-sm p-4 text-left hover:bg-gray-50">${esc(a)}</button>`).join("")}
    </div>
    <h2 class="font-semibold text-gray-900 mb-4 text-sm">Co-Chair Member Actions</h2>
    <div class="grid grid-cols-3 gap-3">
      ${["First Call Advisory", "Rapid issue framing", "CTI-in-Residence status", "Executive briefing request", "Priority Luminary matching"].map(a => `
        <button class="border border-gray-800 text-gray-900 text-sm p-4 text-left hover:bg-gray-100 font-medium">${esc(a)}</button>`).join("")}
    </div>
  </div>`;
}

function renderCTILearning() {
  const programs = [
    { t: "Emerging Leaders Program", d: "A structured cohort program for high-potential professionals in their first five years of leadership." },
    { t: "ERG/BRG Leadership Certificate", d: "For leaders of employee resource groups navigating complex DEI environments." },
    { t: "Sponsorship and Career Mobility", d: "Practical skills for sponsoring effectively across distance, difference, and organizational hierarchy." },
    { t: "CTI Navigator Certificate", d: "Applied research literacy for leaders who want to use CTI data in their organizations." },
  ];
  return `<div class="max-w-6xl mx-auto px-6 py-8">
    ${Lbl("Coalition · CTILearning")}
    <h1 class="text-2xl font-semibold text-gray-900 mt-1 mb-2">CTILearning</h1>
    <p class="text-gray-600 text-sm mb-8">Professional development for CTI members. Programs hosted on Sensa LMS.</p>
    <div class="grid grid-cols-2 gap-6 mb-10">
      ${programs.map(({ t, d }) => Card(`
          ${GrayBox({ h: "h-16", label: "Program image" })}
          <h3 class="font-semibold text-gray-900 mt-3 mb-1 text-sm">${esc(t)}</h3>
          <p class="text-xs text-gray-600 mb-4 leading-relaxed">${esc(d)}</p>
          ${Btn("Continue in Sensa LMS", { v: "solid" })}
        `)).join("")}
    </div>
    ${HR()}
    <h2 class="font-semibold text-gray-900 mb-4 text-sm">Recorded Sessions</h2>
    <div class="space-y-2">
      ${["Forum Recording: The Sponsorship Proximity Problem", "Luminary Conversation: Dr. Aisha Mensah on Performance Design", "Workshop: Distributed Sponsorship Framework"].map(r => `
        <div class="flex items-center gap-3 border border-gray-200 p-3 hover:bg-gray-50 cursor-pointer">
          <div class="w-8 h-8 bg-gray-200 flex items-center justify-center flex-shrink-0"><span class="text-gray-400 text-xs">▶</span></div>
          <span class="text-sm text-gray-800 flex-1">${esc(r)}</span>
          <span class="text-xs text-gray-400">Continue in Sensa LMS →</span>
        </div>`).join("")}
    </div>
  </div>`;
}

function renderMemberDirectory() {
  const members = [
    { name: "Sarah Chen", org: "Meridian Financial Group", title: "Chief People Officer", interests: ["Talent Strategy", "AI + Work"], willing: true },
    { name: "David Osei", org: "Global Health Partners", title: "VP of Talent Acquisition", interests: ["DEI Evolution", "Leadership + Culture"], willing: true },
    { name: "Dr. Maria Santos", org: "TechCorp Industries", title: "Head of Organizational Development", interests: ["Workforce Design", "Future of Work"], willing: false },
    { name: "James Whitfield", org: "Apex Consulting Group", title: "Senior Director of People", interests: ["AI + Work", "Organizational Performance"], willing: true },
    { name: "Dr. Anika Patel", org: "Northstar Capital", title: "CHRO", interests: ["Trust + Institutional Risk", "Talent Strategy"], willing: true },
    { name: "Marcus Brown", org: "United Education Foundation", title: "VP People & Culture", interests: ["DEI Evolution", "Leadership + Culture"], willing: false },
  ];
  return `<div class="max-w-6xl mx-auto px-6 py-8">
    ${Lbl("Coalition · Member Directory")}
    <h1 class="text-2xl font-semibold text-gray-900 mt-1 mb-6">Member Directory</h1>
    <div class="grid grid-cols-3 gap-4 mb-6">
      ${["Search by organization", "Search by theme", "Search by role"].map(p => `
        <div class="border border-gray-300 bg-gray-50 px-3 h-9 flex items-center">
          <span class="text-xs text-gray-400 font-mono">${esc(p)}</span>
        </div>`).join("")}
    </div>
    <div class="grid grid-cols-3 gap-4">
      ${members.map(({ name, org, title, interests, willing }) => Card(`
          <div class="flex items-start gap-3">
            ${GrayBox({ w: "w-10", h: "h-10", label: "" })}
            <div class="flex-1 min-w-0">
              <p class="font-medium text-gray-900 text-sm">${esc(name)}</p>
              <p class="text-xs text-gray-500">${esc(title)}</p>
              <p class="text-xs text-gray-400">${esc(org)}</p>
            </div>
          </div>
          <div class="mt-3 flex flex-wrap gap-1">${interests.map(i => TagEl(i)).join("")}</div>
          ${willing ? `<p class="text-xs text-gray-500 mt-2 border-t border-gray-100 pt-2">Open to connect</p>` : ""}
        `)).join("")}
    </div>
  </div>`;
}

function renderMyMembership() {
  const benefits = [
    { b: "Forum Access", v: "All sessions + recordings", on: true },
    { b: "Coqual Global Lab", v: "Full research library", on: true },
    { b: "Consequential", v: "Full member archive", on: true },
    { b: "Playbooks", v: "Standard library", on: true },
    { b: "Assessments", v: "Agolix access", on: true },
    { b: "Advisory Support", v: "Standard inquiry", on: true },
    { b: "Luminary Access", v: "Browse and request", on: true },
    { b: "CTILearning", v: "Full program access", on: true },
    { b: "Team Seats", v: "2 additional seats", on: true },
    { b: "First Call Advisory", v: "Co-Chair only", on: false },
    { b: "CTI-in-Residence", v: "Co-Chair only", on: false },
  ];
  return `<div class="max-w-4xl mx-auto px-6 py-8">
    ${Lbl("My Account")}
    <h1 class="text-2xl font-semibold text-gray-900 mt-1 mb-8">My Membership</h1>
    <div class="grid grid-cols-3 gap-8">
      <div class="col-span-2 space-y-4">
        ${Card(`
          <div class="flex items-center justify-between">
            <div>${Lbl("Membership Tier")}<h2 class="font-semibold text-gray-900 mt-1">Standard Member</h2></div>
            <div class="border border-gray-300 px-3 py-1">${Lbl("ACTIVE")}</div>
          </div>
        `)}
        <div class="border border-gray-300 p-4">
          <h3 class="font-semibold text-gray-900 mb-4 text-sm">Included benefits</h3>
          ${benefits.map(({ b, v, on }) => `
            <div class="flex items-center justify-between py-2 border-b border-gray-100">
              <span class="text-sm ${on ? "text-gray-800" : "text-gray-400"}">${esc(b)}</span>
              <div class="flex items-center gap-4">
                <span class="text-xs ${on ? "text-gray-500" : "text-gray-300"}">${esc(v)}</span>
                <span class="text-xs font-mono w-4 text-center ${on ? "text-gray-700" : "text-gray-300"}">${on ? "✓" : "—"}</span>
              </div>
            </div>`).join("")}
        </div>
      </div>
      <div class="space-y-4">
        ${Card(`${Lbl("Support")}<p class="text-sm text-gray-600 mt-2 mb-3 leading-relaxed">Questions about your membership? Contact the CTI team.</p>${Btn("Contact Support", { v: "solid" })}`)}
        ${Card(`${Lbl("Upgrade")}<p class="text-sm text-gray-600 mt-2 mb-3 leading-relaxed">Interested in Co-Chair membership? Start a conversation.</p>${Btn("Request Conversation", { onclick: "nav('request-form')" })}`)}
      </div>
    </div>

    ${HR()}
    <h2 class="font-semibold text-gray-900 mb-4 text-sm">Coalition &amp; Resources</h2>
    <div class="grid grid-cols-3 gap-3">
      ${[
        { t: "Coalition Home", d: "Member directory, Luminary Exchange, Advisory, and CTILearning.", page: "coalition" },
        { t: "Playbooks", d: "Frameworks, guides, and assessments.", page: "playbooks" },
        { t: "Member Directory", d: "Connect with peers across the coalition.", page: "member-directory" },
        { t: "Luminary Exchange", d: "Browse practitioner scholars and advisors.", page: "luminary-archive" },
        { t: "Advisory", d: "Request decision support or speaker booking.", page: "advisory-member" },
        { t: "CTILearning", d: "Professional development programs.", page: "ctilearning" },
      ].map(({ t, d, page }) => Card(`
          <h3 class="font-medium text-gray-900 text-sm mb-1">${esc(t)}</h3>
          <p class="text-xs text-gray-500 leading-relaxed">${esc(d)}</p>
        `, { onclick: `nav('${page}')` })).join("")}
    </div>
  </div>`;
}

function renderEventDetailMember() {
  const event = getSelectedEvent();
  const registered = S.eventDetailMember.registered;
  return `<div class="max-w-6xl mx-auto px-6 py-8">
    <button onclick="nav('forum-calendar')" class="text-xs font-mono text-gray-500 hover:text-gray-900 mb-6 flex items-center gap-1">← Back to Calendar</button>

    <div class="grid grid-cols-3 gap-10">
      <div class="col-span-2">
        ${Lbl("The Forum · " + event.format)}
        <div class="flex gap-2 my-3 flex-wrap">
          <span class="text-xs font-mono px-2 py-0.5 ${event.access === "Co-Chair" ? "bg-gray-600 text-white" : "bg-gray-900 text-white"}">
            ${event.access === "Co-Chair" ? "CO-CHAIR" : event.access === "Premium + Co-Chair" ? "ALL MEMBERS" : "PREMIUM MEMBER"}
          </span>
          ${TagEl(event.format)}
          ${TagEl(event.tag)}
        </div>
        <h1 class="text-3xl font-semibold text-gray-900 mb-2 leading-tight">${esc(event.title)}</h1>
        <p class="text-gray-500 text-sm mb-6">${event.date} · ${event.timeNYC} · ${event.location}</p>

        <div class="text-sm text-gray-700 leading-relaxed mb-6 p-5 bg-gray-50 border border-gray-200">
          <p>${esc(event.description)}</p>
        </div>

        <div class="mb-6">
          <h2 class="font-semibold text-gray-900 mb-1 text-sm">Who this session is for</h2>
          <p class="text-sm text-gray-600">${esc(event.audience)}</p>
        </div>

        <div class="mb-8">
          <h2 class="font-semibold text-gray-900 mb-3 text-sm">Session times by region</h2>
          <div class="grid grid-cols-2 gap-2">
            ${[
              ["New York", event.timeNYC], ["London", event.timeLondon], ["Germany", event.timeGermany], ["Mumbai", event.timeMumbai],
            ].map(([city, time]) => `
              <div class="flex items-center gap-3 border border-gray-200 px-3 py-2">
                <span class="text-xs font-mono text-gray-400 w-20 flex-shrink-0">${city}</span>
                <span class="text-sm text-gray-800">${event.date} · ${time}</span>
              </div>`).join("")}
          </div>
        </div>

        <div class="mb-8">
          <h2 class="font-semibold text-gray-900 mb-4 text-sm">Speakers &amp; Facilitators</h2>
          <div class="grid grid-cols-2 gap-4">
            ${event.speakers.map(({ name, role }) => `
              <div class="flex items-center gap-3 border border-gray-200 p-3 hover:bg-gray-50">
                ${GrayBox({ w: "w-12", h: "h-12", label: "" })}
                <div>
                  <p class="font-medium text-gray-900 text-sm">${esc(name)}</p>
                  <p class="text-xs text-gray-500 mt-0.5 leading-snug">${esc(role)}</p>
                </div>
              </div>`).join("")}
          </div>
          <p class="text-xs text-gray-400 mt-2 font-mono">Full speaker list confirmed closer to event date.</p>
        </div>

        <div class="mb-8 border border-gray-200 p-4 flex items-start gap-3">
          <div>
            ${Lbl("Related CTI Pillar")}
            <p class="text-sm text-gray-700 mt-1">${esc(event.pillar)}</p>
          </div>
        </div>

        <div class="border border-gray-300 p-5">
          <h2 class="font-semibold text-gray-900 mb-1 text-sm">Pre-session intake</h2>
          <p class="text-xs text-gray-500 mb-4">Share your challenge so facilitators can integrate it into the discussion structure.</p>
          <div class="space-y-3">
            ${Field("What is your current challenge on this topic?", { tall: true })}
            ${Field("What outcome would be most useful from this session?", { tall: true })}
            ${Btn("Submit intake", { v: "solid" })}
          </div>
        </div>
      </div>

      <div class="space-y-4">
        <div class="border-2 border-gray-900 p-5">
          <div class="text-sm text-gray-700 space-y-2 mb-5">
            ${[
              ["DATE", event.date], ["TIME", event.timeNYC], ["FORMAT", event.format], ["ACCESS", event.access], ["LOCATION", event.location],
            ].map(([label, val]) => `
              <div class="flex gap-2">
                <span class="text-gray-400 w-16 flex-shrink-0 font-mono text-xs pt-0.5">${label}</span>
                <span class="text-sm text-gray-800">${esc(val)}</span>
              </div>`).join("")}
          </div>
          ${HR()}
          ${registered ? `
            <div>
              <div class="border border-gray-300 bg-gray-50 p-3 text-center mb-4">
                <p class="text-xs font-mono text-gray-500 mb-1">REGISTERED ✓</p>
                <p class="text-sm font-medium text-gray-900">Sarah Chen</p>
                <p class="text-xs text-gray-500">Confirmation sent to sarah@meridian.com</p>
              </div>
              <button onclick="setState('eventDetailMember.registered', false)" class="text-xs font-mono text-gray-500 hover:text-gray-900 underline">Cancel registration</button>
            </div>` : `
            <div class="space-y-2">
              <button onclick="setState('eventDetailMember.registered', true)" class="w-full bg-gray-900 text-white text-sm font-mono py-3 hover:bg-gray-700 font-medium">
                Register for this Session
              </button>
              <button class="w-full border border-gray-400 text-gray-700 text-xs font-mono py-2 hover:border-gray-800">
                Nominate a colleague
              </button>
            </div>`}
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
          <p class="text-sm text-gray-800 mt-1 mb-2 leading-snug">Latest thinking on ${esc(event.tag)}</p>
          ${Btn("Read →", { onclick: "nav('post-member')", v: "ghost" })}
        `, { onclick: "nav('post-member')" })}

        ${Card(`
          ${Lbl("Related Playbook")}
          <p class="text-sm text-gray-800 mt-1 mb-2 leading-snug">CTI Playbook on ${esc(event.tag)}</p>
          ${Btn("Open →", { onclick: "nav('playbook-detail')", v: "ghost" })}
        `, { onclick: "nav('playbook-detail')" })}

        <div class="bg-gray-900 text-white p-4">
          <p class="text-sm font-medium mb-2">Bring this to your organization.</p>
          <p class="text-xs text-gray-400 mb-3">Request a company-wide session on this topic.</p>
          <button onclick="nav('advisory-member')" class="text-xs font-mono border border-gray-600 text-gray-300 px-3 py-2 hover:border-white hover:text-white w-full">Request Advisory</button>
        </div>
      </div>
    </div>
  </div>`;
}

function renderPastEventDetail() {
  const activeTab = S.pastEventDetail.tab;
  return `<div class="max-w-6xl mx-auto px-6 py-8">
    <button onclick="nav('forum-calendar')" class="text-xs font-mono text-gray-500 hover:text-gray-900 mb-6 flex items-center gap-1">← Back to Calendar</button>

    <div class="mb-2">${Lbl("The Forum · Session Record")}</div>
    <div class="flex gap-2 mb-3 flex-wrap">
      ${TagEl("Talent Strategy")}${TagEl("Virtual")}
      <span class="text-xs font-mono bg-gray-900 text-white px-2 py-0.5">MEMBERS ONLY</span>
    </div>
    <h1 class="text-3xl font-semibold text-gray-900 mb-2 leading-tight">The Sponsorship Proximity Problem</h1>
    <p class="text-gray-500 text-sm mb-2">June 19, 2025 · 2:00–4:00 PM ET · Virtual · 1h 47m</p>
    <p class="text-xs text-gray-400 mb-8">48 members registered · Session synthesis published June 26, 2025</p>

    <div class="bg-gray-900 text-white p-8 mb-8">
      ${Lbl("What the Coalition Concluded")}
      <p class="text-xl font-semibold mt-3 leading-snug">
        Sponsorship in distributed environments has collapsed into mentorship — and that is a structural failure, not a motivation problem.
      </p>
    </div>

    <div class="flex border-b border-gray-300 mb-8 gap-0">
      ${["synthesis", "recording", "materials"].map(tab => `
        <button onclick="setState('pastEventDetail.tab', '${tab}')" class="text-xs font-mono uppercase tracking-wide px-5 py-2.5 border-b-2 -mb-px ${activeTab === tab ? "border-gray-900 text-gray-900" : "border-transparent text-gray-500 hover:text-gray-700"}">
          ${tab === "synthesis" ? "Session Synthesis" : tab === "recording" ? "Recording &amp; Replay" : "Materials"}
        </button>`).join("")}
    </div>

    <div class="grid grid-cols-3 gap-10">
      <div class="col-span-2">
        ${activeTab === "synthesis" ? `
          <div class="space-y-8">
            <div>
              <h2 class="font-semibold text-gray-900 mb-4 text-sm">Three Key Tensions</h2>
              ${[
                { n: 1, t: "Proximity drove sponsorship. Remote work ended proximity. Organizations have not rebuilt the mechanism.", sub: "Coalition response: 11 Co-Chairs are piloting structured visibility frameworks as a replacement." },
                { n: 2, t: "Managers who sponsor remotely lack the informal visibility that makes sponsorship credible. They cannot advocate convincingly for what they have not seen.", sub: "Coalition response: Several members are experimenting with 'sponsorship pods' — small groups that create deliberate cross-visibility." },
                { n: 3, t: "The organizations that are succeeding have made sponsorship a structured process, not a relationship.", sub: "Coalition response: The Distributed Sponsorship Playbook was developed directly from this finding." },
              ].map(({ n, t, sub }) => `
                <div class="border border-gray-200 p-5 mb-4">
                  <div class="flex gap-4">
                    <div class="w-7 h-7 border border-gray-400 flex items-center justify-center flex-shrink-0 text-xs text-gray-500 font-mono">${n}</div>
                    <div>
                      <p class="text-sm font-medium text-gray-900 mb-2 leading-snug">${esc(t)}</p>
                      <p class="text-xs text-gray-500 leading-relaxed italic">${esc(sub)}</p>
                    </div>
                  </div>
                </div>`).join("")}
            </div>

            <div>
              <h2 class="font-semibold text-gray-900 mb-4 text-sm">What the coalition is doing about it</h2>
              <div class="space-y-3">
                ${[
                  "11 Co-Chair organizations are piloting structured sponsorship check-ins on a quarterly cadence",
                  "CTI has published the Distributed Sponsorship Framework playbook based on session findings",
                  "The Judgment Gap session (September 2025) will examine a related downstream effect",
                ].map(action => `
                  <div class="flex gap-3 text-sm text-gray-700">
                    <div class="w-1.5 h-1.5 bg-gray-600 rounded-full flex-shrink-0 mt-1.5"></div>${esc(action)}
                  </div>`).join("")}
              </div>
            </div>

            <div>
              <h2 class="font-semibold text-gray-900 mb-3 text-sm">Facilitators</h2>
              <div class="grid grid-cols-2 gap-3">
                ${["Dr. Katherine Giscombe, VP Research · Session Lead", "James Okonkwo, Luminary · Talent Strategy"].map(f => `
                  <div class="border border-gray-200 p-3 text-xs text-gray-700">${esc(f)}</div>`).join("")}
              </div>
            </div>
          </div>` : ""}

        ${activeTab === "recording" ? `
          <div class="space-y-6">
            <div>
              <div class="bg-gray-900 aspect-video flex items-center justify-center mb-3">
                <div class="text-center">
                  <div class="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center mx-auto mb-3 cursor-pointer hover:bg-white/10">
                    <span class="text-white text-2xl ml-1">▶</span>
                  </div>
                  <p class="text-white text-sm font-medium">The Sponsorship Proximity Problem</p>
                  <p class="text-gray-400 text-xs mt-1">Full session · 1h 47m · June 19, 2025</p>
                </div>
              </div>
              <p class="text-xs text-gray-500 font-mono">Hosted on Vimeo · Members only · Do not share externally</p>
            </div>

            <div>
              <h2 class="font-semibold text-gray-900 mb-3 text-sm">Chapter markers</h2>
              <div class="space-y-2">
                ${[
                  ["0:00", "Opening framing — what changed since the last session"],
                  ["12:30", "Tension 1: The proximity problem"],
                  ["34:15", "Tension 2: Credibility without visibility"],
                  ["58:40", "Tension 3: Process vs. relationship"],
                  ["1:22:00", "What are members doing about it? — open discussion"],
                  ["1:42:10", "Closing synthesis and next steps"],
                ].map(([time, label]) => `
                  <div class="flex items-center gap-4 border border-gray-200 px-4 py-2.5 hover:bg-gray-50 cursor-pointer">
                    <span class="text-xs font-mono text-gray-400 w-12 flex-shrink-0">${time}</span>
                    <span class="text-sm text-gray-800">${esc(label)}</span>
                  </div>`).join("")}
              </div>
            </div>

            <div>
              <h2 class="font-semibold text-gray-900 mb-3 text-sm">Highlight clips</h2>
              <div class="grid grid-cols-2 gap-3">
                ${[
                  ["The proximity problem explained", "4m 12s"], ["What sponsorship pods look like", "6m 38s"],
                  ["Making sponsorship a process", "3m 55s"], ["Closing synthesis", "7m 20s"],
                ].map(([label, dur]) => `
                  <div class="border border-gray-200 p-3 flex items-center gap-3 cursor-pointer hover:bg-gray-50">
                    <div class="w-8 h-8 bg-gray-200 flex items-center justify-center flex-shrink-0"><span class="text-gray-500 text-xs">▶</span></div>
                    <div><p class="text-xs text-gray-800 font-medium">${esc(label)}</p><p class="text-xs text-gray-400">${dur}</p></div>
                  </div>`).join("")}
              </div>
            </div>
          </div>` : ""}

        ${activeTab === "materials" ? `
          <div class="space-y-4">
            <p class="text-sm text-gray-600">Session materials for registered attendees.</p>
            ${[
              ["PDF", "Pre-read: Sponsorship in the Age of Distributed Work", "Research Report · 48 pages"],
              ["PDF", "Session slides · The Sponsorship Proximity Problem", "Facilitator deck · 22 slides"],
              ["PDF", "Session synthesis writeup", "Full written synthesis · 6 pages"],
              ["XLSX", "Sponsorship mapping worksheet", "Pre-session intake tool"],
            ].map(([type, label, sub]) => `
              <div class="flex items-center gap-4 border border-gray-200 p-4 hover:bg-gray-50 cursor-pointer">
                <div class="w-10 h-10 bg-gray-200 flex items-center justify-center flex-shrink-0">
                  <span class="text-gray-500 text-xs font-mono">${type}</span>
                </div>
                <div class="flex-1">
                  <p class="text-sm text-gray-900 font-medium">${esc(label)}</p>
                  <p class="text-xs text-gray-500">${esc(sub)}</p>
                </div>
                <span class="text-xs font-mono text-gray-600 hover:text-gray-900">↓ Download</span>
              </div>`).join("")}
          </div>` : ""}
      </div>

      <div class="space-y-4">
        <div class="border border-gray-300 p-4">
          <h3 class="font-semibold text-gray-900 mb-4 text-sm">What's next on this topic</h3>
          <div class="border border-gray-300 p-3 mb-3">
            ${Lbl("Upcoming · Sep 18, 2025")}
            <p class="text-sm font-medium text-gray-900 mt-1 mb-2">The Judgment Gap: AI and Early Career Learning</p>
            ${Btn("View + Register", { onclick: "nav('event-detail-member')", v: "solid" })}
          </div>
        </div>

        ${Card(`
          ${Lbl("Playbook from this session")}
          <p class="text-sm font-medium text-gray-900 mt-1 mb-2">Distributed Sponsorship Framework</p>
          ${Btn("Open Playbook", { onclick: "nav('playbook-detail')" })}
        `, { onclick: "nav('playbook-detail')" })}

        ${Card(`
          ${Lbl("Related Consequential")}
          <p class="text-sm font-medium text-gray-900 mt-1 mb-2">The Hidden Cost of Hybrid Rollbacks</p>
          ${Btn("Read →", { onclick: "nav('post-member')", v: "ghost" })}
        `, { onclick: "nav('post-member')" })}

        <div class="bg-gray-900 text-white p-4">
          <p class="text-sm font-medium mb-2">Bring this to your organization.</p>
          <p class="text-xs text-gray-400 mb-3">Request a workshop on distributed sponsorship for your leadership team.</p>
          <button onclick="nav('advisory-member')" class="text-xs font-mono border border-gray-600 text-gray-300 px-3 py-2 hover:border-white hover:text-white w-full">Request Advisory</button>
        </div>
      </div>
    </div>
  </div>`;
}
