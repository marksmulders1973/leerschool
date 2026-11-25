// 🎯 Doorstroomtoets-actie op de losse pagina's (Mark 25 nov 2026). Zelfde datum en bedrag als
// src/subscription/actie.js: pas je het daar aan, pas het dan ook hier aan.
// Werking: een element met data-actie="soort" krijgt tijdens de actie de actietekst. Na de
// einddatum doet dit script niets en staat de gewone prijs (€ 39) weer op de pagina.
(function () {
  var EIND = Date.parse("2027-02-12T23:59:59+01:00");
  var nu = Date.now();
  if (!(nu < EIND)) return;
  var dagen = Math.max(0, Math.ceil((EIND - nu) / 864e5));
  var nog = dagen <= 14 ? " Nog " + dagen + (dagen === 1 ? " dag." : " dagen.") : "";
  var T = {
    // brede strook boven aan een pagina
    strook: "<strong>Doorstroomtoets-actie:</strong> het Familie-pakket kost t/m 12 februari € 19,50 in plaats van € 39 voor 12 maanden." + nog,
    // de grote prijs op de prijspagina
    groot: '<span style="white-space:nowrap;font-size:.82em"><s style="opacity:.55;font-size:.55em;font-weight:700;margin-right:8px">€ 39</s>€ 19,50</span>',
    permaand: "actie t/m 12 februari",
    knop: "Kies Familie — nu € 19,50",
    kort: "nu € 19,50 per gezin (was € 39), t/m 12 februari",
    zin: "€ 19,50 in plaats van € 39 voor 12 maanden (Doorstroomtoets-actie, t/m 12 februari)",
    link: "Kies Familie — nu € 19,50 in plaats van € 39 →",
  };
  function vul() {
    var lijst = document.querySelectorAll("[data-actie]");
    for (var i = 0; i < lijst.length; i++) {
      var soort = lijst[i].getAttribute("data-actie");
      if (!T[soort]) continue;
      lijst[i].innerHTML = T[soort];
      lijst[i].hidden = false;
    }
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", vul); else vul();
})();
