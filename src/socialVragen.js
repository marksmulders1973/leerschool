// Social-vragen-pool voor de deep-link-trechter (/v/<id>).
//
// Concept (Mark 2026-06-04): op social staat een vraag + jingle + "geef hier
// je antwoord". De kijker tikt op leerkwartier.app/v/<id> en belandt DIRECT op
// diezelfde vraag, nu interactief (A/B/C/D) mét de 3-niveau-uitleg → ervaart de
// USP op het moment van de hoogste nieuwsgierigheid, en wordt daarna naar de
// gratis oefentoets / account genudged.
//
// REGEL: eigen vragen "in stijl van" de Doorstroomtoets (Cito-vragen zijn
// auteursrechtelijk — niet kopiëren). VMBO-examenvragen mogen authentiek
// (examenblad.nl = openbaar) als `bron` ingevuld is.
//
// Format per vraag: { id, vak, vraag, options[], answer(index),
//   wrongHints[] (null voor juiste, denkprikkel voor fout), uitlegPad:{stappen,niveaus},
//   bron? (alleen bij authentieke examenvraag) }

export const SOCIAL_VRAGEN = {
  // ── Pilot 1: breuk-van-een-geheel met "rest"-valkuil ──────
  "rekenpuzzel1": {
    vak: "rekenen",
    vraag: "In een klas zitten **28 kinderen**. **¾ deel** gaat met de bus op excursie, de rest loopt. **Hoeveel kinderen lopen er?**",
    options: ["7", "21", "4", "14"],
    answer: 0,
    wrongHints: [
      null,
      "Dat is het aantal dat mét de bus gaat — er werd gevraagd wie er lóópt.",
      "Reken eerst uit hoeveel kinderen ¾ deel zijn.",
      "Dat is de helft — maar het gaat om ¼ deel dat loopt.",
    ],
    uitlegPad: {
      stappen: [
        { titel: "Eerst de bus", tekst: "¾ van 28 = 28 ÷ 4 × 3 = 7 × 3 = 21 kinderen met de bus." },
        { titel: "Dan de rest", tekst: "De rest loopt: 28 − 21 = 7 kinderen. (Of: lopen is ¼ deel → 28 ÷ 4 = 7.)" },
      ],
      niveaus: {
        basis: "¾ gaat met de bus (21 kinderen). De rest is ¼ deel: 28 ÷ 4 = 7 kinderen lopen.",
        simpeler: "Verdeel 28 in 4 gelijke stukken: 28 ÷ 4 = 7 per stuk. Drie stukken gaan met de bus, één stuk (7) loopt.",
        nogSimpeler: "28 kinderen in 4 bakjes = 7 per bakje. Drie bakjes met de bus, één bakje loopt. Hoeveel in dat ene bakje?",
      },
    },
  },

  // ── Pilot 2: procenten-korting met "korting vs prijs"-valkuil ──
  "rekenpuzzel2": {
    vak: "rekenen",
    vraag: "Een jas kost **€60**. In de uitverkoop is er **25% korting**. **Hoeveel betaal je nu?**",
    options: ["€45", "€15", "€35", "€48"],
    answer: 0,
    wrongHints: [
      null,
      "Dat is alléén de korting — maar je moet het bedrag betalen dat overblijft.",
      "Reken nog eens: 25% van €60 is de korting, die haal je van €60 af.",
      "Bijna — maar 25% van 60 is geen €12.",
    ],
    uitlegPad: {
      stappen: [
        { titel: "Korting uitrekenen", tekst: "25% is een kwart. Een kwart van €60 = 60 ÷ 4 = €15 korting." },
        { titel: "Van de prijs af", tekst: "€60 − €15 = €45. Dat betaal je." },
      ],
      niveaus: {
        basis: "25% korting = een kwart eraf. Een kwart van €60 is €15. €60 − €15 = €45.",
        simpeler: "Verdeel €60 in 4 stukken van €15. Eén stukje (€15) gaat eraf, dus je betaalt 3 stukjes: €45.",
        nogSimpeler: "Een kwart van €60 is €15 korting. Wat houd je over van €60 als er €15 af gaat?",
      },
    },
  },
};

// Pak een vraag op id; null als 'ie niet bestaat.
export function getSocialVraag(id) {
  if (!id) return null;
  return SOCIAL_VRAGEN[id] || null;
}
