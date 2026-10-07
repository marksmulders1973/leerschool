// 🧭 Alle schermteksten van het ouderadvies-prototype op één plek.
//
// De maker leest ze in docs/audit/OUDERADVIES-TEKSTEN.md (gegenereerd uit dit
// bestand met scripts/audit/ouderadvies-teksten.mjs). Niets gaat live zonder
// zijn akkoord. Regels: B1, je-vorm, meedenkend, geen verkoop, geen
// schuldgevoel; "ouder of verzorger" i.p.v. alleen "ouder"; vijf minuten zegt
// alleen "gaat goed / wankel / nog niet", nooit een cijfer of niveau.

import { blokkenVoorGroep, setGroep } from "./nulmeting.js";

export const CONTACT = "hallo@leerkwartier.app";
export const SLOGAN = "Een kwartier per dag leren, een leven lang slimmer.";

const groepNaam = (g) => (String(g) === "brugklas" ? "de brugklas" : `groep ${g}`);
const jong = (g) => ["3", "4"].includes(String(g));

/** Hoe heet het blok voor het kind (kindertaal) en voor de volwassene. */
export function blokNamen(groep) {
  const b = blokkenVoorGroep(groep);
  const kind = {
    rekenen: "Rekenen",
    lezen: "Lezen",
    "begrijpend-lezen": "Lezen en snappen",
    taal: jong(groep) ? "Woorden schrijven" : "Spelling en woorden",
    studievaardigheden: "Opzoeken, tabellen en kaarten",
  };
  return b.map((x) => ({ nr: x.nr, vak: x.vak, kind: kind[x.vak] || x.naam, volwassene: x.naam }));
}

/** Alle teksten voor één groep + kindnaam. */
export function teksten(groep, naam = "je kind") {
  const g = String(groep || "");
  const gn = groepNaam(g);
  const blokken = blokNamen(g);
  const bl = (nr) => blokken.find((b) => b.nr === nr);
  const brugklasNoot = g === "brugklas"
    ? " Voor de brugklas gebruiken we voorlopig de vragen van groep 8: dan zie je of de basis van de basisschool stevig staat."
    : "";
  const derdeUitleg = ["7", "8", "brugklas"].includes(g)
    ? "studievaardigheden (opzoeken, tabellen en kaarten lezen)"
    : g === "3" ? "klanken en woordjes schrijven" : "spelling en woordenschat";

  return {
    // ── Ouderkant: eerste voorstel ─────────────────────────────────────────
    ouder: {
      paginaTitel: "Advies voor thuis",
      intro: `Ik denk graag met je mee. Je hoeft niets uit te zoeken: ik doe steeds een kort voorstel, jij zegt "goed zo" of je wisselt iets.`,
      adviesNulmeting: `Ik adviseer je om ${naam} te laten beginnen met een korte basistest, een nulmeting. Dan weten we ongeveer hoe het gaat.`,
      nulmetingUitleg: `De nulmeting bestaat uit drie blokjes van vijf minuten. Blokje 1: ${bl(1).volwassene}. Blokje 2: ${bl(2).volwassene}. Blokje 3: ${derdeUitleg}. Eén blokje per dag is genoeg. Wil ${naam} meer doen, dan mag dat.${brugklasNoot}`,
      eerlijk: "Eerlijk is eerlijk: vijf minuten per vak is kort. Het zegt alleen of het goed gaat, wankel is of nog niet lukt. Het is geen cijfer en geen niveau.",
      knopStart: `Laat ${naam} beginnen`,
      knopLater: "Later",
      nogNiets: `${naam} heeft nog niets gedaan. Dat is helemaal goed. Zodra het eerste blokje af is, krijg je hier een eerste voorstel.`,
      wachtOpBlok: (nr) => `Blokje ${nr} van 3 staat klaar voor ${naam}.`,
      // ── Na blok 1 ────────────────────────────────────────────────────────
      voorlopigKop: "Een eerste voorstel",
      voorlopig: (vak, uitslag) => `Na het eerste blokje (${vak}) zie ik: ${uitslag}. Daarom stel ik dit voor. De andere twee vakken volgen als ${naam} die blokjes heeft gedaan.`,
      // ── Na blok 3 ────────────────────────────────────────────────────────
      drietalKop: "Mijn voorstel voor de komende week",
      drietal: `Op basis van de nulmeting stel ik deze drie dingen voor. Goed zo, of wil je iets wisselen?`,
      wisselUitleg: "Tik op een voorstel om te wisselen. Je ziet dan twee andere mogelijkheden.",
      wisselKop: "Liever iets anders? Kies er één:",
      wisselTerug: "Toch niet wisselen",
      knopAkkoord: "Goed zo",
      akkoordKlaar: `Staat klaar. ${naam} ziet het bij "voor jou klaargezet".`,
      akkoordLokaal: `Staat klaar op dit apparaat. ${naam} ziet het hier als ${naam} gaat oefenen.`,
      reden: {
        "nog-niet": "Dit lukte in de nulmeting nog niet. Hier begint de les bij het begin.",
        wankel: "Dit ging half goed. Een korte les maakt het steviger.",
        onbekend: "Hier kwam de nulmeting niet aan toe. Een korte les laat zien hoe het gaat.",
        "niet-gemeten": "Dit past bij de groep, maar zat niet in de vijf minuten.",
        verder: "Wat in de nulmeting zat, ging goed. Dit is een stapje verder.",
        makkelijker: "Een stapje terug: hiermee wordt de basis steviger.",
        herhalen: "Dit ging al goed. Nog een keer oefenen maakt het vast.",
      },
      uitslagWoord: { goed: "gaat goed", wankel: "wankel", "nog-niet": "nog niet", onbekend: "niet aan toegekomen" },
      // ── Wekelijks vervolg ────────────────────────────────────────────────
      weekKop: "Deze week",
      weekGoed: "Dit ging goed:",
      weekNogNiet: "Dit nog niet:",
      weekNietBegonnen: "Hier kwamen jullie niet aan toe (geeft niets):",
      weekVolgende: "Volgende week stel ik dit voor. Goed zo?",
      weekLeeg: `${naam} heeft deze week nog niet geoefend. Dat gebeurt. Het voorstel van vorige week blijft gewoon staan.`,
      waarom: {
        "nog-niet-begonnen": "Blijft staan",
        "nog-een-keer": "Nog een keer, dan zit het steviger",
        "stap-verder": "Een stapje verder",
      },
      // ── Overig ───────────────────────────────────────────────────────────
      gratis: "Oefenen is gratis, en dat blijft het gegarandeerd tot en met 2031.",
      vragen: `Vragen of iets onduidelijk? Mail ons: ${CONTACT}.`,
      slogan: SLOGAN,
    },

    // ── Kindkant: nulmeting ──────────────────────────────────────────────────
    kind: {
      welkom: jong(g)
        ? `Hoi ${naam}! We doen een kort spelletje met vragen. Het duurt vijf minuten.`
        : `Hoi ${naam}! We doen een korte basistest van vijf minuten. Zo weten we waar je kunt beginnen.`,
      geenToets: jong(g)
        ? "Het is geen toets. Weet je iets niet? Tik dan op 'Weet ik niet'. Dat is goed."
        : "Het is geen toets en je krijgt geen cijfer. Weet je iets niet? Tik op 'Weet ik (nog) niet', dat helpt ons meer dan gokken.",
      blokKop: (nr) => `Blokje ${nr} van 3: ${bl(nr).kind}`,
      knopStart: "Begin",
      knopVerder: (nr) => `Ga verder met blokje ${nr}`,
      weetNiet: jong(g) ? "Weet ik niet" : "Weet ik (nog) niet",
      vraagVan: (i, n) => `Onderdeel ${i} van ${n}`,
      tijdOp: "De vijf minuten zijn om. Goed gewerkt!",
      blokKlaar: (nr) => `Blokje ${nr} is klaar! Het is bewaard.`,
      nogEen: (nr) => `Wil je nog een blokje doen (${bl(nr).kind})? Het hoeft niet, morgen mag ook.`,
      knopNogEen: "Ja, nog een",
      knopStoppen: "Nee, ik stop",
      allesKlaar: jong(g) ? "Alle drie de blokjes zijn klaar. Knap gedaan!" : "Alle drie de blokjes zijn klaar. Goed gedaan!",
      gestopt: "Je bent gestopt. Wat je deed is bewaard. Morgen kun je verder.",
      morgenWeer: "Voor vandaag is één blokje genoeg. Morgen kun je verder. Wil je toch nu verder? Dat mag.",
      knopToch: "Toch nu verder",
      opgeslagenHier: "Bewaard op dit apparaat.",
      opgeslagenOveral: "Bewaard. Je kunt ook op een ander apparaat verder.",
      klaargezetKop: "Voor jou klaargezet",
      klaargezetLeeg: "Er staat nog niets klaar.",
    },

    // ── Wie oefent er? (één apparaat, meerdere profielen) ───────────────────
    profielen: {
      kop: "Wie gaat er oefenen?",
      sub: "Tik op je naam. Je hoeft niet in te loggen.",
      kindToevoegen: "Kind toevoegen",
      naamLabel: "Voornaam",
      groepLabel: "Groep",
      opslaan: "Toevoegen",
      ouderKnop: "Voor ouder of verzorger",
      drempelKop: "Even checken",
      drempelUitleg: "Dit deel is voor de ouder of verzorger. Los de som op om verder te gaan.",
      drempelPinUitleg: "Dit deel is voor de ouder of verzorger. Typ je pincode.",
      drempelFout: "Dat klopt niet. Probeer het nog eens.",
      pinInstellen: "Wil je liever een pincode van 4 cijfers? Dan hoef je geen som meer te maken.",
      pinOpslaan: "Pincode bewaren",
      pinNoot: "Dit is een drempel, geen slot: het voorkomt dat een kind er per ongeluk in komt.",
      terugNaarKind: "Terug naar oefenen",
    },

    // ── Koppelen (eigen telefoon, school) ───────────────────────────────────
    koppelen: {
      ouderKop: `${naam} oefent op een eigen apparaat?`,
      ouderUitleg: `Stuur ${naam} de code. ${naam} tikt hem in bij "Koppelcode van thuis of school?". Klaar.`,
      codeGeldig: "De code is 48 uur geldig en werkt één keer.",
      schoolKop: "Op school of op een ander apparaat verder?",
      schoolUitleg: `Met de kind-sleutel kan ${naam} ook op een schoolcomputer verder waar het thuis gebleven was. De sleutel geeft alleen toegang tot het oefenen van ${naam}, niet tot jouw gegevens.`,
      schoolUitlogKnop: "Klaar op deze computer: vergeet mij",
      schoolUitlogKlaar: "Deze computer is je weer vergeten. Je oefenwerk is bewaard.",
      fout: {
        leeg: "Typ de hele code. Hij heeft 6 tekens.",
        verlopen: "Deze code werkt niet meer. Een code is 48 uur geldig en werkt één keer. Vraag thuis (of aan je juf of meester) om een nieuwe.",
        alGekoppeld: "Je bent op dit apparaat al gekoppeld. Je hoeft niets meer te doen.",
        geenVerbinding: "Het lukt nu niet om verbinding te maken. Probeer het zo nog eens.",
      },
    },
  };
}

export { setGroep };
