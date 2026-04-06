// Custom Home Hero for Jellyfin
// Werkt met de JavaScript Injector plugin.
// Past alleen de web-UI aan, geen server-API nodig.

const FLAG_KEY = 'custom-home-hero-applied';
if (window[FLAG_KEY]) {
  console.log('[HomeHero] Al eerder uitgevoerd, stoppen.');
  return;
}
window[FLAG_KEY] = true;
console.log('[HomeHero] Script gestart.');

function waitForElement(selector, timeout = 10000) {
  console.log(`[HomeHero] Wachten op element: "${selector}" (timeout: ${timeout}ms)`);
  return new Promise(resolve => {
    const existing = document.querySelector(selector);
    if (existing) {
      console.log(`[HomeHero] Element direct gevonden: "${selector}"`);
      return resolve(existing);
    }

    const observer = new MutationObserver((_muts, obs) => {
      const el = document.querySelector(selector);
      if (el) {
        obs.disconnect();
        console.log(`[HomeHero] Element gevonden via MutationObserver: "${selector}"`);
        resolve(el);
      }
    });

    observer.observe(document.documentElement, {
      childList: true,
      subtree: true
    });

    setTimeout(() => {
      observer.disconnect();
      console.warn(`[HomeHero] Timeout: element "${selector}" niet gevonden binnen ${timeout}ms`);
      resolve(null);
    }, timeout);
  });
}

function getUserName() {
  const btn = document.querySelector('.headerUserButton');
  if (!btn) {
    console.warn('[HomeHero] .headerUserButton niet gevonden, gebruik fallback "Gebruiker".');
    return 'Gebruiker';
  }
  const raw = (btn.getAttribute('title') || btn.textContent || 'gebruiker').trim();
  const capitalized = raw.charAt(0).toUpperCase() + raw.slice(1);
  console.log(`[HomeHero] Gebruikersnaam gevonden: "${capitalized}"`);
  return capitalized;
}

function getGreeting() {
  const hour = new Date().getHours();
  let greeting;
  if (hour < 6) greeting = 'Goedenacht';
  else if (hour < 12) greeting = 'Goedemorgen';
  else if (hour < 18) greeting = 'Goedemiddag';
  else greeting = 'Goedenavond';
  console.log(`[HomeHero] Begroeting: "${greeting}" (uur: ${hour})`);
  return greeting;
}

function pickSubtitle() {
  const options = [
'Waar kijken we vandaag naar?',
'Klaar voor een nieuwe filmavond?',
'Pak er iets lekkers bij en druk op play.',
'Tijd om iets nieuws te ontdekken.',
'Laat de popcorn maar knallen.',
'Films, series, of gewoon zappen? Jij kiest.',
'Wat wordt het vanavond?',
'De afstandsbediening ligt klaar.',
'Zin in een avondje wegdromen?',
'Een goede film lost alles op.',
'Waar gaan we deze keer naartoe?',
'Vanavond ben jij de regisseur.',
'Wat staat er op de watchlist?',
'Ontspan, de rest doet er niet toe.',
'Tijd voor jouw moment.',
'Nog eentje voor het slapengaan?',
'Wat ga je verrassen met vanavond?',
'Spoilers verboden, genieten verplicht.',
'Kies je al? Of scrollen we weer een uur?',
'Nieuw binnen of een oude favoriet?',
'Even alles van je afzetten?',
'Wat zet jij op het scherm vanavond?',
'Alleen of gezelschap erbij?'
  ];
  const picked = options[Math.floor(Math.random() * options.length)];
  console.log(`[HomeHero] Gekozen ondertitel: "${picked}"`);
  return picked;
}

function getTimeIcon() {
  const hour = new Date().getHours();

  if (hour >= 5 && hour < 12) return '\u2615\uFE0F';   // ☕️ ochtend
  if (hour >= 12 && hour < 18) return '\u2600\uFE0F';  // ☀️ middag
  if (hour >= 18 && hour < 22) return '\u{1F319}';     //  avond
  return '\u{1F311}';                                  //  nacht
}

function injectStyles() {
  if (document.getElementById('custom-home-hero-style')) {
    console.log('[HomeHero] Stijlen al aanwezig, overgeslagen.');
    return;
  }

  console.log('[HomeHero] Stijlen injecteren...');
  const style = document.createElement('style');
  style.id = 'custom-home-hero-style';
  style.textContent = `
    .custom-home-hero {
      position: relative;
      margin: 0 0 0.5rem 0;
      padding: 1.4rem 2rem;
      padding-left: max(env(safe-area-inset-left),3.3%);
      display: flex;
      align-items: center;
      gap: 1.1rem;
    }

    .custom-home-hero-icon {
      flex-shrink: 0;
      width: 46px;
      height: 46px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.07);
      border: 1px solid rgba(255, 255, 255, 0.1);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.4rem;
    }

    .custom-home-hero-text {
      display: flex;
      flex-direction: column;
      gap: .2rem;
    }

    .custom-home-hero-title {
      font-size: 1.55rem;
      font-weight: 600;
      color: #ffffff;
      letter-spacing: .01em;
      line-height: 1.2;
    }

    .custom-home-hero-subtitle {
      font-size: .88rem;
      color: rgba(255, 255, 255, 0.45);
    }

    @media (max-width: 900px) {
      .custom-home-hero {
        padding: 1rem 1.2rem;
      }
      .custom-home-hero-title {
        font-size: 1.25rem;
      }
    }
  `;
  document.head.appendChild(style);
  console.log('[HomeHero] Stijlen succesvol geïnjecteerd.');
}

function createHeroElement() {
  console.log('[HomeHero] Hero-element aanmaken...');
  const userName = getUserName();
  const greeting = getGreeting();
  const subtitle = pickSubtitle();

  const wrapper = document.createElement('div');
  wrapper.className = 'custom-home-hero';

  const icon = document.createElement('div');
  icon.className = 'custom-home-hero-icon';
  icon.textContent = getTimeIcon();

  const textBlock = document.createElement('div');
  textBlock.className = 'custom-home-hero-text';

  const titleEl = document.createElement('div');
  titleEl.className = 'custom-home-hero-title';
  titleEl.textContent = `${greeting}, ${userName}`;

  const subtitleEl = document.createElement('div');
  subtitleEl.className = 'custom-home-hero-subtitle';
  subtitleEl.textContent = subtitle;

  textBlock.appendChild(titleEl);
  textBlock.appendChild(subtitleEl);
  wrapper.appendChild(icon);
  wrapper.appendChild(textBlock);

  console.log('[HomeHero] Hero-element aangemaakt.');
  return wrapper;
}

async function applyToHome() {
  console.log('[HomeHero] applyToHome() aangeroepen.');
  const container = await waitForElement('.homeSectionsContainer, .sectionsContainer');

  if (!container) {
    console.error('[HomeHero] Container niet gevonden. Hero kan niet worden ingevoegd.');
    return;
  }

  if (container.dataset.customHomeHero === '1') {
    console.log('[HomeHero] Hero al aanwezig in deze container, overgeslagen.');
    return;
  }

  container.dataset.customHomeHero = '1';
  console.log('[HomeHero] Container gevonden:', container.className);

  injectStyles();

  const hero = createHeroElement();
  container.insertBefore(hero, container.firstChild);
  console.log('[HomeHero] Hero succesvol ingevoegd in de pagina.');
}

function isHomeRoute() {
  const hash = window.location.hash;
  const result = hash === '#/home' || hash.startsWith('#/home?') || hash === '' || hash === '#/';
  console.log(`[HomeHero] isHomeRoute() → ${result} (hash: "${hash}")`);
  return result;
}

function maybeApply() {
  console.log('[HomeHero] maybeApply() aangeroepen.');
  if (!isHomeRoute()) {
    console.log('[HomeHero] Geen home-route, niets doen.');
    return;
  }
  console.log('[HomeHero] Home-route gedetecteerd, hero inladen over 600ms...');
  setTimeout(applyToHome, 600);
}

// DOMContentLoaded is bij injectie vaak al voorbij — direct aanroepen
if (document.readyState === 'loading') {
  console.log('[HomeHero] DOM nog aan het laden, wachten op DOMContentLoaded.');
  document.addEventListener('DOMContentLoaded', () => {
    console.log('[HomeHero] DOMContentLoaded event ontvangen.');
    maybeApply();
  });
} else {
  console.log('[HomeHero] DOM al geladen, direct uitvoeren.');
  maybeApply();
}

window.addEventListener('hashchange', () => {
  console.log('[HomeHero] hashchange event ontvangen.');
  maybeApply();
});
