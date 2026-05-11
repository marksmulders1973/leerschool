// Leerpad: Pincode 7e ed. VMBO-GT klas 4 - hoofdstuk 4 (Werk aan de winkel!)
// Uitgebreide versie 2026-05-09: 7 stappen voor compleet examen-blok.

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  geld: "#69f0ae",
  warm: "#ffd54f",
  alt: "#ff7043",
  vraag: "#42a5f5",
  aanbod: "#ef5350",
  rood: "#ff5252",
  oranje: "#ffa040",
  grijs: "#90a4ae",
};

const stepEmojis = ["👷", "📝", "⚖️", "🤝", "📉", "⏱️", "🛡️"];

const chapters = [
  { letter: "A", title: "Werken", emoji: "👷", from: 0, to: 1 },
  { letter: "B", title: "Markt en CAO", emoji: "🤝", from: 2, to: 3 },
  { letter: "C", title: "Werkloosheid", emoji: "📉", from: 4, to: 5 },
  { letter: "D", title: "Bescherming", emoji: "🛡️", from: 6, to: 6 },
];

const steps = [
  // ─── Stap 1: Werkgevers en werknemers ─────────────────
  {
    title: "Werkgever en werknemer — wie doet wat?",
    explanation: "**Werknemer**: werkt in dienst van een werkgever en krijgt loon.\n**Werkgever**: betaalt loon, geeft opdrachten, draagt het bedrijfsrisico.\n\n**Verplichtingen werkgever**:\n• Loon op tijd uitbetalen\n• Veilige werkplek bieden\n• Loonheffing inhouden + afdragen\n• Vakantiedagen + vakantiegeld\n\n**Verplichtingen werknemer**:\n• Werk goed en op tijd uitvoeren\n• Bedrijfsregels naleven\n• Bij ziekte zo snel mogelijk melden\n\n**Soorten contracten**:\n\n**Vast contract (onbepaalde tijd)**\n• Meeste zekerheid\n• Ontslag is moeilijker (UWV-toestemming, opzegtermijn)\n• Aantrekkelijk voor hypotheek\n\n**Tijdelijk contract (bepaalde tijd)**\n• Voor X maanden of 1-3 jaar\n• Loopt automatisch af\n• Maximaal **3 contracten in 3 jaar** (Wet Werk en Zekerheid), daarna automatisch vast\n\n**Oproepcontract / nuluren**\n• Werken alleen als werkgever je belt\n• Geen vaste uren = geen vast inkomen = onzekerheid\n\n**Uitzendcontract**\n• Via uitzendbureau (Randstad, Tempo-Team)\n• Bureau betaalt loon, jij werkt voor de inlener\n• Vaak voor pieken, tijdelijke vervangingen\n\n**Zelfstandige (zzp)**\n• Geen werknemer maar opdrachtnemer\n• Doet klussen voor opdrachtgevers\n• Regelt zelf belasting + verzekeringen\n\n**Voor jongeren — eerste baantje**:\n• Bijbaan van 13-15 jaar: max 2-3 uur per dag, niet na 19:00\n• 16-17 jaar: ruimer, max 8 uur per dag, geen nachtwerk\n• Vanaf 18: alle regels gelden\n\n**Loonstrookje** belangrijk om te lezen:\n• Brutoloon - inhoudingen = nettoloon\n• Vakantiegeld (8% van jaarloon) staat apart of komt in mei",
    svg: `<svg viewBox="0 0 320 200">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">WERKGEVER ↔ WERKNEMER</text>
<rect x="30" y="40" width="100" height="55" rx="8" fill="${COLORS.paper}" stroke="${COLORS.vraag}" stroke-width="1.5"/>
<text x="80" y="62" text-anchor="middle" fill="${COLORS.vraag}" font-size="22" font-family="Arial">🏢</text>
<text x="80" y="84" text-anchor="middle" fill="${COLORS.vraag}" font-size="11" font-family="Arial" font-weight="bold">werkgever</text>
<line x1="135" y1="65" x2="180" y2="65" stroke="${COLORS.warm}" stroke-width="2"/>
<text x="158" y="58" text-anchor="middle" fill="${COLORS.warm}" font-size="9" font-family="Arial">contract</text>
<text x="158" y="82" text-anchor="middle" fill="${COLORS.geld}" font-size="9" font-family="Arial">loon ←→ werk</text>
<rect x="190" y="40" width="100" height="55" rx="8" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1.5"/>
<text x="240" y="62" text-anchor="middle" fill="${COLORS.geld}" font-size="22" font-family="Arial">👷</text>
<text x="240" y="84" text-anchor="middle" fill="${COLORS.geld}" font-size="11" font-family="Arial" font-weight="bold">werknemer</text>
<text x="160" y="120" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">Soorten contracten</text>
<text x="160" y="142" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">vast · tijdelijk · oproep · uitzend · zzp</text>
<text x="160" y="170" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">+ minimumloon · vakantiegeld 8% · ziektewet</text>
</svg>`,
    checks: [
      {
        q: "Hoeveel **vakantiegeld** krijg je standaard in Nederland?",
        options: ["8% van het jaarloon", "10% van het maandloon", "Een vast bedrag €500", "Niets"],
        answer: 0,
        wrongHints: [null, "Wel een %, maar over JAAR-loon.", "Geen vast bedrag.", "Vakantiegeld is wettelijk geregeld."],
        uitlegPad: {
          stappen: [{ titel: "8% wettelijk", tekst: "Vakantiegeld = wettelijk MINIMAAL 8% van je BRUTO JAARLOON. Wordt meestal in mei uitbetaald, soms gespreid. Standaard regeling in elke baan." }],
          woorden: [{ woord: "vakantiegeld", uitleg: "Wettelijk recht op 8% extra over jaarloon. Bedoeld voor vakantiekosten." }, { woord: "8%-norm", uitleg: "Minimumtarief. CAO mag hoger zijn (sommige sectoren 8,33%)." }],
          theorie: "Berekening: bruto jaarloon €30.000 × 8% = €2.400 vakantiegeld. Werkgever houdt elke maand 8% apart in reserve, betaalt 1× per jaar uit (meestal mei). Aparte loonstrook.",
          voorbeelden: [{ type: "fulltimer", tekst: "Bruto €2.500/mnd × 12 = €30k jaarloon → €2.400 vakantiegeld in mei." }, { type: "bijbaan", tekst: "Bijbaan €200/mnd × 12 = €2.400 jaarloon → €192 vakantiegeld." }],
          basiskennis: [{ onderwerp: "Op jaarloon", uitleg: "8% × JAAR, niet maand. Soms in maandloon verwerkt — check loonstrookje." }],
          niveaus: { basis: "8% jaarloon. A.", simpeler: "Vakantiegeld = 8% van je bruto jaarloon. Wettelijk minimum. = A.", nogSimpeler: "8% = A." },
        },
      },
      {
        q: "Wat is een **zzp'er**?",
        options: ["Zelfstandige zonder personeel — werkt voor opdrachtgevers", "Vaste werknemer", "Iemand die uitzendwerk doet", "Werkloze"],
        answer: 0,
        wrongHints: [null, "Vast = werknemer.", "Uitzend valt onder uitzendbureau.", "Zzp werkt juist actief."],
        uitlegPad: {
          stappen: [{ titel: "Zelfstandige, geen team", tekst: "ZZP = Zelfstandige Zonder Personeel. Werkt voor klanten/opdrachtgevers maar IS GEEN WERKNEMER. Regelt zelf belasting, verzekering, pensioen, vakantie." }],
          woorden: [{ woord: "zzp'er", uitleg: "Zelfstandige zonder personeel. Eigen ondernemer, ingeschreven bij KvK." }, { woord: "opdrachtgever", uitleg: "Klant van een zzp'er. Geen werkgever — geen loonheffing, geen vakantiegeld." }],
          theorie: "Voordelen: vrijheid, eigen tarief, zelfstandigenaftrek (€5k+ belastingvoordeel). Nadelen: geen werkloosheidsuitkering, zelf pensioen/AOV regelen, geen vakantiegeld, geen werkgever die jou ondersteunt.",
          voorbeelden: [{ type: "praktijk", tekst: "Webdesigner-zzp bouwt sites voor 8 klanten/jaar. Stuur factuur per project. Regelt eigen belasting + verzekering." }],
          basiskennis: [{ onderwerp: "Niet werkloos", uitleg: "Zzp werkt actief — heeft alleen geen vaste werkgever. Tegenovergesteld van werkloos." }],
          niveaus: { basis: "Zelfstandige zonder personeel. A.", simpeler: "Zzp = je werkt voor jezelf, voor verschillende opdrachtgevers. Geen baas. = A.", nogSimpeler: "Zelfstandig = A." },
        },
      },
      {
        q: "Welk contract geeft de **meeste zekerheid**?",
        options: ["Vast (onbepaalde tijd)", "Oproep", "Uitzend", "Tijdelijk 6 maanden"],
        answer: 0,
        wrongHints: [null, "Oproep = werken als baas belt.", "Uitzend = via bureau, snel klaar.", "Tijdelijk eindigt na 6 mnd."],
        uitlegPad: {
          stappen: [{ titel: "Vast = vrijwel onontslagbaar", tekst: "Vast contract (onbepaalde tijd) = grootste zekerheid: geen einddatum, opzeg-procedure beschermt jou, ontslag vraagt UWV of rechter. Alle andere contractvormen zijn beperkter." }],
          woorden: [{ woord: "vast contract", uitleg: "Onbepaalde tijd. Geen einddatum. Wettelijk beschermd tegen willekeurig ontslag." }, { woord: "ontslagbescherming", uitleg: "Reeks regels die voorkomen dat werkgever zomaar mag ontslaan — UWV-route of vaststellingsovereenkomst." }],
          theorie: "Vast voordelen: voorspelbaar inkomen, hypotheek mogelijk, ontslagbescherming, recht op transitievergoeding. Nadelen: werkgever moet 'goede reden' hebben voor ontslag — anders niet mogelijk.",
          voorbeelden: [{ type: "vast", tekst: "Vast: werkgever wil je weg → moet bedrijfseconomische reden hebben + UWV-toestemming + transitievergoeding." }, { type: "tijdelijk", tekst: "Tijdelijk: contract loopt 6 mnd → eindigt automatisch zonder reden." }],
          basiskennis: [{ onderwerp: "Hypotheek", uitleg: "Banken willen vooral vast contract voor hypotheek — meer zekerheid voor terugbetaling." }],
          niveaus: { basis: "Vast = meeste zekerheid. A.", simpeler: "Vast contract = werkgever mag je niet zomaar wegsturen. Andere contracten lopen makkelijker af. = A.", nogSimpeler: "Vast = A." },
        },
      },
      {
        q: "Hoeveel **tijdelijke contracten** mag een werkgever in 3 jaar maximaal geven?",
        options: ["3 contracten in 3 jaar (daarna vast)", "1 contract", "Onbeperkt", "10 contracten"],
        answer: 0,
        wrongHints: [null, "Te beperkend.", "Niet onbeperkt — wettelijke regel.", "Veel te veel — 3 max."],
        uitlegPad: {
          stappen: [{ titel: "Ketenregeling 3×3×3", tekst: "Wet Werk en Zekerheid: max 3 tijdelijke contracten in 3 jaar bij dezelfde werkgever. Daarna AUTOMATISCH vast contract. Doel: voorkomen 'eeuwige tijdelijken'." }],
          woorden: [{ woord: "ketenregeling", uitleg: "Wet die opeenvolgende tijdelijke contracten beperkt: 3 contracten / 3 jaar / 6 mnd pauze tussen ketens." }],
          theorie: "Werkgevers proberen soms ontwijken via uitzend-constructies of pauze van 6 maanden tussen ketens. Sinds 2020 strenger geworden — pauze van >6 mnd nodig om opnieuw te starten.",
          voorbeelden: [{ type: "vast worden", tekst: "Contract 1 jaar → 2e van 1 jaar → 3e van 1 jaar (3 in 3 jr). 4e moet vast zijn." }, { type: "ontwijking", tekst: "Sommige werkgevers ontslaan na 3e contract → 6 mnd pauze → opnieuw tijdelijk. Onethisch, soms juridisch wankel." }],
          basiskennis: [{ onderwerp: "Niet onbeperkt", uitleg: "Wet beperkt om misbruik te voorkomen. Anders zou werkgever altijd tijdelijk geven." }],
          niveaus: { basis: "3 in 3 jaar. A.", simpeler: "Max 3 tijdelijke contracten in 3 jaar bij dezelfde werkgever. Daarna vast. = A.", nogSimpeler: "3×3 = A." },
        },
      },
      {
        q: "Een 14-jarige bijbaan: hoeveel uur per dag mag je maximaal werken?",
        options: ["2-3 uur (jeugd-arbeidsregels)", "8 uur", "12 uur", "Onbeperkt"],
        answer: 0,
        wrongHints: [null, "8 uur geldt vanaf 16.", "Niet voor jeugd.", "Wel beperkingen."],
        uitlegPad: {
          stappen: [{ titel: "Jeugd-arbeidsregels", tekst: "13-15 jaar: max 2-3 uur per dag, alleen licht werk (kranten, vakkenvullen, oppassen). Niet na 19:00. School-uren beschermd. 16-17: ruimer. Vanaf 18: alle regels van volwassenen." }],
          woorden: [{ woord: "jeugd-arbeidswet", uitleg: "Wet die werk voor minderjarigen beperkt voor onderwijs + gezondheid." }, { woord: "licht werk", uitleg: "Lichte fysieke + mentale belasting: vakkenvullen, kranten, oppassen. Geen zware machine of nachtwerk." }],
          theorie: "Wet bedoeld om school + ontwikkeling te beschermen. Werkgever die regels overtreedt → boete. Bij twijfel check Arbeidsinspectie of jeugdwerkregels.nl.",
          voorbeelden: [{ type: "13-jr", tekst: "Vakkenvullen 2-3 uur op zaterdag + 2-3 uur op woensdag. Niet 's avonds. Schoolwerk eerst." }, { type: "16-jr", tekst: "Bijbaan tot 8 uur per dag toegestaan, ook 's avonds (tot 22:00)." }],
          basiskennis: [{ onderwerp: "Niet 8 uur", uitleg: "8 uur geldt vanaf 16 jaar. Voor jongeren strenger." }],
          niveaus: { basis: "2-3 uur jeugd. A.", simpeler: "Op je 14e mag je maar 2-3 uur per dag werken — niet 's avonds. Wet beschermt schoolwerk. = A.", nogSimpeler: "Beperkt = A." },
        },
      },
      {
        q: "Wat hoort op een **loonstrookje**?",
        options: ["Brutoloon, inhoudingen, nettoloon en vakantiegeld", "Alleen het bedrag op je rekening", "Alleen de werkgevers-naam", "Niets verplicht"],
        answer: 0,
        wrongHints: [null, "Te weinig.", "Wel meer details.", "Verplichte informatie."],
        uitlegPad: {
          stappen: [{ titel: "Verplichte items loonstrookje", tekst: "Loonstrookje verplicht bevat: brutoloon, inhoudingen (loonheffing, AOW-premie, ZVW, WLZ), nettoloon, vakantiegeld-opbouw, gewerkte uren, periode." }],
          woorden: [{ woord: "loonstrookje", uitleg: "Maandelijks overzicht van loon + inhoudingen. Verplicht voor elke werkgever." }, { woord: "inhoudingen", uitleg: "Bedragen die werkgever inhoudt op brutoloon: loonheffing, sociale premies." }],
          theorie: "Check loonstrookje altijd! Veelgemaakte fouten: verkeerde uren, gemiste toeslagen, verkeerd belastingtarief. Bij twijfel → werkgever of vakbond.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Bruto €2.500 − loonheffing €600 − premies €100 = netto €1.800. + vakantiegeld-opbouw €200. = €2.000 totaal gewaardeerd." }],
          basiskennis: [{ onderwerp: "Niet alleen bedrag", uitleg: "Werkgever MOET specificatie geven. 'Alleen het bedrag' is niet wettig — vraag uitleg." }],
          niveaus: { basis: "Bruto + inhoudingen + netto + vakantie. A.", simpeler: "Loonstrookje toont brutoloon, wat eraf gaat, netto-uitkomst, vakantieopbouw. Wettelijk verplicht. = A.", nogSimpeler: "Veel details = A." },
        },
      },
    ],
  },
  // ─── Stap 2: Arbeidsovereenkomst en regels ─────────────
  {
    title: "Arbeidsovereenkomst — wat staat erin?",
    explanation: "Een **arbeidsovereenkomst** is het contract tussen werkgever en werknemer. Wettelijk verplichte items:\n\n**Persoonsgegevens**:\n• Naam + adres werkgever\n• Naam + adres werknemer\n• Geboortedatum\n\n**Werk**:\n• Functie en taken\n• Plek van werken (kantoor, thuis, beide)\n• Datum van indiensttreding\n• Onbepaalde of bepaalde tijd (en zo ja, hoe lang)\n\n**Tijd**:\n• Aantal uren per week\n• Werktijden\n• **Proeftijd** (max 1 maand bij contract &lt; 2 jr; max 2 maanden bij contract ≥ 2 jr)\n\n**Loon**:\n• Brutoloon per maand of uur\n• Wanneer betaald (meestal eind v/d maand)\n• Vakantiegeld + vakantiedagen\n• Extra's: bonus, 13e maand, reiskostenvergoeding\n\n**Rechten en verplichtingen**:\n• CAO van toepassing (zo ja, welke)\n• Pensioenregeling\n• Geheimhoudingsplicht\n• Concurrentiebeding (mag niet meteen bij concurrent werken na ontslag)\n• Opzegtermijn\n\n**Proeftijd**:\n• Eerste periode waarin beide partijen ZONDER reden mogen stoppen\n• Schriftelijk overeengekomen\n• Bij contract &lt; 6 mnd: GEEN proeftijd toegestaan\n\n**Beëindiging arbeidsovereenkomst**:\n• Zelf opzeggen (met opzegtermijn)\n• Werkgever ontslaat (heeft sterke reden + UWV/rechter nodig)\n• Met wederzijds goedvinden (vaststellingsovereenkomst, vaak met vergoeding)\n• Tijdelijk contract loopt af\n• Met pensioen gaan\n• Faillissement werkgever\n\n**Transitievergoeding**: bij ontslag (na 1 jaar werk) heb je recht op een vergoeding — ongeveer 1/3 maandloon per jaar dienst.",
    svg: `<svg viewBox="0 0 320 220">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">ARBEIDSOVEREENKOMST</text>
<rect x="30" y="40" width="260" height="40" rx="6" fill="${COLORS.paper}" stroke="${COLORS.vraag}" stroke-width="1.2"/>
<text x="160" y="58" text-anchor="middle" fill="${COLORS.vraag}" font-size="11" font-family="Arial" font-weight="bold">PERSOON · WERK · TIJD · LOON</text>
<text x="160" y="72" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">verplichte onderdelen</text>
<rect x="30" y="90" width="125" height="50" rx="6" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1.2"/>
<text x="92" y="108" text-anchor="middle" fill="${COLORS.geld}" font-size="11" font-family="Arial" font-weight="bold">PROEFTIJD</text>
<text x="92" y="123" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">max 1 of 2 mnd</text>
<text x="92" y="135" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">(niet bij &lt;6 mnd contr.)</text>
<rect x="165" y="90" width="125" height="50" rx="6" fill="${COLORS.paper}" stroke="${COLORS.warm}" stroke-width="1.2"/>
<text x="227" y="108" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">CAO</text>
<text x="227" y="123" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">indien van toepassing</text>
<text x="227" y="135" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">extra rechten</text>
<rect x="30" y="150" width="260" height="50" rx="6" fill="rgba(255,213,79,0.10)" stroke="${COLORS.warm}" stroke-width="1.2" stroke-dasharray="3 2"/>
<text x="160" y="170" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">EINDE: OPZEGGEN</text>
<text x="160" y="185" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">zelf · ontslag · wederzijds · pensioen</text>
<text x="160" y="197" text-anchor="middle" fill="${COLORS.geld}" font-size="9" font-family="Arial">+ transitievergoeding</text>
</svg>`,
    checks: [
      {
        q: "Bij een **contract van 1 jaar**, hoe lang mag de proeftijd maximaal zijn?",
        options: ["1 maand", "2 maanden", "6 maanden", "Geen proeftijd"],
        answer: 0,
        wrongHints: [null, "2 mnd alleen bij ≥2 jaar.", "Veel te lang.", "Wel proeftijd toegestaan bij 1 jaar."],
        uitlegPad: {
          stappen: [{ titel: "Proeftijd-tabel", tekst: "Contract < 6 mnd: GEEN proeftijd. 6 mnd-2 jr (incl 1 jaar): max 1 mnd. ≥ 2 jr of onbepaalde tijd: max 2 mnd. Schriftelijk vastleggen." }],
          woorden: [{ woord: "proeftijd", uitleg: "Periode waarin werkgever EN werknemer zonder reden mogen stoppen." }],
          theorie: "Doel: beide partijen kunnen kijken of het bevalt zonder vol contract-risico. Werkt wederzijds — ook werknemer mag zonder reden weg. Niet schriftelijk = geen proeftijd geldig.",
          voorbeelden: [{ type: "1 jaar contract", tekst: "Werkgever schrijft '1 mnd proeftijd' in contract → werknemer kan in eerste maand zonder reden weg, werkgever ook." }, { type: "3 mnd contract", tekst: "Geen proeftijd toegestaan! Te kort contract." }],
          basiskennis: [{ onderwerp: "Niet 2 mnd", uitleg: "2 maanden alleen bij contract ≥ 2 jaar. Bij 1 jaar = 1 maand max." }],
          niveaus: { basis: "1 maand bij 1-jaar contract. A.", simpeler: "Contract van 6mnd-2jr → max 1 maand proeftijd. = A.", nogSimpeler: "1 mnd = A." },
        },
      },
      {
        q: "Wat is een **transitievergoeding**?",
        options: ["Vergoeding bij ontslag (~1/3 maandloon per dienstjaar)", "Reiskostenvergoeding", "Vakantietoeslag", "Bonus voor harde werkers"],
        answer: 0,
        wrongHints: [null, "Reiskosten zijn iets anders.", "Vakantiegeld is iets anders.", "Geen prestatiebonus."],
        uitlegPad: {
          stappen: [{ titel: "Ontslagvergoeding", tekst: "Transitievergoeding = wettelijk recht bij ONTSLAG. Vuistregel: 1/3 maandloon per dienstjaar. Bedoeld om transitie naar nieuwe baan financieel mogelijk te maken." }],
          woorden: [{ woord: "transitievergoeding", uitleg: "Wettelijke ontslagvergoeding sinds Wet Werk en Zekerheid 2015." }],
          theorie: "Berekening: bruto maandloon × (aantal dienstjaren / 3). 10 jaar × €3.000/mnd → €10.000 vergoeding. Vanaf dag 1 dienstverband, geen drempel meer. Geen recht bij ontslag door eigen ernstige fout.",
          voorbeelden: [{ type: "5 jr", tekst: "5 jaar werkzaam, €2.500/mnd → €2.500 × 5/3 = €4.167 transitievergoeding." }, { type: "1 jr", tekst: "Net 1 jaar werk, €2.000/mnd → €2.000/3 = €667." }],
          basiskennis: [{ onderwerp: "Niet bij eigen ontslag", uitleg: "Krijg je alleen bij ontslag DOOR werkgever, niet als jij zelf opzegt." }],
          niveaus: { basis: "1/3 maandloon × dienstjaren. A.", simpeler: "Bij ontslag (door werkgever): vergoeding ~1/3 maandloon per jaar dat je werkte. = A.", nogSimpeler: "Ontslagvergoeding = A." },
        },
      },
      {
        q: "Een **concurrentiebeding** in je contract betekent:",
        options: ["Je mag na ontslag niet direct bij een concurrent werken", "Je krijgt een bonus", "Je werkgever mag je betere kant niet zien", "Je krijgt een opleiding"],
        answer: 0,
        wrongHints: [null, "Geen bonus-regeling.", "Onzin.", "Niet automatisch."],
        uitlegPad: {
          stappen: [{ titel: "Beperking na ontslag", tekst: "Concurrentiebeding = clausule in arbeidscontract die jou verbiedt om na vertrek bij een concurrent te gaan werken voor X tijd in Y gebied. Beschermt werkgever's bedrijfsgeheimen + klanten." }],
          woorden: [{ woord: "concurrentiebeding", uitleg: "Contract-clausule die werknemer beperkt om bij concurrent te werken na uit dienst." }, { woord: "relatiebeding", uitleg: "Specifiekere versie: mag geen oud-klanten benaderen." }],
          theorie: "Sinds 2015 alleen bij contract ONBEPAALDE TIJD geldig, tenzij zwaarwegend bedrijfsbelang. Vaak 6-12 maanden, regio Nederland. Bij overtreding: boete (vaak in contract genoemd) of schadevergoeding.",
          voorbeelden: [{ type: "geldig", tekst: "Web-developer met klantkennis: beding '12 mnd geen werk bij concurrent in NL'. Bij overtreding €25k boete." }],
          basiskennis: [{ onderwerp: "Niet automatisch", uitleg: "Moet expliciet in contract staan. Geen contract-clausule = geen beperking." }],
          niveaus: { basis: "Niet bij concurrent. A.", simpeler: "Concurrentiebeding = na ontslag mag je een bepaalde tijd niet werken bij directe concurrent. = A.", nogSimpeler: "Geen concurrent = A." },
        },
      },
      {
        q: "Welke 4 hoofdcategorieën hoort op een arbeidsovereenkomst?",
        options: ["Persoon · werk · tijd · loon", "Brutoloon · netto · vakantie · pensioen", "Opzegtermijn · ontslag · loon · pensioen", "Werkgever · werknemer"],
        answer: 0,
        wrongHints: [null, "Te beperkt.", "Te beperkt.", "Te beperkt — meer items nodig."],
        uitlegPad: {
          stappen: [{ titel: "Vier kerncategorieën", tekst: "Persoon (wie), Werk (wat), Tijd (uren/periode), Loon (hoeveel). Andere zaken (CAO, pensioen, beëindiging) vallen binnen deze hoofdcategorieën." }],
          woorden: [{ woord: "arbeidsovereenkomst", uitleg: "Contract tussen werkgever en werknemer. Schriftelijk of mondeling (maar schriftelijk veiliger)." }],
          theorie: "Wet verplicht binnen 1 maand na in dienst schriftelijke bevestiging van essentiële items. Anders kan werknemer naar rechter.",
          voorbeelden: [{ type: "compleet", tekst: "Persoon: Jan Janssen. Werk: programmeur bij BV X. Tijd: 40 uur/wk, vast. Loon: €3.500 bruto + 8% vakantiegeld." }],
          basiskennis: [{ onderwerp: "Andere items vallen eronder", uitleg: "Brutoloon zit in 'loon'. Vakantie ook. Opzegtermijn zit in 'tijd'. 4 hoofdcategorieën als kapstok." }],
          niveaus: { basis: "Persoon+werk+tijd+loon. A.", simpeler: "Vier hoofdcategorieën: wie je bent, wat je doet, hoeveel uur, welk loon. = A.", nogSimpeler: "4 P/W/T/L = A." },
        },
      },
      {
        q: "Met **wederzijds goedvinden** ontslag: wat is dat?",
        options: ["Werkgever en werknemer maken samen afspraken (vaststellingsovereenkomst)", "Werkgever besluit eenzijdig", "Werknemer besluit eenzijdig", "Rechter besluit"],
        answer: 0,
        wrongHints: [null, "Eenzijdig zou geen 'wederzijds' zijn.", "Idem.", "Rechter kan ook nodig zijn, maar 'wederzijds' = samen."],
        uitlegPad: {
          stappen: [{ titel: "Samen afspraken maken", tekst: "Wederzijds goedvinden = jij EN werkgever leggen ontslag samen vast in een 'vaststellingsovereenkomst'. Geen rechter, geen UWV. Werkgever betaalt vaak een vergoeding (vaak hoger dan transitievergoeding) om snel klaar te zijn." }],
          woorden: [{ woord: "vaststellingsovereenkomst", uitleg: "Schriftelijk akkoord ontslag met afspraken over einddatum, vergoeding, WW-aanspraak." }, { woord: "wederzijds goedvinden", uitleg: "Wettelijke beëindigingsmethode waarbij beide partijen instemmen." }],
          theorie: "Voordelen werkgever: snel klaar zonder UWV-procedure. Voordelen werknemer: vaak hogere vergoeding + recht op WW (mits goed geformuleerd). Belangrijk: laat juridisch checken!",
          voorbeelden: [{ type: "praktijk", tekst: "Werkgever wil zaken stoppen met jou → biedt aan: einddatum + 3 maandlonen vergoeding + WW-aanspraak. Jij tekent → vertrek." }],
          basiskennis: [{ onderwerp: "Niet eenzijdig", uitleg: "'Wederzijds' = samen. Eenzijdig is iets anders (ontslag-op-staande-voet of zelf opzeggen)." }],
          niveaus: { basis: "Samen afspraken. A.", simpeler: "Wederzijds goedvinden = werkgever + werknemer maken samen ontslagafspraken in een papier. = A.", nogSimpeler: "Samen = A." },
        },
      },
      {
        q: "Bij een **contract korter dan 6 maanden**, mag er een proeftijd in?",
        options: ["Nee, dat is wettelijk niet toegestaan", "Ja, altijd 1 maand", "Ja, 2 maanden", "Alleen voor jongeren"],
        answer: 0,
        wrongHints: [null, "Verboden door de wet.", "Verboden.", "Geldt voor iedereen."],
        uitlegPad: {
          stappen: [{ titel: "Geen proeftijd < 6 mnd", tekst: "Wet: bij contract < 6 maanden mag GEEN proeftijd worden afgesproken. Reden: contract is sowieso al kort, proeftijd zou onevenredig veel beschermingstijd weghalen." }],
          woorden: [{ woord: "proeftijd-verbod", uitleg: "Bij contract korter dan 6 mnd: geen proeftijd toegestaan, ook niet schriftelijk afgesproken." }],
          theorie: "Als werkgever toch een proeftijd in zet → ongeldig. Werknemer geniet normale ontslagbescherming. Verstandig om proeftijd-clausule te checken bij kort contract.",
          voorbeelden: [{ type: "5 mnd contract", tekst: "Werkgever schrijft '1 mnd proeftijd' → clausule ongeldig → werknemer mag niet zonder reden weggestuurd worden." }],
          basiskennis: [{ onderwerp: "Niet alleen jongeren", uitleg: "Geldt voor iedereen. Wet is niet leeftijd-gebonden." }],
          niveaus: { basis: "Nee, niet toegestaan. A.", simpeler: "Kort contract < 6 mnd = GEEN proeftijd toegestaan. = A.", nogSimpeler: "Nee = A." },
        },
      },
    ],
  },
  // ─── Stap 3: Arbeidsmarkt + CAO ───────────────────────────
  {
    title: "De arbeidsmarkt en CAO",
    explanation: "De **arbeidsmarkt** = waar werkgevers (vraag naar arbeid) en werknemers (aanbod van arbeid) elkaar ontmoeten.\n\n**Vraag naar arbeid** = hoeveel mensen wil de werkgever in dienst nemen?\n• Bij **hogere lonen** wil de werkgever **minder** mensen aannemen.\n\n**Aanbod van arbeid** = hoeveel mensen willen werken?\n• Bij **hogere lonen** willen **meer** mensen werken (of meer uren).\n\n**Krapte op de arbeidsmarkt** = meer vraag dan aanbod\n• Werkgever moet hoger loon bieden om mensen te vinden\n• Voorbeeld 2024: zorg, IT, bouw, horeca\n• Effect: lonen stijgen, mensen kunnen kiezen\n\n**Ruime arbeidsmarkt** = meer aanbod dan vraag\n• Werkgever heeft keuze, lonen blijven laag of dalen\n• Voorbeeld: bij een recessie\n\n**CAO — Collectieve Arbeidsovereenkomst**:\n• Afspraken tussen vakbonden (kant van werknemers) en werkgeversorganisaties\n• Geldt voor een hele sector (bv. CAO horeca, CAO zorg)\n• Regelt: loon, werktijden, overwerktoeslag, vakantie, pensioen, scholing\n• Voordeel: één set regels voor iedereen, geen onderhandeling per persoon\n\n**Vakbonden** (FNV, CNV):\n• Komen op voor werknemersbelangen\n• Onderhandelen CAO\n• Helpen leden bij ontslag, conflicten\n• Bekostigd door contributie van leden\n\n**Werkgeversorganisaties** (VNO-NCW, MKB-Nederland):\n• Komen op voor werkgevers\n• Onderhandelen aan andere kant\n\n**Wat als ze er niet uitkomen?**\n• **Stakingen** door werknemers (geen werk, dus druk op werkgever)\n• **Lock-out** door werkgever (werknemers buitensluiten)\n• Bemiddeling, soms door overheid\n\n**Recente trends arbeidsmarkt**:\n• Veel **flexwerk** (zzp, oproep, uitzend) — meer onzekerheid\n• **Krapte** in techniek + zorg → hogere lonen daar\n• **Thuiswerk** (sinds corona) blijft belangrijk\n• **Vergrijzing**: meer ouderen pensioen, minder jongeren werken",
    svg: `<svg viewBox="0 0 320 200">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">ARBEIDSMARKT</text>
<line x1="40" y1="40" x2="40" y2="160" stroke="${COLORS.text}" stroke-width="1.5"/>
<line x1="40" y1="160" x2="290" y2="160" stroke="${COLORS.text}" stroke-width="1.5"/>
<text x="20" y="90" fill="${COLORS.text}" font-size="11" font-family="Arial">loon</text>
<text x="240" y="175" fill="${COLORS.text}" font-size="11" font-family="Arial">aantal</text>
<line x1="60" y1="50" x2="280" y2="155" stroke="${COLORS.aanbod}" stroke-width="2.5"/>
<line x1="60" y1="155" x2="280" y2="50" stroke="${COLORS.vraag}" stroke-width="2.5"/>
<text x="240" y="58" fill="${COLORS.aanbod}" font-size="11" font-family="Arial" font-weight="bold">aanbod</text>
<text x="240" y="135" fill="${COLORS.vraag}" font-size="11" font-family="Arial" font-weight="bold">vraag</text>
<circle cx="170" cy="100" r="5" fill="${COLORS.geld}"/>
<text x="175" y="92" fill="${COLORS.geld}" font-size="10" font-family="Arial" font-weight="bold">evenwicht</text>
<text x="160" y="190" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">CAO regelt loon + voorwaarden per sector</text>
</svg>`,
    checks: [
      {
        q: "Wie ondertekent samen een **CAO**?",
        options: ["Vakbonden + werkgeversorganisaties", "Overheid + bedrijven", "Werknemer + werkgever individueel", "De Belastingdienst"],
        answer: 0,
        wrongHints: [null, "Overheid is meestal geen partij.", "Dat is individuele arbeidsovereenkomst.", "Belastingdienst doet belasting."],
        uitlegPad: {
          stappen: [{ titel: "Twee partijen", tekst: "CAO = afspraak tussen VAKBONDEN (namens werknemers) en WERKGEVERSORGANISATIES (namens werkgevers). Geldt voor hele sector. Niet individueel, niet overheid." }],
          woorden: [{ woord: "CAO", uitleg: "Collectieve Arbeidsovereenkomst. Sectorbrede afspraken over loon, uren, voorwaarden." }, { woord: "vakbond", uitleg: "FNV, CNV: onderhandelen namens werknemers." }, { woord: "werkgeversorganisatie", uitleg: "VNO-NCW, MKB-NL: onderhandelen namens werkgevers." }],
          theorie: "Voordeel CAO: één set regels voor iedereen in sector. Werknemer hoeft niet zelf te onderhandelen. Onderhandelingen elke 2-3 jaar — bij vastlopen: stakingen of bemiddeling.",
          voorbeelden: [{ type: "praktijk", tekst: "CAO zorg: FNV + CNV vs werkgevers (NVZ, Actiz, etc) → loonsverhoging 5% + extra vakantiedag. Geldt voor alle ziekenhuizen." }],
          basiskennis: [{ onderwerp: "Niet overheid", uitleg: "Overheid faciliteert maar zit zelden zelf aan tafel. CAO is afspraak tussen werkgevers + werknemers." }],
          niveaus: { basis: "Bonden + werkgevers. A.", simpeler: "CAO wordt onderhandeld tussen vakbonden (FNV/CNV) en werkgeversorganisaties. = A.", nogSimpeler: "Bonden + werkgevers = A." },
        },
      },
      {
        q: "Wat is **krapte** op de arbeidsmarkt?",
        options: ["Meer vraag dan aanbod (te weinig werknemers)", "Iedereen werkt", "Lonen dalen", "Veel werklozen"],
        answer: 0,
        wrongHints: [null, "Iedereen werkt is volledig werkgelegen.", "Krapte = lonen stijgen.", "Dat is ruim."],
        uitlegPad: {
          stappen: [{ titel: "Vraag > aanbod", tekst: "Krapte = werkgevers vragen MEER mensen dan beschikbaar zijn. Resultaat: werkgevers moeten hogere lonen bieden om mensen te lokken. Werknemers kunnen kiezen, eisen meer." }],
          woorden: [{ woord: "krapte op arbeidsmarkt", uitleg: "Toestand waarin vraag naar arbeid groter is dan aanbod. Veroorzaakt loonstijging." }, { woord: "vacaturegraad", uitleg: "Aantal vacatures per 100 banen. Hoog = krapte." }],
          theorie: "Effect: lonen STIJGEN. Werknemers gaan tegen hogere lonen werken. Werkgevers betalen meer om mensen aan te trekken. Inflatie-effect mogelijk (loonkosten → hogere prijzen).",
          voorbeelden: [{ type: "2024 NL", tekst: "Zorg + IT + bouw: meer vacatures dan werkzoekenden → loonstijging 5-10% in deze sectoren." }],
          basiskennis: [{ onderwerp: "Niet 'iedereen werkt'", uitleg: "Volledige werkgelegenheid is iets anders. Krapte = aantal werkzoekenden < vacatures." }],
          niveaus: { basis: "Meer vraag dan aanbod. A.", simpeler: "Krapte = werkgevers zoeken meer mensen dan er beschikbaar zijn → hogere lonen. = A.", nogSimpeler: "Tekort = A." },
        },
      },
      {
        q: "Voor welke sector geldt **typisch krapte** in 2026?",
        options: ["Zorg, IT, bouw", "Horeca alleen", "Geen enkele", "Alle sectoren even"],
        answer: 0,
        wrongHints: [null, "Krapte zit in meerdere.", "Krapte is wel reëel.", "Verschilt per sector."],
        uitlegPad: {
          stappen: [{ titel: "Specifieke sectoren krap", tekst: "Krapte verschilt per sector. Typisch krap in 2026: ZORG (vergrijzing → meer patiënten), IT (digitalisering), BOUW (woningbouw + verduurzaming), techniek." }],
          woorden: [{ woord: "structureel tekort", uitleg: "Langdurige krapte in sector — niet tijdelijk." }],
          theorie: "Ruim daarentegen: sommige administratieve functies (vervangen door AI), retail (online-verschuiving). Krapte ontstaat vaak door demografische trends (vergrijzing zorg) of technologische verschuivingen (IT).",
          voorbeelden: [{ type: "krap", tekst: "Verpleegkundigen, software-developers, elektromonteurs, dakdekkers. Vacatures > werkzoekenden." }, { type: "ruim", tekst: "Administratief medewerker, callcenter-medewerker. Meer aanbieders dan vraag." }],
          basiskennis: [{ onderwerp: "Niet alle sectoren", uitleg: "Krapte is per sector, niet algemeen. Sommige zelfs RUIM." }],
          niveaus: { basis: "Zorg + IT + bouw. A.", simpeler: "Zorg, IT en bouw zijn in 2026 typische tekortsectoren. = A.", nogSimpeler: "Zorg/IT/bouw = A." },
        },
      },
      {
        q: "Wat is een **vakbond**?",
        options: ["Organisatie die opkomt voor werknemers (FNV, CNV)", "Een groep werkgevers", "Een uitzendbureau", "Belastingdienst-afdeling"],
        answer: 0,
        wrongHints: [null, "Werkgevers hebben eigen organisaties (VNO-NCW).", "Uitzendbureau is iets anders.", "Vakbond is onafhankelijk."],
        uitlegPad: {
          stappen: [{ titel: "Werknemers-organisatie", tekst: "Vakbond = organisatie die opkomt voor werknemersbelangen. Onderhandelt CAO's, helpt leden bij conflicten, voert acties (staking). Gefinancierd door lidmaatschapscontributie (~€15/mnd)." }],
          woorden: [{ woord: "vakbond", uitleg: "Werknemersorganisatie. NL grootste: FNV (Federatie Nederlandse Vakbeweging), CNV." }, { woord: "vakbondslid", uitleg: "Werknemer die contributie betaalt voor bescherming + service." }],
          theorie: "Voordelen lidmaatschap: juridische hulp bij ontslag, gratis advies, sterkere positie bij CAO-onderhandelingen. Aantal leden NL gedaald (van 39% in 1965 tot 17% in 2020) maar nog steeds invloedrijk.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Klusje verkeerd? Werkgever wil ontslag? Vakbondsjurist helpt gratis voor leden." }],
          basiskennis: [{ onderwerp: "Niet werkgevers/uitzend", uitleg: "Werkgevers hebben EIGEN organisaties (VNO-NCW). Vakbond is voor WERKNEMERS." }],
          niveaus: { basis: "Werknemers-org. A.", simpeler: "Vakbond = organisatie die opkomt voor werknemersrechten. FNV, CNV. = A.", nogSimpeler: "Werknemers = A." },
        },
      },
      {
        q: "Wat gebeurt op een **ruime arbeidsmarkt**?",
        options: ["Veel zoekers, weinig vacatures, lonen blijven laag", "Lonen stijgen", "Iedereen heeft werk", "Geen werknemers beschikbaar"],
        answer: 0,
        wrongHints: [null, "Lonen stijgen bij krapte, niet ruim.", "Tegendeel.", "Tegendeel."],
        uitlegPad: {
          stappen: [{ titel: "Aanbod > vraag", tekst: "Ruime arbeidsmarkt = meer werkzoekenden dan vacatures. Werkgevers kunnen kiezen, hoeven niet veel te bieden. Lonen blijven laag of dalen. Werkloosheid hoog." }],
          woorden: [{ woord: "ruime arbeidsmarkt", uitleg: "Toestand waarin aanbod groter is dan vraag. Tegengesteld van krapte." }],
          theorie: "Typisch bij recessie: bedrijven nemen niet aan, ontslaan zelfs. Werkzoekenden hebben weinig keuze. Komt voor in slechte tijden of bij structureel banenverlies (digitalisering, off-shoring).",
          voorbeelden: [{ type: "2009", tekst: "Na financiële crisis: werkloosheid 8%+, lonen onder druk, werkgevers konden kiezen uit 10 sollicitanten per vacature." }, { type: "sector", tekst: "Sommige sectoren chronisch ruim: kunst, journalistiek, sommige geesteswetenschappen." }],
          basiskennis: [{ onderwerp: "Tegendeel van krapte", uitleg: "Krapte = vraag > aanbod = loonstijging. Ruim = vraag < aanbod = loondruk." }],
          niveaus: { basis: "Veel zoekers, weinig werk. A.", simpeler: "Ruime arbeidsmarkt = veel werkzoekenden, weinig vacatures → lonen laag. = A.", nogSimpeler: "Overschot = A." },
        },
      },
      {
        q: "Een **staking** is een actiemiddel van wie?",
        options: ["Werknemers (via vakbond) — drukmiddel op werkgever", "Werkgevers", "De overheid", "De Belastingdienst"],
        answer: 0,
        wrongHints: [null, "Werkgever-equivalent is lock-out.", "Overheid stakt niet.", "Geen actiemiddel van Belastingdienst."],
        uitlegPad: {
          stappen: [{ titel: "Werknemers-drukmiddel", tekst: "Staking = werknemers leggen WERK NEER om druk uit te oefenen op werkgever. Vaak na vastgelopen CAO-onderhandeling. Vakbond organiseert + beschermt stakers tegen ontslag." }],
          woorden: [{ woord: "staking", uitleg: "Werknemers leggen tijdelijk werk neer als drukmiddel." }, { woord: "lock-out", uitleg: "Werkgever-equivalent: werknemers buitensluiten." }, { woord: "stakingskas", uitleg: "Vakbondsgeld om stakers gedeeltelijk loon te betalen tijdens actie." }],
          theorie: "Stakingsrecht is grondwet-recht. Werknemers mogen niet ontslagen worden om staking. Werkgever verliest omzet tijdens staking → druk om CAO te accepteren.",
          voorbeelden: [{ type: "NS-staking", tekst: "NS-werknemers leggen treindienst stil → reizigers boos → druk op NS-directie om hogere lonen toe te kennen." }],
          basiskennis: [{ onderwerp: "Niet werkgever", uitleg: "Werkgever heeft eigen drukmiddel (lock-out) maar staking is voor werknemers." }],
          niveaus: { basis: "Werknemers via vakbond. A.", simpeler: "Staking = werknemers leggen werk neer als drukmiddel op werkgever. Via vakbond. = A.", nogSimpeler: "Werknemers = A." },
        },
      },
    ],
  },
  // ─── Stap 4: Vraag/aanbod arbeid (extra context) ──────
  {
    title: "Wet van de vraag en aanbod op de arbeidsmarkt",
    explanation: "Loon wordt bepaald door **vraag en aanbod** van arbeid — net als de prijs van een product op de markt.\n\n**Vraagcurve naar arbeid (werkgevers)**:\n• Hoog loon → werkgever wil minder mensen (te duur)\n• Laag loon → werkgever wil meer mensen\n• Curve loopt **naar rechts beneden**\n\n**Aanbodcurve van arbeid (werknemers)**:\n• Hoog loon → meer mensen willen werken\n• Laag loon → minder mensen willen werken\n• Curve loopt **naar rechts boven**\n\n**Evenwichtsloon**: punt waar vraag = aanbod. Daar 'klikt' de markt.\n\n**Wanneer verschuift de vraag naar arbeid?**\n• Hoogconjunctuur (economie groeit) → meer vraag\n• Recessie → minder vraag\n• Technologische verandering (AI vervangt werk) → minder vraag voor specifieke beroepen\n\n**Wanneer verschuift het aanbod van arbeid?**\n• Vergrijzing (meer met pensioen) → minder aanbod\n• Immigratie → meer aanbod\n• Hoger opleidingsniveau → meer aanbod hoger niveau\n\n**Voorbeeld**: tijdens COVID gingen veel horeca-medewerkers ander werk zoeken. Toen restaurants weer open mochten, was er **te weinig aanbod** voor horeca → krapte → hogere lonen daar.\n\n**Verschillen per beroepsgroep**:\n• **Schaarse beroepen** (chirurg, software-engineer): hoog loon\n• **Ruim beschikbare beroepen** (kassiere, schoonmaker): minimumloon-niveau\n• **Krachten van schaarste** = wat werkgever bereid is te betalen × hoeveel mensen het kunnen\n\n**Loon = niet alleen prijs**:\n• Ook secundaire arbeidsvoorwaarden (auto, telefoon, opleiding, thuiswerken)\n• 'Tertiaire' (sfeer, doel, ontwikkelingsmogelijkheden)\n\n**Minimumloon** = wettelijke ondergrens, voorkomt 'race naar de bodem'.",
    svg: `<svg viewBox="0 0 320 200">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">VRAAG & AANBOD ARBEID</text>
<line x1="40" y1="40" x2="40" y2="160" stroke="${COLORS.text}" stroke-width="1.5"/>
<line x1="40" y1="160" x2="290" y2="160" stroke="${COLORS.text}" stroke-width="1.5"/>
<text x="20" y="90" fill="${COLORS.text}" font-size="11" font-family="Arial">loon</text>
<text x="240" y="175" fill="${COLORS.text}" font-size="11" font-family="Arial">aantal</text>
<line x1="60" y1="50" x2="280" y2="155" stroke="${COLORS.aanbod}" stroke-width="2.5"/>
<line x1="60" y1="155" x2="280" y2="50" stroke="${COLORS.vraag}" stroke-width="2.5"/>
<text x="240" y="58" fill="${COLORS.aanbod}" font-size="11" font-family="Arial" font-weight="bold">aanbod</text>
<text x="240" y="135" fill="${COLORS.vraag}" font-size="11" font-family="Arial" font-weight="bold">vraag</text>
<circle cx="170" cy="100" r="5" fill="${COLORS.geld}"/>
<text x="175" y="92" fill="${COLORS.geld}" font-size="10" font-family="Arial" font-weight="bold">evenwichtsloon</text>
<text x="160" y="190" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">verschuiving = nieuw evenwicht (krapte/ruimte)</text>
</svg>`,
    checks: [
      {
        q: "Bij **hoger loon** wil de werkgever ... mensen aannemen.",
        options: ["Minder", "Meer", "Net zoveel", "Het maakt niet uit"],
        answer: 0,
        wrongHints: [null, "Hoog loon = duur = minder.", "Tegendeel.", "Wel een effect."],
        uitlegPad: {
          stappen: [{ titel: "Te duur = minder", tekst: "Hoger loon = duurder per medewerker → werkgever past begroting aan en neemt MINDER mensen aan. Wet van de vraag toegepast op arbeid." }],
          woorden: [{ woord: "vraag naar arbeid", uitleg: "Hoeveel mensen werkgever wil aannemen. Daalt bij stijgend loon." }],
          theorie: "Aanbod-zijde redenering: bij €10/uur is werknemer goedkoop → werkgever neemt 10 aan. Bij €20/uur dubbel zo duur → neemt slechts 6 aan. Vraagcurve loopt naar rechts beneden.",
          voorbeelden: [{ type: "horeca", tekst: "Minimumloon stijging → restaurant neemt 1 medewerker minder aan → werkdruk hoger." }],
          basiskennis: [{ onderwerp: "Vraag-en-aanbod-logica", uitleg: "Voor werkgevers is arbeid een 'aankoop'. Duurder = minder kopen." }],
          niveaus: { basis: "Hoger loon = minder. A.", simpeler: "Loon hoger → werkgever neemt minder mensen aan want te duur. = A.", nogSimpeler: "Duur = minder = A." },
        },
      },
      {
        q: "Bij **hoger loon** willen ... mensen werken.",
        options: ["Meer", "Minder", "Net zoveel", "Niemand"],
        answer: 0,
        wrongHints: [null, "Tegendeel.", "Wel een effect.", "Onzin-antwoord."],
        uitlegPad: {
          stappen: [{ titel: "Hoger loon = meer aanbod", tekst: "Hoger loon = aantrekkelijker om te werken. Werknemers willen meer uren, anderen die niet werkten (huisvrouw, gepensioneerd, student) gaan ook werken. Aanbod stijgt." }],
          woorden: [{ woord: "aanbod van arbeid", uitleg: "Hoeveel mensen willen werken. Stijgt bij hoger loon." }],
          theorie: "Wet van het aanbod toegepast op arbeid. Bij €10/uur willen 100 mensen werken. Bij €20/uur willen 180 — meer mensen vinden het de moeite waard. Aanbodcurve loopt naar rechts boven.",
          voorbeelden: [{ type: "zorg", tekst: "Zorg-loonstijging trok mensen uit pensioen + buitenland terug. Aanbod arbeid steeg." }],
          basiskennis: [{ onderwerp: "Tegenovergesteld aan vraag", uitleg: "Werkgevers willen MINDER bij hoog loon. Werknemers MEER. Tegengestelde curves." }],
          niveaus: { basis: "Hoger loon = meer aanbod. A.", simpeler: "Hoger loon → werken loont meer → meer mensen willen werken. = A.", nogSimpeler: "Hoger = meer werkers = A." },
        },
      },
      {
        q: "Wat is het **evenwichtsloon**?",
        options: ["Loon waarbij vraag = aanbod (markt klikt)", "Het hoogste loon", "Het minimumloon", "Het gemiddelde"],
        answer: 0,
        wrongHints: [null, "Hoogste niet automatisch evenwicht.", "Minimumloon is wettelijke ondergrens.", "Gemiddelde is iets anders."],
        uitlegPad: {
          stappen: [{ titel: "Vraag = aanbod", tekst: "Evenwichtsloon = het loon waarbij het aantal mensen DIE WILLEN werken (aanbod) PRECIES gelijk is aan het aantal dat werkgevers WILLEN aannemen (vraag). Markt klikt." }],
          woorden: [{ woord: "evenwichtsloon", uitleg: "Loon waarbij vraag = aanbod arbeid. Iedereen die wil + kan werken vindt werk." }, { woord: "marktevenwicht", uitleg: "Algemene economische staat waarin alle vraag aan alle aanbod beantwoordt." }],
          theorie: "Boven evenwichtsloon: te veel werknemers, te weinig vacatures → werkloosheid. Onder evenwichtsloon: te veel vacatures, te weinig werknemers → krapte. Markt beweegt richting evenwicht.",
          voorbeelden: [{ type: "vereenvoudigd", tekst: "Bij €15/uur willen 1000 werken, willen werkgevers 1000 aannemen → markt klikt op €15." }],
          basiskennis: [{ onderwerp: "Niet hoog/laag/gemiddeld", uitleg: "Evenwicht is wáár beide curves kruisen. Kan elke hoogte zijn afhankelijk van markt." }],
          niveaus: { basis: "Vraag = aanbod loon. A.", simpeler: "Evenwichtsloon = waar het aantal werkers gelijk is aan het aantal vacatures. = A.", nogSimpeler: "Balanspunt = A." },
        },
      },
      {
        q: "Tijdens **vergrijzing** verschuift het aanbod van arbeid:",
        options: ["Naar links (minder mensen werken)", "Naar rechts (meer)", "Niet", "Wisselend"],
        answer: 0,
        wrongHints: [null, "Tegendeel — meer pensioen, minder aanbod.", "Wel verschuiving.", "Vergrijzing is structureel."],
        uitlegPad: {
          stappen: [{ titel: "Meer pensioen = minder werkers", tekst: "Vergrijzing = meer ouderen, meer mensen met pensioen. Pensioenleeftijd verlaat de werkende bevolking → aanbod van arbeid daalt → aanbodcurve schuift NAAR LINKS." }],
          woorden: [{ woord: "vergrijzing", uitleg: "Demografische trend: groter aandeel ouderen in samenleving. NL al jaren bezig." }, { woord: "verschuiving aanbodcurve", uitleg: "Hele curve schuift naar links (minder aanbod) of rechts (meer)." }],
          theorie: "Effect: bij elke loonsniveau zijn er minder werkers beschikbaar. Lonen stijgen, krapte. Combineert met de andere trends: AOW-leeftijd omhoog, vraag naar zorg omhoog (juist door vergrijzing). Stress in arbeidsmarkt.",
          voorbeelden: [{ type: "NL 2026", tekst: "1 op 4 NL'ers 65+. Pensioneren > nieuwe instromers → krimpende beroepsbevolking → krapte." }],
          basiskennis: [{ onderwerp: "Niet 'meer'", uitleg: "Vergrijzing betekent MINDER aanbod, niet meer. Tegendeel van immigratie-effect." }],
          niveaus: { basis: "Naar links. A.", simpeler: "Meer mensen met pensioen → minder werkers beschikbaar → aanbodcurve naar links. = A.", nogSimpeler: "Minder werkers = A." },
        },
      },
      {
        q: "Een **chirurg** verdient veel meer dan een **kassiere** vooral door:",
        options: ["Schaarste — weinig mensen kunnen het", "Toeval", "Geluk", "Het ziekenhuis bepaalt willekeurig"],
        answer: 0,
        wrongHints: [null, "Geen toeval — markt-mechanisme.", "Idem.", "Volgt vraag/aanbod-logica."],
        uitlegPad: {
          stappen: [{ titel: "Schaarste van vaardigheden", tekst: "Chirurg = 12+ jaar opleiding, weinig mensen kunnen het. Beperkt AANBOD + hoge VRAAG → hoog loon. Kassiere = veel mensen kunnen het → ruim aanbod → lager loon." }],
          woorden: [{ woord: "schaarste van vaardigheden", uitleg: "Specialistische skill die slechts weinigen hebben. Markt-mechanisme drijft loon op." }, { woord: "opleidingsinvestering", uitleg: "Lange + dure studie compenseert later via hoger loon." }],
          theorie: "Loonverschillen worden bepaald door 4 factoren: schaarste, opleiding, verantwoordelijkheid, sector. Niet toeval. Markten bepalen via vraag-en-aanbod-mechanisme.",
          voorbeelden: [{ type: "chirurg", tekst: "Hartchirurg verdient €200k+. Reden: 12 jr opleiding + zware verantwoordelijkheid + schaars (1.000+ in NL totaal)." }, { type: "kassiere", tekst: "Kassiere verdient minimumloon. Reden: korte training + miljoenen kunnen het + grote groep werknemers." }],
          basiskennis: [{ onderwerp: "Geen waarde-oordeel", uitleg: "Hoog loon ≠ 'belangrijker werk'. Kassieres zijn onmisbaar maar markt biedt minder doordat aanbod groter is." }],
          niveaus: { basis: "Schaarste. A.", simpeler: "Weinig mensen kunnen chirurg zijn (lange opleiding) = werkgever moet veel betalen. = A.", nogSimpeler: "Schaars = duur = A." },
        },
      },
      {
        q: "Wat zijn **secundaire arbeidsvoorwaarden**?",
        options: ["Extra's bovenop loon: auto, telefoon, opleiding, thuiswerken", "Het brutoloon", "De vakantiedagen alleen", "De CAO"],
        answer: 0,
        wrongHints: [null, "Brutoloon is primair.", "Te beperkt.", "CAO bevat zowel primair als secundair."],
        uitlegPad: {
          stappen: [{ titel: "Extra's bovenop loon", tekst: "Primair = loon zelf. Secundair = EXTRA voordelen: leaseauto, mobiel, laptop, thuiswerk-vergoeding, opleidingsbudget, pensioenregeling, vakantiedagen, bonus." }],
          woorden: [{ woord: "secundaire arbeidsvoorwaarden", uitleg: "Niet-loon voordelen: vergoedingen, regelingen, faciliteiten." }, { woord: "tertiaire arbeidsvoorwaarden", uitleg: "Nog breder: sfeer, doel, ontwikkelingsmogelijkheden, werkplezier." }],
          theorie: "Voor jongeren steeds belangrijker: niet alleen loon maar ook secundair (thuiswerken, flexibiliteit) + tertiair (doel, cultuur) als arbeidsvoorwaarden. Werkgevers concurreren ook op deze fronten.",
          voorbeelden: [{ type: "tech", tekst: "Tech-bedrijf: €60k loon + leaseauto + €5k opleidingsbudget + ping-pong + gratis lunch. Pakket is veel breder dan loon." }],
          basiskennis: [{ onderwerp: "Niet alleen vakantiedagen", uitleg: "Vakantiedagen zijn ÉÉN secundair item — bredere categorie." }],
          niveaus: { basis: "Extra's bovenop loon. A.", simpeler: "Secundair = alle voordelen NAAST het loon: auto, telefoon, opleiding, thuiswerk. = A.", nogSimpeler: "Extra's = A." },
        },
      },
    ],
  },
  // ─── Stap 5: Werkloosheid ─────────────────────────────
  {
    title: "Werkloosheid — soorten en oorzaken",
    explanation: "**Werkloos** = je hebt geen werk maar zou WEL willen werken én bent BESCHIKBAAR.\n\n**Werkloosheidspercentage** = (werklozen / beroepsbevolking) × 100%\n\n**Beroepsbevolking** = mensen 15-75 jaar die kunnen + willen werken (werkenden + werkloos zoekenden).\n\nNL: ~3-4% werkloosheid in 2024 (laag).\n\n**Soorten werkloosheid**:\n\n**1. Frictiewerkloosheid**\n• Tussen twee banen\n• Kort, normaal in gezonde economie\n• Bv. baan opzeggen, 2 maanden zoeken voor nieuwe\n\n**2. Conjuncturele werkloosheid**\n• Door slechte economie (recessie)\n• Bedrijven verkopen minder → ontslaan personeel\n• Bv. corona-tijd: horeca, evenementenbranche\n\n**3. Structurele werkloosheid**\n• Vaardigheden passen niet meer\n• Bv. typist in een digitaal kantoor; mijnwerker zonder mijnen\n• Oplossing: omscholing\n\n**4. Seizoenswerkloosheid**\n• Hangt af van het jaargetijde\n• Bv. ijscoman in de winter, skileraar in de zomer, festival-personeel buiten zomer\n\n**5. Verborgen werkloosheid**\n• Mensen die WEL willen werken maar niet zoeken (geen vertrouwen meer)\n• Tellen niet officieel als werkloos\n• Onderschatting van werkelijk probleem\n\n**Gevolgen werkloosheid**:\n• Inkomensverlies → koopkracht daalt\n• Spannen op uitkeringen (overheid betaalt meer WW + bijstand)\n• Sociaal isolement, mentale klachten\n• Vaardigheden 'roesten'\n\n**Oplossingen overheid**:\n• **Stimulering economie** (lagere belasting, investering)\n• **Scholing en omscholing**\n• **UWV**: helpt zoeken, biedt cursussen\n• **Aanvullende inkomenssteun** (WW, bijstand)\n\n**Belangrijk om te weten**:\n• 'Werkloosheid' is iets anders dan 'niet werken' — een huisvrouw is geen werkloze, een student ook niet (geen actief zoekend op arbeidsmarkt).\n• 'Niet beschikbaar' = niet werkloos (bv. iemand die ziek is, met pensioen).",
    svg: `<svg viewBox="0 0 320 220">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">SOORTEN WERKLOOSHEID</text>
<rect x="20" y="40" width="135" height="32" rx="4" fill="${COLORS.paper}" stroke="${COLORS.vraag}" stroke-width="1.2"/>
<text x="87" y="60" text-anchor="middle" fill="${COLORS.vraag}" font-size="11" font-family="Arial">FRICTIE — kort</text>
<rect x="165" y="40" width="135" height="32" rx="4" fill="${COLORS.paper}" stroke="${COLORS.aanbod}" stroke-width="1.2"/>
<text x="232" y="60" text-anchor="middle" fill="${COLORS.aanbod}" font-size="11" font-family="Arial">CONJUNCTUREEL</text>
<rect x="20" y="80" width="135" height="32" rx="4" fill="${COLORS.paper}" stroke="${COLORS.oranje}" stroke-width="1.2"/>
<text x="87" y="100" text-anchor="middle" fill="${COLORS.oranje}" font-size="11" font-family="Arial">STRUCTUREEL</text>
<rect x="165" y="80" width="135" height="32" rx="4" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1.2"/>
<text x="232" y="100" text-anchor="middle" fill="${COLORS.geld}" font-size="11" font-family="Arial">SEIZOENS</text>
<rect x="20" y="120" width="280" height="32" rx="4" fill="${COLORS.paper}" stroke="${COLORS.muted}" stroke-width="1.2" stroke-dasharray="3 2"/>
<text x="160" y="140" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial">VERBORGEN — telt niet officieel</text>
<text x="160" y="175" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">FORMULE</text>
<text x="160" y="195" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">% = werklozen / beroepsbev. × 100</text>
</svg>`,
    checks: [
      {
        q: "Een typist verliest haar baan omdat alle bedrijven over zijn op spraakherkenning. Welke werkloosheid?",
        options: ["Structureel", "Frictie", "Conjunctureel", "Seizoens"],
        answer: 0,
        wrongHints: [null, "Frictie is kort tussen banen.", "Conjunctureel is door slechte economie.", "Seizoens hangt af van jaargetijde."],
        uitlegPad: {
          stappen: [{ titel: "Vaardigheden niet meer gewild", tekst: "Spraakherkenning vervangt typists structureel — beroep verdwijnt. Mismatch tussen wat typist kan en wat werkgevers vragen = STRUCTURELE werkloosheid." }],
          woorden: [{ woord: "structurele werkloosheid", uitleg: "Werkloosheid door BLIJVENDE veranderingen: technologie, off-shoring, andere skills vereist." }, { woord: "omscholing", uitleg: "Bijscholen naar ander beroep — oplossing voor structurele werkloosheid." }],
          theorie: "Vier soorten: frictie (kort), conjunctureel (recessie), structureel (mismatch), seizoens (jaargetijde). Structureel = lastigste, vereist heromscholing.",
          voorbeelden: [{ type: "klassiek", tekst: "Mijnwerkers Limburg na sluiting mijnen 1965-1975: structureel werkloos. Decennia om om te scholen." }, { type: "AI", tekst: "Tekstschrijvers + grafici: deels vervangen door ChatGPT/Midjourney. Structurele dreiging." }],
          basiskennis: [{ onderwerp: "Niet frictie/conjunctureel", uitleg: "Frictie = tijdelijk tussen banen. Conjunctureel = door slechte economie. Hier: technologie maakt beroep overbodig." }],
          niveaus: { basis: "Structureel. A.", simpeler: "Beroep verdwijnt door technologie → structurele werkloosheid. Niet tijdelijk. = A.", nogSimpeler: "Beroep weg = A." },
        },
      },
      {
        q: "Wat is de **beroepsbevolking**?",
        options: ["Mensen 15-75 die willen + kunnen werken (werkend + zoekend)", "Alle inwoners NL", "Alleen werkenden", "Alleen werklozen"],
        answer: 0,
        wrongHints: [null, "Niet alle inwoners.", "Ook werkloze zoekenden tellen mee.", "Werkenden ook."],
        uitlegPad: {
          stappen: [{ titel: "Wil + kan werken", tekst: "Beroepsbevolking = mensen 15-75 jaar die WILLEN én KUNNEN werken. Dus: werkende mensen + actief zoekenden. Niet: kinderen, studenten die niet werken, huisvrouwen die niet zoeken, gepensioneerden." }],
          woorden: [{ woord: "beroepsbevolking", uitleg: "Totaal werkenden + actieve werkzoekenden 15-75 jaar." }, { woord: "participatiegraad", uitleg: "Beroepsbevolking als % van bevolking 15-75. Hoger = meer mensen actief op arbeidsmarkt." }],
          theorie: "NL beroepsbevolking ~10 mln. Daarvan ~9,6 mln werkend, ~400k werkzoekend. Werkloosheidspercentage = werkzoekend/beroepsbevolking. NIET werkzoekend/totale bevolking — dat zou misleidend laag zijn.",
          voorbeelden: [{ type: "wel beroepsbev", tekst: "Bouwvakker met baan + uitkeringsontvanger die solliciteert." }, { type: "niet", tekst: "11-jarige (te jong), 80-jarige (gepensioneerd), student die alleen studeert." }],
          basiskennis: [{ onderwerp: "Niet alle inwoners", uitleg: "NL ~18 mln inwoners, beroepsbevolking ~10 mln. Kinderen + gepensioneerden + niet-zoekers tellen niet mee." }],
          niveaus: { basis: "15-75, wil+kan werken. A.", simpeler: "Beroepsbevolking = werkenden + werklozen die zoeken (15-75 jr). Niet alle Nederlanders. = A.", nogSimpeler: "Wil+kan = A." },
        },
      },
      {
        q: "**100.000 werklozen**, beroepsbevolking **5.000.000**. Werkloosheidspercentage?",
        options: ["2%", "20%", "0,2%", "5%"],
        answer: 0,
        wrongHints: [null, "Veel te hoog.", "Te laag.", "Reken: 100.000/5.000.000 = 0,02."],
        uitlegPad: {
          stappen: [{ titel: "Formule toepassen", tekst: "Werkloosheidspercentage = werklozen / beroepsbevolking × 100%. 100.000 / 5.000.000 = 0,02 = 2%." }],
          woorden: [{ woord: "werkloosheidspercentage", uitleg: "Werklozen als % van beroepsbevolking. CBS-cijfer." }],
          theorie: "Vuistregels NL: < 3% = krapte. 3-5% = gezond. 5-8% = moeilijk. >8% = crisis. 2024 ~3-4% = krappe markt.",
          voorbeelden: [{ type: "berekening", tekst: "100k / 5mln = 100/5000 = 2/100 = 2%. Schaalbaar via miljoenen." }],
          basiskennis: [{ onderwerp: "Niet 20% of 0,2%", uitleg: "100/5000 = 0,02 = 2%, niet 0,2% (te klein) of 20% (te groot)." }],
          niveaus: { basis: "100k/5mln = 2%. A.", simpeler: "100.000 / 5.000.000 = 0,02 = 2% werkloosheid. = A.", nogSimpeler: "2% = A." },
        },
      },
      {
        q: "Door **recessie** verlies veel mensen hun baan. Welk type werkloosheid?",
        options: ["Conjuncturele werkloosheid", "Frictie", "Structureel", "Seizoens"],
        answer: 0,
        wrongHints: [null, "Frictie ontstaat niet door recessie.", "Structureel is mismatch.", "Seizoens is jaargetijde."],
        uitlegPad: {
          stappen: [{ titel: "Recessie = conjunctureel", tekst: "Recessie = slechte economische cyclus. Bedrijven verkopen minder → ontslaan personeel om kosten te besparen. Dit type werkloosheid heet CONJUNCTUREEL — door economische op-en-neer." }],
          woorden: [{ woord: "conjuncturele werkloosheid", uitleg: "Werkloosheid door tijdelijke economische dip. Verdwijnt als economie aantrekt." }, { woord: "recessie", uitleg: "Twee kwartalen op rij krimp van BBP." }],
          theorie: "Conjunctureel werkloosheid is TIJDELIJK — bij herstel van economie nemen bedrijven weer aan. Tegenovergesteld van structureel (blijvend). Bij corona 2020: veel horeca/evenementen-personeel tijdelijk werkloos.",
          voorbeelden: [{ type: "corona", tekst: "Maart 2020: lockdown → horeca dicht → 10.000 horecawerkers werkloos. Na heropening: meeste teruggenomen." }],
          basiskennis: [{ onderwerp: "Verschil structureel", uitleg: "Recessie = tijdelijk (conjunctureel). Beroep weg door technologie = blijvend (structureel)." }],
          niveaus: { basis: "Conjunctureel. A.", simpeler: "Recessie = slechte tijd → ontslagen tijdelijk → conjuncturele werkloosheid. = A.", nogSimpeler: "Recessie = conj = A." },
        },
      },
      {
        q: "Een **skileraar zonder werk in de zomer** — welk type?",
        options: ["Seizoenswerkloosheid", "Conjunctureel", "Frictie", "Structureel"],
        answer: 0,
        wrongHints: [null, "Niet door slechte economie.", "Niet 'tussen banen' maar terugkerend per jaar.", "Niet vaardigheden-mismatch."],
        uitlegPad: {
          stappen: [{ titel: "Per seizoen", tekst: "Skileraar werkt in winter, geen vraag in zomer. Komt jaarlijks terug = SEIZOENSwerkloosheid. Voorspelbaar patroon door jaargetijde." }],
          woorden: [{ woord: "seizoenswerkloosheid", uitleg: "Werkloosheid die terugkomt in bepaalde periode van het jaar." }],
          theorie: "Andere seizoenswerken: ijscoman (winter), festival-personeel (buiten zomer), bouwvakker (vorst-winter), strandtent (winter). Vaak combineren met ander seizoenswerk: ski-instructeur wordt surf-instructeur in zomer.",
          voorbeelden: [{ type: "ski", tekst: "Skileraar december-april in Alpen → mei-november werkloos OF surfleraar." }, { type: "festival", tekst: "Geluidstechnicus festival-seizoen mei-september → november-april werkloos." }],
          basiskennis: [{ onderwerp: "Niet conjunctureel", uitleg: "Conjunctureel = door slechte economie. Seizoens = door tijd van jaar." }],
          niveaus: { basis: "Seizoens. A.", simpeler: "Per seizoen werken (winter ski-leraar) = elk jaar 6 mnd werkloos = seizoenswerkloosheid. = A.", nogSimpeler: "Per seizoen = A." },
        },
      },
      {
        q: "Wat is **verborgen werkloosheid**?",
        options: ["Mensen die wel willen werken maar geen vertrouwen meer hebben en niet zoeken", "Mensen met een tweede baan", "Buitenlanders zonder verblijfsstatus", "Pensioenbeleid"],
        answer: 0,
        wrongHints: [null, "Tweede baan = wel werken.", "Vergaande politieke vraag, niet definitie.", "Pensioenbeleid is ander onderwerp."],
        uitlegPad: {
          stappen: [{ titel: "Niet meer zoekend", tekst: "Verborgen werklozen = mensen die ZOUDEN willen werken maar opgegeven hebben en niet meer zoeken. Tellen niet officieel als werkloos (te weinig actief). Onderschatting werkelijk probleem." }],
          woorden: [{ woord: "verborgen werkloosheid", uitleg: "Mensen zonder werk die wel zouden werken maar gestopt met zoeken — niet in officiële cijfers." }, { woord: "ontmoediging-effect", uitleg: "Na lange werkloosheid stoppen mensen met solliciteren — vertrouwen weg." }],
          theorie: "Echte werkloosheid is hoger dan CBS-cijfer suggereert. Bij CBS-meting moet je ACTIEF zoeken — anders niet meegerekend. Sommige cijfers (U-6 in VS) tellen ontmoedigden wél mee. NL is conservatiever.",
          voorbeelden: [{ type: "praktijk", tekst: "Vrouw 55, 200 sollicitaties zonder uitnodiging → opgegeven → blijft thuis. Officieel niet werkloos, in werkelijkheid wel." }],
          basiskennis: [{ onderwerp: "Niet tweede baan", uitleg: "Tweede baan = WEL werken. Verborgen = HELEMAAL niet werken én niet zoeken." }],
          niveaus: { basis: "Wil wel, zoekt niet meer. A.", simpeler: "Verborgen werkloos = mensen die geen baan hebben maar opgegeven hebben te zoeken. Tellen niet in officiele cijfers. = A.", nogSimpeler: "Opgegeven = A." },
        },
      },
    ],
  },
  // ─── Stap 6: Productiviteit ─────────────────────────────
  {
    title: "Productiviteit — beter werken, niet langer",
    explanation: "**Productiviteit** = hoeveel produceert één werknemer per uur (of per dag)?\n\nMeting: **output / input**\n• Een bakker maakt 100 broden in 8 uur → productiviteit = 12,5 broden/uur\n• Met betere oven: 200 broden in 8 uur → productiviteit = 25 broden/uur\n\n**Hoe stijgt productiviteit?**\n• **Betere machines/automatisering** (industriële robot, AI)\n• **Betere opleiding** van werknemers\n• **Betere organisatie** (slimmere processen, minder verspilling)\n• **Specialisatie** (1 ding heel goed kunnen)\n• **Beter materiaal** (sneller te verwerken)\n\n**Effecten van hogere productiviteit**:\n• Bedrijf kan **goedkoper** produceren of **hogere lonen** betalen\n• Producten worden **goedkoper** voor consumenten\n• Werknemers met hoge productiviteit verdienen meer\n• Op landniveau: **economische groei**\n\n**Productiviteit per land** (BBP per gewerkt uur):\n• NL: ~€60/uur (een van de hoogste ter wereld)\n• Duitsland: ~€55/uur\n• VS: ~€65/uur\n• Mexico: ~€20/uur\n\n**Werkweek + productiviteit**:\n• NL werkt gemiddeld weinig uur (~30/week, deels door deeltijd)\n• MAAR: hoge productiviteit per uur\n• Effect: vergelijkbare welvaart als landen met meer uren\n\n**Maar pas op**: productiviteit ≠ hard werken. Je kunt 12 uur per dag rommelen of 6 uur slim werken.\n\n**'Productiviteitsparadox'**:\n• Sinds digitalisering en computers stijgt productiviteit langzamer dan verwacht\n• Mensen worden afgeleid (e-mail, vergaderingen, social media)\n• Veel kantoorwerk levert moeilijk meetbare output op\n\n**Verband loon + productiviteit**:\n• Op lange termijn: lonen stijgen ongeveer mee met productiviteit\n• Anders verliezen werkgevers concurrentievermogen\n\n**Robotisering en AI** zijn nieuwste productiviteits-boosters — maar zorgen ook voor **structurele werkloosheid** in beroepen die geautomatiseerd worden (kassiere → zelfscan).",
    svg: `<svg viewBox="0 0 320 200">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">PRODUCTIVITEIT</text>
<text x="160" y="40" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">output ÷ input (per uur)</text>
<rect x="20" y="55" width="135" height="55" rx="6" fill="${COLORS.paper}" stroke="${COLORS.vraag}" stroke-width="1.5"/>
<text x="87" y="73" text-anchor="middle" fill="${COLORS.vraag}" font-size="11" font-family="Arial" font-weight="bold">VOOR</text>
<text x="87" y="92" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">100 broden / 8 uur</text>
<text x="87" y="104" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">12,5 / uur</text>
<text x="170" y="85" fill="${COLORS.warm}" font-size="20" font-family="Arial">→</text>
<rect x="190" y="55" width="115" height="55" rx="6" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1.5"/>
<text x="247" y="73" text-anchor="middle" fill="${COLORS.geld}" font-size="11" font-family="Arial" font-weight="bold">NA</text>
<text x="247" y="92" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">200 / 8 uur</text>
<text x="247" y="104" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">25 / uur</text>
<text x="160" y="135" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">door: machines, opleiding, organisatie</text>
<text x="160" y="160" text-anchor="middle" fill="${COLORS.geld}" font-size="11" font-family="Arial" font-weight="bold">→ goedkoper of hogere lonen</text>
<text x="160" y="180" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">NL: ~€60 BBP per gewerkt uur</text>
</svg>`,
    checks: [
      {
        q: "Wat is **productiviteit**?",
        options: ["Output per ingezette eenheid (per uur of per persoon)", "Hoe lang je werkt", "Salaris per maand", "Aantal vakantiedagen"],
        answer: 0,
        wrongHints: [null, "Lang werken ≠ productief.", "Salaris is iets anders.", "Vakantie is geen productie."],
        uitlegPad: {
          stappen: [{ titel: "Output ÷ input", tekst: "Productiviteit = hoeveel produceer je per UUR (of per werknemer). Bakker met 100 broden in 8u = 12,5 brood/uur. Niet hoeveel UREN je werkt — wat je in die uren maakt." }],
          woorden: [{ woord: "productiviteit", uitleg: "Output per ingezette eenheid arbeid (uur of werknemer)." }, { woord: "arbeidsproductiviteit", uitleg: "Specifiek: output per gewerkt uur." }],
          theorie: "Hoog uitvoer in weinig tijd = productief. 8 uur Netflix kijken op kantoor = lage productiviteit. 4 uur efficiënt werken kan meer opleveren dan 8 uur traag werken.",
          voorbeelden: [{ type: "stijging", tekst: "Bakker krijgt nieuwe oven: 100 → 200 broden in 8u. Productiviteit van 12,5 → 25 brood/uur, factor 2." }],
          basiskennis: [{ onderwerp: "Niet 'hard werken'", uitleg: "Productiviteit = output per uur, niet hoeveel uren je maakt." }],
          niveaus: { basis: "Output / input. A.", simpeler: "Productiviteit = hoeveel je per uur produceert. Niet hoeveel uren je maakt. = A.", nogSimpeler: "Per uur = A." },
        },
      },
      {
        q: "Wat **verhoogt productiviteit**?",
        options: ["Betere machines + opleiding + organisatie", "Minder vakantie", "Hogere belasting", "Meer werknemers in dienst"],
        answer: 0,
        wrongHints: [null, "Minder vakantie ≠ productiever per uur.", "Belasting heeft geen direct effect.", "Meer mensen = meer totaal, niet per persoon."],
        uitlegPad: {
          stappen: [{ titel: "3 hefbomen", tekst: "(1) BETERE MACHINES: nieuwe oven/automatisering doet meer in zelfde tijd. (2) BETERE OPLEIDING: werknemer kan meer/sneller. (3) BETERE ORGANISATIE: slimmere processen, minder verspilling." }],
          woorden: [{ woord: "productiviteits-driver", uitleg: "Factor die productiviteit verhoogt: machines, opleiding, organisatie, specialisatie." }],
          theorie: "Investering in productiviteit verdient zich vaak terug. Bakker oven €10k investering → productiviteit verdubbelt → omzet stijgt + winst dekt investering binnen 1-2 jaar. Daarom investeren bedrijven in machines + opleiding.",
          voorbeelden: [{ type: "techniek", tekst: "Excel-cursus voor administratie → halve tijd voor maandafsluiting → productiviteit-stijging." }, { type: "machine", tekst: "Vaatwasser in restaurant → 1 medewerker doet werk van 2." }],
          basiskennis: [{ onderwerp: "Niet 'meer mensen'", uitleg: "Meer mensen = meer TOTAAL output, niet hoger PER PERSOON. Productiviteit is per persoon." }],
          niveaus: { basis: "Machines+opleiding+organisatie. A.", simpeler: "Productiviteit omhoog via: betere machines, opleiding van werknemers, slimmere processen. = A.", nogSimpeler: "3 hefbomen = A." },
        },
      },
      {
        q: "Hogere productiviteit kan leiden tot:",
        options: ["Goedkoper produceren OF hogere lonen", "Hogere belasting", "Meer werkloosheid altijd", "Geen effect"],
        answer: 0,
        wrongHints: [null, "Belasting niet automatisch.", "Niet altijd — soms wel (door automatisering).", "Wel groot effect."],
        uitlegPad: {
          stappen: [{ titel: "Kostendaling = keuze", tekst: "Hogere productiviteit = lagere productiekosten per eenheid. Bedrijf kan kiezen: (1) prijs verlagen (goedkoper voor consument), (2) hogere lonen betalen (werknemer profiteert), (3) winstmarge vergroten." }],
          woorden: [{ woord: "productiviteits-dividend", uitleg: "Voordeel van hogere productiviteit. Kan verdeeld worden tussen consumenten, werknemers, eigenaars." }],
          theorie: "Wie krijgt het voordeel? Hangt af van marktdynamiek. Veel concurrentie → prijs daalt (consument wint). Krappe arbeidsmarkt → loon stijgt (werknemer wint). Geen druk → winst stijgt (eigenaar wint).",
          voorbeelden: [{ type: "tech", tekst: "Smartphone productie: hogere productiviteit + concurrentie → prijs gedaald van €1k naar €500 voor zelfde rekenkracht." }, { type: "tech-jobs", tekst: "Tech-bedrijven: hogere productiviteit → hogere lonen ($200k+ voor engineers)." }],
          basiskennis: [{ onderwerp: "Niet altijd werkloosheid", uitleg: "Automatisering kan banen kosten, maar hogere productiviteit op zich maakt geld vrij voor andere zaken." }],
          niveaus: { basis: "Goedkoper of hogere lonen. A.", simpeler: "Hogere productiviteit → lagere kosten → kan naar consument (prijs ↓) of werknemer (loon ↑). = A.", nogSimpeler: "Verdeling = A." },
        },
      },
      {
        q: "Productiviteit Nederland is ongeveer:",
        options: ["€60 per gewerkt uur", "€10 per uur", "€500 per uur", "Niet meetbaar"],
        answer: 0,
        wrongHints: [null, "Veel te laag.", "Veel te hoog.", "Wel meetbaar (BBP/gewerkte uren)."],
        uitlegPad: {
          stappen: [{ titel: "BBP per uur", tekst: "Productiviteit per land = BBP / totaal gewerkte uren. NL: ~€1000mrd BBP / ~17mrd uren = ~€60 per uur. Wereldwijde top (samen met Noorwegen, Zwitserland)." }],
          woorden: [{ woord: "productiviteit per land", uitleg: "BBP gedeeld door totaal gewerkte uren. Maatstaf voor economische efficiëntie." }],
          theorie: "Vergelijking 2024: NL ~€60/uur, Duitsland ~€55, VS ~€65, Mexico ~€20, India ~€8. NL werkt weinig uren maar zeer productief — vergelijkbare welvaart met meer-werkende landen.",
          voorbeelden: [{ type: "vergelijking", tekst: "NL gemiddeld 30 uur/week, VS 38 uur/week. Beide ~€60-65/uur. Totale BBP per persoon vergelijkbaar." }],
          basiskennis: [{ onderwerp: "Niet €10/€500", uitleg: "€10 zou ontwikkelingsland zijn. €500 onmogelijk hoog (alleen specifieke industrieën)." }],
          niveaus: { basis: "~€60/uur. A.", simpeler: "Nederland: ongeveer €60 BBP per gewerkt uur. Wereldwijd hoog. = A.", nogSimpeler: "€60 = A." },
        },
      },
      {
        q: "Wat is de **productiviteitsparadox**?",
        options: ["Ondanks computers stijgt productiviteit langzamer dan verwacht", "Productiviteit is altijd hoog", "Niemand werkt productief", "Computers slechter dan handmatig"],
        answer: 0,
        wrongHints: [null, "Niet altijd hoog.", "Onzin-antwoord.", "Computers wel beter, maar niet zoveel als gehoopt."],
        uitlegPad: {
          stappen: [{ titel: "Verwacht versus werkelijk", tekst: "Sinds 1990s: computers, internet, smartphones. Verwacht: enorme productiviteitsstijging. Werkelijk: slechts ~1-2% per jaar — minder dan voorgaande decennia. PARADOX." }],
          woorden: [{ woord: "productiviteitsparadox", uitleg: "Discrepantie tussen verwachte (door technologie) en werkelijke productiviteitsstijging." }, { woord: "Solow-paradox", uitleg: "Robert Solow 1987: 'Je ziet computers overal, behalve in productiviteitscijfers'." }],
          theorie: "Mogelijke verklaringen: (1) afleiding door e-mail/social media, (2) administratieve overhead, (3) productiviteit moeilijk meetbaar in dienstensector, (4) gewenning aan tools duurt jaren. Sinds AI hoop op nieuwe stijging.",
          voorbeelden: [{ type: "praktijk", tekst: "Kantoorwerker uit 1990 (typmachine) → 2024 (computer/internet) → MEER tools, maar gemeten productiviteit nauwelijks meer dan 30 jaar geleden." }],
          basiskennis: [{ onderwerp: "Niet 'altijd hoog'", uitleg: "Tegendeel: productiviteit groeit MINDER dan verwacht ondanks technologie." }],
          niveaus: { basis: "Trage groei ondanks tech. A.", simpeler: "Verwacht: computers maken alles veel productiever. Realiteit: minder dan gedacht. = A.", nogSimpeler: "Paradox = A." },
        },
      },
      {
        q: "Wat is het verband tussen **lonen** en **productiviteit**?",
        options: ["Op lange termijn stijgen lonen mee met productiviteit", "Geen verband", "Lonen dalen bij hogere productiviteit", "Lonen stijgen alleen bij stakingen"],
        answer: 0,
        wrongHints: [null, "Wel verband.", "Tegendeel.", "Stakingen zijn 1 factor, niet de enige."],
        uitlegPad: {
          stappen: [{ titel: "Productiviteit financiert loonstijging", tekst: "Werkgever kan blijvend hogere lonen alleen betalen als werknemer meer per uur produceert. Op LANGE termijn dus: productiviteitsgroei → loongroei. Anders concurrentievermogen kwijt." }],
          woorden: [{ woord: "reële loongroei", uitleg: "Loonstijging boven inflatie. Volgt productiviteitsgroei op lange termijn." }],
          theorie: "20e eeuw: productiviteit verdrievoudigd → reëel loon ook verdrievoudigd. Recente decennia: productiviteit groeit trager → loonstijging ook trager. Sommige landen (VS): productiviteit groeit harder dan lonen → eigenaars profiteren meer.",
          voorbeelden: [{ type: "ASML", tekst: "ASML productiviteit per medewerker hoog (chip-machines €200mln) → kan lonen €100k+ betalen." }, { type: "supermarkt", tekst: "AH-kassiere: lage productiviteit per uur → minimumloon." }],
          basiskennis: [{ onderwerp: "Niet alleen stakingen", uitleg: "Stakingen kunnen wel kortdurig loonsverhoging afdwingen, maar lange termijn = productiviteit." }],
          niveaus: { basis: "Loon volgt productiviteit. A.", simpeler: "Op lange termijn stijgen lonen mee met hoe productief werknemers worden. = A.", nogSimpeler: "Mee = A." },
        },
      },
    ],
  },
  // ─── Stap 7: Sociale zekerheid ───────────────────────
  {
    title: "Sociale zekerheid — vangnet als het misgaat",
    explanation: "**Sociale zekerheid** = financieel vangnet voor wie (tijdelijk) niet kan werken. Geregeld door overheid + werkgevers via premies.\n\n**Twee hoofdtypen**:\n\n**1. Werknemersverzekeringen** (alleen voor werknemers, betaald via premies van werkgevers):\n• **WW** (Werkloosheidswet) — bij ontslag\n• **WIA / WGA** (Wet Werk en Inkomen naar Arbeidsvermogen) — bij arbeidsongeschiktheid\n• **ZW** (Ziektewet) — bij ziekte zonder dienstverband (bv. uitzendkrachten)\n\n**2. Volksverzekeringen** (voor IEDEREEN in NL, betaald via belastingen):\n• **AOW** (Algemene Ouderdomswet) — basis-pensioen\n• **AKW** (Algemene Kinderbijslagwet) — kinderbijslag\n• **WLZ** (Wet Langdurige Zorg) — verpleeghuiszorg, etc.\n• **ANW** (Algemene Nabestaandenwet) — bij overlijden partner\n\n**3. Sociale voorzieningen** (vangnet als andere regelingen niet werken):\n• **Bijstand (Participatiewet)** — als je geen ander inkomen hebt, gemeente betaalt\n\n**WW in detail**:\n• Voorwaarde: gewerkt minstens 26 weken in afgelopen 36\n• Hoogte: ~75% van laatste loon eerste 2 maanden, daarna 70%\n• Duur: minimaal 3 maanden, maximaal 24 maanden (afhankelijk van werkverleden)\n• Plicht: actief solliciteren (UWV controleert)\n\n**Bijstand**:\n• Last resort als andere regelingen niet werken\n• Meestal lager dan WW\n• Kostendelersnorm: minder als je samen woont\n• Plicht: tegenprestatie + actief zoeken\n\n**Wie financiert?**\n• **Premies** worden ingehouden op je loon (~25-30% van bruto)\n• **Belastingen** financieren volksverzekeringen\n• Werkgever draagt OOK premies af\n\n**Spanning sociale zekerheid**:\n• Vergrijzing → meer mensen AOW + zorg\n• Minder werkenden om premies te betalen\n• Overheid moet of premies verhogen of uitkeringen verlagen\n\n**Verschil verzekering vs voorziening**:\n• **Verzekering**: je hebt premie betaald → recht op uitkering\n• **Voorziening (bijstand)**: vangnet zonder eigen bijdrage, maar voorwaarden",
    svg: `<svg viewBox="0 0 320 220">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">SOCIALE ZEKERHEID</text>
<rect x="20" y="40" width="280" height="50" rx="6" fill="${COLORS.paper}" stroke="${COLORS.vraag}" stroke-width="1.5"/>
<text x="160" y="58" text-anchor="middle" fill="${COLORS.vraag}" font-size="11" font-family="Arial" font-weight="bold">WERKNEMERSVERZEKERINGEN</text>
<text x="160" y="73" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">WW · WIA · Ziektewet</text>
<text x="160" y="85" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">betaald uit loon-premies</text>
<rect x="20" y="100" width="280" height="50" rx="6" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1.5"/>
<text x="160" y="118" text-anchor="middle" fill="${COLORS.geld}" font-size="11" font-family="Arial" font-weight="bold">VOLKSVERZEKERINGEN</text>
<text x="160" y="133" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">AOW · kinderbijslag · WLZ</text>
<text x="160" y="145" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">voor iedereen, uit belasting</text>
<rect x="20" y="160" width="280" height="40" rx="6" fill="${COLORS.paper}" stroke="${COLORS.warm}" stroke-width="1.5"/>
<text x="160" y="178" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">SOCIALE VOORZIENINGEN</text>
<text x="160" y="193" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">bijstand (gemeente, vangnet)</text>
</svg>`,
    checks: [
      {
        q: "Bij welke uitkering geldt: **alleen voor werknemers, betaald uit premies**?",
        options: ["WW (Werkloosheidswet)", "AOW", "Bijstand", "Kinderbijslag"],
        answer: 0,
        wrongHints: [null, "AOW = volksverzekering.", "Bijstand = vangnet, geen verzekering.", "Kinderbijslag = volksverzekering."],
        uitlegPad: {
          stappen: [{ titel: "Werknemersverzekering", tekst: "WW = werknemersverzekering. Werkgever + werknemer betalen premie tijdens dienstverband. Bij ontslag: recht op uitkering uit dat premiefonds." }],
          woorden: [{ woord: "werknemersverzekering", uitleg: "Verzekering voor werknemers — premie via loon, uitkering bij ontslag/ziekte/arbeidsongeschiktheid." }, { woord: "volksverzekering", uitleg: "Voor iedereen in NL — gefinancierd uit belasting, niet premie." }],
          theorie: "Verschil belangrijk: WW + WIA + Ziektewet = werknemers. AOW + kinderbijslag + WLZ = iedereen. Zzp'ers vallen tussen wal en schip — geen WW, moeten zelf verzekeren (AOV).",
          voorbeelden: [{ type: "WW", tekst: "Werknemer ontslagen → meld bij UWV → WW-uitkering binnen weken. Want premie betaald." }, { type: "AOW", tekst: "Iedereen 67+ krijgt AOW, ongeacht of ooit gewerkt. Volksverzekering uit belasting." }],
          basiskennis: [{ onderwerp: "Niet AOW", uitleg: "AOW is volksverzekering, geen werknemersverzekering. Iedereen krijgt het op pensioenleeftijd." }],
          niveaus: { basis: "WW. A.", simpeler: "WW = alleen voor werknemers, uit hun premies betaald. = A.", nogSimpeler: "WW = A." },
        },
      },
      {
        q: "Wie krijgt **AOW**?",
        options: ["Iedereen die in NL gewoond heeft, vanaf pensioenleeftijd", "Alleen werknemers", "Alleen ondernemers", "Alleen wie veel verdient"],
        answer: 0,
        wrongHints: [null, "Niet alleen werknemers.", "Niet alleen ondernemers.", "Niet inkomensafhankelijk."],
        uitlegPad: {
          stappen: [{ titel: "Iedereen 67+", tekst: "AOW (Algemene Ouderdomswet) = basis-pensioen voor IEDEREEN vanaf pensioenleeftijd (~67). Geen onderscheid werknemer/zzp/huisvrouw. Voorwaarde: in NL gewoond hebben (per gewoond jaar 2% opbouw)." }],
          woorden: [{ woord: "AOW", uitleg: "Algemene Ouderdomswet. Volksverzekering. Basis-pensioen voor iedereen op pensioenleeftijd." }, { woord: "pensioenleeftijd", uitleg: "Leeftijd waarop AOW ingaat. Stijgt mee met levensverwachting — ~67 in 2024." }],
          theorie: "Hoogte: ~€1.300/mnd alleenstaande, ~€870/persoon stel (2024). Wordt jaarlijks aangepast. Aanvullend pensioen (van werkgever) komt erbij. Volledige AOW = 50 jaar in NL gewoond tussen 15 en 67.",
          voorbeelden: [{ type: "iedereen", tekst: "Huisvrouw die nooit werkte krijgt AOW. Net als CEO. Net als zzp'er. Iedereen die in NL woonde." }],
          basiskennis: [{ onderwerp: "Niet inkomensafhankelijk", uitleg: "AOW = volksverzekering, ongeacht inkomen of werkstatus. Universeel." }],
          niveaus: { basis: "Iedereen vanaf 67. A.", simpeler: "AOW krijg je gewoon omdat je in NL gewoond hebt en 67 wordt. = A.", nogSimpeler: "Iedereen = A." },
        },
      },
      {
        q: "Wat is **bijstand**?",
        options: ["Vangnet via gemeente als geen ander inkomen", "Salaris", "Toeslag", "Zorgverzekering"],
        answer: 0,
        wrongHints: [null, "Niet hetzelfde als loon.", "Toeslag is iets anders.", "Verzekering is iets anders."],
        uitlegPad: {
          stappen: [{ titel: "Laatste vangnet", tekst: "Bijstand (Participatiewet) = vangnet via gemeente voor wie GEEN ander inkomen heeft + geen recht op WW/WIA. Sociaal minimum, lager dan WW. Plicht: solliciteren + tegenprestatie." }],
          woorden: [{ woord: "bijstand", uitleg: "Sociale voorziening via gemeente. Sociaal minimum bij geen ander inkomen." }, { woord: "Participatiewet", uitleg: "Wet die bijstand regelt sinds 2015. Inclusief plicht tot tegenprestatie." }],
          theorie: "Bedragen (2024): alleenstaande ~€1.300/mnd, stel ~€1.800/mnd. Vermogensgrens (~€7.500 alleenstaande) — boven die grens eerst eigen geld op. Strenge regels + sancties bij niet-meewerken.",
          voorbeelden: [{ type: "student zonder werk", tekst: "Student verliest bijbaan + geen WW-recht → bijstand via gemeente. Vangnet tot ander werk gevonden." }],
          basiskennis: [{ onderwerp: "Niet loon/toeslag/verzekering", uitleg: "Bijstand = aparte categorie. Niet loon (geen werk), niet toeslag (uitkering), niet verzekering (geen premie betaald)." }],
          niveaus: { basis: "Vangnet gemeente. A.", simpeler: "Bijstand = uitkering van gemeente als je geen inkomen + geen WW hebt. Laatste vangnet. = A.", nogSimpeler: "Vangnet = A." },
        },
      },
      {
        q: "**WW-uitkering** is in de eerste 2 maanden ongeveer:",
        options: ["75% van laatste loon", "100%", "30%", "Vast bedrag €500"],
        answer: 0,
        wrongHints: [null, "Niet 100%.", "Te laag — 75%.", "Geen vast bedrag."],
        uitlegPad: {
          stappen: [{ titel: "75% eerste 2 maanden", tekst: "WW eerste 2 maanden: 75% van laatste loon. Daarna 70% tot einde uitkering. Boven max (~€5.700 brutoloon/mnd) wordt afgekapt." }],
          woorden: [{ woord: "WW-uitkering", uitleg: "Tijdelijke uitkering bij ontslag, gebaseerd op laatste loon." }, { woord: "dagloon", uitleg: "Maatstaf voor WW-hoogte. Gebaseerd op gemiddeld loon laatste jaar." }],
          theorie: "Duur: minimaal 3 mnd (bij kort werkverleden), maximaal 24 mnd (lange historie). 1 maand WW per gewerkt jaar tot 10 jaar, dan 0,5 maand per gewerkt jaar tot max 24.",
          voorbeelden: [{ type: "berekening", tekst: "Laatste loon €3.000 → WW maand 1-2: €2.250 (75%). Maand 3+: €2.100 (70%). Tot je nieuwe baan vindt of max-duur bereikt." }],
          basiskennis: [{ onderwerp: "Niet 100%", uitleg: "Geen 100% — WW is overbrugging, geen volledige vervanging." }],
          niveaus: { basis: "75% eerste 2 mnd. A.", simpeler: "WW = 75% van je laatste loon de eerste 2 maanden, daarna 70%. = A.", nogSimpeler: "75% = A." },
        },
      },
      {
        q: "Wat is een **belangrijk verschil** verzekering vs voorziening?",
        options: ["Bij verzekering heb je premie betaald → recht; voorziening = vangnet zonder bijdrage", "Geen verschil", "Verzekering is alleen voor rijken", "Voorziening is alleen voor 65+"],
        answer: 0,
        wrongHints: [null, "Wel verschil.", "Voor iedereen.", "Niet leeftijdsgebonden."],
        uitlegPad: {
          stappen: [{ titel: "Premie vs vangnet", tekst: "VERZEKERING: jij betaalde premie → recht op uitkering. VOORZIENING: vangnet vanuit gemeenschap voor wie het écht nodig heeft, zonder eigen bijdrage maar mét voorwaarden (zoeken, geen vermogen)." }],
          woorden: [{ woord: "verzekering", uitleg: "Uitkering op basis van betaalde premie. WW, WIA." }, { woord: "voorziening", uitleg: "Vangnet zonder eigen premie. Bijstand. Voorwaarden + lager bedrag." }],
          theorie: "Verzekering = 'verdiend recht'. Voorziening = 'solidair vangnet'. Praktisch: WW heeft minder voorwaarden + hoger bedrag dan bijstand. Vandaar verschillende politieke discussies.",
          voorbeelden: [{ type: "verzekering", tekst: "10 jr werknemer → ontslagen → WW vrijwel automatisch toegekend." }, { type: "voorziening", tekst: "Student zonder werkhistorie → bijstand met strenge voorwaarden + sollicitatieplicht." }],
          basiskennis: [{ onderwerp: "Niet rijken/65+", uitleg: "Beide categorieën zijn beschikbaar voor iedereen die voldoet aan voorwaarden — geen inkomens- of leeftijdsdiscriminatie." }],
          niveaus: { basis: "Verzekering = premie betaald. A.", simpeler: "Verzekering: jij betaalde mee → uitkering. Voorziening: vangnet voor wie niets heeft. = A.", nogSimpeler: "Premie vs vangnet = A." },
        },
      },
      {
        q: "Waarom staat sociale zekerheid **onder druk**?",
        options: ["Vergrijzing: meer ontvangers, minder werkende premiebetalers", "Te veel jongeren", "Iedereen wordt rijker", "Geen reden"],
        answer: 0,
        wrongHints: [null, "Tegendeel.", "Tegendeel.", "Vergrijzing is wel echt."],
        uitlegPad: {
          stappen: [{ titel: "Demografisch onbalans", tekst: "Vergrijzing = meer ouderen, minder jongeren. Meer mensen krijgen AOW + zorg, minder mensen betalen premies. Sociale zekerheid raakt onder druk: ofwel premies omhoog, ofwel uitkeringen omlaag, ofwel pensioenleeftijd omhoog." }],
          woorden: [{ woord: "vergrijzing", uitleg: "Demografische trend: groter % ouderen. NL is sinds jaren bezig." }, { woord: "i/a-ratio", uitleg: "Inactieven (gepensioneerden/uitkeringsontvangers) / actieven (werkenden). Hoog = druk op systeem." }],
          theorie: "Maatregelen: AOW-leeftijd verhoogd (was 65, nu 67+, gaat naar 68). Pensioenstelsel hervormd. Discussie: nivellering vs eigen verantwoordelijkheid. Geen makkelijke oplossing.",
          voorbeelden: [{ type: "1965", tekst: "5 werkenden per gepensioneerde. Sociaal systeem ruim financierbaar." }, { type: "2050", tekst: "Verwacht 2 werkenden per gepensioneerde. Krappere financiering — vandaar hervormingen." }],
          basiskennis: [{ onderwerp: "Niet 'te veel jongeren'", uitleg: "Tegendeel: te WEINIG jongeren. Vergrijzing wel echt structureel probleem." }],
          niveaus: { basis: "Vergrijzing. A.", simpeler: "Meer ouderen + minder jongeren → minder premies + meer uitkeringen → druk op systeem. = A.", nogSimpeler: "Vergrijzing = A." },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const pincodeWerkArbeidsmarkt = {
  id: "pincode-werk-arbeidsmarkt",
  title: "Werk en arbeidsmarkt",
  emoji: "👷",
  level: "vmbo-gt-4",
  subject: "economie",
  referentieNiveau: "VMBO-GT eindexamen",
  sloThema: "Economie - Pincode VMBO-GT klas 4 hoofdstuk 4",
  prerequisites: [
    { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F" },
    { id: "procenten-po", title: "Procenten", niveau: "po-1F" },
  ],
  intro:
    "Hoofdstuk 4 van Pincode 7e ed. VMBO-GT 4: werkgever/werknemer, contracten + arbeidsovereenkomst, arbeidsmarkt + CAO, vraag/aanbod arbeid, werkloosheid, productiviteit en sociale zekerheid. 7 stappen examenvoorbereiding.",
  triggerKeywords: [
    "werkgever", "werknemer", "arbeidsovereenkomst", "arbeidscontract",
    "vast contract", "tijdelijk contract", "oproepcontract", "uitzendcontract", "zzp",
    "vakantiegeld", "minimumloon", "ziektewet", "loonstrookje",
    "proeftijd", "concurrentiebeding", "transitievergoeding", "opzegtermijn", "ontslag",
    "arbeidsmarkt", "vraag naar arbeid", "aanbod van arbeid", "krapte", "ruime arbeidsmarkt",
    "evenwichtsloon", "secundaire arbeidsvoorwaarden",
    "cao", "vakbond", "werkgeversorganisatie", "fnv", "cnv", "vno-ncw",
    "staking", "lock-out",
    "werkloosheid", "frictiewerkloosheid", "conjuncturele werkloosheid",
    "structurele werkloosheid", "seizoenswerkloosheid", "verborgen werkloosheid",
    "beroepsbevolking", "uwv",
    "productiviteit", "automatisering", "robotisering",
    "sociale zekerheid", "ww", "wia", "wgz", "aow", "bijstand", "akw", "wlz", "anw",
    "werknemersverzekering", "volksverzekering", "sociale voorziening",
    "pincode hoofdstuk 4", "pincode hoofdstuk d",
  ],
  chapters,
  steps,
};

export default pincodeWerkArbeidsmarkt;
