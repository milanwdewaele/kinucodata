(function () {
  // ─── CONFIGURATIE ───────────────────────────────────────────────
  const FEEDBACK_API = 'https://feedback.kinuco.cc/api/feedback';

  const QUESTION = {
    id: 'q1',
    text: 'Vind je de startpagina overzichtelijk en duidelijk?',
    buttons: ['Ja', 'Nee, het kan beter']
  };
  // ────────────────────────────────────────────────────────────────

  const STORAGE_KEY = `jf_feedback_${QUESTION.id}`;
  const log = (...a) => console.log('[JF Feedback]', ...a);

  log('Script geladen. window.__jfFeedbackLoaded =', window.__jfFeedbackLoaded);

  if (window.__jfFeedbackLoaded === QUESTION.id) {
    log('Al geregistreerd voor deze vraag, stoppen.');
    return;
  }
  window.__jfFeedbackLoaded = QUESTION.id;
  log('Geregistreerd voor vraag:', QUESTION.id);

  function isDismissed() {
    try {
      const val = localStorage.getItem(STORAGE_KEY);
      log('isDismissed() check:', STORAGE_KEY, '=', val);
      return !!val;
    } catch (e) { return false; }
  }

  function saveDismissed() {
    try {
      localStorage.setItem(STORAGE_KEY, '1');
      log('saveDismissed() opgeslagen.');
    } catch (e) { log('saveDismissed() FOUT:', e); }
  }

  function removePopup() {
    const el = document.getElementById('jf-feedback-popup');
    if (!el) { log('removePopup(): geen popup gevonden in DOM.'); return; }
    el.classList.add('jf-feedback-hide');
    setTimeout(() => { el.remove(); log('Popup verwijderd uit DOM.'); }, 400);
  }

  function init() {
    log('init() aangeroepen.');
    if (isDismissed()) { log('init() gestopt: al dismissed.'); return; }
    if (document.getElementById('jf-feedback-popup')) { log('init() gestopt: popup al in DOM.'); return; }

    log('init() toont popup.');
    const popup = document.createElement('div');
    popup.id = 'jf-feedback-popup';
    popup.innerHTML = `
      <div id="jf-feedback-inner">
        <button id="jf-feedback-close" aria-label="Sluiten">✕</button>
        <p id="jf-feedback-question">${QUESTION.text}</p>
        <div id="jf-feedback-buttons">
          ${QUESTION.buttons.map((b, i) =>
            `<button class="jf-feedback-btn" data-answer="${b}" data-index="${i}">${b}</button>`
          ).join('')}
        </div>
        <p id="jf-feedback-thanks" style="display:none">Bedankt voor je feedback! 🙏</p>
      </div>
    `;

    document.body.appendChild(popup);
    log('Popup toegevoegd aan DOM.');

    document.getElementById('jf-feedback-close').addEventListener('click', () => {
      log('Sluitknop geklikt.');
      saveDismissed();
      removePopup();
    });

    document.querySelectorAll('.jf-feedback-btn').forEach(btn => {
      btn.addEventListener('click', async () => {
        const answer = btn.dataset.answer;
        log('Antwoord gekozen:', answer);
        saveDismissed();
        document.getElementById('jf-feedback-buttons').style.display = 'none';
        document.getElementById('jf-feedback-thanks').style.display = 'block';
        setTimeout(() => removePopup(), 2000);
        try {
          await fetch(FEEDBACK_API, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ questionId: QUESTION.id, question: QUESTION.text, answer })
          });
          log('Feedback verstuurd naar API.');
        } catch (e) { log('API fout:', e); }
      });
    });
  }

  const observer = new MutationObserver(() => {
    if (isDismissed()) return;
    if (document.querySelector('.homePage') || document.querySelector('#homeTab')) {
      log('Observer: homePage gedetecteerd, init() aanroepen.');
      init();
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });
  log('Observer geregistreerd.');

  if (document.readyState === 'complete') { log('DOM al klaar, direct init().'); init(); }
  else window.addEventListener('load', () => { log('load event, init().'); init(); });
})();
