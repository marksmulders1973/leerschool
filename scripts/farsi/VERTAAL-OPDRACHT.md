# Vertaalopdracht Farsi (Perzisch) — Leerkwartier nieuwkomers (31 okt 2026)

Leerkwartier is een Nederlandse oefenapp. Voor kinderen van 6-12 jaar die net in Nederland zijn ("nieuwkomers")
staat bij elke Nederlandse zin, uitleg, knop en woordje een vertaling in hun thuistaal. Er zijn nu zes talen
(en, ar, uk, tr, ro, bg). Een ouder vroeg om **Farsi (Perzisch)**: veel kinderen spreken Perzisch.
Jij vertaalt één pakket naar Farsi. Kwaliteit is belangrijker dan snelheid: een kind moet het direct begrijpen.

## Bestand
Je krijgt `scripts/farsi/batches/batch-N.json`: een lijst items.
- Soort A (`id` begint met `A|`): één tekst. Velden: `en` (Engelse vertaling, altijd aanwezig), soms `nl`
  (het Nederlandse origineel) en `ar` (Arabisch, handig als controle). Vertaal de **betekenis van het Nederlands**;
  ontbreekt `nl`, vertaal dan vanuit `en`.
- Soort B/C (`id` begint met `B|` of `C|`): een heel blok of een lijst in JavaScript-notatie (`en_blok`, soms `nl_blok`).
  Lever een blok met **exact dezelfde sleutels/volgorde en hetzelfde aantal elementen**, alleen de tekstwaarden in het Farsi,
  als geldige JavaScript-literal (zelfde aanhalingstekens als het origineel; backtick-strings blijven backticks).

## Regels
1. **Standaard Perzisch in Perzisch schrift**, eenvoudig en vriendelijk, zoals voor een kind van 8. Kies woorden die
   zowel in Iran als in Afghanistan (Dari) begrepen worden; vermijd straattaal en Iran-specifieke spreektaal.
   Spreek het kind aan met تو (je/jij), de juf/meester met شما.
2. **Perzische tekens**: gebruik ی (Perzische ye, U+06CC) en ک (U+06A9), nooit de Arabische ي/ك. Gebruik de
   halve spatie (ZWNJ, U+200C) waar het hoort: می‌روم، کتاب‌ها، خانه‌ام. Perzische cijfers zijn niet nodig:
   **laat cijfers als 1, 2, 10 staan** (de app rekent ermee).
3. **Behoud precies**: placeholders `${...}` (maar zie regel 4), `{a}`/`{b}`, emoji, `·`, `—`, `**vet**`, `*cursief*`,
   regelafbrekingen `\n`, Nederlandse woorden tussen aanhalingstekens (die moet het kind juist leren, bv. 'de tafel'
   blijft 'de tafel'), namen (Ali, Sara), "Leerkwartier", "~10 min." wordt "~10 دقیقه".
4. Staat er in een placeholder `.bg` (bv. `${t.bg}`), vervang dat door `.fa` (`${t.fa}`). Andere placeholders niet aanraken.
5. Taalnamen: Perzisch = `فارسی`. In `api/tutor-chat.js` staan Nederlandse taalnamen ("Engels", "Bulgaars"): daar wordt het
   `Perzisch (Farsi)` in het Nederlands. Een item met `en: "en"` en `nl: "nl"` (taalcodes) wordt `fa`.
   Een item met `en: "English"` (de taalnaam in eigen schrift) wordt `فارسی`.
6. Woordkaarten (korte losse woorden zoals "table", "the chair"): het gewone kinderwoord, enkelvoud, zonder lidwoord
   (Perzisch heeft geen lidwoord), werkwoorden als infinitief (نوشتن، خواندن). Past het woord bij een plaatje
   (de bank = bankstel/sofa), kies die betekenis (مبل).
7. Geen uitleg toevoegen, niets weglaten. Even kort als het origineel.

## Uitvoer
Schrijf `scripts/farsi/batches/batch-N.fa.json`: een object `{ "<id>": "<farsi-tekst of JS-blok>" }` met **alle** id's
uit jouw pakket. Controleer na het schrijven met een klein script: geldige JSON, aantal sleutels = aantal items,
geen Arabische ي/ك (U+064A/U+0643) in je tekst, alle `${...}`/`{a}`-placeholders uit `en` ook in jouw tekst.
Eindrapport (Nederlands, kort): aantal vertaald, twijfelgevallen (max 10, met id en waarom).
Geen git, geen andere bestanden aanraken.
