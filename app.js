// ── Router ────────────────────────────────────────────────────────────────────

const RENDERERS = {
  "home": renderHome,
  "forum-public": renderForumPublic,
  "summit": renderSummit,
  "lab": renderLab,
  "lab-report": renderLabReport,
  "consequential-archive": renderConsequentialArchive,
  "blog-post": renderBlogPost,
  "engage": renderEngage,
  "sponsor-prospectus": renderSponsorProspectus,
  "media-kit": renderMediaKit,
  "partnership-prospectus": renderPartnershipProspectus,
  "executive-briefing-request": renderExecutiveBriefingRequest,
  "member-login": renderMemberLogin,
  "request-form": renderRequestForm,
  "thank-you": renderThankYou,
  "dashboard": renderDashboard,
  "event-detail": renderEventDetail,
  "luminary-exchange": renderLuminaryExchange,
  "forum-calendar": renderForumCalendar,
  "event-detail-member": renderEventDetailMember,
  "past-event-detail": renderPastEventDetail,
  "session-before": renderSessionBefore,
  "session-after": renderSessionAfter,
  "consequential-member": renderConsequentialMember,
  "post-member": renderPostMember,
  "playbooks": renderPlaybooks,
  "playbook-detail": renderPlaybookDetail,
  "coalition": renderCoalition,
  "luminary-archive": renderLuminaryArchive,
  "luminary-profile": renderLuminaryProfile,
  "advisory-member": renderAdvisoryMember,
  "ctilearning": renderCTILearning,
  "member-directory": renderMemberDirectory,
  "my-membership": renderMyMembership,
};

function render() {
  const page = S.page;
  const isMember = MEMBER_PAGES.includes(page);
  const renderer = RENDERERS[page] || renderHome;

  // Preserve focus + cursor position across re-renders — the whole #root
  // subtree gets recreated on every render(), which would otherwise drop
  // focus out of any text input (e.g. the Global Lab search box) after
  // every keystroke.
  const active = document.activeElement;
  const activeId = active && active.id;
  const selStart = active && "selectionStart" in active ? active.selectionStart : null;
  const selEnd = active && "selectionEnd" in active ? active.selectionEnd : null;

  const html = `
    ${isMember ? MemberNav(page) : PublicNav(page)}
    <div class="border-b border-gray-200 bg-gray-50 px-6 py-1.5">
      <div class="max-w-6xl mx-auto flex items-center gap-2">
        <span class="text-xs font-mono text-gray-400">${isMember ? "MEMBER AREA" : "PUBLIC SITE"}</span>
        <span class="text-xs font-mono text-gray-300">·</span>
        <span class="text-xs font-mono text-gray-600">${page.replace(/-/g, " ").toUpperCase()}</span>
      </div>
    </div>
    ${renderer()}
  `;

  document.getElementById("root").innerHTML = `<div class="min-h-screen bg-white">${html}</div>`;

  if (activeId) {
    const el = document.getElementById(activeId);
    if (el) {
      el.focus();
      if (selStart != null && el.setSelectionRange) {
        try { el.setSelectionRange(selStart, selEnd); } catch (e) {}
      }
    }
  }
}

// ── Init ──────────────────────────────────────────────────────────────────────
S.selectedEventId = FORUM_EVENTS[0].id;
S.selectedReportTitle = LAB_REPORTS[0].title;
render();
