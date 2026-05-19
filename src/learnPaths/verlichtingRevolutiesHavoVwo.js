// Leerpad: Verlichting + Atlantische revoluties — HAVO/VWO Geschiedenis
// Eindexamen-CSE-thema: ~1700-1815. Tijdvak 7 (Pruiken + Revoluties).
// 5 stappen × ~5 checks.

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  verlichting: "#ffd54f",
  revolutie: "#ef5350",
  recht: "#42a5f5",
  napoleon: "#8d6e63",
};

const stepEmojis = ["💡", "🇺🇸", "🇫🇷", "👑", "🏆"];

const chapters = [
  { letter: "A", title: "Verlichting (1690-1789)", emoji: "💡", from: 0, to: 0 },
  { letter: "B", title: "Amerikaanse Revolutie", emoji: "🇺🇸", from: 1, to: 1 },
  { letter: "C", title: "Franse Revolutie", emoji: "🇫🇷", from: 2, to: 2 },
  { letter: "D", title: "Napoleon + nasleep", emoji: "👑", from: 3, to: 3 },
  { letter: "E", title: "Eindopdracht", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  // ─── A. Verlichting ───────────────────────────────────────
  {
    title: "Verlichting — denken in licht van rede",
    explanation:
      "**Verlichting** (~1690-1789, Frans *Siècle des Lumières*, Engels *Enlightenment*) = intellectuele beweging die **rede + wetenschap** boven traditie + geloof zette.\n\n**Kernideeën**:\n• **Rede** (raison) als hoogste autoriteit — niet kerk of koning.\n• **Wetenschappelijke methode** als kennismodel (Newton-fysica, observatie + experimenteren).\n• **Vooruitgangsgeloof**: maatschappij + mens kunnen verbeterd worden via kennis.\n• **Tolerantie** in religie + denken.\n• **Universele mensenrechten** (vroege vorm).\n• **Onderwijs voor allen** (theoretisch).\n• Scheiding **kerk en staat**.\n\n**Voorlopers (17e eeuw)**:\n• **Descartes**: methodische twijfel + denken.\n• **Spinoza** (Amsterdam): God = natuur, kritiek bijbel.\n• **John Locke**: empirisme + natuurrechten.\n• **Isaac Newton**: wetten universum berekenbaar.\n• Wetenschappelijke revolutie 1600-1700.\n\n**Hoofdfiguren Verlichting**:\n\n**Voltaire** (1694-1778, Frankrijk):\n• Felle criticus kerk + onderdrukking.\n• 'Écrasez l'infâme' (verpletter de schande, doelend op kerk).\n• Verdediger tolerantie + meningsuiting.\n• Roman *Candide* (1759).\n\n**Montesquieu** (1689-1755, Frankrijk):\n• *De l'esprit des lois* (1748).\n• **Trias politica**: scheiding der machten (wetgevend, uitvoerend, rechterlijk).\n• Inspireerde Amerikaanse + Franse grondwetten.\n\n**Jean-Jacques Rousseau** (1712-1778, Genève/Frankrijk):\n• *Du contrat social* (1762).\n• 'De mens is vrij geboren, maar overal in ketenen.'\n• **Volonté générale** (algemene wil).\n• Inspirator Franse Revolutie + romantiek.\n\n**Diderot** (1713-1784):\n• *Encyclopédie* (1751-1772): 28 delen, 70.000 artikelen door 140 auteurs.\n• Doel: alle menselijke kennis verzamelen + toegankelijk maken.\n• Gecensureerd door kerk + koning.\n\n**Immanuel Kant** (1724-1804, Pruisen):\n• *Was ist Aufklärung?* (1784): 'Verlichting is de uitgang van de mens uit zijn zelfveroorzaakte onmondigheid.'\n• **Sapere aude** = 'Durf te denken!'.\n\n**Adam Smith** (1723-1790, Schotland):\n• *Wealth of Nations* (1776).\n• Vrije markt + onzichtbare hand → algemene welvaart.\n• Klassiek liberalisme + economie.\n\n**Cesare Beccaria** (1738-1794, Italië):\n• *Dei delitti e delle pene* (1764).\n• Pleidooi tegen marteling + doodstraf.\n• Strafrecht moet preventief + proportioneel.\n\n**Mary Wollstonecraft** (1759-1797, Engeland):\n• *A Vindication of the Rights of Woman* (1792).\n• Vroege feministische tekst — vrouwen verdienen onderwijs + rechten.\n• Moeder van Mary Shelley (auteur *Frankenstein*).\n\n**Verspreiding ideeën**:\n• **Salons** (Parijs): bijeenkomsten van denkers + adel + burgerij.\n• **Koffiehuizen** (London, Amsterdam, Wenen).\n• **Genootschappen** + academies (Royal Society Londen 1660, Académie française 1635).\n• **Pamfletten + tijdschriften**: lage drukkosten + alfabetisering.\n• **Vrijmetselaars-loges**: verlichtings-idealen praktijk.\n\n**'Verlicht despotisme'** (1750-1800):\n• Sommige monarchen omhelsden Verlichting maar bleven absolute heersers.\n• Voorbeelden:\n  - **Frederik II 'De Grote'** (Pruisen): tolerantie, hervormingen, maar absolute macht.\n  - **Jozef II** (Habsburg): opheffing lijfeigenschap, religieuze tolerantie.\n  - **Catharina II 'De Grote'** (Rusland): briefcontact met Voltaire + Diderot, maar tirannieke regeerder.\n• Verschil met echte democratie: top-down, niet vanuit volk.\n\n**Tegenstanders Verlichting**:\n• Katholieke Kerk (kritiek op kerk + bijbel).\n• Absolute monarchen (kritiek op macht).\n• Conservatieve filosofen later: **Edmund Burke** (*Reflections on the Revolution in France*, 1790) — voorzichtigheid + traditie boven radicale rede.\n\n**Erfenis Verlichting**:\n• Moderne mensenrechten, democratie, scheiding kerk-staat.\n• Wetenschap-cultuur (universiteit, peer review).\n• Onderwijs voor allen (formeel).\n• Tolerantie + multiculturalisme.\n• **Kritiek**: Verlichting was vooral westers + mannelijk + bezittend. Sluiten van slavernij + kolonialisme bleef vaak buiten beeld. Postkoloniale kritiek 20e eeuw.",
    checks: [
      {
        q: "Welke Verlichter formuleerde **'Sapere aude' (Durf te denken)**?",
        options: ["Kant","Voltaire","Rousseau","Locke"],
        answer: 0,
        wrongHints: [null, "Niet — andere bijdragen.", "Niet — *volonté générale*.", "Eerder, empirisme."],
        uitlegPad: {
          stappen: [{ titel: "Kant 1784", tekst: "**Immanuel Kant** in *Was ist Aufklärung?* (1784): 'Sapere aude!' = 'Durf te denken!'. Verlichting = uitkomen uit onmondigheid + zelf nadenken. Kernzin van hele beweging." }],
          niveaus: { basis: "Kant. A.", simpeler: "Sapere aude = Kant = A.", nogSimpeler: "Kant = A." },
        },
      },
      {
        q: "**Montesquieu's** bijdrage aan staatsleer:",
        options: ["Trias politica (scheiding der machten)","Vrije markt","Communisme","Geen overheid"],
        answer: 0,
        wrongHints: [null, "Adam Smith.", "Niet relevant (later).", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "De l'esprit des lois 1748", tekst: "**Montesquieu** in *De geest van de wetten* (1748): trias politica — scheiding van **wetgevende, uitvoerende, rechterlijke** macht voorkomt tirannie. Inspireerde Amerikaanse Grondwet 1787 + Franse 1791." }],
          niveaus: { basis: "Trias politica. A.", simpeler: "Montesquieu = scheiding = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "*Encyclopédie* werd geredigeerd door:",
        options: ["Diderot + d'Alembert","Voltaire alleen","Rousseau","Newton"],
        answer: 0,
        wrongHints: [null, "Heeft niet geleid.", "Niet hoofdredacteur.", "Eerder, wetenschap."],
        uitlegPad: {
          stappen: [{ titel: "Kennis-monument", tekst: "**Encyclopédie** (1751-1772): 28 delen, 70.000 artikelen, 140 auteurs. Hoofdredacteuren **Denis Diderot** + **Jean d'Alembert**. Doel: alle menselijke kennis verzamelen + toegankelijk. Gecensureerd door kerk + koning. Symbool Verlichting." }],
          niveaus: { basis: "Diderot. A.", simpeler: "Encyc. = Diderot = A.", nogSimpeler: "Diderot = A." },
        },
      },
      {
        q: "Welk land was **verlicht despotisme** voorbeeld?",
        options: ["Pruisen onder Frederik II","Frankrijk onder Lodewijk XIV","NL onder Willem III","Engeland"],
        answer: 0,
        wrongHints: [null, "Te vroeg — geen Verlichting.", "Anders republiek.", "Anders parlementaire monarchie."],
        uitlegPad: {
          stappen: [{ titel: "Frederik 'De Grote'", tekst: "**Frederik II van Pruisen** (1740-1786): correspondeerde met Voltaire, hervormde rechtspraak + onderwijs, religieuze tolerantie — maar bleef **absolute monarch**. 'Verlicht despotisme' = top-down hervormingen zonder volkmacht." }],
          theorie: "Andere voorbeelden: Jozef II Habsburg, Catharina II Rusland. Verschillend met echte democratie (zoals NL-tendens jaren 1780 of post-revolutie FR).",
          niveaus: { basis: "Pruisen Frederik. A.", simpeler: "Verlicht desp. = Frederik = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**Wollstonecraft** schreef over:",
        options: ["Rechten van de vrouw (1792)","Rechten van de man","Rechten van de werkman","Rechten van de koning"],
        answer: 0,
        wrongHints: [null, "Niet — al elders behandeld.", "Te vroeg.", "Tegenovergestelde."],
        uitlegPad: {
          stappen: [{ titel: "Vroege feminisme", tekst: "**Mary Wollstonecraft** in *A Vindication of the Rights of Woman* (1792): vrouwen verdienen onderwijs + politieke rechten. Eén van eerste systematische feministische teksten. Antwoord op Thomas Paine *Rights of Man* (1791). Moeder van Mary Shelley." }],
          niveaus: { basis: "Vrouwen. A.", simpeler: "Wollst. = vrouwen-rechten = A.", nogSimpeler: "A." },
        },
      },
    ],
  },

  // ─── B. Amerikaanse Revolutie ─────────────────────────────
  {
    title: "Amerikaanse Revolutie (1765-1789)",
    explanation:
      "**Amerikaanse Revolutie** = oorlog + politieke onafhankelijkheid van 13 Britse koloniën in Noord-Amerika. Eerste grote toepassing Verlichtingsideeën.\n\n**Achtergrond**:\n• 13 koloniën onder Brits gezag, met eigen lokale parlementen.\n• Na 7-jarige oorlog (1756-63) tegen Frankrijk: Britse staatsschuld hoog → belasting koloniën om te betalen.\n• Koloniën weigerden te betalen zonder vertegenwoordiging in Brits parlement → **'No taxation without representation'**.\n\n**Aanloop-conflicten**:\n• **Stamp Act 1765**: belasting op gedrukte materialen → protesten.\n• **Boston Massacre 1770**: Britse soldaten schoten op menigte (5 doden).\n• **Boston Tea Party 1773**: koloniale strijders gooiden Britse thee in haven, uit protest tegen thee-belasting.\n• **Intolerable Acts 1774**: Britse strafmaatregelen, sluiting haven Boston.\n• **Eerste Continentaal Congres** 1774: koloniën verenigen verzet.\n\n**Oorlog (1775-1783)**:\n• **Lexington + Concord** 19 april 1775: eerste schoten (\"shots heard round the world\").\n• **Tweede Continentaal Congres** 1775: vormde Continentaal Leger.\n• **George Washington** als opperbevelhebber.\n• **Onafhankelijkheidsverklaring 4 juli 1776**: door **Thomas Jefferson** geschreven, met o.a. *'all men are created equal'* + recht op *'life, liberty and the pursuit of happiness'*. Geïnspireerd door **John Locke**.\n• **Buitenlandse steun**: Frankrijk + Spanje + NL hielpen koloniën tegen aartsvijand Engeland. **Markies de la Fayette** uit FR vocht mee.\n• **Slag bij Saratoga 1777**: kantelpunt — overtuigde Frankrijk te steunen.\n• **Slag bij Yorktown 1781**: Britse generaal Cornwallis gaf zich over.\n• **Vrede van Parijs 1783**: VS onafhankelijk erkend door Engeland.\n\n**Onafhankelijkheidsverklaring (4 juli 1776)**:\n• Belangrijkste passages:\n  - 'Wij houden deze waarheden voor evident dat alle mensen gelijk geschapen zijn.'\n  - 'Begunstigd door hun Schepper met onvervreemdbare rechten: leven, vrijheid en streven naar geluk.'\n  - 'Om deze rechten te beschermen worden regeringen ingesteld onder de mensen, hun rechtmatige macht ontlenend aan de toestemming van de geregeerden.'\n• Toepassing Verlichtingsideeën — Locke, Montesquieu, Rousseau.\n• **Hypocrisie**: 'alle mensen gelijk' maar **slavernij bleef** (Jefferson zelf had slaven). Inheemse volkeren niet inbegrepen.\n\n**Grondwet 1787 + Bill of Rights 1791**:\n• Eerste federale grondwet: scheiding machten (Montesquieu), federalisme.\n• Bill of Rights: 10 amendementen met grondrechten (vrijheid van meningsuiting, wapenbezit, eerlijk proces, etc.).\n• Eerste president: **George Washington** (1789-1797).\n\n**Founding Fathers** (oprichters):\n• **George Washington**: opperbevelhebber + 1e president.\n• **Thomas Jefferson**: schrijver Onafhankelijkheidsverklaring, 3e president.\n• **Benjamin Franklin**: diplomaat in FR, wetenschapper.\n• **John Adams**: 2e president.\n• **James Madison**: 'Father of the Constitution', 4e president.\n• **Alexander Hamilton**: financiën, federalisme.\n\n**Tegenstellingen al direct**:\n• **Federalisten** (Hamilton, Adams): sterke centrale regering.\n• **Anti-federalisten** (Jefferson, Madison): meer staten-macht.\n• Daaruit ontstaan eerste politieke partijen.\n\n**Gevolgen**:\n• **Eerste republiek met gekozen leider in moderne tijd** — democratisch experiment.\n• Versterking Verlichtings-idealen wereldwijd.\n• Inspiratie voor Franse Revolutie (1789).\n• Slavernij + inheemse vragen onopgelost → leidde tot Amerikaanse Burgeroorlog 1861-65.\n• Begin VS als opkomende macht.\n\n**Vergelijking met NL-Patriotten-tijdperk (1780s)**:\n• In NL: 'patriotten' tegen 'orangisten' (Willem V).\n• Inspiratie Amerikaanse + Franse modellen.\n• 1787 onderdrukt door Pruisische interventie.\n• Pas 1795 Bataafse Republiek (met Franse hulp).\n• Toont breedheid Verlichtingsbeweging in Europa.",
    checks: [
      {
        q: "Wanneer **Onafhankelijkheidsverklaring** VS?",
        options: ["4 juli 1776","14 juli 1789","1492","1865"],
        answer: 0,
        wrongHints: [null, "Niet — Franse Bestorming Bastille.", "Niet — Columbus.", "Niet — einde Burgeroorlog."],
        uitlegPad: {
          stappen: [{ titel: "Independence Day", tekst: "**4 juli 1776**: Continentaal Congres in Philadelphia neemt Onafhankelijkheidsverklaring aan, geschreven door **Thomas Jefferson**. Nog steeds nationale feestdag VS (4th of July)." }],
          niveaus: { basis: "4 juli 1776. A.", simpeler: "4-7-1776 = A.", nogSimpeler: "1776 = A." },
        },
      },
      {
        q: "Wie schreef de **Onafhankelijkheidsverklaring**?",
        options: ["Thomas Jefferson","George Washington","Benjamin Franklin","John Adams"],
        answer: 0,
        wrongHints: [null, "Niet — opperbevelhebber.", "Niet — diplomaat.", "Niet — niet hoofdauteur."],
        uitlegPad: {
          stappen: [{ titel: "Jefferson auteur", tekst: "**Thomas Jefferson** (1743-1826) schreef de Onafhankelijkheidsverklaring (met aanpassingen door Franklin + Adams). Later 3e president (1801-1809). Geïnspireerd door Locke. Hypocriet: had zelf slaven." }],
          niveaus: { basis: "Jefferson. A.", simpeler: "Jefferson = onafh.verkl. = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Slagzin **'No taxation without representation'** betekent:",
        options: ["Geen belasting zonder vertegenwoordiging in parlement","Iedereen mag stemmen","Geen oorlog","Geen koningen"],
        answer: 0,
        wrongHints: [null, "Niet specifiek dat.", "Niet — geen verband.", "Wel context maar specifieker."],
        uitlegPad: {
          stappen: [{ titel: "Kerngrief koloniën", tekst: "**'No taxation without representation'** = Britse koloniën weigerden belasting te betalen omdat ze geen vertegenwoordigers in Brits parlement (Westminster) hadden. Fundamenteel democratie-principe. Modernisering: belastingplicht ↔ stemrecht." }],
          niveaus: { basis: "Geen belasting zonder vert. A.", simpeler: "No tax w/o rep = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Welk land **steunde de koloniën** tegen Engeland?",
        options: ["Frankrijk","Pruisen","Rusland","Italië"],
        answer: 0,
        wrongHints: [null, "Niet primair.", "Niet primair.", "Bestond nog niet als verenigd land."],
        uitlegPad: {
          stappen: [{ titel: "Erfvijand-strategie", tekst: "**Frankrijk** steunde koloniën met leger + vloot, vooral na Slag bij Saratoga 1777. Reden: revanche op aartsvijand Engeland (na 7-jarige oorlog 1763-verlies Canada). Markies de la Fayette uit FR vocht mee. Frans-Amerikaanse alliantie kostte Frankrijk veel geld — droeg bij aan eigen revolutie 1789!" }],
          theorie: "Cito-pattern: ironie — Frankrijk hielp Amerikanen tegen monarchie, droeg bij aan eigen monarchie-val.",
          niveaus: { basis: "Frankrijk. A.", simpeler: "FR steunde VS = A.", nogSimpeler: "FR = A." },
        },
      },
      {
        q: "Wat is **hypocrisie** in Onafhankelijkheidsverklaring?",
        options: ["'Alle mensen gelijk' maar slavernij bleef bestaan","Mensen waren niet gelijk","Geen leger","Geen koloniën"],
        answer: 0,
        wrongHints: [null, "Wel claim van gelijkheid.", "Bestond wel.", "Bestonden wel."],
        uitlegPad: {
          stappen: [{ titel: "Slavernij + inheemsen", tekst: "Onafhankelijkheidsverklaring zegt **'all men are created equal'** — maar **slavernij** bleef bestaan tot 1865 (Amerikaanse Burgeroorlog + 13e Amendement), **inheemse Amerikanen** kregen geen burgerrechten tot 1924, vrouwen geen stemrecht tot 1920. 'Alle mensen' = praktisch alleen witte, mannelijke, bezittende protestanten." }],
          theorie: "Cito-favoriet: hypocrisie-onderwerp. Belangrijk om gelijktijdig ideaal én praktijk te zien.",
          niveaus: { basis: "Slavernij. A.", simpeler: "Slaven bleven = A.", nogSimpeler: "A." },
        },
      },
    ],
  },

  // ─── C. Franse Revolutie ──────────────────────────────────
  {
    title: "Franse Revolutie (1789-1799)",
    explanation:
      "**Franse Revolutie** = grote omwenteling Frankrijk 1789-1799. Einde absolute monarchie + standensamenleving. Inspirator voor moderne democratieën.\n\n**Oorzaken**:\n\n**Sociale**:\n• **Drie standen-systeem (ancien régime)**:\n  - **1e stand**: geestelijkheid (~1% bevolking, veel land).\n  - **2e stand**: adel (~2%, privileges, vrijgesteld belasting).\n  - **3e stand**: rest (~97%): bourgeoisie + boeren + werknemers — droegen alle belasting.\n• Spanningen tussen klassen.\n\n**Economische**:\n• Staatsschuld door dure oorlogen (steun VS).\n• Slechte oogst 1788 → broodprijs hoog.\n• Honger.\n\n**Politieke**:\n• Lodewijk XVI absolute monarch maar zwakke leider.\n• Maria Antoinette (Oostenrijkse vrouw) onpopulair — 'Madame Déficit'.\n• Onmogelijk te hervormen door adel-blokkade.\n\n**Ideologische**:\n• Verlichting (Voltaire, Rousseau, Montesquieu).\n• Amerikaans voorbeeld (1776).\n\n**Verloop 1789**:\n\n**Mei 1789 — Staten-Generaal**:\n• Lodewijk XVI roept Staten-Generaal samen (1e keer in 175 jaar) voor belasting-akkoord.\n• 3e stand eist 'één man, één stem' ipv 1 stem per stand.\n\n**Juni 1789 — Eed in kaatsbaan**:\n• 3e stand vormt zich tot **Nationale Vergadering** ('National Assembly').\n• Eed: niet uit elkaar tot grondwet er is.\n\n**14 juli 1789 — Bestorming Bastille**:\n• Volk bestormt staatsgevangenis Bastille → symbool ancien régime gevallen.\n• Nationale feestdag FR sinds.\n\n**Augustus 1789**:\n• **Verklaring van Rechten van de Mens en Burger**: vrijheid, gelijkheid, broederschap. Universele rechten.\n• Afschaffing **feodale privileges**: belasting voor allen, opheffen lijfeigenschap.\n\n**Oktober 1789**:\n• Vrouwen marcheren naar Versailles → koning + familie naar Parijs verhuisd.\n\n**1791**:\n• Eerste grondwet: **constitutionele monarchie**.\n• Lodewijk XVI probeert vluchten → terug naar Parijs, niet meer vertrouwd.\n\n**1792**:\n• Oorlog met Oostenrijk + Pruisen.\n• Aug 1792: **monarchie afgeschaft**, republiek uitgeroepen.\n• Sept 1792: **Eerste Republiek**.\n\n**1793**:\n• **Lodewijk XVI onthoofd** (21 jan) — schok in Europa.\n• Marie Antoinette onthoofd (okt).\n• **Schrikbewind / Terreur** onder **Robespierre** + Comité van Openbare Veiligheid.\n• Tienduizenden onthoofd door **guillotine**: contra-revolutionairen, gematigden.\n• 'Republiek der Deugd' — radicale gelijkheid.\n\n**1794 — einde Terreur**:\n• Robespierre zelf onthoofd (juli 1794, Thermidor).\n• Gematigder regering: **Directoire** (1795-1799).\n\n**1799 — Coup Napoleon**:\n• Napoleon Bonaparte (generaal) pleegt staatsgreep 18 Brumaire → einde revolutie + start Napoleon-tijdperk.\n\n**Belangrijke figuren**:\n• **Lodewijk XVI** (Louis XVI): laatste absolute koning, onthoofd 1793.\n• **Maria Antoinette**: koningin (van Oostenrijk-Habsburg). 'Laat ze cake eten' (waarschijnlijk verzonnen).\n• **Robespierre** (1758-1794): leider Schrikbewind. Idealist + dictator. Zelf onthoofd.\n• **Danton**: gematigder revolutionair, ook onthoofd.\n• **Marat**: radicale journalist, vermoord in bad door Charlotte Corday.\n• **Markies de la Fayette**: hield gematigde positie, kort populair.\n• **Olympe de Gouges**: schreef *Verklaring van de Rechten van de Vrouw* (1791), onthoofd 1793.\n\n**Erfenis Revolutie**:\n• **Mensenrechten** als universeel concept.\n• Einde feodaliteit West-Europa.\n• **Nationalisme** opkomst — burgers identificeren zich met natie (niet meer met koning).\n• **Metrieke stelsel** (meter, kilogram).\n• Burgerlijke kalender (afgeschaft Napoleon).\n• **Liberté, égalité, fraternité** = motto NL... eh, Frankrijk.\n• Inspiratie wereldwijd: Haïtiaanse Revolutie 1791-1804, Latijns-Amerikaanse onafhankelijkheid 1810-25, NL-Bataafse Republiek 1795-1806.\n\n**Kritiek + paradoxen**:\n• Terreur weersprak idealen.\n• Vrouwen kregen geen stemrecht (Olympe de Gouges sprak ervan, werd onthoofd).\n• Slavernij in koloniën — afgeschaft 1794 maar door Napoleon hersteld 1802.\n• Napoleon zelf werd 'keizer' → terug naar autoritair regime.",
    checks: [
      {
        q: "Wat staat **14 juli 1789** voor?",
        options: ["Bestorming Bastille","Onafhankelijkheidsverklaring VS","Begin WO1","Slag bij Waterloo"],
        answer: 0,
        wrongHints: [null, "Niet — VS = 4 juli 1776.", "Niet — 1914.", "Niet — 1815."],
        uitlegPad: {
          stappen: [{ titel: "Symbool revolutie", tekst: "**14 juli 1789** = bestorming Bastille (staatsgevangenis) in Parijs. Symbolisch begin Franse Revolutie. Nu nationale feestdag Frankrijk: *fête nationale*. Soms 'Quatorze Juillet' genoemd." }],
          niveaus: { basis: "Bestorming Bastille. A.", simpeler: "14-7-1789 = Bastille = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Hoeveel **standen** in ancien régime?",
        options: ["Drie","Twee","Vier","Acht"],
        answer: 0,
        wrongHints: [null, "Te weinig.", "Niet — drie.", "Te veel."],
        uitlegPad: {
          stappen: [{ titel: "Drie standen", tekst: "Ancien régime: **drie standen**.\n• 1e stand: geestelijkheid (~1%).\n• 2e stand: adel (~2%, privileges).\n• 3e stand: rest (~97%): burgerij, boeren, arbeiders.\n\n3e stand droeg belasting, 1e + 2e niet. Onrechtvaardig gevonden — een van oorzaken Revolutie." }],
          niveaus: { basis: "3. A.", simpeler: "3 standen = A.", nogSimpeler: "3 = A." },
        },
      },
      {
        q: "Wie leidde de **Schrikbewind (Terreur)** 1793-94?",
        options: ["Robespierre","Napoleon","Lodewijk XVI","Marie Antoinette"],
        answer: 0,
        wrongHints: [null, "Niet — kwam later.", "Niet — was zelf slachtoffer.", "Niet — zelf onthoofd."],
        uitlegPad: {
          stappen: [{ titel: "Idealist + dictator", tekst: "**Maximilien Robespierre** leidde Comité van Openbare Veiligheid 1793-94. **Schrikbewind**: tienduizenden onthoofd om revolutie te beschermen. Idealist + extreem. Zelf onthoofd op 28 juli 1794 (9 Thermidor) — einde Terreur." }],
          niveaus: { basis: "Robespierre. A.", simpeler: "Terreur = Robespierre = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**Verklaring Rechten Mens** (aug 1789) afkomstig uit invloed van:",
        options: ["Verlichting + Amerikaans voorbeeld","Bijbel","Egyptische beschaving","Romeinse keizers"],
        answer: 0,
        wrongHints: [null, "Niet primair.", "Niet relevant.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Locke/Montesquieu/Jefferson", tekst: "Verklaring Rechten Mens (aug 1789) is duidelijk **product van Verlichting** (Locke's natuurrechten, Montesquieu's machtsscheiding, Rousseau's volonté générale) + **Amerikaans voorbeeld** (1776 + Bill of Rights 1791). Universele mensenrechten — Olympe de Gouges schreef tegelijk versie voor vrouwen 1791." }],
          niveaus: { basis: "Verlichting + VS. A.", simpeler: "Verlichting+VS = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Wat is het **motto** van Franse Republiek tot vandaag?",
        options: ["Liberté, égalité, fraternité","Sapere aude","E pluribus unum","Deus vult"],
        answer: 0,
        wrongHints: [null, "Niet — Kant/Verlichting algemeen.", "Niet — VS-motto.", "Niet — kruistocht-leuze."],
        uitlegPad: {
          stappen: [{ titel: "Vrijheid-gelijkheid-broederschap", tekst: "**Liberté, égalité, fraternité** = motto Frankrijk sinds Franse Revolutie. Staat op gemeentehuizen, scholen, munten. Symboliseert idealen Revolutie. Gebruikt door alle republikeinse regimes." }],
          niveaus: { basis: "L/É/F. A.", simpeler: "Frans motto = vrijheid-gelijk = A.", nogSimpeler: "A." },
        },
      },
    ],
  },

  // ─── D. Napoleon + nasleep ────────────────────────────────
  {
    title: "Napoleon + nasleep (1799-1815)",
    explanation:
      "**Napoleon Bonaparte** (1769-1821) — Corsicaans-Franse generaal die einde maakte aan Revolutie + Frankrijk + Europa hervormde.\n\n**Opkomst Napoleon**:\n• Geboren 1769 op Corsica (net Frans geworden).\n• Militaire opleiding, snel carrière in Franse leger na 1789.\n• 1796-97: succes in Italië-campagne.\n• 1798-99: Egypte-expeditie (verloren maar prestige).\n• **18 Brumaire 1799** (9 nov): staatsgreep — einde Directoire.\n\n**Consulaat (1799-1804)**:\n• Napoleon = Eerste Consul, daarna Consul voor het leven.\n• Hervormde Frankrijk:\n  - **Code Napoléon (1804)**: nieuwe burgerlijk wetboek — gelijkheid voor wet, vrijheid van religie, eigendom-rechten. Invloedrijk in heel Europa (FR, NL, DE, etc.).\n  - **Banque de France** (1800) — centrale bank.\n  - **Lycée**-systeem — onderwijshervorming.\n  - **Concordaat met Paus** (1801) — vrede met Katholieke Kerk.\n• 1802: hersteld slavernij in koloniën (terugdraaiing Revolutie!).\n\n**Keizerrijk (1804-1814)**:\n• 2 dec 1804: **Napoleon kroont zichzelf keizer** in Notre-Dame, Parijs. Paus assisteert.\n• Beweerde 'erfgenaam Romeinse keizers'.\n• Erfelijk keizerschap → terug naar dynastie-systeem.\n\n**Veldtochten Napoleon**:\n• Vrijwel constante oorlog 1800-1815.\n• Slag bij **Austerlitz** (1805): roemvolle overwinning op Oostenrijk + Rusland.\n• Slag bij **Trafalgar** (1805): Britse Admiraal Nelson verslaat Frans-Spaanse vloot → Engeland blijft onbereikbaar.\n• Slag bij **Jena** (1806): Pruisen verpletterd.\n• 1807: Vrede van Tilsit — Frankrijk + Rusland alliantie tegen Engeland.\n• **Continentaal Systeem** (1806): Europees handelsembargo tegen Engeland. Beschadigt Europese economie, faalt uiteindelijk.\n\n**Hoogtepunt + neergang**:\n• 1810: Napoleon-keizerrijk strekt zich uit over groot deel West-Europa: FR, NL (ingelijfd 1810!), BE, DE-staten, NI, Polen.\n• **1812 Russische veldtocht**: Napoleon valt RU binnen met 600.000 man. **Verschrikkelijke nederlaag** door winter + tactische 'verschroeide aarde' van Russen. Terug met ~30.000 man.\n• 1813: **Volkerenslag bij Leipzig** — coalitie (Pruisen, Oostenrijk, Rusland, Zweden, NL) verslaat Napoleon.\n• 1814: Napoleon abdiceert, verbannen naar **Elba**. **Lodewijk XVIII** koning Frankrijk.\n• 1815: Napoleon ontsnapt → **Honderd Dagen**. **Slag bij Waterloo (18 juni 1815)**: Britse + Pruisische troepen (Wellington + Blücher) verslaan Napoleon → tweede verbanning naar **Sint-Helena** (Atlantische Oceaan), waar hij sterft 1821.\n\n**Code Napoléon — blijvende invloed**:\n• Burgerlijk wetboek 1804.\n• Principes:\n  - **Gelijkheid voor de wet** (geen privileges adel).\n  - **Vrijheid van religie**.\n  - **Eigendom heilig**.\n  - **Scheiding kerk en staat**.\n  - **Burgerlijk huwelijk** (niet alleen kerk).\n• Toegepast in NL, België, Italië, deel DE, Spanje, Latijns-Amerika.\n• Nederland-Burgerlijk Wetboek 1838 grotendeels gebaseerd op Code Napoléon. Tot 1992 (nieuw BW) bleef structuur herkenbaar.\n\n**Nederland onder Napoleon**:\n• 1795-1806: **Bataafse Republiek** (Franse zusterstaat).\n• 1806-1810: **Koninkrijk Holland** onder Lodewijk Bonaparte (broer Napoleon).\n• 1810-1813: **ingelijfd bij Frankrijk** (departementen).\n• 1813: Willem (later koning Willem I) keert terug — begin Verenigd Koninkrijk der Nederlanden (NL+BE tot 1830).\n\n**Congres van Wenen 1814-15**:\n• Na Napoleon: Europa herontworpen door grootmachten (Rusland, Pruisen, Oostenrijk, Engeland, Frankrijk).\n• **Klemens von Metternich** (Oostenrijk) leidt.\n• Doelen: **restauratie** monarchieën, **machtsevenwicht**, **conservatisme**.\n• Polen verdeeld.\n• Verenigd Koninkrijk der Nederlanden (NL+BE).\n• Heilige Alliantie: RU + PR + OOS samen tegen revolutie.\n\n**Erfenis Napoleon-tijdperk**:\n• **Code Napoléon**: blijvend juridisch erfgoed.\n• **Nationalisme**: Napoleon's wars wekten patriottisme bij andere volkeren (Pruisen, Spanje, Italië).\n• **Bureaucratie**: efficiënte administratie verspreid.\n• **Metrieke stelsel**: officieel ingevoerd door Napoleon, nu wereldstandaard (behalve VS/UK/MM).\n• **Restauratie 1815-1848**: monarchieën terug, maar Verlichtingsideeën bleven sluimeren → 1848-revoluties weer.\n• **NL koninkrijk**: ontstond door Napoleon-conflict.\n• **Mythe Napoleon**: 'redder of dictator?' debat tot vandaag. Recent FR-presidents (Macron) hebben spanningen met Napoleon-herdenking.",
    checks: [
      {
        q: "Welke gebeurtenis bracht **Napoleon aan macht**?",
        options: ["Staatsgreep 18 Brumaire 1799","Bestorming Bastille","Slag bij Waterloo","Geboorte op Corsica"],
        answer: 0,
        wrongHints: [null, "Niet — Revolutie-begin.", "Niet — einde Napoleon.", "Begin leven, niet macht."],
        uitlegPad: {
          stappen: [{ titel: "9 november 1799", tekst: "**18 Brumaire (jaar 8)** = 9 november 1799. Napoleon pleegt staatsgreep tegen Directoire. Wordt 'Eerste Consul', begin Consulaat. 1804 wordt hij keizer." }],
          niveaus: { basis: "18 Brumaire 1799. A.", simpeler: "1799 staatsgreep = A.", nogSimpeler: "1799 = A." },
        },
      },
      {
        q: "Wanneer **Slag bij Waterloo**?",
        options: ["18 juni 1815","14 juli 1789","1776","1648"],
        answer: 0,
        wrongHints: [null, "Niet — Bastille.", "Niet — VS.", "Niet — vrede Münster (NL onafh.)."],
        uitlegPad: {
          stappen: [{ titel: "Eindslag Napoleon", tekst: "**18 juni 1815, Waterloo** (België, dichtbij Brussel). Britse generaal **Wellington** + Pruisische **Blücher** verslaan Napoleon definitief. Napoleon naar Sint-Helena, sterft daar 1821." }],
          theorie: "ABBA-lied 'Waterloo' refereert aan deze slag (waterloo = nederlaag).",
          niveaus: { basis: "18 juni 1815. A.", simpeler: "1815 Waterloo = A.", nogSimpeler: "1815 = A." },
        },
      },
      {
        q: "Wat is **Code Napoléon (1804)**?",
        options: ["Burgerlijk wetboek met gelijkheid voor wet","Kledingcode leger","Recept","Wapen"],
        answer: 0,
        wrongHints: [null, "Niet relevant.", "Niet relevant.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Burgerlijk recht", tekst: "**Code Napoléon (1804)** = burgerlijk wetboek. Verspreidde Verlichtings-principes: **gelijkheid voor de wet**, vrijheid van religie, eigendom, scheiding kerk-staat, burgerlijk huwelijk. Invloed in NL, BE, IT, DE, Latijns-Amerika. NL-BW 1838 daarop gebaseerd." }],
          niveaus: { basis: "Burgerlijk wetboek. A.", simpeler: "Code Napol = BW = A.", nogSimpeler: "BW = A." },
        },
      },
      {
        q: "Napoleon verloor **Russische veldtocht 1812** vooral door:",
        options: ["Winter + 'verschroeide aarde' tactiek","Verraad","Britse luchtmacht","Ziekte alleen"],
        answer: 0,
        wrongHints: [null, "Niet primair.", "Bestond niet.", "Speelde rol maar niet primair."],
        uitlegPad: {
          stappen: [{ titel: "Russische strategie + winter", tekst: "**1812**: Napoleon valt Rusland binnen met 600.000 man. Russen ontwijken slag, branden eigen oogst + dorpen ('verschroeide aarde') zodat Frans leger geen voedsel kan vinden. Moskou bereikt maar in vlammen. Terugtocht in winter: vrieskou + honger + Russen-aanvallen. **Slechts ~30.000 keren terug**. Catastrofe." }],
          theorie: "Lessen herhaald: Hitler-invasie RU 1941-43 = vergelijkbaar mislukt om vergelijkbare redenen.",
          niveaus: { basis: "Winter + tactiek. A.", simpeler: "1812 = winter+Rus = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Wat besliste **Congres van Wenen 1814-15** voor NL?",
        options: ["Verenigd Koninkrijk der Nederlanden (NL+BE)","Onafhankelijkheid","Bij Frankrijk","Republiek Holland"],
        answer: 0,
        wrongHints: [null, "Niet — wel onafhankelijk maar samen met BE.", "Niet — Napoleon-tijdperk afgelopen.", "Niet — koninkrijk."],
        uitlegPad: {
          stappen: [{ titel: "Buffer tegen FR", tekst: "**Congres van Wenen**: NL + BE samengevoegd tot **Verenigd Koninkrijk der Nederlanden** onder koning **Willem I** (1815). Bedoeld als sterke buffer tegen Frankrijk. Hield maar tot 1830 — **Belgische Revolutie** maakt België onafhankelijk." }],
          theorie: "Cito-pattern: Willem I gestructureerd door Verlichting + Napoleon-bestuurlijke modellen. Belgen vonden hem te calvinistisch + autoritair.",
          niveaus: { basis: "VKN. A.", simpeler: "1815 = NL+BE samen = A.", nogSimpeler: "A." },
        },
      },
    ],
  },

  // ─── E. Eindopdracht ──────────────────────────────────────
  {
    title: "Eindopdracht — Verlichting + revoluties mix",
    explanation:
      "Mix van Verlichting + VS + FR + Napoleon.\n\nVeel succes!",
    checks: [
      {
        q: "Welke Verlichter beïnvloedde **Onafhankelijkheidsverklaring VS** vooral?",
        options: ["John Locke (natuurrechten)","Voltaire alleen","Rousseau alleen","Newton"],
        answer: 0,
        wrongHints: [null, "Speelde wel rol, niet primair.", "Wel — later FR.", "Wetenschap, niet politiek."],
        uitlegPad: {
          stappen: [{ titel: "Locke + Jefferson", tekst: "**Locke's natuurrechten** (leven, vrijheid, eigendom) → Jefferson maakt ervan 'life, liberty, pursuit of happiness' in Onafhankelijkheidsverklaring. Locke's recht op opstand bij tirannie ook centraal. Montesquieu beïnvloedde latere Grondwet 1787." }],
          niveaus: { basis: "Locke. A.", simpeler: "VS = Locke = A.", nogSimpeler: "Locke = A." },
        },
      },
      {
        q: "Welke Verlichter schreef *Du contrat social*?",
        options: ["Rousseau","Voltaire","Locke","Kant"],
        answer: 0,
        wrongHints: [null, "Niet — andere werken.", "Niet — *Two Treatises*.", "Niet — *Kritiek*."],
        uitlegPad: {
          stappen: [{ titel: "Rousseau 1762", tekst: "**Jean-Jacques Rousseau** (1712-1778): *Du contrat social* (1762). Beroemde opening: 'De mens is vrij geboren maar overal in ketenen'. Idee algemene wil → inspirator Franse Revolutie." }],
          niveaus: { basis: "Rousseau. A.", simpeler: "Contrat social = Rousseau = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Welk **document** is uit 1776?",
        options: ["Amerikaanse Onafhankelijkheidsverklaring","Verklaring Rechten Mens (FR)","Code Napoléon","Magna Carta"],
        answer: 0,
        wrongHints: [null, "1789.", "1804.", "1215."],
        uitlegPad: {
          stappen: [{ titel: "1776 = VS", tekst: "**4 juli 1776**: Amerikaanse Onafhankelijkheidsverklaring. Verklaring Rechten Mens (FR): **augustus 1789**. Code Napoléon: 1804. Magna Carta (UK): 1215." }],
          niveaus: { basis: "1776 = VS. A.", simpeler: "1776 = VS-onafh. = A.", nogSimpeler: "1776 = A." },
        },
      },
      {
        q: "**Trias politica** afkomstig van:",
        options: ["Montesquieu","Rousseau","Voltaire","Adam Smith"],
        answer: 0,
        wrongHints: [null, "Niet — *volonté générale*.", "Niet — tolerantie.", "Niet — economie."],
        uitlegPad: {
          stappen: [{ titel: "1748 De l'esprit des lois", tekst: "**Montesquieu** in *De geest van de wetten* (1748): trias politica = scheiding wetgevende / uitvoerende / rechterlijke macht. Voorkomt tirannie. Basis moderne grondwetten." }],
          niveaus: { basis: "Montesquieu. A.", simpeler: "Trias = Montesq. = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Wat is een **paradox** Verlichting + revoluties?",
        options: ["Idealen 'alle mensen gelijk' maar slavernij + onderdrukking bleven","Verlichting bestond niet","Revoluties slaagden volledig","Geen idealen"],
        answer: 0,
        wrongHints: [null, "Wel.", "Niet — onafgemaakt.", "Wel."],
        uitlegPad: {
          stappen: [{ titel: "Onafgewerkte revolutie", tekst: "**Paradox**: Verlichtingsidealen 'alle mensen gelijk' werden geproclameerd, maar **slavernij bleef** in VS (tot 1865) + FR-koloniën (terug onder Napoleon 1802), **vrouwen kregen geen stemrecht**, **inheemse Amerikanen + kolonisaties** werden niet als gelijken behandeld. Postkoloniale kritiek: Verlichting was westers + mannelijk + bezittend, sloot anderen uit." }],
          theorie: "Cito-favoriet: ideaal vs praktijk evalueren. Belangrijk te zien dat strijd doorging in 19e + 20e eeuw (vrouwenkiesrecht 1919 NL, dekolonisatie 20e eeuw, civil rights 1960s VS).",
          niveaus: { basis: "Slavernij. A.", simpeler: "Idealen ≠ praktijk = A.", nogSimpeler: "A." },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const verlichtingRevolutiesHavoVwo = {
  id: "verlichting-revoluties-havo-vwo",
  title: "Verlichting + Atlantische revoluties (HAVO/VWO geschiedenis)",
  emoji: "💡",
  level: "havo4-5-vwo",
  subject: "geschiedenis",
  referentieNiveau: "havo-vwo-CSE-geschiedenis",
  sloThema: "Geschiedenis HAVO/VWO — Tijdvak 7 Pruiken + Revoluties eindexamen",
  prerequisites: [
    { id: "tijdvakken-geschiedenis", title: "Tijdvakken", niveau: "klas1-3" },
    { id: "franse-revolutie-geschiedenis", title: "Franse Revolutie", niveau: "klas2-3" },
  ],
  intro:
    "Tijdvak Pruiken + Revoluties (1700-1900) HAVO/VWO geschiedenis. Verlichting (Locke/Voltaire/Montesquieu/Rousseau/Kant + verlicht despotisme), Amerikaanse Revolutie (1776 Jefferson + Locke-invloed), Franse Revolutie (1789-99 Bastille → Robespierre-Terreur), Napoleon (Code Napoléon 1804 + Waterloo 1815 + NL-konkrijk). ~15-20 min.",
  triggerKeywords: [
    "Verlichting", "Aufklärung", "Enlightenment", "Lumières",
    "Locke", "natuurrechten",
    "Voltaire", "Candide",
    "Montesquieu", "trias politica",
    "Rousseau", "volonté générale", "Contrat social",
    "Kant", "Sapere aude",
    "Diderot", "Encyclopédie",
    "Wollstonecraft", "vrouwenrechten",
    "Adam Smith", "Wealth of Nations",
    "verlicht despotisme", "Frederik II",
    "Amerikaanse Revolutie", "American Revolution",
    "Boston Tea Party", "no taxation without representation",
    "Declaration of Independence", "Onafhankelijkheidsverklaring",
    "Jefferson", "Washington", "Franklin", "Hamilton",
    "Franse Revolutie", "French Revolution",
    "Bastille", "14 juli 1789",
    "Robespierre", "Terreur", "Schrikbewind",
    "Lodewijk XVI", "Marie Antoinette",
    "guillotine",
    "Verklaring Rechten Mens", "Déclaration des droits de l'Homme",
    "Liberté égalité fraternité",
    "Napoleon", "Bonaparte",
    "Code Napoléon", "burgerlijk wetboek",
    "Austerlitz", "Trafalgar",
    "Waterloo 1815",
    "Sint-Helena", "Elba",
    "Bataafse Republiek",
    "Congres van Wenen", "Verenigd Koninkrijk der Nederlanden",
    "Willem I",
  ],
  chapters,
  steps,
};

export default verlichtingRevolutiesHavoVwo;
