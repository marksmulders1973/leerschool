// economieLeermomenten — de centrale "muntje → leerpad"-brug van Mijn Park.
//
// Elk economie-onderwerp dat in het park voorkomt (loon, belasting, btw, ...)
// staat hier één keer, met een kort kind-uitlegje (≤2 zinnen) en het leerpad
// waar je naartoe kunt om het écht te leren. Niveau-adaptief: groep 6-8 (po)
// krijgt ronde getallen + één begrip, VMBO (vo) krijgt de echte termen.
//
// HARDE REGEL: elk `leerpad`-id MOET een bestaand pad zijn (anders kapotte loop).
// Geverifieerd 2026-06-23: "financiele-vorming-po" en "geld-rekenen" bestaan.
// Voeg pas een nieuw id toe als dat leerpad ook echt bestaat (bv. "belasting-po"
// komt in Fase 2).

export const LEERMOMENTEN = {
  brutoloon: {
    titel: "Brutoloon",
    uitleg: {
      po: "Dit is je hele loon vóórdat er iets af gaat. Het bedrag dat je 'verdient'.",
      vo: "Het brutoloon is je loon vóór inhoudingen (loonheffing en premies).",
    },
    leerpad: { po: "financiele-vorming-po", vo: "financiele-vorming-po" },
  },
  loonbelasting: {
    titel: "Belasting",
    uitleg: {
      po: "Een stukje van je loon gaat naar de overheid. Daar betalen we samen wegen, scholen en ziekenhuizen van.",
      vo: "Loonheffing is belasting die meteen van je loon wordt ingehouden door je werkgever.",
    },
    leerpad: { po: "financiele-vorming-po", vo: "financiele-vorming-po" },
  },
  premie: {
    titel: "Premies",
    uitleg: {
      po: "Een klein deel gaat naar verzekeringen, zodat iedereen geld heeft als hij ziek of oud is.",
      vo: "Premies betaal je voor sociale verzekeringen (zorg, AOW, WW).",
    },
    leerpad: { po: "financiele-vorming-po", vo: "financiele-vorming-po" },
  },
  nettoloon: {
    titel: "Nettoloon",
    uitleg: {
      po: "Dit hou je écht over — dit komt in je spaarpot. Netto = bruto min de belasting.",
      vo: "Het nettoloon is wat je overhoudt: brutoloon min loonheffing en premies.",
    },
    leerpad: { po: "geld-rekenen", vo: "geld-rekenen" },
  },
  btw: {
    titel: "Btw",
    uitleg: {
      po: "In de prijs zit al een beetje belasting verstopt: de btw. Die betaal je mee als je iets koopt.",
      vo: "Btw (belasting toegevoegde waarde) zit in de verkoopprijs: 9% op o.a. dieren en eten, 21% op de rest.",
    },
    leerpad: { po: "geld-rekenen", vo: "geld-rekenen" },
  },
  inkoop: {
    titel: "Inkoopprijs",
    uitleg: {
      po: "Dit is wat het dier jou kost. Wil je later winst maken, dan moet je het voor méér verkopen.",
      vo: "De inkoopprijs zijn je kosten. Winst maak je pas als de verkoopprijs daarboven uitkomt.",
    },
    leerpad: { po: "geld-rekenen", vo: "geld-rekenen" },
  },
  winst: {
    titel: "Winst",
    uitleg: {
      po: "Winst is wat je overhoudt: de verkoopprijs min wat het jou kostte (de inkoop).",
      vo: "Winst = opbrengst − kosten. Verkoop je boven de inkoopprijs, dan maak je winst.",
    },
    leerpad: { po: "geld-rekenen", vo: "geld-rekenen" },
  },
};

// Geef het leermoment voor een sleutel, met de teksten al op het juiste niveau.
// Onbekende sleutel → null (de aanroeper toont dan gewoon geen 🔎).
export function leermoment(key, niveau = "po") {
  const m = LEERMOMENTEN[key];
  if (!m) return null;
  const niv = niveau === "vo" ? "vo" : "po";
  return {
    key,
    titel: m.titel,
    uitleg: m.uitleg[niv],
    leerpad: m.leerpad[niv],
  };
}
