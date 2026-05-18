---
name: OBLITERATOR — file:// cache-gedrag bij dubbelklik index.html
description: Mark opent het mini-game prototype via dubbelklik op index.html; bij JS-wijzigingen moet de cache omzeild worden
type: reference
originSessionId: d6f078ee-1f39-4585-8a79-5bbc13715895
---
OBLITERATOR (`Desktop\promostudiebol\index.html`) wordt geopend via dubbelklik = `file://` protocol. Chrome cached `game.js` agressief in deze modus.

**Cache-busting trucs die NIET werken op file://:**
- `<script src="game.js?v=123">` — querystring breekt het pad: browser zoekt letterlijk een file genaamd `game.js?v=123` en vindt 'm niet → leeg scherm.
- `Cache-Control` meta-tags helpen niet altijd voor file://.

**Wat WEL werkt voor Mark:**
- Hard reload (Ctrl+Shift+R) na elke game.js-wijziging.
- Of: tab volledig sluiten en index.html opnieuw dubbelklikken.

**How to apply:** Als Mark zegt "ik zie de fix niet", denk eerst aan browser-cache. Vermeld in "klaar voor gebruik" altijd: sluit tab + heropen, of Ctrl+Shift+R.
