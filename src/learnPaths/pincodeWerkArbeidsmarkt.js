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
      },
      {
        q: "Wat is een **zzp'er**?",
        options: ["Zelfstandige zonder personeel — werkt voor opdrachtgevers", "Vaste werknemer", "Iemand die uitzendwerk doet", "Werkloze"],
        answer: 0,
        wrongHints: [null, "Vast = werknemer.", "Uitzend valt onder uitzendbureau.", "Zzp werkt juist actief."],
      },
      {
        q: "Welk contract geeft de **meeste zekerheid**?",
        options: ["Vast (onbepaalde tijd)", "Oproep", "Uitzend", "Tijdelijk 6 maanden"],
        answer: 0,
        wrongHints: [null, "Oproep = werken als baas belt.", "Uitzend = via bureau, snel klaar.", "Tijdelijk eindigt na 6 mnd."],
      },
      {
        q: "Hoeveel **tijdelijke contracten** mag een werkgever in 3 jaar maximaal geven?",
        options: ["3 contracten in 3 jaar (daarna vast)", "1 contract", "Onbeperkt", "10 contracten"],
        answer: 0,
        wrongHints: [null, "Te beperkend.", "Niet onbeperkt — wettelijke regel.", "Veel te veel — 3 max."],
      },
      {
        q: "Een 14-jarige bijbaan: hoeveel uur per dag mag je maximaal werken?",
        options: ["2-3 uur (jeugd-arbeidsregels)", "8 uur", "12 uur", "Onbeperkt"],
        answer: 0,
        wrongHints: [null, "8 uur geldt vanaf 16.", "Niet voor jeugd.", "Wel beperkingen."],
      },
      {
        q: "Wat hoort op een **loonstrookje**?",
        options: ["Brutoloon, inhoudingen, nettoloon en vakantiegeld", "Alleen het bedrag op je rekening", "Alleen de werkgevers-naam", "Niets verplicht"],
        answer: 0,
        wrongHints: [null, "Te weinig.", "Wel meer details.", "Verplichte informatie."],
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
      },
      {
        q: "Wat is een **transitievergoeding**?",
        options: ["Vergoeding bij ontslag (~1/3 maandloon per dienstjaar)", "Reiskostenvergoeding", "Vakantietoeslag", "Bonus voor harde werkers"],
        answer: 0,
        wrongHints: [null, "Reiskosten zijn iets anders.", "Vakantiegeld is iets anders.", "Geen prestatiebonus."],
      },
      {
        q: "Een **concurrentiebeding** in je contract betekent:",
        options: ["Je mag na ontslag niet direct bij een concurrent werken", "Je krijgt een bonus", "Je werkgever mag je betere kant niet zien", "Je krijgt een opleiding"],
        answer: 0,
        wrongHints: [null, "Geen bonus-regeling.", "Onzin.", "Niet automatisch."],
      },
      {
        q: "Welke 4 hoofdcategorieën hoort op een arbeidsovereenkomst?",
        options: ["Persoon · werk · tijd · loon", "Brutoloon · netto · vakantie · pensioen", "Opzegtermijn · ontslag · loon · pensioen", "Werkgever · werknemer"],
        answer: 0,
        wrongHints: [null, "Te beperkt.", "Te beperkt.", "Te beperkt — meer items nodig."],
      },
      {
        q: "Met **wederzijds goedvinden** ontslag: wat is dat?",
        options: ["Werkgever en werknemer maken samen afspraken (vaststellingsovereenkomst)", "Werkgever besluit eenzijdig", "Werknemer besluit eenzijdig", "Rechter besluit"],
        answer: 0,
        wrongHints: [null, "Eenzijdig zou geen 'wederzijds' zijn.", "Idem.", "Rechter kan ook nodig zijn, maar 'wederzijds' = samen."],
      },
      {
        q: "Bij een **contract korter dan 6 maanden**, mag er een proeftijd in?",
        options: ["Nee, dat is wettelijk niet toegestaan", "Ja, altijd 1 maand", "Ja, 2 maanden", "Alleen voor jongeren"],
        answer: 0,
        wrongHints: [null, "Verboden door de wet.", "Verboden.", "Geldt voor iedereen."],
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
      },
      {
        q: "Wat is **krapte** op de arbeidsmarkt?",
        options: ["Meer vraag dan aanbod (te weinig werknemers)", "Iedereen werkt", "Lonen dalen", "Veel werklozen"],
        answer: 0,
        wrongHints: [null, "Iedereen werkt is volledig werkgelegen.", "Krapte = lonen stijgen.", "Dat is ruim."],
      },
      {
        q: "Voor welke sector geldt **typisch krapte** in 2026?",
        options: ["Zorg, IT, bouw", "Horeca alleen", "Geen enkele", "Alle sectoren even"],
        answer: 0,
        wrongHints: [null, "Krapte zit in meerdere.", "Krapte is wel reëel.", "Verschilt per sector."],
      },
      {
        q: "Wat is een **vakbond**?",
        options: ["Organisatie die opkomt voor werknemers (FNV, CNV)", "Een groep werkgevers", "Een uitzendbureau", "Belastingdienst-afdeling"],
        answer: 0,
        wrongHints: [null, "Werkgevers hebben eigen organisaties (VNO-NCW).", "Uitzendbureau is iets anders.", "Vakbond is onafhankelijk."],
      },
      {
        q: "Wat gebeurt op een **ruime arbeidsmarkt**?",
        options: ["Veel zoekers, weinig vacatures, lonen blijven laag", "Lonen stijgen", "Iedereen heeft werk", "Geen werknemers beschikbaar"],
        answer: 0,
        wrongHints: [null, "Lonen stijgen bij krapte, niet ruim.", "Tegendeel.", "Tegendeel."],
      },
      {
        q: "Een **staking** is een actiemiddel van wie?",
        options: ["Werknemers (via vakbond) — drukmiddel op werkgever", "Werkgevers", "De overheid", "De Belastingdienst"],
        answer: 0,
        wrongHints: [null, "Werkgever-equivalent is lock-out.", "Overheid stakt niet.", "Geen actiemiddel van Belastingdienst."],
      },
    
      {
        q: "🎓 _Echt examen VMBO-GL en TL 2025 tijdvak 2, vraag 8_\n\nWanneer is een werkgever bereid om de lonen van werknemers te verhogen?",
        options: ["Als de arbeidsproductiviteit meer stijgt dan de lonen.", "Als de lonen meer stijgen dan de arbeidsproductiviteit.", "Als de lonen meer stijgen dan het aantal arbeidsjaren.", "Als het aantal arbeidsjaren meer stijgt dan de arbeidsproductiviteit."],
        answer: 0,
        wrongHints: [null, null, null, null],
        examenBron: "🎓 _Echt examen VMBO-GL en TL 2025 tijdvak 2, vraag 8_",
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
      },
      {
        q: "Bij **hoger loon** willen ... mensen werken.",
        options: ["Meer", "Minder", "Net zoveel", "Niemand"],
        answer: 0,
        wrongHints: [null, "Tegendeel.", "Wel een effect.", "Onzin-antwoord."],
      },
      {
        q: "Wat is het **evenwichtsloon**?",
        options: ["Loon waarbij vraag = aanbod (markt klikt)", "Het hoogste loon", "Het minimumloon", "Het gemiddelde"],
        answer: 0,
        wrongHints: [null, "Hoogste niet automatisch evenwicht.", "Minimumloon is wettelijke ondergrens.", "Gemiddelde is iets anders."],
      },
      {
        q: "Tijdens **vergrijzing** verschuift het aanbod van arbeid:",
        options: ["Naar links (minder mensen werken)", "Naar rechts (meer)", "Niet", "Wisselend"],
        answer: 0,
        wrongHints: [null, "Tegendeel — meer pensioen, minder aanbod.", "Wel verschuiving.", "Vergrijzing is structureel."],
      },
      {
        q: "Een **chirurg** verdient veel meer dan een **kassiere** vooral door:",
        options: ["Schaarste — weinig mensen kunnen het", "Toeval", "Geluk", "Het ziekenhuis bepaalt willekeurig"],
        answer: 0,
        wrongHints: [null, "Geen toeval — markt-mechanisme.", "Idem.", "Volgt vraag/aanbod-logica."],
      },
      {
        q: "Wat zijn **secundaire arbeidsvoorwaarden**?",
        options: ["Extra's bovenop loon: auto, telefoon, opleiding, thuiswerken", "Het brutoloon", "De vakantiedagen alleen", "De CAO"],
        answer: 0,
        wrongHints: [null, "Brutoloon is primair.", "Te beperkt.", "CAO bevat zowel primair als secundair."],
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
      },
      {
        q: "Wat is de **beroepsbevolking**?",
        options: ["Mensen 15-75 die willen + kunnen werken (werkend + zoekend)", "Alle inwoners NL", "Alleen werkenden", "Alleen werklozen"],
        answer: 0,
        wrongHints: [null, "Niet alle inwoners.", "Ook werkloze zoekenden tellen mee.", "Werkenden ook."],
      },
      {
        q: "**100.000 werklozen**, beroepsbevolking **5.000.000**. Werkloosheidspercentage?",
        options: ["2%", "20%", "0,2%", "5%"],
        answer: 0,
        wrongHints: [null, "Veel te hoog.", "Te laag.", "Reken: 100.000/5.000.000 = 0,02."],
      },
      {
        q: "Door **recessie** verlies veel mensen hun baan. Welk type werkloosheid?",
        options: ["Conjuncturele werkloosheid", "Frictie", "Structureel", "Seizoens"],
        answer: 0,
        wrongHints: [null, "Frictie ontstaat niet door recessie.", "Structureel is mismatch.", "Seizoens is jaargetijde."],
      },
      {
        q: "Een **skileraar zonder werk in de zomer** — welk type?",
        options: ["Seizoenswerkloosheid", "Conjunctureel", "Frictie", "Structureel"],
        answer: 0,
        wrongHints: [null, "Niet door slechte economie.", "Niet 'tussen banen' maar terugkerend per jaar.", "Niet vaardigheden-mismatch."],
      },
      {
        q: "Wat is **verborgen werkloosheid**?",
        options: ["Mensen die wel willen werken maar geen vertrouwen meer hebben en niet zoeken", "Mensen met een tweede baan", "Buitenlanders zonder verblijfsstatus", "Pensioenbeleid"],
        answer: 0,
        wrongHints: [null, "Tweede baan = wel werken.", "Vergaande politieke vraag, niet definitie.", "Pensioenbeleid is ander onderwerp."],
      },
    
      {
        q: "🎓 _Echt examen VMBO-GL en TL 2024 tijdvak 1, vraag 41_\n\nWelke soort werkloosheid ontstaat er door het verdwijnen van bedrijven naar het buitenland?",
        options: ["conjuncturele werkloosheid, het is de aanbodkant van de economie", "conjuncturele werkloosheid, het is de vraagkant van de economie", "structurele werkloosheid, het is de aanbodkant van de economie", "structurele werkloosheid, het is de vraagkant van de economie"],
        answer: 2,
        wrongHints: [null, null, null, null],
        examenBron: "🎓 _Echt examen VMBO-GL en TL 2024 tijdvak 1, vraag 41_",
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
      },
      {
        q: "Wat **verhoogt productiviteit**?",
        options: ["Betere machines + opleiding + organisatie", "Minder vakantie", "Hogere belasting", "Meer werknemers in dienst"],
        answer: 0,
        wrongHints: [null, "Minder vakantie ≠ productiever per uur.", "Belasting heeft geen direct effect.", "Meer mensen = meer totaal, niet per persoon."],
      },
      {
        q: "Hogere productiviteit kan leiden tot:",
        options: ["Goedkoper produceren OF hogere lonen", "Hogere belasting", "Meer werkloosheid altijd", "Geen effect"],
        answer: 0,
        wrongHints: [null, "Belasting niet automatisch.", "Niet altijd — soms wel (door automatisering).", "Wel groot effect."],
      },
      {
        q: "Productiviteit Nederland is ongeveer:",
        options: ["€60 per gewerkt uur", "€10 per uur", "€500 per uur", "Niet meetbaar"],
        answer: 0,
        wrongHints: [null, "Veel te laag.", "Veel te hoog.", "Wel meetbaar (BBP/gewerkte uren)."],
      },
      {
        q: "Wat is de **productiviteitsparadox**?",
        options: ["Ondanks computers stijgt productiviteit langzamer dan verwacht", "Productiviteit is altijd hoog", "Niemand werkt productief", "Computers slechter dan handmatig"],
        answer: 0,
        wrongHints: [null, "Niet altijd hoog.", "Onzin-antwoord.", "Computers wel beter, maar niet zoveel als gehoopt."],
      },
      {
        q: "Wat is het verband tussen **lonen** en **productiviteit**?",
        options: ["Op lange termijn stijgen lonen mee met productiviteit", "Geen verband", "Lonen dalen bij hogere productiviteit", "Lonen stijgen alleen bij stakingen"],
        answer: 0,
        wrongHints: [null, "Wel verband.", "Tegendeel.", "Stakingen zijn 1 factor, niet de enige."],
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
      },
      {
        q: "Wie krijgt **AOW**?",
        options: ["Iedereen die in NL gewoond heeft, vanaf pensioenleeftijd", "Alleen werknemers", "Alleen ondernemers", "Alleen wie veel verdient"],
        answer: 0,
        wrongHints: [null, "Niet alleen werknemers.", "Niet alleen ondernemers.", "Niet inkomensafhankelijk."],
      },
      {
        q: "Wat is **bijstand**?",
        options: ["Vangnet via gemeente als geen ander inkomen", "Salaris", "Toeslag", "Zorgverzekering"],
        answer: 0,
        wrongHints: [null, "Niet hetzelfde als loon.", "Toeslag is iets anders.", "Verzekering is iets anders."],
      },
      {
        q: "**WW-uitkering** is in de eerste 2 maanden ongeveer:",
        options: ["75% van laatste loon", "100%", "30%", "Vast bedrag €500"],
        answer: 0,
        wrongHints: [null, "Niet 100%.", "Te laag — 75%.", "Geen vast bedrag."],
      },
      {
        q: "Wat is een **belangrijk verschil** verzekering vs voorziening?",
        options: ["Bij verzekering heb je premie betaald → recht; voorziening = vangnet zonder bijdrage", "Geen verschil", "Verzekering is alleen voor rijken", "Voorziening is alleen voor 65+"],
        answer: 0,
        wrongHints: [null, "Wel verschil.", "Voor iedereen.", "Niet leeftijdsgebonden."],
      },
      {
        q: "Waarom staat sociale zekerheid **onder druk**?",
        options: ["Vergrijzing: meer ontvangers, minder werkende premiebetalers", "Te veel jongeren", "Iedereen wordt rijker", "Geen reden"],
        answer: 0,
        wrongHints: [null, "Tegendeel.", "Tegendeel.", "Vergrijzing is wel echt."],
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
