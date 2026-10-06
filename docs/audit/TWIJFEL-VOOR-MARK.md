# Twijfelgevallen uit audit ronde 1 (5 okt 2026) — Mark beslist

Niet gewijzigd; nakijkers vonden ze verdedigbaar maar discutabel. Per regel: pad · vraag · kwestie.

## Verouderd / actualiteit
- politiek-democratie-po: alle voorbeelden gaan over verkiezing 2023 + kabinet-Schoof (88 zetels) → bijwerken naar 29 okt 2025?
- financiele-vorming-po stap 1: "21 eurolanden" klopt nu (Bulgarije 2026); veroudert bij volgende toetreding.
- onderwijs-niveaus: vmbo bb/kb/gl/tl — als "nieuwe leerweg" (gl+tl) landelijk is ingevoerd, aanpassen.
- beroepen-werk-po stap 1: "AOW-leeftijd stijgt naar 68" is niet vastgesteld (67, 67+3 mnd vanaf 2028).
- digitale-geletterdheid-po stap 3: noemt LastPass als wachtwoordmanager (datalek 2022) → liever Bitwarden/1Password.
- werelddelen-landen-po stap 4 vraag 19: "Kiev" → Taalunie/NOS schrijven "Kyiv".

## Dubbelzinnig op schoolniveau
- vlakke-figuren-po stap 5 vraag 21: "cirkel heeft hoeveel zijden?" → 0 of "1 gebogen"; liever "hoeveel rechte zijden".
- sterren-planeten stap 2 vraag 3: gasreuzen = alleen Jupiter/Saturnus; veel methodes tellen Uranus/Neptunus mee.
- tekstdoel-schrijversdoel-po stap 4 vraag 6: schoolkrant-pizza = "amuseren", maar "informeren" is te verdedigen → tekstje grappiger of schrappen.
- feit-mening-po A1 en D5: "Iedereen houdt van zwemmen" / "drukste land van Europa" als mening — strikt controleerbare (onware) beweringen.
- gezonde-voeding-po stap 2 vraag 3: "belangrijkste maaltijd = ontbijt" is schoolwijsheid, geen Voedingscentrum-feit.
- tijdvakken-nederland-po stap 4 vraag 7: "Patatkar-school" gimmick-vraag — schrappen?
- synoniemen-tegenstellingen-po stap 5 vraag 4: "lopen = wandelen" — in Vlaanderen betekent lopen rennen (België-codes!).
- schatten-afronden stap 5 vraag 3: "Ja, net" vs "Ja, ruim genoeg" bij €3,50 over — smaak.

## Niet te verifiëren cijfers in uitlegteksten (geen vraag)
- begrijpend-lezen-strategie stap 7: "Universiteit Leiden ~1 jaar voorsprong"; gezonde-voeding: "ontbijters scoren 15% hoger"; recyclen: "64% gerecycled, EU-top" (Eurostat eerder ~57%); kaartlezen: GPS-/Google-Maps-feitjes; industriele-revolutie: "mijnramp 1925 Heerlen" (bekend is Brunssum 1947); bekende-boeken: "Pluk beste jeugdboek 20e eeuw (2007)", "Sammie + de Mannen (Dirk Nielandt)".
- kritisch-denken-po: twee verzonnen percentages (67%/60%) zijn al verwijderd.

## Gevoelig
- pubertijd-groei-po stap 3: signalenlijst noemt zelfdodingsgedachten (met hulplijnen) — traumasensitief jouw oordeel; stap 2 noemt merk Roaccutane.
- werelddelen-landen-po stap 2: "Israël (Jeruzalem)" — omstreden hoofdstad; neutraler "(Jeruzalem/Tel Aviv)".

## Patroon (geen fout, wel aandacht)
- Veel paden hebben wrongHints met categorie-labels ("Opsomming.", "Som.", "Niet.") → weinig didactische waarde (eliminatie-leak-stijl); zachte koppeltekens (U+00AD) in enkele uitlegteksten.

# Ronde 2 (5-6 okt) — aanvullingen

## Patroon om in één keer aan te pakken (geen losse fouten)
- topics.js (voorlichting/puberteit/pesten/klimaat/media) en oefenbank groep 5/7: ~60 afleiders zijn "X of Y"-plaksels of "foute optie + staart van het goede antwoord"; ~45 keer verraadt de langste/netste optie het antwoord. Niet fout, wel knullig en raadbaar → bulk-herschrijven als aparte klus.
- Studievaardigheden-plaatjes in topics.js: bij 15+ vragen staat de waarde al in de opties ("Eindhoven (16°C)") of in het plaatje; weggeef-patroon. Bewust (plaatjes geblokkeerd) of opschonen?
- _realRek8: 21 van 23 vragen hebben answer-index 3 (prima als de app schudt).

## Verouderd / feiten
- topics r.171 pesten: "anti-pestlijn 0800-2567890" niet te bevestigen → Kindertelefoon 0800-0432?
- topics r.131 EHBO: "10-15 m afstand bij elektrisch ongeluk" vaag (hoogspanning ≥18-20 m; huishoudstroom = stroom uit).
- cito.groep8[59] meeste tijdzones = Rusland (11); Frankrijk met overzee 12.
- cito.groep8[106] rivier bij Rotterdam = Maas (schoolconventie; Nieuwe Maas is grotendeels Rijnwater).
- aardrijkskunde.groep7[6] grootste woestijn = Antarctica (technisch juist, kinderen leren Sahara).
- Doorstroomtoets rekenen g8: intro "~75 vragen, 4× ~20 min" en kop-SVG "4 stappen" kloppen niet bij 6 stappen/264 vragen.
- doorstroomtoets-taal stap 4-uitleg: kapotte tekenreeks "Aanhalingstekens *''*\*"; stap 3 verwijst naar "[spelling-ei-ij-au-ou pad]" als platte tekst.

## Niveau past niet bij groep
- engels.groep7 (litotes, third conditional) en maatschappijleer.groep7 (Locke, dualisme): VO-bovenbouw-niveau onder een groep-7-label.
- geschiedenis.groep7[37] Maagdenburger Confessie; topics r.82 "genitaliën"-vraag herhaalt het antwoord.

## Dubbel
- rekenen.groep4[8]=[48] (5×5); aardrijkskunde.groep7[30]/[32] = [14]/[25]; duits.groep7[49]=[39]; frans.groep5[48]/[49]; Doorstroomtoets rekenen: 4 dubbele sommen (stap 1 v17/v44, 2 v14/v30, 3 v13/v22, 4 v13/v21).

# Ronde 3 (6 okt) — aanvullingen
- **99 twijfelpunten uit de cloud** staan per deel in `docs/audit/VERSLAG-cloud-1.md` (A: 65, B examens: 27 — o.a. antwoorden die tegen het correctievoorschrift gecheckt moeten worden, C: 7).
- Examens biologie (lokaal): 2024-t1 V17 tandzenuwen (ook tandbeen?), 2025-t2 V15 meerling-kans zonder brondata, 2024-t1 V33 lymfe; 3 checks zonder leerpadLink. Tip: correctievoorschrift-PDF's lezen maakt dit hard.
- VO exact (lokaal, 15 punten): exponentieel.jsx + kansrekening.js gebruiken bestandsbreed de punt als decimaalteken; patroon "juiste optie is de enige mét toelichting en staat op index 0"; radioactiviteit Fe-56 vs Ni-62; cse-vmbo "CSE 120 min" geldt niet voor BB; organische-chemie "rotte eieren" bij aardgas-odorant.
- VO talen: conditionals Type 0/1-afleiders grammaticaal correct; "I saw that film three times" (AE) als fout.
- Oefenbank VO B (14 punten): Parijs-akkoord "max. 1,5 °C"; Schengen "29 landen" (veroudert); Koude Oorlog "formeel 1947"; vak "natuur" klas3 bevat bovenbouwstof (Nernst, SN1/SN2) onder een klas-3-label; engels.groep7/maatschappijleer.groep7 = VO-niveau.
- **Structureel:** in de oefenbank-VO klas1/3-sets had ~85% van de vragen een plaksel-afleider (nu hersteld, 492+8). De PO-sets (groep 5/7) hebben hetzelfde patroon maar milder (~15 per set) → bulk-ronde in de cloud (~$30).
