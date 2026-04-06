# kinucodata

Centrale Jellyfin CSS & JS assets, gehost op [data.kinuco.cc](https://data.kinuco.cc).

Push naar `main` → Vercel deployt automatisch → Jellyfin pikt het op.

## Structuur

```
kинucodata/
└── jellyfin/
    ├── feedback.js    ← feedback popup script
    ├── feedback.css   ← feedback popup stijl
    └── (jouw eigen bestanden hier)
```

## Gebruik in Jellyfin

### JS Injector
Vervang de volledige inhoud van je inject script door:
```js
fetch('https://data.kinuco.cc/jellyfin/feedback.js')
  .then(r => r.text())
  .then(code => eval(code));
```

### Custom CSS
```css
@import url('https://data.kinuco.cc/jellyfin/feedback.css');
```

## Nieuwe vraag instellen
Pas in `jellyfin/feedback.js` het `QUESTION` object aan:
```js
const QUESTION = {
  id: 'q2',           // ← verhoog voor nieuwe vraag (reset popup voor alle gebruikers)
  text: 'Nieuwe vraag?',
  buttons: ['Ja', 'Nee']
};
```
