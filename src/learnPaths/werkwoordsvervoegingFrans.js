// Leerpad: Werkwoordsvervoeging Frans — klas 1-2.
// Onderdeel Frans grammatica. Referentieniveau 2F.
// 6 stappen met uitlegPad. Sluit op passe-compose-frans.

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  curve: "#00c853",
  curve2: "#69f0ae",
  er: "#80cbc4",
  ir: "#ffd54f",
  re: "#ff8a65",
  highlight: "#42a5f5",
};

const stepEmojis = ["📝", "1️⃣", "⚡", "⏪", "✅", "🏆"];

const chapters = [
  { letter: "A", title: "Wat is een werkwoord?", emoji: "📝", from: 0, to: 0 },
  { letter: "B", title: "Présent — regelmatig", emoji: "1️⃣", from: 1, to: 1 },
  { letter: "C", title: "Onregelmatige (être, avoir, ...)", emoji: "⚡", from: 2, to: 2 },
  { letter: "D", title: "Imparfait — verleden", emoji: "⏪", from: 3, to: 3 },
  { letter: "E", title: "Passé composé — voltooid", emoji: "✅", from: 4, to: 4 },
  { letter: "F", title: "Eind-toets", emoji: "🏆", from: 5, to: 5 },
];

function groepenSvg() {
  return `<svg viewBox="0 0 320 160">
<rect x="0" y="0" width="320" height="160" fill="${COLORS.paper}"/>
<text x="160" y="22" text-anchor="middle" fill="${COLORS.curve2}" font-size="13" font-family="Arial" font-weight="bold">3 groepen Franse werkwoorden</text>

<rect x="15" y="45" width="95" height="95" rx="8" fill="rgba(128,203,196,0.15)" stroke="${COLORS.er}" stroke-width="1.5"/>
<text x="62" y="65" text-anchor="middle" fill="${COLORS.er}" font-size="11" font-family="Arial" font-weight="bold">GROEP 1</text>
<text x="62" y="83" text-anchor="middle" fill="${COLORS.text}" font-size="14" font-family="Arial" font-weight="bold">-er</text>
<text x="62" y="103" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">parler · aimer</text>
<text x="62" y="115" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">manger · jouer</text>
<text x="62" y="132" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial" font-style="italic">~90% — meeste</text>

<rect x="115" y="45" width="95" height="95" rx="8" fill="rgba(255,213,79,0.15)" stroke="${COLORS.ir}" stroke-width="1.5"/>
<text x="162" y="65" text-anchor="middle" fill="${COLORS.ir}" font-size="11" font-family="Arial" font-weight="bold">GROEP 2</text>
<text x="162" y="83" text-anchor="middle" fill="${COLORS.text}" font-size="14" font-family="Arial" font-weight="bold">-ir</text>
<text x="162" y="103" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">finir · choisir</text>
<text x="162" y="115" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">grandir · maigrir</text>
<text x="162" y="132" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial" font-style="italic">met -iss-</text>

<rect x="215" y="45" width="95" height="95" rx="8" fill="rgba(255,138,101,0.15)" stroke="${COLORS.re}" stroke-width="1.5"/>
<text x="262" y="65" text-anchor="middle" fill="${COLORS.re}" font-size="11" font-family="Arial" font-weight="bold">GROEP 3</text>
<text x="262" y="83" text-anchor="middle" fill="${COLORS.text}" font-size="14" font-family="Arial" font-weight="bold">-re + onregelm.</text>
<text x="262" y="103" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">vendre · prendre</text>
<text x="262" y="115" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">être · avoir</text>
<text x="262" y="132" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial" font-style="italic">moeilijkste</text>
</svg>`;
}

const steps = [
  // STAP 1: Werkwoorden basis
  {
    title: "Wat is een werkwoord in Frans?",
    explanation:
      "In Frans heet een werkwoord **le verbe**. Elk werkwoord heeft een **infinitief** *(basisvorm)*.\n\n**3 hoofdgroepen** *(uit het hoofd!)*:\n\n**Groep 1: -er** (verreweg de grootste — ~90%)\n• **parler** (spreken)\n• **aimer** (houden van)\n• **manger** (eten)\n• **jouer** (spelen)\n• **chanter** (zingen)\n• **regarder** (kijken)\n• **acheter** (kopen)\n• **trouver** (vinden)\n\n**Groep 2: -ir** (regelmatig, met -iss-)\n• **finir** (afmaken/eindigen)\n• **choisir** (kiezen)\n• **grandir** (groeien)\n• **maigrir** (afvallen)\n• **réussir** (slagen)\n\n**Groep 3: -re + onregelmatig**\n• **vendre** (verkopen)\n• **attendre** (wachten)\n• **prendre** (nemen)\n• **être** (zijn) — totaal onregelmatig\n• **avoir** (hebben) — totaal onregelmatig\n• **aller** (gaan) — onregelmatig\n• **faire** (maken/doen) — onregelmatig\n\n**Persoonlijke voornaamwoorden** *(uit het hoofd!)*:\n• **je** = ik *(of j' voor klinker)*\n• **tu** = jij\n• **il** = hij\n• **elle** = zij (vrouw)\n• **on** = men / wij (informeel)\n• **nous** = wij\n• **vous** = u (formeel) of jullie\n• **ils** = zij (mannen of gemengd)\n• **elles** = zij (alleen vrouwen)\n\n**Speciaal**:\n• **je → j'** voor klinker: 'j'aime' (niet 'je aime').\n• **vous** is **u** (1 persoon formeel) ÉN **jullie** (meerdere personen).\n• **on** wordt informeel voor 'wij' gebruikt: 'on va' = 'we gaan'.\n\n**Tijden in Frans** *(net als NL)*:\n• **Présent** (tegenwoordig): je parle.\n• **Imparfait** (verleden, duur): je parlais.\n• **Passé composé** (voltooid): j'ai parlé.\n• **Futur** (toekomst): je parlerai.\n• **Conditionnel** (zou): je parlerais.\n• **Subjonctif** (subjectief): que je parle.\n\nVoor klas 1-2: vooral **Présent + Imparfait + Passé composé**.\n\n**Stam + uitgang**:\nVerwijder **-er/-ir/-re** van infinitief = **stam**.\n• parler → **parl-**\n• finir → **fin-**\n• vendre → **vend-**\n\nDan voeg je uitgang toe per persoon.\n\n**Cito-vraag**:\n*'Welk groep is 'parler'?'* → -er werkwoord (groep 1).\n*'Wat betekent 'tu'?'* → jij.\n*'Wat is de stam van 'finir'?'* → fin-.",
    svg: groepenSvg(),
    checks: [
      {
        q: "Welk werkwoord is **groep 1 (-er)**?",
        options: ["parler (spreken)", "finir (afmaken)", "vendre (verkopen)", "être (zijn)"],
        answer: 0,
        wrongHints: [null, "Groep 2.", "Groep 3.", "Onregelmatig."],
      },
      {
        q: "Wat betekent **'tu'**?",
        options: ["jij", "ik", "hij", "wij"],
        answer: 0,
        wrongHints: [null, "Dat is 'je'.", "Dat is 'il'.", "Dat is 'nous'."],
      },
      {
        q: "Wat is de stam van **'aimer'**?",
        options: ["aim-", "aimer-", "am-", "aime-"],
        answer: 0,
        wrongHints: [null, "Met -er.", "Spelling fout.", "Met -e."],
      },
      {
        q: "Waarom **'j'aime'** en niet **'je aime'**?",
        options: ["Voor klinker wordt je → j'", "Spelling fout", "Beide goed", "Alleen poëzie"],
        answer: 0,
        wrongHints: [null, "Wel correct.", "Niet allebei.", "Algemene regel."],
      },
    ],
  },

  // STAP 2: Présent regelmatig
  {
    title: "Présent (tegenwoordige tijd) — regelmatig",
    explanation:
      "**Présent regelmatig — Groep 1 (-er)**:\n\nVerwijder -er, voeg uitgang toe.\n\nVoorbeeld: **parler** (spreken) → stam **parl-**:\n• je parl**e**\n• tu parl**es**\n• il/elle/on parl**e**\n• nous parl**ons**\n• vous parl**ez**\n• ils/elles parl**ent**\n\n**Uitspraak-tip**: -e / -es / -ent klinken hetzelfde! De -nt aan eind is stom.\n\n**Andere -er werkwoorden** (zelfde uitgangen):\n• **aimer**: j'aime, tu aimes, il aime, nous aimons, vous aimez, ils aiment.\n• **chanter**: je chante, tu chantes, il chante, nous chantons.\n• **jouer**: je joue, tu joues, il joue, nous jouons, vous jouez, ils jouent.\n• **manger**: je mange, tu manges, il mange, nous **mangeons** *(let op extra -e voor zachte g!)*, vous mangez.\n\n**Présent — Groep 2 (-ir met -iss-)**:\n\nVoorbeeld: **finir** (afmaken) → stam **fin-**:\n• je fin**is**\n• tu fin**is**\n• il/elle/on fin**it**\n• nous fin**issons**\n• vous fin**issez**\n• ils/elles fin**issent**\n\n**Tip**: meervoud krijgt **-iss-** ingelast tussen stam en uitgang.\n\nAndere -ir:\n• **choisir**: je choisis, tu choisis, il choisit, nous choisissons, vous choisissez, ils choisissent.\n• **grandir**: je grandis, etc.\n\n**Présent — Groep 3 (-re)**:\n\nVoorbeeld: **vendre** (verkopen) → stam **vend-**:\n• je vend**s**\n• tu vend**s**\n• il/elle/on vend (geen uitgang!)\n• nous vend**ons**\n• vous vend**ez**\n• ils/elles vend**ent**\n\nAndere -re:\n• **attendre** (wachten): j'attends, tu attends, il attend, nous attendons.\n• **répondre** (antwoorden): je réponds, tu réponds, il répond.\n\n**Cito-truc — onthoud per groep**:\n• **-er**: e/es/e/ons/ez/ent.\n• **-ir**: is/is/it/issons/issez/issent.\n• **-re**: s/s/-/ons/ez/ent.\n\n**Cito-voorbeeld**:\n*'Vervoeg 'parler' voor 'nous'.'* → nous parlons.\n*'Vervoeg 'finir' voor 'tu'.'* → tu finis.\n*'Vervoeg 'vendre' voor 'il'.'* → il vend.\n\n**Voorbeeldzinnen**:\n• Je **parle** français. *(Ik spreek Frans.)*\n• Tu **aimes** la musique. *(Jij houdt van muziek.)*\n• Nous **finissons** nos devoirs. *(Wij maken ons huiswerk af.)*\n• Vous **vendez** des fleurs. *(U verkoopt bloemen.)*",
    checks: [
      {
        q: "**parler + je** → ?",
        options: ["je parle", "je parles", "je parlent", "je parler"],
        answer: 0,
        wrongHints: [null, "Voor 'tu'.", "Voor 'ils'.", "Infinitief."],
      },
      {
        q: "**parler + nous** → ?",
        options: ["nous parlons", "nous parle", "nous parlez", "nous parlent"],
        answer: 0,
        wrongHints: [null, "Niet meervoud.", "Voor vous.", "Voor ils."],
      },
      {
        q: "**finir + il** → ?",
        options: ["il finit", "il finis", "il finissent", "il finissons"],
        answer: 0,
        wrongHints: [null, "Voor je/tu.", "Voor ils.", "Voor nous."],
      },
      {
        q: "**vendre + tu** → ?",
        options: ["tu vends", "tu vend", "tu vendes", "tu vendons"],
        answer: 0,
        wrongHints: [null, "Voor il.", "Niet correct.", "Voor nous."],
        uitlegPad: {
          stappen: [
            { titel: "vendre is -re groep", tekst: "Verwijder -re → stam vend." },
            { titel: "Uitgang voor tu", tekst: "Bij -re werkwoorden krijgt 'tu' uitgang -s: tu vends." },
          ],
          woorden: [{ woord: "stam", uitleg: "Wat overblijft na verwijderen van -er/-ir/-re." }],
          theorie: "Groep 3 -re werkwoorden: stam + s/s/-/ons/ez/ent.",
          voorbeelden: [{ type: "stap", tekst: "attendre → tu attends (je wacht)." }],
          basiskennis: [{ onderwerp: "Verschil met -er", uitleg: "Bij -er krijgt 'tu' uitgang -es; bij -re alleen -s." }],
          niveaus: {
            basis: "tu vends. A.",
            simpeler: "vendre: verwijder -re → stam vend. Voor tu kom -s achter de stam → tu vends. = A.",
            nogSimpeler: "tu vends = A.",
          },
        },
      },
    ],
  },

  // STAP 3: Onregelmatige
  {
    title: "Onregelmatige werkwoorden — être, avoir, aller, faire",
    explanation:
      "**De 4 belangrijkste onregelmatige werkwoorden** in Frans:\n\n**1. être** (zijn):\n| je | suis |\n| tu | es |\n| il/elle/on | est |\n| nous | sommes |\n| vous | êtes |\n| ils/elles | sont |\n\nVoorbeelden:\n• Je **suis** étudiant. *(Ik ben student.)*\n• Elle **est** française. *(Zij is Frans.)*\n• Nous **sommes** prêts. *(Wij zijn klaar.)*\n\n**2. avoir** (hebben):\n| j' | ai |\n| tu | as |\n| il/elle/on | a |\n| nous | avons |\n| vous | avez |\n| ils/elles | ont |\n\nVoorbeelden:\n• J'**ai** un chien. *(Ik heb een hond.)*\n• Tu **as** raison. *(Jij hebt gelijk.)*\n• Ils **ont** faim. *(Zij hebben honger.)*\n\n**3. aller** (gaan):\n| je | vais |\n| tu | vas |\n| il/elle/on | va |\n| nous | allons |\n| vous | allez |\n| ils/elles | vont |\n\nVoorbeelden:\n• Je **vais** à l'école. *(Ik ga naar school.)*\n• Nous **allons** au cinéma. *(Wij gaan naar de bioscoop.)*\n\n**4. faire** (maken/doen):\n| je | fais |\n| tu | fais |\n| il/elle/on | fait |\n| nous | faisons |\n| vous | faites |\n| ils/elles | font |\n\nVoorbeelden:\n• Je **fais** mes devoirs. *(Ik maak mijn huiswerk.)*\n• Que **faites**-vous? *(Wat doet u?)*\n\n**Andere veel-gebruikt onregelmatig**:\n\n**venir** (komen): je viens, tu viens, il vient, nous venons, vous venez, ils viennent.\n\n**voir** (zien): je vois, tu vois, il voit, nous voyons, vous voyez, ils voient.\n\n**savoir** (weten): je sais, tu sais, il sait, nous savons, vous savez, ils savent.\n\n**pouvoir** (kunnen): je peux, tu peux, il peut, nous pouvons, vous pouvez, ils peuvent.\n\n**vouloir** (willen): je veux, tu veux, il veut, nous voulons, vous voulez, ils veulent.\n\n**devoir** (moeten): je dois, tu dois, il doit, nous devons, vous devez, ils doivent.\n\n**Cito-vraag**:\n*'Vervoeg 'être' voor 'nous'.'* → nous sommes.\n*'Vervoeg 'avoir' voor 'ils'.'* → ils ont.\n*'Vervoeg 'aller' voor 'je'.'* → je vais.\n\n**Aller + infinitief = toekomst (futur proche)**:\n• Je **vais manger**. *(Ik ga eten — zo dadelijk.)*\n• Nous **allons partir**. *(Wij gaan vertrekken.)*\nVergelijkbaar met NL 'gaan + werkwoord' voor naderbij komende toekomst.",
    checks: [
      {
        q: "**être + je** → ?",
        options: ["je suis", "je es", "je est", "je sont"],
        answer: 0,
        wrongHints: [null, "Voor tu.", "Voor il.", "Voor ils."],
      },
      {
        q: "**avoir + nous** → ?",
        options: ["nous avons", "nous a", "nous as", "nous ont"],
        answer: 0,
        wrongHints: [null, "Voor il.", "Voor tu.", "Voor ils."],
      },
      {
        q: "**aller + tu** → ?",
        options: ["tu vas", "tu allez", "tu va", "tu vais"],
        answer: 0,
        wrongHints: [null, "Voor vous.", "Voor il.", "Voor je."],
      },
      {
        q: "**'Je ___ aller au cinéma.'** Welk werkwoord?",
        options: ["vais (van aller — futur proche)", "suis", "ai", "vais aller"],
        answer: 0,
        wrongHints: [null, "être past niet.", "avoir past niet.", "Niet dubbel."],
      },
    ],
  },

  // STAP 4: Imparfait
  {
    title: "Imparfait — verleden tijd (duur)",
    explanation:
      "**Imparfait** = verleden tijd voor **duurzame** of **herhaalde** acties.\n\n**Wanneer gebruik je Imparfait?**\n• **Beschrijven hoe het was**: Il faisait beau. (Het was mooi weer.)\n• **Gewoonten in verleden**: Je jouais au foot le mercredi. (Ik speelde voetbal op woensdag.)\n• **Lange acties**: Pendant que je dormais, il pleuvait. (Terwijl ik sliep, regende het.)\n• **Leeftijd / gevoel in verleden**: J'avais 10 ans. (Ik was 10 jaar.)\n\n**Formule** *(uit het hoofd!)*:\nNeem **nous-vorm Présent**, verwijder -ons, voeg uitgangen toe.\n\n**Uitgangen Imparfait** (voor **alle** werkwoorden!):\n| je | -ais |\n| tu | -ais |\n| il/elle/on | -ait |\n| nous | -ions |\n| vous | -iez |\n| ils/elles | -aient |\n\n**Voorbeeld parler**:\n• Nous-vorm: nous parl**ons** → stam **parl**-\n• je parl**ais**\n• tu parl**ais**\n• il parl**ait**\n• nous parl**ions**\n• vous parl**iez**\n• ils parl**aient**\n\n**Voorbeeld finir**:\n• nous-vorm: nous finissons → stam **finiss**-\n• je finissais, tu finissais, il finissait, nous finissions, vous finissiez, ils finissaient.\n\n**Voorbeeld faire**:\n• nous-vorm: nous faisons → stam **fais**-\n• je faisais, tu faisais, il faisait, nous faisions, vous faisiez, ils faisaient.\n\n**Uitzondering — être**:\nÊtre heeft een **speciale Imparfait-stam**: **ét-**.\n• j'étais\n• tu étais\n• il était\n• nous étions\n• vous étiez\n• ils étaient\n\n**Voorbeelden in zin**:\n• Quand j'**étais** petit, je **jouais** souvent au parc.\n  *(Toen ik klein was, speelde ik vaak in het park.)*\n• Il **faisait** beau hier. *(Het was mooi weer gisteren.)*\n• Nous **aimions** la mer. *(Wij hielden van de zee.)*\n\n**Imparfait vs Passé composé**:\n• **Imparfait** = beschrijving, duur, gewoonte ('was, deed regelmatig').\n• **Passé composé** = afgeronde actie, eenmalig ('heeft gedaan').\n\nVergelijk:\n• Quand j'étais en France, j'ai mangé une crêpe. *(Imparfait = situatie, Passé composé = specifieke actie.)*\n\n**Cito-vraag**:\n*'Imparfait van 'parler' voor 'il'.'* → il parlait.\n*'Imparfait van 'être' voor 'je'.'* → j'étais.\n*'Imparfait van 'avoir' voor 'nous'.'* → nous avions.\n\n**Tip — uitspraak**:\n• -ais / -ait / -aient klinken allemaal hetzelfde *(stomme medeklinker einde)*.\n• Alleen schrijfwijze anders per persoon.",
    checks: [
      {
        q: "Imparfait van **'parler' (je)** = ?",
        options: ["je parlais", "je parle", "je parlais (nu)", "j'ai parlé"],
        answer: 0,
        wrongHints: [null, "Présent.", "Identiek aan A.", "Passé composé."],
      },
      {
        q: "Imparfait van **'être' (j')** = ?",
        options: ["j'étais", "je suis", "j'ai été", "j'étions"],
        answer: 0,
        wrongHints: [null, "Présent.", "Passé composé.", "Voor nous."],
      },
      {
        q: "Wanneer gebruik je **Imparfait**?",
        options: ["Beschrijven hoe het was + gewoontes in verleden", "Eenmalige actie verleden", "Toekomst", "Tegenwoordig"],
        answer: 0,
        wrongHints: [null, "Dat is Passé composé.", "Niet verleden.", "Présent."],
      },
      {
        q: "Imparfait van **'avoir' (nous)** = ?",
        options: ["nous avions", "nous avons", "nous avaient", "nous avait"],
        answer: 0,
        wrongHints: [null, "Présent.", "Voor ils.", "Voor il."],
      },
    ],
  },

  // STAP 5: Passé composé
  {
    title: "Passé composé — voltooid",
    explanation:
      "**Passé composé** = voltooid tijd. Vergelijkbaar met Engels 'have done' of NL 'ik heb gedaan'.\n\n**Formule**: **avoir/être (Présent) + participe passé**.\n\n**Hulpwerkwoord kiezen**:\n• **avoir** voor **meeste** werkwoorden.\n• **être** voor 17 specifieke werkwoorden van **beweging** + alle **wederkerende** werkwoorden.\n\n**Participe passé** — vorm:\n\n**Groep 1 (-er)** → vervang -er door **-é**:\n• parler → **parlé**.\n• aimer → **aimé**.\n• manger → **mangé**.\n\n**Groep 2 (-ir)** → vervang -ir door **-i**:\n• finir → **fini**.\n• choisir → **choisi**.\n\n**Groep 3 (-re)** → vervang -re door **-u**:\n• vendre → **vendu**.\n• attendre → **attendu**.\n\n**Onregelmatige participes passés** *(uit het hoofd!)*:\n• être → **été**.\n• avoir → **eu**.\n• faire → **fait**.\n• aller → **allé** *(met être!)*.\n• venir → **venu** *(met être!)*.\n• voir → **vu**.\n• savoir → **su**.\n• pouvoir → **pu**.\n• vouloir → **voulu**.\n• devoir → **dû** *(met accent!)*.\n• mettre → **mis**.\n• prendre → **pris**.\n• dire → **dit**.\n• écrire → **écrit**.\n• lire → **lu**.\n• boire → **bu**.\n• naître → **né** *(met être!)*.\n• mourir → **mort** *(met être!)*.\n\n**17 être-werkwoorden** *(beweging, ezelsbruggetje MRS VANDERTRAMP)*:\nM-R-S V-A-N-D-E-R-T-R-A-M-P\n• **M**onter — opklimmen\n• **R**ester — blijven\n• **S**ortir — uitgaan\n• **V**enir — komen\n• **A**ller — gaan\n• **N**aître — geboren worden\n• **D**escendre — naar beneden\n• **E**ntrer — binnenkomen\n• **R**evenir — terugkomen\n• **T**omber — vallen\n• **R**etourner — terugkeren\n• **A**rriver — aankomen\n• **M**ourir — sterven\n• **P**artir — vertrekken\n\nPlus alle **wederkerende werkwoorden** (se laver, se réveiller, etc.).\n\n**Bij être komt de participe overeen met onderwerp**:\n• Il **est allé**.\n• Elle **est allée** *(extra -e voor vrouwelijk)*.\n• Ils **sont allés** *(extra -s voor meervoud)*.\n• Elles **sont allées** *(-es voor vrouwelijk meervoud)*.\n\nBij **avoir** geen overeenkomst *(meestal)*.\n\n**Voorbeelden**:\n• J'**ai parlé** français. *(Ik heb Frans gesproken.)*\n• Tu **as fini** ton livre. *(Jij hebt je boek afgemaakt.)*\n• Il **est allé** au cinéma. *(Hij is naar de bioscoop gegaan.)*\n• Elle **est venue** chez moi. *(Zij is bij mij gekomen — met -e.)*\n\n**Voor uitgebreide Passé composé**: zie apart pad `passe-compose-frans`.\n\n**Cito-vraag**:\n*'Welk hulpwerkwoord bij 'aller'?'* → être.\n*'Welk hulpwerkwoord bij 'manger'?'* → avoir.\n*'Participe passé van 'finir'?'* → fini.\n*'Participe passé van 'faire'?'* → fait.",
    checks: [
      {
        q: "Welk hulpwerkwoord bij **'aller' in Passé composé**?",
        options: ["être", "avoir", "faire", "venir"],
        answer: 0,
        wrongHints: [null, "Niet voor beweging.", "Geen hulpwerkwoord hier.", "Geen hulpwerkwoord."],
      },
      {
        q: "Participe passé van **'parler'** = ?",
        options: ["parlé", "parlu", "parli", "parlir"],
        answer: 0,
        wrongHints: [null, "Niet correct.", "Voor -ir.", "Bestaat niet."],
      },
      {
        q: "Participe passé van **'avoir'** = ?",
        options: ["eu", "avu", "ai", "été"],
        answer: 0,
        wrongHints: [null, "Niet correct.", "Présent.", "Van être."],
      },
      {
        q: "**'Elle ___ allée au cinéma.'** Welk werkwoord?",
        options: ["est (être)", "a (avoir)", "va (aller)", "fait (faire)"],
        answer: 0,
        wrongHints: [null, "Niet voor aller.", "Présent, geen voltooid.", "Verkeerd."],
        uitlegPad: {
          stappen: [
            { titel: "aller is een être-werkwoord", tekst: "MRS VANDERTRAMP: aller komt in deze lijst → hulpwerkwoord 'être' in Passé composé." },
            { titel: "Overeenkomst met onderwerp", tekst: "'Elle' is vrouwelijk enkelvoud → participe past zich aan: allé → allée (extra -e)." },
          ],
          woorden: [{ woord: "participe passé", uitleg: "Voltooid deelwoord in Frans." }],
          theorie: "Bij être passe je participe aan onderwerp: -e (vrouw), -s (meervoud), -es (vrouw meervoud).",
          voorbeelden: [{ type: "stap", tekst: "Il est allé / Elle est allée / Ils sont allés / Elles sont allées." }],
          basiskennis: [{ onderwerp: "Klein detail, vaak getoetst", uitleg: "Cito test dit graag — leer de uitzonderingen." }],
          niveaus: {
            basis: "est. A.",
            simpeler: "aller is in de MRS VANDERTRAMP-lijst → Passé composé met 'être'. Elle is vrouwelijk → 'elle est allée'. = A.",
            nogSimpeler: "est = A.",
          },
        },
      },
    ],
  },

  // STAP 6: Eind-toets
  {
    title: "Eind-opdracht — Frans werkwoorden mix",
    explanation:
      "Mix-toets in Cito-stijl. Door elkaar: Présent, Imparfait, Passé composé.\n\nVeel succes!",
    checks: [
      {
        q: "**aimer + tu** in Présent → ?",
        options: ["tu aimes", "tu aime", "tu aimons", "tu aimez"],
        answer: 0,
        wrongHints: [null, "Voor je/il.", "Voor nous.", "Voor vous."],
      },
      {
        q: "**être + il** in Présent → ?",
        options: ["il est", "il a", "il sont", "il était"],
        answer: 0,
        wrongHints: [null, "Avoir.", "Voor ils.", "Imparfait."],
      },
      {
        q: "Imparfait van **'avoir' (j')** = ?",
        options: ["j'avais", "j'ai", "j'avait", "j'eu"],
        answer: 0,
        wrongHints: [null, "Présent.", "Voor il.", "Participe passé."],
      },
      {
        q: "Participe passé van **'finir'** = ?",
        options: ["fini", "finu", "finit", "finissé"],
        answer: 0,
        wrongHints: [null, "Niet correct.", "Présent (il).", "Bestaat niet."],
      },
      {
        q: "**'Nous ___ allés à Paris.'** Passé composé.",
        options: ["sommes", "avons", "étions", "irons"],
        answer: 0,
        wrongHints: [null, "Niet voor aller.", "Imparfait.", "Futur."],
      },
      {
        q: "**aller + nous** in Présent → ?",
        options: ["nous allons", "nous va", "nous allez", "nous vais"],
        answer: 0,
        wrongHints: [null, "Voor il.", "Voor vous.", "Voor je."],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const werkwoordsvervoegingFrans = {
  id: "werkwoordsvervoeging-frans",
  title: "Werkwoorden Frans (klas 1-2)",
  emoji: "📝",
  level: "klas1-2",
  subject: "frans",
  referentieNiveau: "2F",
  sloThema: "Frans — werkwoordsvervoeging",
  prerequisites: [
    { id: "passe-compose-frans", title: "Passé composé Frans", niveau: "2F" },
  ],
  intro:
    "Werkwoorden Frans voor klas 1-2 — 3 groepen (-er/-ir/-re), persoonlijke voornaamwoorden (je/tu/il/elle/nous/vous/ils/elles), Présent regelmatig + onregelmatig (être/avoir/aller/faire), Imparfait (verleden duur), Passé composé (avoir/être + participe passé, MRS VANDERTRAMP). ~15 min.",
  triggerKeywords: [
    "frans werkwoord", "werkwoordsvervoeging frans",
    "présent", "imparfait", "passé composé",
    "être", "avoir", "aller", "faire",
    "je suis", "tu es", "j'ai",
    "MRS VANDERTRAMP", "participe passé",
  ],
  chapters,
  steps,
};

export default werkwoordsvervoegingFrans;
