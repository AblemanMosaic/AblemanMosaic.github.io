const revealTargets = document.querySelectorAll('.corpus-card, .section-heading, .repo-group');

if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  revealTargets.forEach((element) => element.classList.add('reveal'));
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });
  revealTargets.forEach((element) => observer.observe(element));
}

const repositoryDialog = document.querySelector('#repo-dialog');
const repositoryDialogShell = document.querySelector('.repo-dialog-shell');
const repositoryDialogContent = document.querySelector('#repo-dialog-content');
const repositoryDialogClose = document.querySelector('.repo-dialog-close');
const repositoryDetails = window.REPOSITORY_DETAILS || {};
let activeRepository = null;

const escapeHtml = (value) => String(value ?? '')
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#039;');

const corpusPaperUrl = (accession) =>
  `https://ablemanmosaic.github.io/ableman-corpus/site-bridge/#paper-${encodeURIComponent(accession)}`;

function repositoryFromUrl() {
  return new URL(window.location.href).searchParams.get('repo');
}

function writeRepositoryUrl(slug, mode = 'push') {
  const url = new URL(window.location.href);
  if (slug) url.searchParams.set('repo', slug);
  else url.searchParams.delete('repo');
  const state = slug ? { repoModal: true, slug } : {};
  window.history[mode === 'push' ? 'pushState' : 'replaceState'](state, '', url);
}

function paperMarkup(paper) {
  return `<a class="repo-paper" href="${corpusPaperUrl(paper.accession)}">
    <span>
      <span class="repo-paper-relation">${escapeHtml(paper.relation)}</span>
      <strong>${escapeHtml(paper.title)}</strong>
      <span class="repo-paper-note">${escapeHtml(paper.note)}</span>
    </span>
    <span class="repo-paper-accession">${escapeHtml(paper.accession)}</span>
  </a>`;
}

function renderRepository(detail) {
  const firstPaper = detail.papers?.[0];
  repositoryDialogContent.innerHTML = `
    <header class="repo-modal-head">
      <div class="repo-modal-meta"><span>${escapeHtml(detail.kind)}</span><span>${escapeHtml(detail.standing)}</span></div>
      <h2 id="repo-dialog-title">${escapeHtml(detail.name)}</h2>
      <p class="repo-modal-tagline">${escapeHtml(detail.tagline)}</p>
    </header>
    <div class="repo-modal-body">
      <section class="repo-modal-section">
        <h3>What it does</h3>
        <div class="repo-modal-copy"><p>${escapeHtml(detail.does)}</p></div>
      </section>
      <section class="repo-modal-section">
        <h3>How you use it</h3>
        <div class="repo-modal-copy">
          <ol class="repo-modal-steps">${detail.useSteps.map((step) => `<li>${escapeHtml(step)}</li>`).join('')}</ol>
          ${detail.quickstart ? `<details class="repo-quickstart"><summary>Technical quickstart</summary><p class="repo-quickstart-note">${escapeHtml(detail.quickstartNote || "Download or clone the repository first. With its documented prerequisites installed, run these commands from its root folder:")}</p><pre><code>${escapeHtml(detail.quickstart)}</code></pre></details>` : ''}
        </div>
      </section>
      <section class="repo-modal-section">
        <h3>Why it matters</h3>
        <div class="repo-modal-copy"><p>${escapeHtml(detail.why)}</p></div>
      </section>
      <section class="repo-modal-section">
        <h3>Evidence and boundaries</h3>
        <div class="repo-modal-copy">
          <div class="repo-evidence"><b>Available evidence</b><p>${escapeHtml(detail.evidence)}</p></div>
          <ul class="repo-boundaries">${detail.boundaries.map((boundary) => `<li>${escapeHtml(boundary)}</li>`).join('')}</ul>
        </div>
      </section>
      <section class="repo-modal-section">
        <h3>Linked research</h3>
        <div class="repo-modal-copy">
          <div class="repo-paper-list">${(detail.papers || []).map(paperMarkup).join('')}</div>
          <p class="repo-relation-note">These are candidate interface linkages for author review. Relation labels describe the proposed connection; they do not merge the repository with the paper or grant the generated explanation author standing.</p>
        </div>
      </section>
      <section class="repo-modal-section">
        <h3>Continue</h3>
        <div class="repo-modal-actions">
          <a class="button primary" href="${escapeHtml(detail.repoUrl)}" target="_blank" rel="noreferrer">Open repository <span aria-hidden="true">↗</span></a>
          ${firstPaper ? `<a class="button secondary" href="${corpusPaperUrl(firstPaper.accession)}">Explore linked research <span aria-hidden="true">→</span></a>` : ''}
        </div>
      </section>
    </div>`;
}

function openRepository(slug, { updateUrl = true } = {}) {
  const detail = repositoryDetails[slug];
  if (!detail) return;
  activeRepository = slug;
  renderRepository(detail);
  if (!repositoryDialog.open) repositoryDialog.showModal();
  repositoryDialogShell.scrollTop = 0;
  if (updateUrl) writeRepositoryUrl(slug, 'push');
}

function closeRepository({ useHistory = true } = {}) {
  if (!activeRepository && !repositoryDialog.open) return;
  if (useHistory && repositoryFromUrl() && window.history.state?.repoModal) {
    window.history.back();
    return;
  }
  activeRepository = null;
  if (repositoryDialog.open) repositoryDialog.close();
  if (repositoryFromUrl()) writeRepositoryUrl(null, 'replace');
}

document.querySelectorAll('[data-repo]').forEach((card) => {
  card.addEventListener('click', () => openRepository(card.dataset.repo));
});

repositoryDialogClose?.addEventListener('click', () => closeRepository());
repositoryDialog?.addEventListener('cancel', (event) => {
  event.preventDefault();
  closeRepository();
});
repositoryDialog?.addEventListener('click', (event) => {
  if (event.target === repositoryDialog) closeRepository();
});

window.addEventListener('popstate', () => {
  const slug = repositoryFromUrl();
  if (slug && repositoryDetails[slug]) openRepository(slug, { updateUrl: false });
  else closeRepository({ useHistory: false });
});

const initialRepository = repositoryFromUrl();
if (initialRepository && repositoryDetails[initialRepository]) {
  openRepository(initialRepository, { updateUrl: false });
} else if (initialRepository) {
  writeRepositoryUrl(null, 'replace');
}
