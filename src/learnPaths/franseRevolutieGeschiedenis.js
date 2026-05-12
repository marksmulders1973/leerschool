// Leerpad: Franse Revolutie + Napoleon — klas 2-3 onderbouw VO.
// Onderdeel geschiedenis Europa. Referentieniveau 2F.
// 6 stappen met uitlegPad. Mark's continuum-visie.

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  curve: "#00c853",
  curve2: "#69f0ae",
  rood: "#ef5350",
  wit: "#f5f5f5",
  blauw: "#1976d2",
  goud: "#ffd54f",
  highlight: "#ff7043",
};

const stepEmojis = ["👑", "📖", "🏛️", "🗡️", "🎖️", "🏆"];

const chapters = [
  { letter: "A", title: "Frankrijk vóór 1789", emoji: "👑", from: 0, to: 0 },
  { letter: "B", title: "Oorzaken + Verlichting", emoji: "📖", from: 1, to: 1 },
  { letter: "C", title: "Bestorming Bastille 1789", emoji: "🏛️", from: 2, to: 2 },
  { letter: "D", title: "Terreur + Robespierre", emoji: "🗡️", from: 3, to: 3 },
  { letter: "E", title: "Napoleon + Europa", emoji: "🎖️", from: 4, to: 4 },
  { letter: "F", title: "Eind-opdracht", emoji: "🏆", from: 5, to: 5 },
];

function tijdslijnSvg() {
  return `<svg viewBox="0 0 320 160">
<rect x="0" y="0" width="320" height="160" fill="${COLORS.paper}"/>
<text x="160" y="22" text-anchor="middle" fill="${COLORS.curve2}" font-size="13" font-family="Arial" font-weight="bold">Franse Revolutie + Napoleon — tijdlijn</text>
<line x1="20" y1="85" x2="300" y2="85" stroke="${COLORS.goud}" stroke-width="2"/>
<circle cx="30" cy="85" r="6" fill="${COLORS.rood}"/>
<text x="30" y="105" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">1789</text>
<text x="30" y="118" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">Bastille</text>
<circle cx="100" cy="85" r="6" fill="${COLORS.rood}"/>
<text x="100" y="105" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">1793</text>
<text x="100" y="118" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">Koning onthoofd</text>
<circle cx="170" cy="85" r="6" fill="${COLORS.rood}"/>
<text x="170" y="105" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">1794</text>
<text x="170" y="118" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">Terreur eindigt</text>
<circle cx="240" cy="85" r="6" fill="${COLORS.blauw}"/>
<text x="240" y="105" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">1804</text>
<text x="240" y="118" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">Napoleon keizer</text>
<circle cx="290" cy="85" r="6" fill="${COLORS.blauw}"/>
<text x="290" y="105" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">1815</text>
<text x="290" y="118" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">Waterloo</text>
<text x="160" y="148" text-anchor="middle" fill="${COLORS.highlight}" font-size="11" font-family="Arial" font-style="italic">Begin moderne tijd in Europa</text>
</svg>`;
}

const steps = [
  // STAP 1: Frankrijk vóór 1789
  {
    title: "Frankrijk vóór 1789 — koning + 3 standen",
    explanation:
      "Vóór de Franse Revolutie was Frankrijk een **absolute monarchie**.\n\n**Absolute monarchie** = de **koning had ALLE macht**. Geen parlement met echte invloed, geen verkiezingen.\n\n**De koning**: **Lodewijk XVI** *(zoon van Lodewijk XV, gehuwd met Marie-Antoinette)*.\n• Woonde in **Versailles** *(enorm paleis)*.\n• Leefde in luxe terwijl bevolking arm was.\n• Genoot van macht 'bij gratie Gods' — geloof in goddelijk recht.\n\n**De 3 standen** *(uit je hoofd!)*:\n• **1e stand** — **geestelijkheid** (Kerk-mensen). ~120.000 mensen.\n• **2e stand** — **adel** (rijke families, jonkers). ~400.000 mensen.\n• **3e stand** — **iedereen anders** (boeren, arbeiders, burgers, kooplieden). ~25 miljoen mensen.\n\n**Onrechtvaardig systeem**:\n• 1e en 2e stand betaalden **geen belasting** *(of heel weinig)*.\n• 3e stand droeg **alle lasten** — belastingen op zout, brood, wijn, alles.\n• 3e stand had **weinig stemrecht** en politieke macht.\n\n**Wat had de 3e stand wel**:\n• De **bourgeoisie** *(rijke kooplieden + advocaten + dokters)*.\n• Slim, opgeleid, met geld — maar geen invloed in politiek.\n• Werd boos: 'wij dragen alles, maar mogen niets zeggen!'.\n\n**Marie-Antoinette mythe**:\nFamous quote *'Laat ze cake eten'* *(als reactie op brood-tekort bij volk)* — waarschijnlijk **niet echt gezegd** door haar. Wel symbool geworden van de luxe-leventje van het hof.\n\n**Het volk leed**:\n• Slechte oogsten 1788 → brood-tekort.\n• Belastingen verhoogd om koningsschulden te betalen.\n• Oorlog (steun aan Amerikaanse onafhankelijkheid) leegde schatkist.\n• Bourgeoisie wilde verandering.",
    svg: tijdslijnSvg(),
    checks: [
      {
        q: "Wat is een **absolute monarchie**?",
        options: ["Koning heeft alle macht", "Koning + parlement delen", "Geen koning", "Democratie"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Dat is constitutionele monarchie.", "Republiek/anders.", "Tegenovergesteld."],
      },
      {
        q: "Wie was **koning van Frankrijk** in 1789?",
        options: ["Lodewijk XVI", "Napoleon", "Robespierre", "Lodewijk XIV"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Kwam later.", "Revolutionair, geen koning.", "Eerder — Zonnekoning."],
      },
      {
        q: "Hoeveel **standen** waren er?",
        options: ["3", "2", "5", "10"],
        answer: 0,
        wrongHints: [null, "Klopt — geestelijkheid, adel, rest.", "Te weinig.", "Niet zo veel.", "Te veel."],
      },
      {
        q: "Wie betaalde **bijna alle belasting**?",
        options: ["3e stand (gewone volk)", "1e stand (kerk)", "2e stand (adel)", "Iedereen evenveel"],
        answer: 0,
        wrongHints: [null, "Klopt — terwijl ze geen macht hadden.", "Vrijgesteld.", "Vrijgesteld.", "Bestond niet."],
      },
    ],
  },

  // STAP 2: Oorzaken + Verlichting
  {
    title: "Oorzaken — armoede + Verlichting + Amerika",
    explanation:
      "Veel **oorzaken** kwamen samen in 1789. Niet 1 ding, maar **een opstapeling**.\n\n**1. Geldgebrek**\n• Frankrijk had **enorme schulden** door oorlogen.\n• Steun aan Amerikaanse onafhankelijkheid (1776-1783) had veel gekost.\n• Versailles + hof = duur.\n• Belastingen verhogen → 3e stand woedend.\n\n**2. Slechte oogsten**\n• Winter 1788-1789 was streng + droogte.\n• Brood-tekort → **brood-prijs verdriedubbelde**.\n• Mensen hadden honger.\n\n**3. Verlichting** *(de Ideologie)*\nNieuwe filosofische beweging in 18e eeuw met denkers als:\n• **Voltaire** *(Frans)* — kritiek op kerk, pleitte voor vrijheid van meningsuiting.\n• **Montesquieu** — bedacht **scheiding der machten** *(wetgevend / uitvoerend / rechtsprekend)*.\n• **Rousseau** — *'Mensen worden vrij geboren maar zitten overal in ketenen.'* Pleitte voor **volkssoevereiniteit** *(volk heeft macht)*.\n• **Diderot** + **D'Alembert** — maakten **Encyclopédie** *(eerste moderne encyclopedie)*.\n\n**De Verlichting bracht**:\n• **Rationeel denken** — geloof in rede + wetenschap.\n• **Mensenrechten** — iedereen gelijke waarde.\n• **Vrijheid** van denken, godsdienst, meningsuiting.\n• **Democratie** — volk moet stemmen.\n\n**4. Amerikaanse Revolutie (1776-1783)**\n• De 13 Britse koloniën in Amerika kwamen in opstand.\n• Verklaring van Onafhankelijkheid *(1776)* met *'Alle mensen zijn gelijk geschapen'*.\n• Versloegen Engeland → werden VS.\n• **Frans volk zag**: 'als de Amerikanen het kunnen, wij ook!'.\n• Bovendien: veel Franse soldaten kwamen terug met revolutionaire ideeën.\n\n**5. Bourgeoisie wilde meedoen**\nRijke kooplieden + advocaten zagen kans:\n• Hadden geld.\n• Hadden Verlichting-ideeën gelezen.\n• Maar geen politieke macht.\n• Vroegen koning om bijeenkomst van **Staten-Generaal** *(was niet gehouden sinds 1614!)*.\n\n**Cito-feitje**:\nDe Verlichting noemt men ook **'Eeuw der Rede'** *(L'Âge des Lumières)*. Geboorteplek van moderne democratie + mensenrechten.",
    checks: [
      {
        q: "Wat is de **Verlichting**?",
        options: ["18e-eeuwse filosofie van rede + vrijheid + mensenrechten", "Een religieuze beweging", "Een oorlog", "Een schilderstijl"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Juist tegenkracht voor traditionele religie.", "Geen oorlog.", "Geen kunststijl."],
      },
      {
        q: "Wie pleitte voor **scheiding der machten**?",
        options: ["Montesquieu", "Voltaire", "Rousseau", "Napoleon"],
        answer: 0,
        wrongHints: [null, "Klopt — wetgevend, uitvoerend, rechtsprekend.", "Ander idee.", "Volkssoevereiniteit.", "Later."],
      },
      {
        q: "Welke revolutie **inspireerde** Frankrijk?",
        options: ["Amerikaanse (1776)", "Russische", "Chinese", "Engelse"],
        answer: 0,
        wrongHints: [null, "Klopt — VS-onafhankelijkheid.", "Veel later.", "Veel later.", "Eerder + andere reden."],
      },
      {
        q: "Wat maakte de **winter 1788-1789** moeilijk?",
        options: ["Slechte oogst + brood-tekort", "Pestpandemie", "Aardbeving", "Buitenlandse aanval"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Pest was eerder.", "Geen aardbeving.", "Geen aanval."],
      },
    ],
  },

  // STAP 3: Bastille 1789
  {
    title: "1789 — Bestorming van de Bastille",
    explanation:
      "**14 juli 1789** = officiële begindatum van de Franse Revolutie.\n\n**Wat gebeurde er?**\nEen menigte Parijzenaren bestormde de **Bastille** *(een oude koninklijke gevangenis-vesting)*. Vrijwel symbolisch — er zaten maar 7 gevangenen — maar het bevatte ook **wapens en kruit** dat het volk wilde.\n\n**Waarom de Bastille?**\n• Symbool van koninklijke onderdrukking — mensen konden zonder proces opgesloten worden.\n• Locatie van wapens.\n• Goed zichtbaar in Parijs.\n\n**Voorafgaand: de Eed van de Kaatsbaan** *(20 juni 1789)*:\n• Koning had **Staten-Generaal** *(vergadering 3 standen)* opgeroepen om belasting-probleem te bespreken.\n• 3e stand wilde stemmen 'per hoofd' (zij waren in meerderheid). Koning weigerde.\n• 3e stand verklaarde zichzelf de **Nationale Vergadering** + zwoer dat zij niet uit elkaar zouden gaan voordat Frankrijk een **grondwet** had.\n• Dat zwoeren ze in een tennisbaan *(kaatsbaan)* omdat de echte zaal gesloten was.\n\n**Verklaring van de Rechten van Mens en Burger** *(26 augustus 1789)*:\nNa de Bastille legde de Nationale Vergadering vast:\n• Alle mensen zijn **vrij en gelijk in rechten**.\n• **Vrijheid van meningsuiting**.\n• **Eigendom** is heilig.\n• **Wet** is hetzelfde voor iedereen.\n• Belasting **eerlijk verdeeld** over iedereen.\n\nDit was revolutionair — een breuk met **eeuwen van standensamenleving**.\n\n**Wat gebeurde met de koning?**\n• Bleef eerst koning maar onder **grondwet** *(constitutionele monarchie)*.\n• Probeerde 1791 te **vluchten** naar het buitenland — werd gepakt bij Varennes.\n• Volk vertrouwde hem niet meer.\n• 1792: **monarchie afgeschaft** — Frankrijk wordt **Republiek**.\n• 21 januari 1793: **Lodewijk XVI onthoofd** met de **guillotine** *(op het Place de la Révolution, nu Place de la Concorde)*.\n• 16 oktober 1793: **Marie-Antoinette onthoofd**.\n\n**Slogan van de Revolutie**:\n**Vrijheid, Gelijkheid, Broederschap** *(Liberté, Égalité, Fraternité)*.\nStaat tot vandaag op **alle Franse overheidsgebouwen**.\n\n**De Marseillaise**:\nLied gemaakt in 1792 door **Rouget de Lisle**, werd het **volkslied** van Frankrijk *(officieel 1879)*.",
    checks: [
      {
        q: "Wat is de **officiële begindatum** van de Franse Revolutie?",
        options: ["14 juli 1789", "1 januari 1789", "26 augustus 1789", "21 januari 1793"],
        answer: 0,
        wrongHints: [null, "Klopt — bestorming Bastille.", "Niet specifiek.", "Verklaring Rechten van Mens.", "Onthoofding koning."],
      },
      {
        q: "Wat was de **Bastille**?",
        options: ["Koninklijke gevangenis + wapenkamer", "Paleis", "Kerk", "Schoolgebouw"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Niet paleis.", "Niet kerk.", "Niet school."],
      },
      {
        q: "Wat is de **slogan** van de Franse Revolutie?",
        options: ["Vrijheid, Gelijkheid, Broederschap", "Een voor allen, allen voor een", "God, vaderland, koning", "Brood en vrede"],
        answer: 0,
        wrongHints: [null, "Klopt — Liberté, Égalité, Fraternité.", "Drie Musketiers.", "Tegenovergesteld.", "Andere revolutie."],
      },
      {
        q: "Wat gebeurde met **Lodewijk XVI** in 1793?",
        options: ["Onthoofd met guillotine", "Verbannen", "Gevlucht", "Bleef koning"],
        answer: 0,
        wrongHints: [null, "Klopt — 21 januari 1793.", "Niet verbannen.", "Probeerde maar werd gepakt.", "Republiek afgekondigd."],
        uitlegPad: {
          stappen: [
            { titel: "Proces tegen de koning", tekst: "Nadat de monarchie was afgeschaft (1792) werd Lodewijk XVI berecht door de Nationale Conventie. Hij werd schuldig bevonden aan landverraad en op 21 januari 1793 onthoofd op het Place de la Révolution." },
          ],
          woorden: [{ woord: "guillotine", uitleg: "Onthoofdmachine met vallend scherp blad — bedacht door dr. Guillotin voor 'humanere' executies." }],
          theorie: "Het einde van de Franse monarchie was een breekpunt met eeuwen traditie — geen koning meer 'bij gratie Gods'.",
          voorbeelden: [{ type: "stap", tekst: "Marie-Antoinette werd ook onthoofd, op 16 oktober 1793." }],
          basiskennis: [{ onderwerp: "Schok in Europa", uitleg: "Andere koningen waren bang dat hun volk hetzelfde zou doen — leidde tot oorlogen tegen Frankrijk." }],
          niveaus: {
            basis: "Onthoofd met guillotine 21 jan 1793. A.",
            simpeler: "Na de Republiek werd de koning aangeklaagd voor landverraad. Hij kreeg de doodstraf met de guillotine op 21 januari 1793. = A.",
            nogSimpeler: "Onthoofd 1793 = A.",
          },
        },
      },
    ],
  },

  // STAP 4: Terreur
  {
    title: "Terreur + Robespierre — revolutie eet eigen kinderen",
    explanation:
      "Na de onthoofding van de koning ging de revolutie **steeds extremer** worden.\n\n**De Terreur** *(1793-1794)*:\nPeriode waarin de revolutionaire regering vermeende 'vijanden van de revolutie' liet **executeren**.\n\n**Maximilien Robespierre**:\n• Leider van de extreme **Jacobijnen**.\n• Geloofde in **'deugdzame republiek'** — vond dat alle tegenstanders moesten worden uitgeschakeld.\n• Ontwikkelde de Cult van de Hoogste Wezen (vervanger Christendom).\n• Beheerste de **Commune van Parijs** + Comité van Algemeen Welzijn.\n\n**Hoeveel doden?**\n• Ongeveer **17.000 mensen geëxecuteerd** met de guillotine.\n• Plus **25.000+ buiten Parijs gedood** in volksopstanden.\n• Inclusief **adel, geestelijken, gematigde revolutionairen** — iedereen die niet 'extreem' genoeg was.\n\n**Verhaal — Olympe de Gouges**:\nFranse schrijfster die in 1791 de **Verklaring van de Rechten van de Vrouw** schreef *(pendant op die voor mannen)*. Vroeg gelijke rechten voor vrouwen. **Werd zelf geguillotineerd** in 1793 door de Jacobijnen. Symbool van eerste feminisme.\n\n**Einde Robespierre**:\n• Mensen werden bang voor zijn eigen extremisme.\n• **27-28 juli 1794** *(Thermidor 9)*: andere revolutionairen arresteerden Robespierre.\n• **28 juli 1794**: Robespierre zelf onthoofd met de guillotine — **'de revolutie eet haar eigen kinderen op'**.\n\n**Wat kwam erna?**\n• **Directorium** *(1795-1799)* — gematigder bestuur.\n• Frankrijk vocht oorlogen tegen omringende landen *(Oostenrijk, Engeland, Pruisen)*.\n• **Politieke chaos** — meerdere staatsgrepen.\n• Een jonge generaal won veld na veld: **Napoleon Bonaparte**.\n\n**Cito-feitje**:\nDe **Marseillaise** werd in 1792 gemaakt door **Rouget de Lisle** voor Franse soldaten die naar het front gingen tegen Oostenrijk. Nog steeds het Franse volkslied.\n\n**Belangrijke termen**:\n• **Jacobijnen** = extreem-revolutionairen onder Robespierre.\n• **Girondijnen** = gematigde revolutionairen *(velen later geëxecuteerd door Jacobijnen)*.\n• **Sans-culottes** = arme Parijzenaars zonder kniebroek *(droegen lange broeken)*. Steunden revolutie.\n• **Thermidor** = revolutionaire maand-naam voor juli/augustus.\n• **Comité van Algemeen Welzijn** = uitvoerend orgaan tijdens Terreur.",
    checks: [
      {
        q: "Wie leidde de **Terreur**?",
        options: ["Robespierre", "Napoleon", "Marie-Antoinette", "Voltaire"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Komt later.", "Slachtoffer revolutie.", "Filosoof, niet politicus."],
      },
      {
        q: "Hoeveel mensen werden ongeveer **geguillotineerd** tijdens de Terreur (in heel Frankrijk)?",
        options: ["~17.000", "~100", "~1 miljoen", "~500"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Veel meer.", "Te veel.", "Te weinig."],
      },
      {
        q: "Wat gebeurde uiteindelijk met **Robespierre**?",
        options: ["Zelf onthoofd in 1794", "Werd koning", "Vluchtte naar Engeland", "Pensioen"],
        answer: 0,
        wrongHints: [null, "Klopt — 'revolutie eet eigen kinderen'.", "Frankrijk was Republiek.", "Niet gevlucht.", "Niet gepensioneerd."],
      },
      {
        q: "Wat zijn **sans-culottes**?",
        options: ["Arme Parijzenaars (zonder kniebroek)", "Generaals", "Koningsfamilie", "Buitenlandse soldaten"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Niet militair.", "Niet kon koning.", "Niet buitenlands."],
      },
    ],
  },

  // STAP 5: Napoleon
  {
    title: "Napoleon Bonaparte — keizer + verspreiding revolutie",
    explanation:
      "**Napoleon Bonaparte** *(1769-1821)* was een Corsicaanse generaal die opklom dankzij de revolutie.\n\n**Carrière**:\n• Geboren op **Corsica** *(net deel van Frankrijk geworden)*.\n• Werd **militair officier**.\n• Profiteerde van revolutie — adel was weg, dus 'gewone' getalenteerden konden hoger komen.\n• Won **veel veldslagen** in Italië en Egypte (1796-1799).\n• 1799: **coup d'état** *(staatsgreep)* — werd 1e Consul *(de facto dictator)*.\n• **1804**: kroonde zichzelf **Keizer van Frankrijk** in Notre-Dame de Paris *(in plaats van paus die hem kroonde nam Napoleon de kroon zelf op)*.\n\n**Wat deed Napoleon?**\n• Vond **Code Napoléon** *(1804)* — modern Frans wetboek dat in heel Europa kopiekrijgt. Basis nog van veel huidige rechtssystemen incl. Nederland.\n• Beheerde **administratie professioneel** *(loting i.p.v. erfopvolging voor banen)*.\n• Maakte **prefecten** *(door hem benoemde regio-bestuurders)*.\n• Sloot **Concordaat met paus** *(1801)* — Kerk werd door staat erkend maar onder staatscontrole.\n• Voerde **decimaal systeem** in (m, kg, ° celsius — kwam uit revolutie).\n\n**Veroveringen**:\n• Versloeg **Oostenrijk, Pruisen, Italië, Spanje** in vele veldslagen.\n• Op piek (~1810): **heerste over bijna heel Europa** + bondgenoten.\n• **Nederland werd 1810-1813 deel van Frankrijk** *(Lodewijk Napoleon, broer van keizer, was koning van Holland 1806-1810)*.\n\n**Invloed van Napoleon op Nederland**:\n• Burgerlijke staat *(geboorte/huwelijk/dood in officiële registers)* — komt nog steeds vandaan.\n• Achternamen verplicht *(daarvoor velen alleen voornaam + 'zoon van X')*.\n• Kadaster *(officieel grondbezit-register)*.\n• Code Civil → Nederlands Burgerlijk Wetboek.\n• Veel **administratie-systemen** die we nog gebruiken.\n\n**Einde Napoleon**:\n• **1812**: Russische winter-veldtocht ramp — 500.000 → 100.000 soldaten over.\n• **1813**: verslagen bij Leipzig.\n• **1814**: abdicatie + verbanning naar **Elba** *(Italiaans eiland)*.\n• **1815**: terug — '**de honderd dagen**' — maar verloor finaal bij **Slag van Waterloo** *(18 juni 1815)* tegen Engelsen (Wellington) + Pruisen (Blücher).\n• Verbannen naar **Sint-Helena** *(eiland midden in Atlantische Oceaan)*.\n• **Stierf daar in 1821**.\n\n**Waterloo** ligt in het huidige België.\n\n**Wat blijft van Napoleon?**\n• Naam beroemd *(positief én negatief)*.\n• Veel **Europese administratie-systemen** zijn van hem.\n• Inspireerde **nationalisme** *(volken in Europa wilden eigen staat)*.\n• Verspreidde **revolutionaire ideeën** *(gelijkheid, mensenrechten)* over heel Europa via veroveringen.",
    checks: [
      {
        q: "Wie was **Napoleon Bonaparte**?",
        options: ["Generaal + later keizer van Frankrijk", "Russische tsaar", "Koning Engeland", "Paus"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Niet Russisch.", "Niet Engels.", "Niet paus."],
      },
      {
        q: "Wanneer werd Napoleon **keizer**?",
        options: ["1804", "1789", "1815", "1769"],
        answer: 0,
        wrongHints: [null, "Klopt — kroonde zichzelf.", "Begin revolutie.", "Waterloo (einde).", "Geboortejaar."],
      },
      {
        q: "Bij welke **slag** verloor Napoleon definitief?",
        options: ["Waterloo (1815)", "Trafalgar", "Marengo", "Verdun"],
        answer: 0,
        wrongHints: [null, "Klopt — in huidig België.", "Eerder op zee.", "Eerdere overwinning.", "Veel later, WO1."],
      },
      {
        q: "Welke Nederlandse **administratie** komt van Napoleon?",
        options: ["Burgerlijke staat + achternamen + kadaster", "Belasting", "Politie", "Brandweer"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Bestond al.", "Bestond al.", "Bestond al."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is bijzonder", tekst: "Napoleon dwong administratie-vernieuwingen door die nog steeds in NL bestaan." },
            { titel: "Voorbeelden", tekst: "Burgerlijke staat (officieel register geboorte/huwelijk/dood), achternamen (verplicht), kadaster (grondbezit-registratie)." },
          ],
          woorden: [{ woord: "kadaster", uitleg: "Officieel register van grondbezit en huizen." }],
          theorie: "Napoleon moderniseerde Europa met centrale administratie.",
          voorbeelden: [{ type: "stap", tekst: "Voor Napoleon hadden veel mensen alleen 'Jan zoon van Klaas' — sindsdien achternaam verplicht." }],
          basiskennis: [{ onderwerp: "Lange invloed", uitleg: "Napoleon zat maar ~10 jaar aan macht, maar systemen leven door tot vandaag." }],
          niveaus: {
            basis: "Burgerlijke staat, achternamen, kadaster. A.",
            simpeler: "Napoleon dwong nieuwe administratie door in NL (1810-1813): officiële geboorte/huwelijksregisters, verplichte achternamen, grondbezit-register. Nog steeds in gebruik. = A.",
            nogSimpeler: "Achternamen + kadaster = A.",
          },
        },
      },
    ],
  },

  // STAP 6: Eind-mix
  {
    title: "Eind-opdracht — Franse Revolutie + Napoleon mix",
    explanation:
      "Mix-toets in Cito-stijl. Door elkaar: oorzaken, Bastille, Terreur, Napoleon.\n\nVeel succes!",
    checks: [
      {
        q: "In welk jaar **viel de Bastille**?",
        options: ["1789", "1804", "1815", "1900"],
        answer: 0,
        wrongHints: [null, "Klopt — 14 juli.", "Napoleon keizer.", "Waterloo.", "Veel later."],
      },
      {
        q: "Wat is de **slogan** van de revolutie?",
        options: ["Vrijheid, Gelijkheid, Broederschap", "God, vaderland, koning", "Brood + vrede", "Werk maakt vrij"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Tegenovergesteld.", "Russische revolutie.", "Gruwelijke gevangenkamp."],
      },
      {
        q: "Wie was de leider van de **Terreur** (1793-1794)?",
        options: ["Robespierre", "Lodewijk XVI", "Napoleon", "Marie-Antoinette"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Eerder onthoofd.", "Komt later.", "Slachtoffer."],
      },
      {
        q: "Welke filosoof bedacht **scheiding der machten**?",
        options: ["Montesquieu", "Voltaire", "Rousseau", "Robespierre"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Ander idee.", "Ander idee.", "Was politicus."],
      },
      {
        q: "Wanneer was de **Slag bij Waterloo**?",
        options: ["1815", "1789", "1804", "1900"],
        answer: 0,
        wrongHints: [null, "Klopt — 18 juni.", "Bastille.", "Kroning Napoleon.", "Te laat."],
      },
      {
        q: "Wat zijn **3 standen** in pre-revolutie Frankrijk?",
        options: ["Geestelijkheid, adel, gewone volk", "Rijk, gemiddeld, arm", "Koning, generaal, paus", "Mannen, vrouwen, kinderen"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Te eenvoudig.", "Niet zo verdeeld.", "Niet de indeling."],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const franseRevolutieGeschiedenis = {
  id: "franse-revolutie-geschiedenis",
  title: "Franse Revolutie + Napoleon (klas 2-3)",
  emoji: "🇫🇷",
  level: "klas2-3",
  subject: "geschiedenis",
  referentieNiveau: "2F",
  sloThema: "Geschiedenis Europa — Franse Revolutie + Verlichting",
  prerequisites: [
    { id: "middeleeuwen-geschiedenis", title: "Middeleeuwen", niveau: "2F" },
    { id: "gouden-eeuw-geschiedenis", title: "Gouden Eeuw", niveau: "2F" },
  ],
  intro:
    "Franse Revolutie voor klas 2-3 — Frankrijk vóór 1789 (3 standen), oorzaken + Verlichting (Voltaire/Rousseau/Montesquieu), Bestorming Bastille, Terreur + Robespierre, Napoleon + zijn invloed op Nederland. ~15 min.",
  triggerKeywords: [
    "franse revolutie", "verlichting", "bastille",
    "Lodewijk", "Marie-Antoinette", "Robespierre", "terreur",
    "Napoleon", "Waterloo", "Code Napoleon",
    "Voltaire", "Rousseau", "Montesquieu",
    "vrijheid gelijkheid broederschap",
  ],
  chapters,
  steps,
};

export default franseRevolutieGeschiedenis;
