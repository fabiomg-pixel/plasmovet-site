// Shared chrome for V1 Editorial
// Inject nav + footer + PT/EN strings; each page calls renderChrome('home'|'research'|'team'|'publications')

const LOGO_IMG = `<img src="assets/plasmovet-logo.png" alt="PlasmoVet" style="height:36px;width:auto;display:block"/>`;

const STRINGS = {
  en: {
    nav: { home: 'Home', research: 'Research', team: 'Team', publications: 'Publications', news: 'News', contact: 'Contact' },
    footer: {
      tagline: 'Vector biology & immunometabolism at the Instituto de Biofísica Carlos Chagas Filho, UFRJ.',
      nav: 'Navigation', resources: 'Resources', contact: 'Contact',
      addr: 'IBCCF · CCS, Bloco G<br>Cidade Universitária, Ilha do Fundão<br>Rio de Janeiro, RJ · Brasil',
      rights: '© 2026 Plasmovet · Gomes Lab · IBCCF/UFRJ'
    }
  },
  pt: {
    nav: { home: 'Início', research: 'Pesquisa', team: 'Equipe', publications: 'Publicações', news: 'Notícias', contact: 'Contato' },
    footer: {
      tagline: 'Biologia de vetores e imunometabolismo no Instituto de Biofísica Carlos Chagas Filho, UFRJ.',
      nav: 'Navegação', resources: 'Recursos', contact: 'Contato',
      addr: 'IBCCF · CCS, Bloco G<br>Cidade Universitária, Ilha do Fundão<br>Rio de Janeiro, RJ · Brasil',
      rights: '© 2026 Plasmovet · Gomes Lab · IBCCF/UFRJ'
    }
  }
};

function currentLang() {
  return localStorage.getItem('plasmovet_lang') || 'en';
}
function setLang(l) {
  localStorage.setItem('plasmovet_lang', l);
  applyLang();
}
function applyLang() {
  const l = currentLang();
  document.documentElement.setAttribute('lang', l === 'pt' ? 'pt-BR' : 'en');
  document.querySelectorAll('[data-i18n-en]').forEach(el => {
    const val = el.getAttribute(`data-i18n-${l}`);
    if (val != null) {
      if (el.hasAttribute('data-i18n-html')) el.innerHTML = val;
      else el.textContent = val;
    }
  });
  document.querySelectorAll('.lang-toggle button').forEach(b => {
    b.classList.toggle('on', b.dataset.lang === l);
  });
}

function renderNav(active) {
  const l = currentLang();
  const S = STRINGS[l].nav;
  const link = (key, href, label_en, label_pt) => `<a href="${href}"${active===key?' class="active"':''} data-i18n-en="${label_en}" data-i18n-pt="${label_pt}">${l==='pt'?label_pt:label_en}</a>`;
  return `
    <nav class="nav">
      <div class="nav-inner">
        <a href="index.html" class="brand" style="gap:14px;align-items:center">
          ${LOGO_IMG}
          <span class="brand-text" style="border-left:1px solid var(--line);padding-left:14px">
            <span style="font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:var(--ink-2);font-weight:500">Gomes Lab</span>
            <small>IBCCF · UFRJ</small>
          </span>
        </a>
        <div class="nav-links">
          ${link('home','index.html','Home','Início')}
          ${link('research','research.html','Research','Pesquisa')}
          ${link('team','team.html','Team','Equipe')}
          ${link('publications','publications.html','Publications','Publicações')}
          ${link('news','news.html','News','Notícias')}
          <div class="lang-toggle" role="group" aria-label="Language">
            <button data-lang="en" onclick="setLang('en')">EN</button>
            <button data-lang="pt" onclick="setLang('pt')">PT</button>
          </div>
        </div>
        <button class="menu-btn" aria-label="Menu" onclick="toggleMobileMenu()"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 6h18M3 12h18M3 18h18"/></svg></button>
      </div>
    </nav>
    <div id="mobile-menu" style="position:fixed;top:0;left:0;right:0;bottom:0;background:#FAF7F3;z-index:9999;display:flex;flex-direction:column;padding:80px 32px 32px;gap:32px;transform:translateY(-100%);transition:transform .35s cubic-bezier(.6,0,.3,1);visibility:hidden;pointer-events:none;opacity:1">
      <button aria-label="Close" onclick="toggleMobileMenu()" style="position:absolute;top:18px;right:24px;background:none;border:0;cursor:pointer;color:#141310;padding:10px"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M18 6L6 18M6 6l12 12"/></svg></button>
      <div style="display:flex;flex-direction:column;gap:4px;margin-top:20px">
        <a href="index.html" onclick="toggleMobileMenu()" style="font-family:'Instrument Serif',serif;font-size:40px;letter-spacing:-.02em;color:#141310;padding:12px 0;border-bottom:1px solid #E5DFD4;line-height:1.1;text-decoration:none">${l==='pt'?'Início':'Home'}</a>
        <a href="research.html" onclick="toggleMobileMenu()" style="font-family:'Instrument Serif',serif;font-size:40px;letter-spacing:-.02em;color:#141310;padding:12px 0;border-bottom:1px solid #E5DFD4;line-height:1.1;text-decoration:none">${l==='pt'?'Pesquisa':'Research'}</a>
        <a href="team.html" onclick="toggleMobileMenu()" style="font-family:'Instrument Serif',serif;font-size:40px;letter-spacing:-.02em;color:#141310;padding:12px 0;border-bottom:1px solid #E5DFD4;line-height:1.1;text-decoration:none">${l==='pt'?'Equipe':'Team'}</a>
        <a href="publications.html" onclick="toggleMobileMenu()" style="font-family:'Instrument Serif',serif;font-size:40px;letter-spacing:-.02em;color:#141310;padding:12px 0;border-bottom:1px solid #E5DFD4;line-height:1.1;text-decoration:none">${l==='pt'?'Publicações':'Publications'}</a>
        <a href="news.html" onclick="toggleMobileMenu()" style="font-family:'Instrument Serif',serif;font-size:40px;letter-spacing:-.02em;color:#141310;padding:12px 0;border-bottom:1px solid #E5DFD4;line-height:1.1;text-decoration:none">${l==='pt'?'Notícias':'News'}</a>
      </div>
      <div style="display:flex;gap:0;margin-top:auto;border:1px solid #E5DFD4;border-radius:100px;padding:4px;align-self:flex-start;font-family:'JetBrains Mono',monospace">
        <button data-lang="en" onclick="setLang('en')" style="background:none;border:0;padding:8px 16px;font:inherit;font-size:11px;letter-spacing:.14em;color:#6E6960;cursor:pointer;border-radius:100px">EN</button>
        <button data-lang="pt" onclick="setLang('pt')" style="background:none;border:0;padding:8px 16px;font:inherit;font-size:11px;letter-spacing:.14em;color:#6E6960;cursor:pointer;border-radius:100px">PT</button>
      </div>
    </div>
  `;
}

function renderFooter() {
  return `
    <footer class="site">
      <div class="container">
        <div class="foot-grid">
          <div>
            <div class="brand-foot" style="display:flex;align-items:center;gap:12px;margin-bottom:20px"><img src="assets/plasmovet-logo.png" alt="PlasmoVet" style="height:48px;width:auto;display:block;filter:brightness(1.05)"/></div>
            <p style="font-size:14px;opacity:.7;line-height:1.6;max-width:320px"
               data-i18n-en="Vector biology &amp; immunometabolism at the Instituto de Biofísica Carlos Chagas Filho, UFRJ."
               data-i18n-pt="Biologia de vetores e imunometabolismo no Instituto de Biofísica Carlos Chagas Filho, UFRJ.">Vector biology &amp; immunometabolism at the Instituto de Biofísica Carlos Chagas Filho, UFRJ.</p>
          </div>
          <div>
            <h4 data-i18n-en="Navigation" data-i18n-pt="Navegação">Navigation</h4>
            <ul>
              <li><a href="index.html" data-i18n-en="Home" data-i18n-pt="Início">Home</a></li>
              <li><a href="research.html" data-i18n-en="Research" data-i18n-pt="Pesquisa">Research</a></li>
              <li><a href="team.html" data-i18n-en="Team" data-i18n-pt="Equipe">Team</a></li>
              <li><a href="publications.html" data-i18n-en="Publications" data-i18n-pt="Publicações">Publications</a></li>
              <li><a href="news.html" data-i18n-en="News" data-i18n-pt="Notícias">News</a></li>
            </ul>
          </div>
          <div>
            <h4 data-i18n-en="Resources" data-i18n-pt="Recursos">Resources</h4>
            <ul>
              <li><a href="https://www.ncbi.nlm.nih.gov/myncbi/fabio.gomes.2/bibliography/public/" target="_blank">PubMed Bibliography</a></li>
              <li><a href="https://biof.ufrj.br" target="_blank">IBCCF/UFRJ</a></li>
              <li><a href="#" data-i18n-en="Open positions" data-i18n-pt="Oportunidades">Open positions</a></li>
              <li><a href="#" data-i18n-en="Media kit" data-i18n-pt="Mídia">Media kit</a></li>
            </ul>
          </div>
          <div>
            <h4 data-i18n-en="Contact" data-i18n-pt="Contato">Contact</h4>
            <p style="font-size:14px;opacity:.7;line-height:1.7"
               data-i18n-html
               data-i18n-en="IBCCF · CCS, Bloco G<br>Cidade Universitária, Ilha do Fundão<br>Rio de Janeiro, RJ · Brasil<br><a href='mailto:fabiomg@biof.ufrj.br' style='color:#F3855C;opacity:1'>fabiomg@biof.ufrj.br</a>"
               data-i18n-pt="IBCCF · CCS, Bloco G<br>Cidade Universitária, Ilha do Fundão<br>Rio de Janeiro, RJ · Brasil<br><a href='mailto:fabiomg@biof.ufrj.br' style='color:#F3855C;opacity:1'>fabiomg@biof.ufrj.br</a>">
            </p>
          </div>
        </div>
        <div class="foot-bottom">
          <span data-i18n-en="© 2026 Plasmovet · Gomes Lab · IBCCF/UFRJ"
                data-i18n-pt="© 2026 Plasmovet · Gomes Lab · IBCCF/UFRJ">© 2026 Plasmovet · Gomes Lab · IBCCF/UFRJ</span>
          <span></span>
        </div>
      </div>
    </footer>
  `;
}

function toggleMobileMenu() {
  const m = document.getElementById('mobile-menu');
  if (!m) return;
  const isOpen = m.style.transform === 'translateY(0px)' || m.style.transform === 'translateY(0)';
  if (isOpen) {
    m.style.transform = 'translateY(-100%)';
    m.style.visibility = 'hidden';
    m.style.pointerEvents = 'none';
    document.body.style.overflow = '';
  } else {
    m.style.visibility = 'visible';
    m.style.pointerEvents = 'auto';
    requestAnimationFrame(() => { m.style.transform = 'translateY(0)'; });
    document.body.style.overflow = 'hidden';
  }
}

function renderChrome(active) {
  const navSlot = document.getElementById('nav-slot');
  const footSlot = document.getElementById('footer-slot');
  if (navSlot) navSlot.innerHTML = renderNav(active);
  if (footSlot) footSlot.innerHTML = renderFooter();
  applyLang();
}
