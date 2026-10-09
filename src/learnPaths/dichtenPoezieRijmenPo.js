// Leerpad: Dichten + poëzie + rijmen - groep 5-8 taal/Cito.
// toetsvraag: rijmschema, beeldspraak, gedicht-soorten. 1F.
// 5 stappen.

const stepEmojis = ["🎭", "🔄", "✨", "📝", "🏆"];

const chapters = [
  { letter: "A", title: "Wat is een gedicht?", emoji: "🎭", from: 0, to: 0 },
  { letter: "B", title: "Rijm + ritme", emoji: "🔄", from: 1, to: 1 },
  { letter: "C", title: "Beeldspraak in poëzie", emoji: "✨", from: 2, to: 2 },
  { letter: "D", title: "Soorten gedichten", emoji: "📝", from: 3, to: 3 },
  { letter: "E", title: "Eind-toets", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  {
    title: "Wat is een gedicht?",
    explanation:
      "**Gedicht / poëzie** = korte, kunstige tekst met **rijm** of **ritme**.\n\n**Hoe herken je een gedicht?**\n\n• Vaak **kort**.\n• Geschreven in **regels** *(niet doorlopende zinnen)*.\n• **Couplet** *(stukje van een paar regels)*.\n• Soms **rijm** *(woorden klinken hetzelfde)*.\n• **Beeldspraak** *(figuurlijk taalgebruik)*.\n• **Emotie** of speciale **gedachte**.\n\n**Voorbeeld**:\n*'Het is zo eenzaam in de nacht / De wind die huilt, ik lig en wacht / De maan kijkt streng naar mij omlaag / Wat ik wel doe, vraagt hij gestaag.'*\n\nDit is een **gedicht** omdat:\n• Geschreven in regels.\n• Rijm: nacht-wacht, omlaag-gestaag.\n• Beeldspraak: 'maan kijkt streng' *(maan kan niet kijken)*.\n• Emotie: eenzaamheid.\n\n**Verschil gedicht en proza**:\n• **Proza** = gewone tekst *(boek, krant, brief)*. Doorlopend.\n• **Gedicht** = poëzie. In regels.\n\n**Bouwstenen van gedicht**:\n\n**1. Regel** *(versregel)*:\nElke nieuwe zin / nieuwe regel.\n\n**2. Couplet** / **strofe**:\nGroep van regels bij elkaar.\nMeestal 4 regels *(kwatrijn)*, maar kan ook 3 *(terzine)* of 6 *(sextet)*.\n\n**3. Wit**:\nLege ruimte tussen coupletten.\nIs **functioneel** — geeft pauze in gedicht.\n\n**4. Refrein**:\nRegel of couplet dat **terugkomt**. Net als bij liedjes.\n\n**Waarom dichten?**\n• **Gevoel** uitdrukken.\n• **Kort + krachtig** boodschap.\n• **Mooi taalgebruik** waarderen.\n• **Onthouden** *(rijm helpt onthouden — daarom kinderliedjes rijmen)*.\n\n**Bekende NL-dichters**:\n• **Annie M.G. Schmidt** *(1911-1995)* — kindergedichten *('Het Beertje Pippeloentje', 'Sebastiaan')*.\n• **Joost van den Vondel** *(1587-1679)* — Gouden Eeuw, 'Gysbreght van Aemstel'.\n• **Hendrik Marsman** *(1899-1940)* — 'Herinnering aan Holland' *('Denkend aan Holland ...')*.\n• **Rutger Kopland** *(1934-2012)* — modern, natuur.\n• **Toon Tellegen** *(1941+)* — dieren-gedichten.\n• **Lévi Weemoedt** *(1948+)* — humoristisch, melancholie.\n\n**Toets-feitje**:\n*'Herinnering aan Holland'* van Marsman *(1936)* is het bekendste NL-gedicht: 'Denkend aan Holland zie ik brede rivieren traag door oneindig laagland gaan...'. In 2000 werd het gekozen tot 'gedicht van de eeuw'.",
    checks: [
      {
        q: "Wat is een **gedicht**?",
        options: ["Korte tekst in regels met rijm/ritme", "Lang verhaal in doorlopende zinnen", "Krantenartikel met het nieuws", "Brief die je aan iemand stuurt"],
        answer: 0,
        wrongHints: [null, "Een verhaal loopt door in lange zinnen — hoe staat een gedicht op de pagina?", "Een artikel geeft nieuws en feiten — waar speelt een gedicht juist mee?", "Een brief schrijf je aan iemand — welke tekstvorm speelt met klank en ritme?"],
        uitlegPad: {
          stappen: [
            { titel: "Wat maakt het een gedicht?", tekst: "Een **gedicht** (ook wel **poëzie**) is een tekst waarbij:\n• De **woorden in regels** staan (geen doorlopende zinnen).\n• Er vaak **rijm** of **ritme** is.\n• Veel **beeldspraak** wordt gebruikt.\n• Het meestal **kort** is en een **gevoel** of **gedachte** uitdrukt." },
            { titel: "Verschil met proza", tekst: "**Proza** = gewone doorlopende tekst (boek, krant, brief). **Poëzie** = in versregels, vaak met rijm. Zelfde verhaal kun je in beide vormen vertellen — maar voelt anders." },
            { titel: "Bouwstenen van gedicht", tekst: "• **Versregel** = 1 regel van het gedicht.\n• **Couplet (strofe)** = groep regels samen.\n• **Rijm** = woorden klinken hetzelfde.\n• **Wit** = lege ruimte tussen coupletten (functioneel — geeft pauze)." },
          ],
          woorden: [
            { woord: "gedicht / poëzie", uitleg: "Korte tekst in regels, vaak met rijm." },
            { woord: "proza", uitleg: "Gewone doorlopende tekst." },
            { woord: "couplet / strofe", uitleg: "Groep regels samen." },
          ],
          theorie: "Toets-tip: een gedicht herken je aan de **regels** (in plaats van zinnen), het **rijm/ritme**, en de **emotionele lading**. Beroemde NL-dichter: Annie M.G. Schmidt voor kinderen, Hendrik Marsman voor volwassenen.",
          voorbeelden: [
            { type: "stap", tekst: "'Denkend aan Holland / zie ik brede rivieren / traag door oneindig laagland gaan' — Marsman. Gedicht: in regels, met sfeer." },
            { type: "stap", tekst: "Zelfde inhoud als proza: 'Wanneer ik aan Holland denk, zie ik brede rivieren langzaam door een oneindig laagland stromen.' Veel minder bijzonder." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Regels + rijm + emotie = poëzie. Doorlopend = proza. Allebei kunnen mooi zijn, maar verschillende vorm." }],
          niveaus: {
            basis: "Korte tekst in regels met rijm/ritme.",
            simpeler: "Gedicht = woorden in regels, vaak met rijm + gevoel.",
            nogSimpeler: "Korte tekst in regels",
          },
        },
      },
      {
        q: "Wat is een **couplet**?",
        options: ["Groep regels bij elkaar", "Hele gedicht", "1 regel", "Pauze"],
        answer: 0,
        wrongHints: [null, "Te groot.", "Te klein.", "Wit."],
      },
      {
        q: "**Annie M.G. Schmidt** schreef vooral?",
        options: ["Kindergedichten", "Romans", "Filosofie", "Wiskunde"],
        answer: 0,
        wrongHints: [null, "Ze schreef wel boeken, maar waar is ze vooral beroemd om?", "Niet.", "Niet."],
      },
      {
        q: "Wat is **proza**?",
        options: ["Gewone doorlopende tekst", "Gedicht", "Lied", "Toneelstuk"],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Een lied staat in regels, net als een gedicht.", "Een toneelstuk is tekst om te spelen, met rollen — dat is een andere vorm."],
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Hoe heet de **lege ruimte** tussen twee coupletten?",
        options: ["Wit", "Refrein", "Versregel", "Strofe"],
        answer: 0,
        wrongHints: [
          null,
          "Een refrein komt steeds terug. Is lege ruimte iets wat terugkomt?",
          null,
          "Een strofe is een groepje regels. Staan er in lege ruimte regels?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Coupletten met ruimte ertussen",
              tekst: "Een gedicht bestaat vaak uit een paar **coupletten** (groepjes regels). Tussen twee coupletten staat een lege regel.",
            },
            {
              titel: "Die ruimte heet wit",
              tekst: "Die lege ruimte heet **wit**. Het wit is niet zomaar leeg: het geeft een **pauze** in het gedicht.",
            },
          ],
          woorden: [
            {
              woord: "wit",
              uitleg: "Lege ruimte tussen coupletten.",
            },
            {
              woord: "couplet / strofe",
              uitleg: "Groepje regels bij elkaar.",
            },
          ],
          theorie: "Toets-tip: wit hoort bij de bouwstenen van een gedicht, net als versregel, couplet en refrein.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Couplet 1 (vier regels) — lege regel — couplet 2 (vier regels). Die lege regel is het wit.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Wit = waar het **wit** van het papier te zien is: geen woorden, wel een pauze.",
            },
          ],
          niveaus: {
            basis: "De lege ruimte tussen coupletten heet wit.",
            simpeler: "Tussen twee groepjes regels staat niets. Dat heet wit.",
            nogSimpeler: "Lege ruimte = wit",
          },
        },
      },
      {
        q: "Waarom rijmen veel **kinderliedjes**?",
        options: [
          "Rijm helpt je de tekst te onthouden",
          "Rijm maakt het liedje langer",
          "Rijm is verplicht in elk liedje",
          "Rijm maakt de woorden moeilijker",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Wordt een liedje echt langer als de woorden op elkaar rijmen?",
          "Ken je ook liedjes of gedichten zonder rijm?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Rijm blijft hangen",
              tekst: "Woorden die op elkaar rijmen, klinken hetzelfde aan het eind. Dat blijft makkelijk in je hoofd hangen.",
            },
            {
              titel: "Daarom rijmen liedjes",
              tekst: "Daarom rijmen kinderliedjes vaak: je kunt ze dan beter **onthouden**. Reclames en leuzes doen dat ook.",
            },
          ],
          woorden: [
            {
              woord: "rijm",
              uitleg: "Woorden die hetzelfde klinken aan het eind.",
            },
            {
              woord: "onthouden",
              uitleg: "Iets in je hoofd houden.",
            },
          ],
          theorie: "Rijm is niet verplicht (een vrij vers rijmt niet), maar het helpt wel bij onthouden.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "'... met je knecht / ... even recht': knecht en recht rijmen, en zo onthoud je de regels.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Rijm = geheugensteuntje.",
            },
          ],
          niveaus: {
            basis: "Rijm helpt je om een tekst te onthouden.",
            simpeler: "Woorden die rijmen, onthoud je makkelijker.",
            nogSimpeler: "Rijm helpt onthouden",
          },
        },
      },
      {
        q: "Hoe heet een couplet van **vier** regels?",
        options: ["Kwatrijn", "Terzine", "Sextet", "Refrein"],
        answer: 0,
        wrongHints: [
          null,
          "Tel nog eens: over hoeveel regels gaat het hier?",
          null,
          "Een refrein is een stuk dat steeds terugkomt. Gaat het daar hier om?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Een couplet heeft regels",
              tekst: "Een **couplet** is een groepje regels. Het aantal regels kan verschillen.",
            },
            {
              titel: "Namen per aantal",
              tekst: "• 4 regels = **kwatrijn** (meest gebruikt)\n• 3 regels = terzine\n• 6 regels = sextet",
            },
          ],
          woorden: [
            {
              woord: "kwatrijn",
              uitleg: "Couplet van 4 regels.",
            },
            {
              woord: "terzine",
              uitleg: "Couplet van 3 regels.",
            },
            {
              woord: "sextet",
              uitleg: "Couplet van 6 regels.",
            },
          ],
          theorie: "De meeste coupletten hebben 4 regels. Zo'n couplet heet een kwatrijn.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Een couplet met regel 1, 2, 3 en 4 = een kwatrijn.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Kwa-trijn: denk aan 'kwart', vier stukjes.",
            },
          ],
          niveaus: {
            basis: "Een couplet van vier regels heet een kwatrijn.",
            simpeler: "4 regels samen = kwatrijn.",
            nogSimpeler: "4 regels = kwatrijn",
          },
        },
      },
      {
        q: "Wie schreef het gedicht **'Herinnering aan Holland'**?",
        options: ["Hendrik Marsman", "Annie M.G. Schmidt", "Joost van den Vondel", "Toon Tellegen"],
        answer: 0,
        wrongHints: [
          null,
          "Zij is vooral bekend van kindergedichten. Is dit een kindergedicht?",
          "Hij leefde in de Gouden Eeuw. Dit gedicht is van veel later.",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Een beroemd gedicht",
              tekst: "'Herinnering aan Holland' begint met: 'Denkend aan Holland zie ik brede rivieren traag door oneindig laagland gaan'.",
            },
            {
              titel: "De dichter",
              tekst: "Het is geschreven door **Hendrik Marsman**. Het werd in 2000 gekozen tot 'gedicht van de eeuw'.",
            },
          ],
          woorden: [
            {
              woord: "Hendrik Marsman",
              uitleg: "Nederlandse dichter van 'Herinnering aan Holland'.",
            },
            {
              woord: "Annie M.G. Schmidt",
              uitleg: "Dichter van kindergedichten.",
            },
          ],
          theorie: "Bekende dichters: Annie M.G. Schmidt (kindergedichten), Vondel (Gouden Eeuw), Marsman ('Herinnering aan Holland'), Toon Tellegen (dieren).",
          voorbeelden: [
            {
              type: "stap",
              tekst: "'Denkend aan Holland ...' = de beginregel van het gedicht van Marsman.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Holland en Marsman: denk aan 'Denkend aan Holland'.",
            },
          ],
          niveaus: {
            basis: "'Herinnering aan Holland' is van Hendrik Marsman.",
            simpeler: "Het gedicht 'Denkend aan Holland ...' is van Marsman.",
            nogSimpeler: "Marsman",
          },
        },
      },
      {
        q: "In welke tijd leefde de dichter **Joost van den Vondel**?",
        options: [
          "In de Gouden Eeuw",
          "In de Middeleeuwen",
          "In de tijd van de Romeinen",
          "Na het jaar 2000",
        ],
        answer: 0,
        wrongHints: [
          null,
          null,
          "Vondel schreef in het Nederlands. Spraken de Romeinen al Nederlands?",
          "Leeft deze dichter nu nog? Kijk naar zijn jaartallen in de uitleg.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Vondel",
              tekst: "**Joost van den Vondel** is een beroemde Nederlandse dichter. Hij leefde van 1587 tot 1679.",
            },
            {
              titel: "De Gouden Eeuw",
              tekst: "De jaren 1600 heten in Nederland de **Gouden Eeuw**. Vondel leefde precies in die tijd. Hij schreef onder andere 'Gysbreght van Aemstel'.",
            },
          ],
          woorden: [
            {
              woord: "Gouden Eeuw",
              uitleg: "De jaren 1600 in Nederland.",
            },
            {
              woord: "dichter",
              uitleg: "Iemand die gedichten schrijft.",
            },
          ],
          theorie: "Vondel = Gouden Eeuw. Annie M.G. Schmidt en Marsman leefden veel later.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Vondel: 1587-1679 → de Gouden Eeuw.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Vondel = oud, uit de Gouden Eeuw.",
            },
          ],
          niveaus: {
            basis: "Vondel leefde in de Gouden Eeuw (1587-1679).",
            simpeler: "Vondel is een dichter van heel lang geleden: de Gouden Eeuw.",
            nogSimpeler: "Gouden Eeuw",
          },
        },
      },
    ],
  },
  {
    title: "Rijm + ritme",
    explanation:
      "**Rijm** = woorden die **eindigen hetzelfde**.\n\n**Voorbeelden**:\n• boom – room *(eindigen op -oom)*.\n• vlieg – wieg *(eindigen op -ieg)*.\n• kat – pad *(eindigen op -at)*.\n• zon – kon *(eindigen op -on)*.\n\n**Soorten rijm**:\n\n**1. Eindrijm** *(meest bekend)*:\n*'De zon scheen mooi / Ik lag in het hooi.'*\n→ Mooi rijmt op hooi.\n\n**2. Beginrijm** *(alliteratie)*:\nWoorden beginnen met zelfde letter.\n*'Mooie Mette mocht mee.'*\n→ M-M-M-M.\n\n**3. Binnenrijm**:\nRijm midden in regel.\n*'Er liep een beer met een veer in de wei.'* *(beer – veer)*\n\n**Rijmschema's** — patroon van rijm in gedicht:\n\n**AABB** = paarrijm *(per twee)*:\nA. Mijn kat is **fijn** (A)\nB. Hij speelt graag op 't **plein** (A)\nC. Hij is wit en **zwart** (B)\nD. En heeft een goed **hart** (B)\n\n**ABAB** = gekruist rijm:\nA. Mijn kat is **fijn** (A)\nB. Hij is wit en **zwart** (B)\nC. Hij speelt graag op 't **plein** (A)\nD. En heeft een goed **hart** (B)\n\n**ABBA** = omarmend rijm:\nA. Mijn kat is **fijn** (A)\nB. Hij is wit en **zwart** (B)\nC. En heeft een goed **hart** (B)\nD. Hij speelt graag op 't **plein** (A)\n\n**Hoe herken je rijmschema?**\n1. Markeer eindwoorden van elke regel.\n2. Eerste eindwoord = **A**.\n3. Nieuw rijmgeluid = nieuwe letter (B, C, ...).\n4. Zelfde rijmgeluid als eerder = zelfde letter.\n\n**Voorbeeld**:\n*'De hond loopt naar de boom* (A)\n*Daar ligt hij in een droom* (A)\n*Maar dan rent hij snel weer weg* (B)\n*Want de poes zit in de heg* (B)\n*De jacht is plotseling klaar* (C)\n*Nu spelen ze samen in het gras* (D)\n\nRijmschema: AABBCD.\n\n**Ritme** = de **klemtoon** van een gedicht.\n• Sommige lettergrepen hebben **klemtoon** *(luid)*, andere niet.\n• Dada-dada-dada *(jambisch — 'da-DA da-DA')*.\n• DAda-DAda-DAda *(trocheïsch — 'DA-da DA-da')*.\n\n**Versmaat** (metrum) = een vast patroon van klemtonen dat in elke regel terugkomt.\nKlassieke poëzie heeft vaak een vaste versmaat. Moderne poëzie vaak vrij.\n\n**Toets-feitje**:\n*'Sinterklaasje kom maar binnen met je knecht, want we zitten allemaal even recht'* — dit kinderliedje rijmt: knecht / recht. **Rijm helpt onthouden** — daarom rijmen reclames + leuzes.",
    checks: [
      {
        q: "Wat is **eindrijm**?",
        options: ["Woorden eindigen hetzelfde", "Beginnen hetzelfde", "Klemtoon", "Lengte gelijk"],
        answer: 0,
        wrongHints: [null, "Alliteratie.", "Ritme.", "Gelijke lengte zegt niets over de klank."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is eindrijm?", tekst: "Bij eindrijm eindigen 2 (of meer) woorden met dezelfde klank. Het is de bekendste vorm van rijm." },
            { titel: "Voorbeeld", tekst: "'kat – pad' rijmt (beide eindigen op -at klank). 'zon – kon' rijmt (beide op -on). 'boom – room' rijmt (beide op -oom)." },
            { titel: "Niet hetzelfde geschreven, maar gehoord", tekst: "Rijm gaat om de KLANK, niet de spelling. 'jou – blauw' rijmen (ou-klank gelijk), ook al spel je ze anders." },
          ],
          woorden: [
            { woord: "eindrijm", uitleg: "Klank-overeenkomst aan einde van regels." },
            { woord: "alliteratie", uitleg: "Anders: woorden BEGINNEN gelijk (mooie Mette mocht)." },
          ],
          theorie: "Toets-tip rijm: spreek de woorden HARDOP uit. Klinken ze hetzelfde aan het eind? Dan rijmt het. Niet kijken naar spelling.",
          voorbeelden: [
            { type: "stap", tekst: "'huis – muis' = eindrijm (-uis)." },
            { type: "stap", tekst: "'spelen – delen' = eindrijm (-elen)." },
            { type: "stap", tekst: "'water – kater' = eindrijm (-ater)." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Eindrijm = klank aan EIND. Alliteratie = letter aan BEGIN. Verschillende dingen." }],
          niveaus: {
            basis: "Eindrijm = woorden klinken hetzelfde aan eind (kat-pad).",
            simpeler: "Hardop lezen — zelfde klank? = rijm.",
            nogSimpeler: "Eind-klank gelijk = rijm.",
          },
        },
      },
      {
        q: "Wat is **alliteratie**?",
        options: ["Woorden beginnen met zelfde letter", "Woorden rijmen aan eind", "Zelfde betekenis", "Ritme"],
        answer: 0,
        wrongHints: [null, "Eindrijm.", "Synoniem.", "Niet."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is alliteratie?", tekst: "Alliteratie is wanneer meerdere woorden achter elkaar BEGINNEN met dezelfde letter (of klank)." },
            { titel: "Voorbeeld: Mooie Mette mocht mee", tekst: "M - M - M - M. Vier woorden, allemaal beginnend met M. Dat is alliteratie." },
            { titel: "Waarom gebruikt men het?", tekst: "Alliteratie geeft EXTRA ritme of nadruk. Reclames gebruiken het veel: 'lekker licht en luchtig'." },
          ],
          woorden: [
            { woord: "alliteratie", uitleg: "Zelfde BEGIN-letter bij meerdere woorden." },
            { woord: "eindrijm", uitleg: "Anders: zelfde EIND-klank." },
          ],
          theorie: "Toets-tip: alliteratie = BEGIN-rijm (begin-letter gelijk). Eindrijm = EIND-rijm (eind-klank gelijk). Twee verschillende vormen van rijm.",
          voorbeelden: [
            { type: "stap", tekst: "'Sappige sinaasappel sap' = S-S-S = alliteratie." },
            { type: "stap", tekst: "'Brullende beer' = B-B = alliteratie (al maar 2 woorden, telt al)." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Alliteratie = AAN het begin. Eindrijm = aan het einde. Vergeet dat niet." }],
          niveaus: {
            basis: "Alliteratie = woorden BEGINNEN met zelfde letter.",
            simpeler: "Mooie Mette: M-M-M. Begin-rijm.",
            nogSimpeler: "Begin-letter gelijk = alliteratie.",
          },
        },
      },
      {
        q: "**AABB** is welk rijmschema?",
        options: ["Paarrijm (per 2)", "Gekruist", "Omarmend", "Geen rijm"],
        answer: 0,
        wrongHints: [null, "ABAB.", "ABBA.", "Wel rijm."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is een rijmschema?", tekst: "Een rijmschema laat zien welke regels op elkaar rijmen. Je geeft elke rijm-klank een letter (A, B, C)." },
            { titel: "AABB = paarrijm", tekst: "AABB betekent: regel 1 + 2 rijmen samen (A), en regel 3 + 4 ook samen (B). Per 2 regels = PAAR-rijm." },
            { titel: "Verschil met ABAB/ABBA", tekst: "ABAB = GEKRUIST (kruislings). ABBA = OMARMEND (binnenste 2 rijmen, buitenste 2 rijmen). AABB = direct na elkaar = paarrijm." },
          ],
          woorden: [
            { woord: "paarrijm (AABB)", uitleg: "Twee regels achter elkaar rijmen." },
            { woord: "gekruist (ABAB)", uitleg: "Regel 1 met 3, regel 2 met 4." },
            { woord: "omarmend (ABBA)", uitleg: "Regel 1 met 4, regel 2 met 3." },
          ],
          theorie: "Toets-truc: lees gedicht hardop. Markeer welke regels op elkaar rijmen. Eerste rijm = A. Nieuwe klank = B. Daarna kun je het schema zien.",
          voorbeelden: [
            { type: "stap", tekst: "Paarrijm AABB: 'Kat (A) / pad (A) / muur (B) / vuur (B)'." },
            { type: "stap", tekst: "Gekruist ABAB: 'Kat (A) / muur (B) / pad (A) / vuur (B)'." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Zelfde letter = die regels rijmen met elkaar. Verschillende letters = ze rijmen NIET met elkaar." }],
          niveaus: {
            basis: "AABB = paarrijm (regel 1+2 rijmen, regel 3+4 rijmen).",
            simpeler: "Direct na elkaar rijmen = paarrijm = AABB.",
            nogSimpeler: "Paren rijmen = AABB.",
          },
        },
      },
      {
        q: "Wat is **versmaat**?",
        options: ["Een vast ritme van klemtonen in de regels", "Het rijm aan het eind van de regels", "Het onderwerp waar het gedicht over gaat", "Een groepje regels bij elkaar"],
        answer: 0,
        wrongHints: [null, "Rijm gaat over klanken aan het eind; versmaat over het ritme.", "Het onderwerp is waar het gedicht over gaat.", "Een couplet is een groepje regels."],
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Wat is **binnenrijm**?",
        options: [
          "Rijm midden in een regel",
          "Rijm aan het eind van twee regels",
          "Woorden die met dezelfde letter beginnen",
          "Een vast patroon van klemtonen",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Waar staan de woorden die rijmen: aan het eind of ergens anders?",
          null,
          "Klemtonen horen bij ritme. Gaat het hier over ritme?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Rijm kan op meer plekken",
              tekst: "Meestal rijmen de woorden aan het eind van de regels (eindrijm). Maar het kan ook anders.",
            },
            {
              titel: "Binnenrijm",
              tekst: "Bij **binnenrijm** staan de woorden die rijmen **midden in** één regel. Bijvoorbeeld: 'Er liep een beer met een veer in de wei.' (beer – veer)",
            },
          ],
          woorden: [
            {
              woord: "binnenrijm",
              uitleg: "Rijm midden in een regel.",
            },
            {
              woord: "eindrijm",
              uitleg: "Rijm aan het eind van regels.",
            },
            {
              woord: "alliteratie",
              uitleg: "Woorden beginnen met dezelfde letter.",
            },
          ],
          theorie: "Drie soorten rijm: eindrijm (eind van de regel), beginrijm/alliteratie (begin van woorden), binnenrijm (midden in de regel).",
          voorbeelden: [
            {
              type: "stap",
              tekst: "'Ik zag een muis in ons huis heel snel weglopen.' muis – huis staan midden in de regel = binnenrijm.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Binnen-rijm = rijm **binnen** in de regel.",
            },
          ],
          niveaus: {
            basis: "Binnenrijm = rijm midden in een regel.",
            simpeler: "Twee woorden in dezelfde regel rijmen op elkaar.",
            nogSimpeler: "Rijm in het midden",
          },
        },
      },
      {
        q: "*'De poes ligt op de **mat** / Ze droomt van een **muis** / Die woont in ons **huis** / Wat een luie **kat**!'* Welk rijmschema is dit?",
        options: ["ABBA", "ABAB", "AABB", "ABCD"],
        answer: 0,
        wrongHints: [
          null,
          "Rijmt regel 1 op regel 3? Zeg mat en huis eens hardop.",
          null,
          "Kijk of er eindwoorden zijn die wél op elkaar rijmen.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Eindwoorden zoeken",
              tekst: "De eindwoorden zijn: **mat**, **muis**, **huis**, **kat**.",
            },
            {
              titel: "Letters geven",
              tekst: "mat = A. muis rijmt niet op mat = B. huis rijmt op muis = B. kat rijmt op mat = A.",
            },
            {
              titel: "Het schema",
              tekst: "Samen: A B B A. De buitenste regels rijmen en de middelste regels rijmen. Dat heet **omarmend rijm**.",
            },
          ],
          woorden: [
            {
              woord: "rijmschema",
              uitleg: "Patroon van rijm in een gedicht.",
            },
            {
              woord: "omarmend (ABBA)",
              uitleg: "Regel 1 met 4, regel 2 met 3.",
            },
          ],
          theorie: "Stappenplan: eerste eindwoord = A. Nieuw rijmgeluid = nieuwe letter. Zelfde rijmgeluid als eerder = zelfde letter.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "mat (A) – muis (B) – huis (B) – kat (A) = ABBA.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Schrijf de letter achter elk eindwoord. Dan lees je het schema zo af.",
            },
          ],
          niveaus: {
            basis: "mat-kat rijmen (A), muis-huis rijmen (B): ABBA.",
            simpeler: "Regel 1 en 4 rijmen, regel 2 en 3 rijmen.",
            nogSimpeler: "ABBA",
          },
        },
      },
      {
        q: "*'Ik zie een **boot** / Hij vaart op **zee** / De boot is **groot** / Ik ga graag **mee**.'* Welk rijmschema is dit?",
        options: ["ABAB", "ABBA", "AABB", "AAAA"],
        answer: 0,
        wrongHints: [
          null,
          "Rijmt regel 2 op regel 3? Zeg zee en groot eens hardop.",
          null,
          "Rijmen alle vier de eindwoorden op elkaar?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Eindwoorden zoeken",
              tekst: "De eindwoorden zijn: **boot**, **zee**, **groot**, **mee**.",
            },
            {
              titel: "Letters geven",
              tekst: "boot = A. zee rijmt niet op boot = B. groot rijmt op boot = A. mee rijmt op zee = B.",
            },
            {
              titel: "Het schema",
              tekst: "Samen: A B A B. Het rijm wisselt steeds. Dat heet **gekruist rijm**.",
            },
          ],
          woorden: [
            {
              woord: "gekruist (ABAB)",
              uitleg: "Regel 1 met 3, regel 2 met 4.",
            },
            {
              woord: "paarrijm (AABB)",
              uitleg: "Twee regels achter elkaar rijmen.",
            },
          ],
          theorie: "Stappenplan: eerste eindwoord = A. Nieuw rijmgeluid = nieuwe letter. Zelfde rijmgeluid als eerder = zelfde letter.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "boot (A) – zee (B) – groot (A) – mee (B) = ABAB.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Wisselt het rijm steeds om? Dan is het ABAB.",
            },
          ],
          niveaus: {
            basis: "boot-groot rijmen (A), zee-mee rijmen (B): ABAB.",
            simpeler: "Regel 1 en 3 rijmen, regel 2 en 4 rijmen.",
            nogSimpeler: "ABAB",
          },
        },
      },
      {
        q: "*'Ik zag een grote beer / Hij liep maar heen en ...'* Welk woord past hier en **rijmt**?",
        options: ["weer", "terug", "rond", "snel"],
        answer: 0,
        wrongHints: [null, "Zeg 'beer' en 'terug' hardop. Klinken ze hetzelfde aan het eind?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Waar moet het rijmen?",
              tekst: "Het laatste woord moet rijmen op **beer**, het eindwoord van de eerste regel.",
            },
            {
              titel: "Hardop zeggen",
              tekst: "beer – weer: allebei **-eer**. Dat rijmt. 'Heen en weer' is ook een bekende uitdrukking.",
            },
          ],
          woorden: [
            {
              woord: "eindrijm",
              uitleg: "Eindwoorden klinken hetzelfde.",
            },
          ],
          theorie: "Toets-tip: zeg de eindwoorden hardop. Hoor je dezelfde klank aan het eind? Dan rijmt het.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "beer – weer (-eer) = rijm.",
            },
            {
              type: "stap",
              tekst: "beer – rond = geen rijm.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Zoek een woord dat op dezelfde klank eindigt als beer.",
            },
          ],
          niveaus: {
            basis: "Weer rijmt op beer (allebei -eer).",
            simpeler: "beer ... weer: dezelfde eindklank.",
            nogSimpeler: "weer",
          },
        },
      },
      {
        q: "In welke zin staat **alliteratie**?",
        options: [
          "Kleine Kees kookt koffie.",
          "Ik drink een glas melk.",
          "De zon schijnt op het dak.",
          "Wij gaan vandaag naar het bos.",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Kijk naar de eerste letter van elk woord. Komt dezelfde letter een paar keer achter elkaar?",
          null,
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Wat is alliteratie?",
              tekst: "Bij **alliteratie** beginnen woorden achter elkaar met **dezelfde letter** (of klank).",
            },
            {
              titel: "Kijk naar de beginletters",
              tekst: "Kleine – Kees – kookt – koffie: K – K – K – K. Vier keer dezelfde beginletter.",
            },
            {
              titel: "De andere zinnen",
              tekst: "In de andere zinnen begint niet steeds een woord met dezelfde letter.",
            },
          ],
          woorden: [
            {
              woord: "alliteratie",
              uitleg: "Woorden beginnen met dezelfde letter.",
            },
            {
              woord: "beginrijm",
              uitleg: "Ander woord voor alliteratie.",
            },
          ],
          theorie: "Toets-tip: zet je vinger onder de eerste letter van elk woord. Zie je dezelfde letter steeds terug? Alliteratie!",
          voorbeelden: [
            {
              type: "stap",
              tekst: "'Kleine Kees kookt koffie' = K-K-K-K = alliteratie.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Alliteratie = beginletters gelijk.",
            },
          ],
          niveaus: {
            basis: "Kleine Kees kookt koffie: steeds de K.",
            simpeler: "Kijk naar de eerste letters: K, K, K, K.",
            nogSimpeler: "Zelfde beginletter",
          },
        },
      },
      {
        q: "Je zoekt het rijmschema. Het eerste eindwoord krijgt de letter **A**. Het tweede eindwoord rijmt daar **niet** op. Welke letter krijgt het tweede eindwoord?",
        options: ["B", "A", "C", "D"],
        answer: 0,
        wrongHints: [
          null,
          "De letter A is voor woorden die op het eerste eindwoord rijmen. Rijmt dit woord daarop?",
          "Is er al een letter vóór C gebruikt voor een nieuw rijmgeluid?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Het stappenplan",
              tekst: "1. Zoek de eindwoorden.\n2. Eerste eindwoord = **A**.\n3. Nieuw rijmgeluid = **volgende letter**.\n4. Zelfde rijmgeluid als eerder = zelfde letter.",
            },
            {
              titel: "Toepassen",
              tekst: "Het tweede eindwoord rijmt niet op A. Het is dus een nieuw rijmgeluid. De volgende letter na A is **B**.",
            },
          ],
          woorden: [
            {
              woord: "rijmschema",
              uitleg: "Patroon van rijm, met letters.",
            },
            {
              woord: "eindwoord",
              uitleg: "Laatste woord van een regel.",
            },
          ],
          theorie: "Nieuwe klank? Dan neem je de eerstvolgende letter die nog niet gebruikt is: A, dan B, dan C.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "boom (A) – kat (B): kat rijmt niet op boom, dus B.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Letters gaan op volgorde: A, B, C, D.",
            },
          ],
          niveaus: {
            basis: "Nieuw rijmgeluid na A = B.",
            simpeler: "Rijmt niet op A? Dan is het B.",
            nogSimpeler: "B",
          },
        },
      },
    ],
  },
  {
    title: "Beeldspraak in poëzie",
    explanation:
      "**Beeldspraak** = woorden gebruiken **anders dan letterlijk**.\nMaakt gedicht **levendiger + sterker**.\n\n**Soorten beeldspraak in poëzie**:\n\n**1. Vergelijking** *('als' of 'zo X als Y')*:\n*'De wolken zijn zo wit als sneeuw.'*\n*'Mijn liefde is als een rode roos.'*\n\n**2. Metafoor** *(zonder 'als')*:\n*'Mijn liefde is een rode roos.'*\n*'Tijd is geld.'*\n\n**3. Personificatie** *(dood ding doet als persoon)*:\n*'De wind fluistert.'*\n*'De zon lacht naar mij.'*\n*'De stenen klagen.'*\n\n**4. Hyperbool** *(overdrijving)*:\n*'Ik heb het honderd keer gezegd!'*\n*'Het is hier sneller dan licht.'*\n\n**5. Onderdrijving / litote** *(zwakker zeggen)*:\n*'Hij is niet de slimste'* *(= hij is dom)*.\n*'Het was niet onaardig'* *(= het was aardig)*.\n\n**6. Symboliek**:\n• Roos = liefde.\n• Wolk = onzekerheid / verandering.\n• Boom = leven / sterkte.\n• Vogel = vrijheid.\n• Nacht = dood / mysterie.\n• Licht = hoop / kennis.\n\n**toetsvraag-type 'wat betekent...?'**:\nVraag geeft beeldspraak — leerling moet **betekenis** kiezen.\n\nVoorbeeld:\n*'Mijn hart is een vogel die wegvliegt.'*\n\nWat betekent dit?\nA. De spreker zit te eten. ❌\nB. De spreker is verliefd / opgewonden. ✅\nC. Iemand heeft een hartaanval. ❌\nD. De spreker is gewond. ❌\n\n**Antwoord: B** — hart als vogel = blijheid / verliefdheid.\n\n**Stappenplan**:\n1. Lees beeldspraak.\n2. Wat is **letterlijke** betekenis? *(hart-vogel)*\n3. Wat is **figuurlijke** betekenis? *(emotie)*\n4. Kies antwoord dat figuurlijk past.\n\n**Sfeer + toon**:\nGedichten hebben een **sfeer** *(stemming)*:\n• Vrolijk, droevig, mysterieus, romantisch, woedend.\n\n**Hoe herken je sfeer?**\n• Welke woorden gebruikt dichter? *('zonnig' = vrolijk, 'donker' = droevig)*\n• Welke beeldspraak? *(bloemen = vrolijk, donderwolken = somber)*\n• Welk tempo? *(snel ritme = opwinding, langzaam = rust)*\n\n**Toets-feitje**:\nVeel dichters gebruiken **natuur** als beeldspraak. Wolken voor onzekerheid, lente voor nieuw begin, herfst voor afscheid. Lees gedicht **2x** — eerste keer voor verhaal, tweede voor diepere betekenis.",
    checks: [
      {
        q: "Wat is **personificatie**?",
        options: ["Dood ding doet als mens", "Synoniem", "Rijm", "Tegenovergesteld"],
        answer: 0,
        wrongHints: [null, "Een synoniem is een ander woord met dezelfde betekenis — kijk: 'persoon' zit in het woord.", "Rijm gaat over klank — denk bij personificatie aan 'de wind fluit'. Wat gebeurt daar?", "Dat zou een tegenstelling zijn — 'persoon' zit in het woord. Wat doet het ding?"],
        uitlegPad: {
          stappen: [
            { titel: "Wat is personificatie?", tekst: "**Personificatie** = je laat een **levenloos ding** of **dier** doen alsof het een MENS is. Het krijgt menselijke eigenschappen (denken, voelen, praten, lachen, huilen)." },
            { titel: "Voorbeelden", tekst: "• 'De **wind fluistert**' (wind kan niet fluisteren — alleen mensen)\n• 'De **zon lacht** naar mij' (zon kan niet lachen)\n• 'De **stenen klagen**' (stenen voelen niets)\n• 'De **bomen dansen** in de wind' (bomen dansen niet)\nEen levenloos ding krijgt een menselijke actie." },
            { titel: "Waarom gebruiken dichters dit?", tekst: "Personificatie maakt poëzie **levendig + visueel**. Een zon die LACHT voel je beter dan 'het was zonnig'. Het geeft sfeer en emotie. Veel sprookjes + gedichten gebruiken het." },
          ],
          woorden: [
            { woord: "personificatie", uitleg: "Levenloos ding krijgt menselijke eigenschappen." },
            { woord: "metafoor", uitleg: "ANDERS: vergelijking zonder 'als' (jouw hart = rode roos)." },
            { woord: "hyperbool", uitleg: "ANDERS: overdrijving (honderd keer gezegd)." },
          ],
          theorie: "Toets-truc beeldspraak-soorten:\n• **Personificatie** = ding doet als mens\n• **Vergelijking** = 'als' / 'zoals' erbij\n• **Metafoor** = vergelijking zonder 'als'\n• **Hyperbool** = overdrijving\nElk een eigen naam — leer het verschil.",
          voorbeelden: [
            { type: "stap", tekst: "'De wolken **huilen**' (= personificatie, wolken kunnen niet huilen — bedoeld: regen)." },
            { type: "stap", tekst: "'De wind is **als** een fluistering' = vergelijking (heeft 'als')." },
            { type: "stap", tekst: "'De wind **is** een fluistering' = metafoor (geen 'als')." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Persoon-ificatie = van iets levenloos een PERSOON maken (in taal). Zoek menselijk werkwoord bij niet-mens." }],
          niveaus: {
            basis: "Personificatie = dood ding doet als mens.",
            simpeler: "Een wind die 'fluistert' of een zon die 'lacht' = personificatie. Het ding krijgt menselijke eigenschappen.",
            nogSimpeler: "Ding doet als mens",
          },
        },
      },
      {
        q: "*'De zon lacht naar mij'* — wat?",
        options: ["Personificatie", "Hyperbool", "Synoniem", "Geen beeldspraak"],
        answer: 0,
        wrongHints: [null, "Geen overdrijving.", "Niet.", "Wel beeldspraak."],
      },
      {
        q: "Wat is **hyperbool**?",
        options: ["Overdrijving", "Onderdrijving", "Synoniem", "Rijm"],
        answer: 0,
        wrongHints: [null, "Litote.", "Niet.", "Niet."],
      },
      {
        q: "*'Mijn hart is een vogel'* — wat?",
        options: ["Metafoor", "Letterlijk", "Hyperbool", "Geen"],
        answer: 0,
        wrongHints: [null, "Figuurlijk.", "Geen overdrijving.", "Wel."],
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "In welke zin staat een **vergelijking**?",
        options: [
          "Haar ogen glinsteren als sterren.",
          "Haar ogen zijn twee sterren.",
          "De bomen dansen in de wind.",
          "Ik heb wel duizend vragen.",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Zoek het woordje dat bij een vergelijking hoort. Staat dat in deze zin?",
          null,
          "Heb je echt duizend vragen? Welke soort beeldspraak is dat?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Vergelijking herkennen",
              tekst: "Bij een **vergelijking** staat er **'als'** of **'zo ... als'** in de zin.",
            },
            {
              titel: "Kijk naar de zinnen",
              tekst: "'Haar ogen glinsteren **als** sterren' = vergelijking.\n'Haar ogen zijn twee sterren' = metafoor (geen 'als').\n'De bomen dansen' = personificatie.\n'Duizend vragen' = hyperbool.",
            },
          ],
          woorden: [
            {
              woord: "vergelijking",
              uitleg: "Beeldspraak met 'als'.",
            },
            {
              woord: "metafoor",
              uitleg: "Beeldspraak zonder 'als'.",
            },
          ],
          theorie: "Personificatie = ding doet als mens. Vergelijking = met 'als'. Metafoor = zonder 'als'. Hyperbool = overdrijving.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "'Zo zacht als een kussen' = vergelijking.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Zie je 'als'? Dan is het een vergelijking.",
            },
          ],
          niveaus: {
            basis: "Met 'als' = vergelijking.",
            simpeler: "Zoek het woordje 'als'.",
            nogSimpeler: "Als = vergelijking",
          },
        },
      },
      {
        q: "Een gedicht gaat over **donkere wolken**, **regen** en een **lege straat**. Welke sfeer past daar het best?",
        options: ["Somber", "Vrolijk", "Grappig", "Feestelijk"],
        answer: 0,
        wrongHints: [null, "Word je blij van donkere wolken en een lege straat?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Wat is sfeer?",
              tekst: "De **sfeer** van een gedicht is de stemming: vrolijk, droevig, somber, spannend.",
            },
            {
              titel: "Kijk naar de woorden",
              tekst: "Donkere wolken, regen, een lege straat: dat zijn woorden die je een **sombere** stemming geven.",
            },
          ],
          woorden: [
            {
              woord: "sfeer",
              uitleg: "De stemming van een gedicht.",
            },
            {
              woord: "somber",
              uitleg: "Donker en een beetje droevig.",
            },
          ],
          theorie: "Toets-tip: let op de woorden die de dichter kiest. 'Zonnig' en 'bloemen' = vrolijk. 'Donker' en 'donderwolken' = somber.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "'De zon schijnt, de bloemen bloeien' = vrolijke sfeer.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Donkere woorden = sombere sfeer.",
            },
          ],
          niveaus: {
            basis: "Donkere wolken en regen geven een sombere sfeer.",
            simpeler: "Donker en nat = somber.",
            nogSimpeler: "Somber",
          },
        },
      },
      {
        q: "*'Ik sterf van de honger!'* Wat bedoelt de spreker?",
        options: [
          "Ik heb heel erge honger",
          "Ik ben heel erg ziek",
          "Ik heb net veel gegeten",
          "Ik ben heel erg moe",
        ],
        answer: 0,
        wrongHints: [null, "Gaat iemand die dit roept echt dood? Waarom zegt hij het dan?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Overdrijving",
              tekst: "Niemand gaat echt dood als hij dit zegt. Het is een **hyperbool**: een overdrijving.",
            },
            {
              titel: "Wat wordt bedoeld?",
              tekst: "De spreker wil laten merken dat hij **heel erge honger** heeft.",
            },
          ],
          woorden: [
            {
              woord: "hyperbool",
              uitleg: "Overdrijving.",
            },
            {
              woord: "figuurlijk",
              uitleg: "Niet echt zo bedoeld.",
            },
          ],
          theorie: "Hyperbool = overdrijven om iets sterker te zeggen. 'Ik heb het honderd keer gezegd' is ook een hyperbool.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "'Ik heb wel duizend vragen' = ik heb veel vragen.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Overdrijving? Haal de overdrijving weg: wat blijft er over?",
            },
          ],
          niveaus: {
            basis: "Het is een overdrijving: hij heeft heel erge honger.",
            simpeler: "Hij overdrijft: hij heeft veel honger.",
            nogSimpeler: "Veel honger",
          },
        },
      },
    ],
  },
  {
    title: "Soorten gedichten",
    explanation:
      "Er zijn veel **soorten gedichten**.\n\n**1. Limerick** *(5 regels, humoristisch)*:\nRijmschema **AABBA**.\nRegel 1, 2, 5 lang. Regel 3, 4 kort.\n\nVoorbeeld:\n*Er was eens een kat uit Rotterdam* (A)\n*Die altijd te laat bij het ontbijt kwam* (A)\n*Hij liep in het rond* (B)\n*Met zijn neus naar de grond* (B)\n*En at toen een plakje van oma's ham* (A)\n\n**2. Haiku** *(Japans, 3 regels)*:\n5-7-5 lettergrepen.\nVaak over natuur.\n\nVoorbeeld:\n*Stille vijver-bloei* (5)\n*Een kikker springt erin plons* (7)\n*Klank van het water* (5)\n\n**3. Sonnet** *(14 regels, deftig)*:\nMeestal:\n• 2 kwatrijnen *(4 regels)* + 2 terzinen *(3 regels)*.\n• Vaste versmaat.\n• Vast rijmschema.\n• Beroemde dichters: Shakespeare, Petrarca.\n\n**4. Kindergedicht**:\nVaak rijm AABB. Onderwerp dat kinderen aanspreekt.\n• Annie M.G. Schmidt is meester.\n\n**5. Ode** *(eerbetoon)*:\nGedicht ter ere van iemand of iets.\n*'Ode aan de vrijheid', 'Ode aan mijn moeder'.*\n\n**6. Elegie** *(droevig)*:\nGedicht over verlies / dood.\nVaak voor overledene.\n\n**7. Ballade** *(vertellend, verhalend)*:\nLang gedicht dat verhaal vertelt.\nVroeger gezongen door minnezangers.\n\n**8. Vrij vers**:\n**Geen rijm**, **geen vaste versmaat**.\nModerne poëzie sinds 1900.\nNadruk op beeldspraak + ritme van zinnen.\n\n**9. Acrostichon** *(naamgedicht)*:\nDe **eerste letter** van elke regel vormt een woord *(verticaal)*.\n\nVoorbeeld voor MAMA:\n*M*ooie sterke vrouw\n*A*ltijd voor mij daar\n*M*ijn beste vriendin\n*A*ls de zon zo warm\n\n**10. Lied / liedtekst**:\nGedicht op muziek.\nVaak refrein.\nNederlandstalige meesters: Boudewijn de Groot, Ramses Shaffy, Stef Bos.\n\n**Speciale vormen**:\n\n**Beeldgedicht / concrete poëzie**:\nDe **vorm** van het gedicht is ook deel van betekenis.\nVoorbeeld: regels in vorm van boom voor gedicht over boom.\n\n**Rap + spoken word**:\nModerne poëzie-vorm. Ritme + rijm + boodschap.\nNL: bijvoorbeeld Typhoon en Def P.\n\n**Toets-feitje**:\nIn NL is **Annie M.G. Schmidt** waarschijnlijk de meest geliefde dichter. Bekend van gedichten als 'Dikkertje Dap' en 'Het fluitketeltje', en van de boeken 'Jip en Janneke' en 'Pluk van de Petteflet'.",
    checks: [
      {
        q: "**Haiku** heeft welke vorm?",
        options: ["5-7-5 lettergrepen, 3 regels", "5 regels, rijmschema AABBA", "14 regels, vast rijmschema", "Geen vaste vorm"],
        answer: 0,
        wrongHints: [null, "Andere dichtvorm.", "Veel langer.", "Wel vaste vorm."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is een haiku?", tekst: "Een **haiku** is een **Japanse** gedichtsvorm. Heel kort: maar **3 regels** met een vast **lettergrepen-patroon**: **5-7-5**." },
            { titel: "Het patroon", tekst: "• Regel 1: **5 lettergrepen**\n• Regel 2: **7 lettergrepen**\n• Regel 3: **5 lettergrepen**\nTotaal 17 lettergrepen. Vaak over **natuur**, **seizoenen** of een **klein moment**." },
            { titel: "Voorbeeld", tekst: "**'Stille vijver-bloei** (5 lettergrepen: Stil-le-vij-ver-bloei)\n**Een kikker springt erin plons** (7: Een-kik-ker-springt-er-in-plons)\n**Klank van het water'** (5: Klank-van-het-wa-ter)" },
          ],
          woorden: [
            { woord: "haiku", uitleg: "Japans gedicht met 3 regels: 5-7-5 lettergrepen." },
            { woord: "lettergreep", uitleg: "Stukje van een woord met 1 klinkerklank (bv. 'mooi' = 1, 'mooie' = 2, 'lekkerste' = 3)." },
          ],
          theorie: "Toets-feit verschillende gedicht-vormen:\n• **Haiku** = 5-7-5, 3 regels, Japans, natuur.\n• **Limerick** = 5 regels AABBA, humoristisch.\n• **Sonnet** = 14 regels, deftig.\n• **Acrostichon** = eerste letters vormen woord.\n• **Vrij vers** = geen vaste vorm (modern).",
          voorbeelden: [
            { type: "stap", tekst: "Limerick is 5 regels MAAR met rijmschema AABBA. Heel anders dan haiku." },
            { type: "stap", tekst: "Sonnet = 14 regels lang, vaste rijm + ritme. Veel ouder en deftiger dan haiku." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Haiku = 5-7-5. Onthoud die getallen: vijf-zeven-vijf. Drie regels totaal. Japans = denk natuur + moment." }],
          niveaus: {
            basis: "Haiku = 5-7-5 lettergrepen, 3 regels.",
            simpeler: "Japans gedicht: regel 1 = 5 lettergrepen, regel 2 = 7, regel 3 = 5.",
            nogSimpeler: "5-7-5",
          },
        },
      },
      {
        q: "Wat is een **limerick**?",
        options: ["5-regels grappig gedicht AABBA", "Deftig gedicht van 14 regels", "Japans gedicht van 3 regels", "Lied met een refrein"],
        answer: 0,
        wrongHints: [null, "Dat is een sonnet.", "Dat is een haiku.", "Dat is een liedtekst."],
      },
      {
        q: "Wat is een **acrostichon**?",
        options: ["Eerste letters vormen woord", "Rijmend lied", "Lang verhaal", "Grappig gedicht van 5 regels"],
        answer: 0,
        wrongHints: [null, "Dat is een liedtekst.", "Dat is een ballade of een verhaal.", "Dat is een limerick."],
      },
      {
        q: "Een **vrij vers** heeft?",
        options: ["Geen vast rijm + versmaat", "Vast rijm", "Vast aantal regels", "Moet 14 regels"],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Niet.", "Sonnet."],
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Een gedicht dat iemand of iets **eert** (een eerbetoon) heet een ...",
        options: ["ode", "ballade", "haiku", "limerick"],
        answer: 0,
        wrongHints: [
          null,
          "Een ballade vertelt een verhaal. Gaat het hier om een verhaal?",
          null,
          "Een limerick is grappig. Is een eerbetoon grappig bedoeld?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Eerbetoon",
              tekst: "Een **eerbetoon** is iets wat je maakt om te laten zien hoe belangrijk of bijzonder iemand of iets is.",
            },
            {
              titel: "De ode",
              tekst: "Een gedicht ter ere van iemand of iets heet een **ode**. Bijvoorbeeld 'Ode aan mijn moeder'.",
            },
          ],
          woorden: [
            {
              woord: "ode",
              uitleg: "Gedicht ter ere van iemand of iets.",
            },
            {
              woord: "ballade",
              uitleg: "Gedicht dat een verhaal vertelt.",
            },
          ],
          theorie: "Soorten: ode = eerbetoon, elegie = droevig, ballade = verhaal, limerick = grappig, haiku = Japans 5-7-5.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "'Ode aan de vrijheid' = een gedicht dat de vrijheid eert.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Ode = 'O, wat ben jij mooi!'",
            },
          ],
          niveaus: {
            basis: "Een ode is een gedicht ter ere van iemand of iets.",
            simpeler: "Ode = eerbetoon.",
            nogSimpeler: "Ode",
          },
        },
      },
      {
        q: "Wat is een **elegie**?",
        options: [
          "Een droevig gedicht over verlies of dood",
          "Een grappig gedicht van vijf regels",
          "Een Japans gedicht van drie regels",
          "Een gedicht dat een woord vormt met de eerste letters",
        ],
        answer: 0,
        wrongHints: [null, "Grappige gedichten van vijf regels hebben een andere naam. Welke?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Droevige gedichten",
              tekst: "Een **elegie** is een **droevig** gedicht. Het gaat over **verlies** of **dood**.",
            },
            {
              titel: "Wanneer?",
              tekst: "Een elegie wordt vaak geschreven voor iemand die is overleden.",
            },
          ],
          woorden: [
            {
              woord: "elegie",
              uitleg: "Droevig gedicht over verlies.",
            },
            {
              woord: "limerick",
              uitleg: "Grappig gedicht van 5 regels.",
            },
            {
              woord: "haiku",
              uitleg: "Japans gedicht, 5-7-5.",
            },
          ],
          theorie: "Soorten: ode = eerbetoon, elegie = droevig, ballade = verhaal, limerick = grappig, haiku = Japans.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Een gedicht over het afscheid van een overleden opa kan een elegie zijn.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Elegie = verdriet.",
            },
          ],
          niveaus: {
            basis: "Een elegie is een droevig gedicht over verlies of dood.",
            simpeler: "Droevig gedicht = elegie.",
            nogSimpeler: "Droevig gedicht",
          },
        },
      },
      {
        q: "Je maakt een naamgedicht (acrostichon) voor **TIM**. Met welke letter begint de **tweede** regel?",
        options: ["I", "T", "M", "E"],
        answer: 0,
        wrongHints: [null, "Met de T begint de eerste regel. Welke letter komt daarna in de naam?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Wat is een acrostichon?",
              tekst: "Bij een **acrostichon** vormen de **eerste letters** van alle regels samen een woord. Van boven naar beneden lees je het woord.",
            },
            {
              titel: "Voor TIM",
              tekst: "Regel 1 begint met **T**, regel 2 met **I**, regel 3 met **M**.",
            },
          ],
          woorden: [
            {
              woord: "acrostichon",
              uitleg: "Naamgedicht: eerste letters vormen een woord.",
            },
          ],
          theorie: "Toets-tip: schrijf het woord verticaal op. Elke letter is het begin van één regel.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Voor MAMA: regel 1 M, regel 2 A, regel 3 M, regel 4 A.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Lees de naam letter voor letter: elke letter is één regel.",
            },
          ],
          niveaus: {
            basis: "T-I-M: de tweede regel begint met I.",
            simpeler: "Tweede letter van TIM = I.",
            nogSimpeler: "I",
          },
        },
      },
      {
        q: "Een gedicht over een boom is gedrukt in de **vorm** van een boom. Hoe heet zo'n gedicht?",
        options: ["Een beeldgedicht", "Een limerick", "Een elegie", "Een sonnet"],
        answer: 0,
        wrongHints: [
          null,
          "Een limerick heeft 5 regels en is grappig. Gaat het hier om rijm en grapjes?",
          null,
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Vorm doet mee",
              tekst: "Bij sommige gedichten is de **vorm** op het papier ook deel van de betekenis.",
            },
            {
              titel: "Beeldgedicht",
              tekst: "Zo'n gedicht heet een **beeldgedicht** (ook: concrete poëzie). Bijvoorbeeld regels in de vorm van een boom voor een gedicht over een boom.",
            },
          ],
          woorden: [
            {
              woord: "beeldgedicht",
              uitleg: "Gedicht waarvan de vorm een plaatje maakt.",
            },
            {
              woord: "concrete poëzie",
              uitleg: "Ander woord voor beeldgedicht.",
            },
          ],
          theorie: "Bij een beeldgedicht kijk je niet alleen naar de woorden, maar ook naar de vorm.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Een gedicht over regen met de woorden als druppels naar beneden = beeldgedicht.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Beeld-gedicht: het gedicht is ook een beeld.",
            },
          ],
          niveaus: {
            basis: "Een gedicht in de vorm van wat het beschrijft = beeldgedicht.",
            simpeler: "De vorm is een plaatje: beeldgedicht.",
            nogSimpeler: "Beeldgedicht",
          },
        },
      },
      {
        q: "Waaruit bestaat een **sonnet** meestal?",
        options: [
          "Twee kwatrijnen en twee terzinen",
          "Drie regels van 5-7-5 lettergrepen",
          "Vijf grappige regels die rijmen",
          "Regels zonder rijm of vaste maat",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Dat is de vorm van een Japans gedicht. Welk?",
          null,
          "Zo'n gedicht heet een vrij vers. Heeft een sonnet geen vaste vorm?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Het sonnet",
              tekst: "Een **sonnet** is een deftig gedicht van **14 regels**, met een vaste versmaat en een vast rijmschema.",
            },
            {
              titel: "De bouw",
              tekst: "Meestal: **2 kwatrijnen** (4 regels) + **2 terzinen** (3 regels). 4 + 4 + 3 + 3 = 14.",
            },
          ],
          woorden: [
            {
              woord: "kwatrijn",
              uitleg: "Couplet van 4 regels.",
            },
            {
              woord: "terzine",
              uitleg: "Couplet van 3 regels.",
            },
            {
              woord: "sonnet",
              uitleg: "Deftig gedicht van 14 regels.",
            },
          ],
          theorie: "Haiku = 3 regels (5-7-5). Limerick = 5 regels, grappig. Sonnet = 14 regels. Vrij vers = geen vaste vorm.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "4 + 4 + 3 + 3 = 14 regels = sonnet.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Tel het na: twee keer 4 en twee keer 3 is 14.",
            },
          ],
          niveaus: {
            basis: "Een sonnet: 2 kwatrijnen + 2 terzinen = 14 regels.",
            simpeler: "Twee groepjes van 4 en twee van 3.",
            nogSimpeler: "4-4-3-3",
          },
        },
      },
      {
        q: "De **eerste** regel van een haiku heeft 5 lettergrepen. Welke regel past daar?",
        options: [
          "Het blad valt omlaag",
          "De herfst is gekomen hier",
          "De gele blaadjes vallen zacht",
          "Regen valt",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Klap de lettergrepen: de-herfst-is-ge-ko-men-hier. Hoeveel zijn het?",
          null,
          "Tel de lettergrepen: re-gen-valt. Is dat genoeg?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Het haiku-patroon",
              tekst: "Een **haiku** heeft 3 regels: **5 - 7 - 5** lettergrepen. De eerste regel heeft er dus **5**.",
            },
            {
              titel: "Klappen",
              tekst: "Het-blad-valt-om-laag = **5** lettergrepen.\nDe-herfst-is-ge-ko-men-hier = 7.\nDe-ge-le-blaad-jes-val-len-zacht = 8.\nRe-gen-valt = 3.",
            },
          ],
          woorden: [
            {
              woord: "haiku",
              uitleg: "Japans gedicht met 3 regels: 5-7-5 lettergrepen.",
            },
            {
              woord: "lettergreep",
              uitleg: "Stukje van een woord met één klinkerklank.",
            },
          ],
          theorie: "Toets-tip: klap bij elke lettergreep in je handen en tel mee.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "'Klank van het water' = klank-van-het-wa-ter = 5.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Klap en tel: 5 klappen = goede eerste regel.",
            },
          ],
          niveaus: {
            basis: "'Het blad valt omlaag' heeft 5 lettergrepen.",
            simpeler: "Klap mee: het-blad-valt-om-laag = 5.",
            nogSimpeler: "5 klappen",
          },
        },
      },
    ],
  },
  {
    title: "Eind-toets — poëzie mix",
    explanation: "Mix-toets in Doorstroomtoets-stijl.\n\nVeel succes!",
    checks: [
      { q: "Wat is **rijm**?", options: ["Woorden eindigen hetzelfde", "Klemtoon", "Lengte", "Letter"], answer: 0, wrongHints: [null, "Ritme.", "Lengte zegt niets over de klank.", "Niet specifiek."] },
      { q: "**AABB** = ?", options: ["Paarrijm", "Gekruist", "Omarmend", "Niet rijm"], answer: 0, wrongHints: [null, "ABAB.", "ABBA.", "Wel rijm."] },
      { q: "*'De wind fluistert'* = ?", options: ["Personificatie", "Hyperbool", "Niet", "Rijm"], answer: 0, wrongHints: [null, "Geen overdrijving.", "Wel.", "Niet."] },
      { q: "Wat is **alliteratie**?", options: ["Beginrijm zelfde letter", "Eindrijm", "Niet rijm", "Ritme"], answer: 0, wrongHints: [null, "Eindrijm.", "Wel.", "Niet."] },
      { q: "**Haiku** is uit welk land?", options: ["Japan", "Nederland", "Verenigde Staten", "Frankrijk"], answer: 0, wrongHints: [null, "Niet origineel.", "Niet.", "Niet."] },
      { q: "Beroemde **NL-kindergedicht-dichter**?", options: ["Annie M.G. Schmidt", "Joost van den Vondel", "Shakespeare", "Marsman"], answer: 0, wrongHints: [null, "Gouden Eeuw, niet kindergedicht.", "Engels.", "Niet kindergedicht."] },
      { q: "Een **strofe** is?", options: ["Een groepje versregels","Een woord","Een rijm","Een dichter"], answer: 0, wrongHints: [null, "Niet.", "Rijm = klank, geen groep.", "Persoon."] },
      { q: "*'Zo wit als sneeuw'* = ?", options: ["Vergelijking","Hyperbool","Personificatie","Rijm"], answer: 0, wrongHints: [null, "Niet overdrijven.", "Geen menselijke eigenschap.", "Geen rijm."] },
      { q: "Hoeveel lettergrepen heeft een **haiku** per regel?", options: ["5-7-5","4-4-4","8-8-8","2-3-2"], answer: 0, wrongHints: [null, "Niet — vast Japans patroon.", "Te veel.", "Te weinig."] },
      { q: "Welk woord rijmt op **hond**?", options: ["mond","kat","huis","boom"], answer: 0, wrongHints: [null, "Andere klank.", "Niet.", "Niet."] },
      { q: "Welk **rijmschema** is **gekruist**?", options: ["ABAB","AABB","ABBA","AAAA"], answer: 0, wrongHints: [null, "Paarrijm.", "Omarmend.", "Geen wisseling."] },
      { q: "Welk **rijmschema** is **omarmend**?", options: ["ABBA","AABB","ABAB","AAAA"], answer: 0, wrongHints: [null, "Paarrijm.", "Gekruist.", "Geen wisseling."] },
      { q: "*'De zon lacht naar mij.'* — welke stijlfiguur?", options: ["Personificatie","Vergelijking","Rijm","Hyperbool"], answer: 0, wrongHints: [null, "Niet — geen 'als'.", "Niet rijm.", "Niet overdreven."] },
      { q: "*'Duizend keer gezegd.'* — welke stijlfiguur?", options: ["Hyperbool","Personificatie","Vergelijking","Rijm"], answer: 0, wrongHints: [null, "Niet menselijke eigenschap.", "Geen 'als'.", "Niet."] },
      { q: "Wat is een **metafoor**?", options: ["Beeldspraak zonder 'als'","Vergelijking met 'als'","Overdrijving","Rijm"], answer: 0, wrongHints: [null, "Dat is vergelijking.", "Hyperbool.", "Niet."] },
      { q: "*'Pim heeft een paard in de tuin.'* — welke alliteratie-letters?", options: ["P","T","H","E"], answer: 0, wrongHints: [null, "Geen reeks.", "Niet beginrijm.", "Niet."] },
      { q: "Wat is een **vers**?", options: ["Een regel in een gedicht","Een boek","Een verhaal","Een tekening"], answer: 0, wrongHints: [null, "Een boek is veel groter.", "Een verhaal loopt door in zinnen.", "Niet."] },
      { q: "Welk soort gedicht heeft **14 regels**?", options: ["Sonnet","Haiku","Limerick","Vrij vers"], answer: 0, wrongHints: [null, "17 lettergrepen.", "Meestal 5 regels.", "Geen vorm."] },
      { q: "**Limerick** heeft hoeveel regels?", options: ["5","3","14","8"], answer: 0, wrongHints: [null, "Haiku.", "Sonnet.", "Niet."] },
      { q: "Wat rijmt op **regen**?", options: ["zegen","zon","wolk","huis"], answer: 0, wrongHints: [null, "Andere klank.", "Niet.", "Niet."] },
      { q: "**Refrein** in een gedicht/lied is?", options: ["Herhalend stukje tussen coupletten","Eerste regel","Laatste woord","Niet relevant"], answer: 0, wrongHints: [null, "Niet specifiek.", "Niet.", "Wel."] },
      { q: "*'Ik zag, ik zag, wat jij niet zag.'* — welk effect door herhaling?", options: ["Versterkt + ritme","Vermoeit","Onzin","Niet relevant"], answer: 0, wrongHints: [null, "Herhaling in een gedicht is meestal juist expres gedaan. Waarom?", "Wel zin.", "Wel."] },
      { q: "Wat is een **couplet**?", options: ["Groepje van 2+ versregels samen","Eén woord","Lied","Niet relevant"], answer: 0, wrongHints: [null, "Te klein.", "Te groot.", "Wel."] },
      { q: "Welk **rijmpaar** is acceptabel?", options: ["maan/baan","kat/tafel","huis/koud","stoel/groen"], answer: 0, wrongHints: [null, "Zeg ze hardop: klinken de eindklanken van 'kat' en 'tafel' hetzelfde?", "-uis en -oud — hoor je dezelfde eindklank?", "-oel en -oen lijken op elkaar maar eindigen nét anders — luister naar de laatste klank."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const dichtenPoezieRijmenPo = {
  id: "dichten-poezie-rijmen-po",
  title: "Dichten + poëzie + rijm (Doorstroomtoets groep 5-8)",
  emoji: "🎭",
  level: "groep5-8",
  subject: "taal",
  referentieNiveau: "1F",
  sloThema: "Taal — poëzie & literatuur",
  prerequisites: [
    { id: "spreekwoorden-uitdrukkingen-po", title: "Spreekwoorden + uitdrukkingen", niveau: "1F" },
  ],
  intro:
    "Dichten + poëzie voor Doorstroomtoets groep 5-8 — wat is gedicht (proza vs gedicht, bekende dichters) + rijm + ritme (eind/begin/binnenrijm, AABB/ABAB/ABBA) + beeldspraak (personificatie/hyperbool/metafoor) + soorten (limerick/haiku/sonnet/acrostichon/vrij vers). Sluit op spreekwoorden. ~15 min.",
  triggerKeywords: [
    "gedicht", "poëzie", "poezie",
    "rijm", "rijmen", "rijmschema",
    "alliteratie", "beginrijm", "eindrijm",
    "metafoor", "personificatie", "hyperbool",
    "limerick", "haiku", "sonnet",
    "Annie M.G. Schmidt", "Marsman",
    "vers", "versregel", "couplet",
  ],
  chapters,
  steps,
};

export default dichtenPoezieRijmenPo;
