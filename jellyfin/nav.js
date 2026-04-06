// Custom Navbar — Logo variant voor Jellyfin 10.11.x (Kinuco / ElegantFin)
// Verschil met custom-navbar.js: hamburger-pil bevat ook een logo.
//
// SETUP: vervang de SVG tussen <!-- LOGO START --> en <!-- LOGO END -->
// door jouw eigen SVG-code.

const NAVBAR_FLAG = 'custom-navbar-applied';
if (window[NAVBAR_FLAG]) {
    console.log('[Navbar] Al eerder uitgevoerd, stoppen.');
    return;
}
window[NAVBAR_FLAG] = true;

// ─── !! VERVANG DIT MET JOUW SVG !! ──────────────────────────────────────────
const LOGO_SVG = `
<!-- LOGO START -->
<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 969.01 154.71">
  <defs>
    <style>
      .cls-1 {
        fill: #fff;
        stroke-width: 0px;
      }
    </style>
  </defs>
  <rect class="cls-1" y="1.79" width="37.48" height="150.93"/>
  <path class="cls-1" d="M180.27,1.79h-56.52L56.05,59.01c-3.38,2.94-5.64,5.52-6.89,7.87-1.31,2.45-1.97,5.37-1.97,8.68,0,2.66.48,5.2,1.42,7.56,1.01,2.51,2.99,5.01,6.06,7.61l71.84,61.98h56.48l-92.5-76.95L180.27,1.79Z"/>
  <rect class="cls-1" x="195.88" y="1.79" width="37.48" height="150.93"/>
  <path class="cls-1" d="M376.87,92.19L287.76,6.64c-2.54-2.39-4.88-4.04-7.15-5.07-2.33-1.05-4.89-1.57-7.59-1.57-5.74,0-10.38,2.02-13.79,6-3.29,3.84-4.95,9.06-4.95,15.52v131.2h35.89V61.01l89.04,86.79c4.58,4.58,9.64,6.91,15.01,6.91s10.16-1.97,13.64-5.85c3.39-3.78,5.1-9.12,5.1-15.87V.4h-36.09v91.8Z"/>
  <path class="cls-1" d="M561.57,85.7c0,5.97-.71,11.1-2.11,15.25-1.32,3.92-3.53,7.02-6.75,9.49-3.3,2.53-7.83,4.4-13.48,5.55-5.91,1.21-13.48,1.82-22.49,1.82s-16.79-.61-22.7-1.82c-5.65-1.15-10.18-3.02-13.47-5.55-3.22-2.47-5.43-5.57-6.75-9.49-1.4-4.14-2.11-9.27-2.11-15.25V1.79h-38.48v83.91c0,11.45,1.57,21.61,4.66,30.21,3.16,8.78,8.19,16.16,14.95,21.93,6.7,5.72,15.38,10.03,25.81,12.79,10.23,2.71,22.71,4.08,37.09,4.08s26.89-1.37,37.19-4.08c10.5-2.76,19.22-7.07,25.92-12.79,6.77-5.78,11.77-13.17,14.86-21.95,3.02-8.59,4.55-18.75,4.55-30.18V1.79h-36.69v83.91Z"/>
  <path class="cls-1" d="M659.84,7.07c-9.04,3.52-16.99,8.57-23.63,15-6.65,6.44-11.92,14.33-15.65,23.45-3.72,9.09-5.61,19.27-5.61,30.24s1.88,21.06,5.59,30.4c3.72,9.36,8.96,17.57,15.59,24.41,6.63,6.83,14.56,12.29,23.59,16.21,9.04,3.94,19.07,5.93,29.81,5.93h82.92v-37.48h-82.92c-5.38,0-10.41-.95-14.95-2.83-4.54-1.88-8.49-4.51-11.74-7.82-3.25-3.32-5.83-7.33-7.64-11.93-1.83-4.63-2.75-9.77-2.75-15.3s.96-10.7,2.85-15.38c1.88-4.68,4.49-8.73,7.75-12.05,3.25-3.31,7.18-5.95,11.65-7.82,4.48-1.88,9.47-2.83,14.84-2.83h82.92V1.79h-82.92c-10.69,0-20.68,1.78-29.69,5.29Z"/>
  <path class="cls-1" d="M963.5,45.84c-3.66-9.05-8.89-16.94-15.54-23.45-6.64-6.5-14.66-11.62-23.84-15.21-9.15-3.58-19.34-5.39-30.29-5.39h-35.76c-10.69,0-20.68,1.78-29.69,5.29-9.04,3.52-16.99,8.57-23.63,15-6.65,6.44-11.92,14.33-15.65,23.45-3.72,9.09-5.61,19.27-5.61,30.24s1.88,21.06,5.59,30.4c3.72,9.36,8.96,17.57,15.59,24.41,6.63,6.83,14.56,12.29,23.59,16.21,9.04,3.94,19.07,5.93,29.81,5.93h35.76c10.86,0,21.01-1.99,30.19-5.93,9.17-3.93,17.17-9.39,23.8-16.22,6.63-6.83,11.87-15.04,15.59-24.41,3.71-9.35,5.59-19.58,5.59-30.4s-1.85-20.9-5.5-29.93ZM893.84,115.24h-35.76c-5.38,0-10.41-.95-14.95-2.83-4.54-1.88-8.49-4.51-11.74-7.82-3.25-3.32-5.83-7.33-7.64-11.93-1.83-4.63-2.75-9.77-2.75-15.3s.96-10.7,2.85-15.38c1.88-4.68,4.49-8.73,7.75-12.05,3.25-3.31,7.18-5.95,11.65-7.82,4.48-1.88,9.47-2.83,14.84-2.83h35.76c5.51,0,10.64.96,15.27,2.84,4.61,1.88,8.63,4.52,11.95,7.83,3.31,3.31,5.9,7.34,7.72,12,1.83,4.7,2.76,9.89,2.76,15.41s-.93,10.67-2.75,15.3c-1.81,4.59-4.41,8.6-7.72,11.91-3.32,3.32-7.34,5.95-11.95,7.83-4.61,1.88-9.75,2.84-15.27,2.84Z"/>
</svg>
<!-- LOGO END -->
`;
// ─────────────────────────────────────────────────────────────────────────────

function waitForElement(selector, timeout = 10000) {
    return new Promise(resolve => {
        const el = document.querySelector(selector);
        if (el) return resolve(el);
        const obs = new MutationObserver((_m, o) => {
            const found = document.querySelector(selector);
            if (found) { o.disconnect(); resolve(found); }
        });
        obs.observe(document.documentElement, { childList: true, subtree: true });
        setTimeout(() => { obs.disconnect(); resolve(null); }, timeout);
    });
}

const IC = {
    home: `<svg viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>`,
    search: `<svg viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>`,
    movies: `<svg viewBox="0 0 24 24"><path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z"/></svg>`,
    tv: `<svg viewBox="0 0 24 24"><path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z"/></svg>`,
    heart: `<svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`,
    cast: `<svg viewBox="0 0 24 24"><path d="M21 3H3c-1.1 0-2 .9-2 2v3h2V5h18v14h-7v2h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM1 18v3h3c0-1.66-1.34-3-3-3zm0-4v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7zm0-4v2c4.97 0 9 4.03 9 9h2c0-6.08-4.93-11-11-11z"/></svg>`,
    sync: `<svg viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>`,
    menu: `<svg viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>`,
};

function getAvatarBg() {
    const els = document.querySelectorAll('.headerUserButton *[style]');
    for (const el of els) {
        if (el.style.backgroundImage && el.style.backgroundImage.includes('url')) return el.style.backgroundImage;
    }
    return null;
}
function getUserInitial() {
    const btn = document.querySelector('.headerUserButton');
    if (!btn) return '?';
    const name = (btn.getAttribute('title') || '').trim();
    return name ? name.charAt(0).toUpperCase() : '?';
}
function applyAvatar(el) {
    const bg = getAvatarBg();
    if (bg) { el.style.backgroundImage = bg; }
    else { el.textContent = getUserInitial(); }
}
function startClock(...els) {
    function tick() {
        const n = new Date();
        const t = `${String(n.getHours()).padStart(2, '0')}:${String(n.getMinutes()).padStart(2, '0')}`;
        els.forEach(el => { if (el) el.textContent = t; });
    }
    tick();
    setInterval(tick, 10000);
}

function buildNavbar() {
    console.log('[Navbar] Controleren of navbar al bestaat.');
    if (document.getElementById('custom-navbar-wrap')) return;

    const navItems = [
        { label: 'Home', icon: IC.home, hash: '#/home' },
        { label: 'Zoeken', icon: IC.search, hash: '#/search' },
        { label: 'Films', icon: IC.movies, hash: '#/movies' },
        { label: 'Series', icon: IC.tv, hash: '#/tv' },
        { label: 'Favorieten', icon: IC.heart, hash: '#/home?tab=1' },
    ];

    console.log('[Navbar] Navbar nog niet gevonden, bouwen.');

    // ── Desktop ──
    const wrap = document.createElement('div');
    wrap.id = 'custom-navbar-wrap';

    // Links: hamburger + sep + logo in één pil
    const leftSection = document.createElement('div');
    leftSection.id = 'cn-left';

    const hamburgerPill = document.createElement('div');
    hamburgerPill.id = 'cn-hamburger';
    hamburgerPill.className = 'cn-pill';

    const hamburgerBtn = document.createElement('div');
    hamburgerBtn.id = 'cn-hamburger-btn';
    hamburgerBtn.title = 'Menu';
    hamburgerBtn.innerHTML = `<span></span><span></span><span></span>`;
    hamburgerBtn.addEventListener('click', () => {
        const orig = document.querySelector('.mainDrawerButton');
        if (orig) orig.click();
        else console.warn('[Navbar] mainDrawerButton niet gevonden.');
    });

    const backBtn = document.createElement('div');
    backBtn.id = 'cn-back-btn';
    backBtn.title = 'Terug';
    backBtn.innerHTML = `<svg viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>`;
    backBtn.addEventListener('click', () => history.back());
    hamburgerPill.appendChild(backBtn);

    const logoSep = document.createElement('div');
    logoSep.id = 'cn-logo-sep';

    const logoEl = document.createElement('div');
    logoEl.id = 'cn-logo';
    logoEl.title = 'Home';
    logoEl.innerHTML = LOGO_SVG;
    logoEl.addEventListener('click', () => { window.location.hash = '#/home'; });
    logoEl.addEventListener('click', () => { window.scrollTo({ top: 0, behavior: 'smooth' }); });

    hamburgerPill.appendChild(hamburgerBtn);
    hamburgerPill.appendChild(logoSep);
    hamburgerPill.appendChild(logoEl);
    leftSection.appendChild(hamburgerPill);

    // Midden
    const centerSection = document.createElement('div');
    centerSection.id = 'cn-center';
    const clock = document.createElement('div');
    clock.id = 'cn-clock';
    clock.className = 'cn-pill';
    const linksPill = document.createElement('div');
    linksPill.id = 'cn-links';
    linksPill.className = 'cn-pill';
    navItems.forEach(item => {
        const link = document.createElement('div');
        link.className = 'cn-link';
        link.dataset.hash = item.hash;
        link.innerHTML = `${item.icon}<span>${item.label}</span>`;
        link.addEventListener('click', () => { window.location.hash = item.hash; });
        linksPill.appendChild(link);
        if (item.hash === '#/home') {
            link.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
    });
    centerSection.appendChild(clock);
    centerSection.appendChild(linksPill);

    // Rechts
    const rightPill = document.createElement('div');
    rightPill.id = 'cn-right';
    rightPill.className = 'cn-pill';
    const castBtn = document.createElement('div');
    castBtn.className = 'cn-icon-btn'; castBtn.title = 'Casten'; castBtn.innerHTML = IC.cast;
    castBtn.addEventListener('click', () => { document.querySelector('.headerCastButton')?.click(); });
    const syncBtn = document.createElement('div');
    syncBtn.className = 'cn-icon-btn'; syncBtn.title = 'Syncplay'; syncBtn.innerHTML = IC.sync;
    syncBtn.addEventListener('click', () => { document.querySelector('.headerSyncButton')?.click(); });
    const sep = document.createElement('div'); sep.className = 'cn-sep';
    const avatar = document.createElement('div');
    avatar.id = 'cn-avatar'; avatar.title = 'Profielinstellingen';
    applyAvatar(avatar);
    avatar.addEventListener('click', () => { window.location.hash = '#/mypreferencesmenu'; });
    rightPill.appendChild(castBtn); rightPill.appendChild(syncBtn);
    rightPill.appendChild(sep); rightPill.appendChild(avatar);

    console.log('[Navbar] Samenstellen van navbar onderdelen.');
    wrap.appendChild(leftSection);
    wrap.appendChild(centerSection);
    wrap.appendChild(rightPill);

    // ── Mobiel ──
    const mobile = document.createElement('div');
    mobile.id = 'custom-navbar-mobile';

    const mobileLinks = document.createElement('div');
    mobileLinks.id = 'cn-mobile-links';
    navItems.forEach(item => {
        const link = document.createElement('div');
        link.className = 'cn-mobile-link'; link.dataset.hash = item.hash;
        link.innerHTML = `${item.icon}<span>${item.label}</span>`;
        link.addEventListener('click', () => { window.location.hash = item.hash; });
        mobileLinks.appendChild(link);
    });

    const mobileBar = document.createElement('div');
    mobileBar.id = 'cn-mobile-bar';

    const mbLeft = document.createElement('div'); mbLeft.className = 'cn-mb-left';
    const mbLogoWrap = document.createElement('div'); mbLogoWrap.id = 'cn-mobile-logo';
    const mbHam = document.createElement('div'); mbHam.className = 'cn-mb-btn'; mbHam.innerHTML = IC.menu;
    mbHam.addEventListener('click', () => { document.querySelector('.mainDrawerButton')?.click(); });
    const mbLogoSep = document.createElement('div'); mbLogoSep.id = 'cn-mobile-logo-sep';
    const mbLogo = document.createElement('div'); mbLogo.innerHTML = LOGO_SVG;
    mbLogoWrap.appendChild(mbHam); mbLogoWrap.appendChild(mbLogoSep); mbLogoWrap.appendChild(mbLogo);
    mbLeft.appendChild(mbLogoWrap);

    const mbClock = document.createElement('div'); mbClock.className = 'cn-mb-clock';

    const mbRight = document.createElement('div'); mbRight.className = 'cn-mb-right';
    const mbCast = document.createElement('div'); mbCast.className = 'cn-mb-btn'; mbCast.innerHTML = IC.cast;
    mbCast.addEventListener('click', () => { document.querySelector('.headerCastButton')?.click(); });
    const mbSync = document.createElement('div'); mbSync.className = 'cn-mb-btn'; mbSync.innerHTML = IC.sync;
    mbSync.addEventListener('click', () => { document.querySelector('.headerSyncButton')?.click(); });
    const mbAvatar = document.createElement('div'); mbAvatar.className = 'cn-mb-avatar';
    applyAvatar(mbAvatar);
    mbAvatar.addEventListener('click', () => { window.location.hash = '#/mypreferencesmenu'; });
    mbRight.appendChild(mbCast); mbRight.appendChild(mbSync); mbRight.appendChild(mbAvatar);

    mobileBar.appendChild(mbLeft); mobileBar.appendChild(mbClock); mobileBar.appendChild(mbRight);
    mobile.appendChild(mobileLinks); mobile.appendChild(mobileBar);

    console.log('[Navbar] Navbar bouwen en toevoegen aan DOM.');
    document.body.appendChild(wrap);
    document.body.appendChild(mobile);

    startClock(clock, mbClock);

    function syncActive() {
        const h = window.location.hash;
        document.querySelectorAll('.cn-link, .cn-mobile-link').forEach(el => {
            const t = el.dataset.hash;
            el.classList.toggle('active', h === t || h.startsWith(t + '&') || h.startsWith(t + '?'));
        });

        const isHome = h === '#/home' || h === '#/' || h === '' || h.startsWith('#/home?');
        backBtn.classList.toggle('cn-back-visible', !isHome);

        const hideNavbar = window.location.hash.startsWith('#/video');
        setNavbarVisibility(hideNavbar);
    }
    syncActive();
    window.addEventListener('hashchange', syncActive);
    setInterval(() => {
        syncActive();
    }, 1000);
}

function setNavbarVisibility(hide) {

    [document.getElementById('custom-navbar-wrap'), document.getElementById('custom-navbar-mobile')].forEach(el => {
        if (!el) return;
        if (hide) {
            el.classList.remove('cn-visible');
            el.classList.add('cn-hidden');
        } else {
            el.classList.remove('cn-hidden');
            el.classList.add('cn-visible');
        }
    });

    // Toggle default Jellyfin header visibility
    document.querySelectorAll('.skinHeader').forEach(header => {
        if (hide) {
            // Override possible: .skinHeader { display: none !important; }
            header.style.setProperty('display', 'block', 'important');
        } else {
            // Hide when custom navbar is visible
            header.style.setProperty('display', 'none', 'important');
        }
    });
}

async function init() {
    await waitForElement('.headerUserButton');
    buildNavbar();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
