# WhatsApp-feedback Mark — 10 augustus 2026

> **STATUS NA FABLE-REVIEW (11 aug, v240):**
> - ✅ **P1 fout=rood**: GEFIXT — oefen-modus CitoLeerpadToets toont nu direct rood + leermoment (wrongHint + uitleg), antwoord vergrendeld; simulatie selecteert neutraal blauw i.p.v. groen (fouten daar bewust pas in eind-overzicht, zoals echte toets).
> - ⏳ **P2 topografie**: BEVESTIGD als ontwerp-fout — pad heeft 5 stappen met elk maar 1 provincie-check → "klaar" na 1 antwoord. Echte fix = oefen-alle-12-loop in TopoKaartNL/pad (groter werk, open). Files: `learnPaths/topografieNederlandProvinciesPo.jsx`, `LearnPath.jsx:657`, `TopoKaartNL.jsx`.
> - ✅ **P3 guardrail**: GEFIXT — veilige-voorbeelden-regel in `api/generate-questions.js` én `api/tutor-chat.js`.
> - ✅/⚠️ **P4 vragen**: vloeistof-vraag herformuleerd (geen strikvraag meer); hallo- en busvraag stonden NIET in vaste data (waren AI-gegenereerd → guardrail + correctheid-instructie dekken dit); "vraag aan Charley" → placeholder nu "Typ je antwoord of vraag aan …".
> - ✅ **P5 "globaal"**: vaste woordenlijsten zijn schoon (geen foute definitie gevonden) — was vermoedelijk AI-uitleg; tutor-prompt heeft al kindertaal-regel.
> - ⏳ **P6 beeld/tekst**: begeleidende tekst in oefen-toets nu deels gedekt door leermoment; foto's bij historische figuren/plaatsen = open wens.
> - ✅/⏳ **P7 gratis**: "Gratis oefenen" toegevoegd aan CitoPage-subtitle; gezin-koppelcode-tekst kan later explicieter ("je logt gewoon als jezelf in").

Notities die Mark overdag naar zichzelf appte tijdens het testen van Leerkwartier
met (waarschijnlijk) zijn dochter. Uitgelezen via WhatsApp Web op 10 aug.
**Bedoeld om morgen (11 aug) door Fable te laten nakijken tegen de code.**

Bron-tijden zijn de WhatsApp-tijdstippen van 10-8-2026.

---

## 🔴 PRIO 1 — Rode draad: fout klikken doet niets / alles lijkt goed
Komt 5× terug — verreweg belangrijkste klacht.

- 16:20 "Ik klik bewust fout maar dan gebeurt er niets"
- 16:21 "Dat is dus overal"
- 16:24 "Zelfde doodloop"
- 16:45 + 16:47 "Bij doorstroomtoets zijn alle antwoorden weer a"
- 16:47 "Is niet zo, maar je ziet niet dat je het fout deed"
- 16:55 (kern): "Er is helemaal geen tekst te zien en wat ik ook ingeef, het antwoord
  geeft steeds groen. Pas aan het einde zie ik de fouten. Dus grijs of rood bij fout.
  Liever rood, stop-optie en leermoment."

**Gewenst gedrag:** fout = meteen **rood** (niet groen), directe **stop / leermoment**,
niet pas achteraf. Raakt oefen-modus én doorstroomtoets. Sluit aan bij eerdere feedback
"of grijs of rood bij fout".

---

## 🗺️ PRIO 2 — Topografie (provincies) loopt dood
- 16:22 "Eerste provincie goed gegokt, maar gaat direct door — 12 provincies"
- 16:23 "Dat moet je alle 12 kunnen oefenen tot je ze allemaal kent"
- 16:23 "Iets van: wil je ze allemaal kennen, of wil je print-hulp? (gezin-abonnement van maken)"
- 16:24 "Zelfde doodloop"
- 17:26 "Geeft dan ook Arnhem weer, en ik kan weer niet verder. Liefst met bv foto van Arnhem"
- 17:26 "En welke ik aanwijs: 'nee dit is… Provincie'" (foutmelding klopt niet / onvolledig)
- 23:47 (30 jul, gerelateerd) "Ik kan niet drukken op Nederland of Europa"

**Kern:** topografie stopt na 1 provincie i.p.v. alle 12 te laten oefenen; foutmelding
onvolledig ("dit is… Provincie"); wens: foto bij plaats (bv. Arnhem).

---

## 🛡️ PRIO 3 — Veiligheids-guardrail AI-gegenereerde vragen
- 17:07 "Stel dat je je broer van de bank afduwt?"
- Toelichting Mark: dit was een **AI-gegenereerde vraag over zwaartekracht**. Zo'n
  voorbeeld is nooit verstandig bij kinderen — een kind kan het letterlijk nadoen.

**Fix:** guardrail op AI-vraaggeneratie. Verboden: voorbeelden die schadelijk/gevaarlijk
gedrag modelleren (duwen/slaan/laten vallen van personen). Gebruik neutrale objecten
(bal, appel, knikker die valt) voor natuurkunde.

---

## ✏️ PRIO 4 — Foute / rammelende vragen (uit screenshots)
- **Vloeistof-vraag** (screenshot doorstroomtoets 80%): "Een vloeistof heeft welke vorm?
  Goede antwoord: vorm van de bak/glas." → Mark 20:11: "Hier ben ik het niet mee eens —
  vloeistof heeft géén (eigen) vorm; minstens een strikvraag." → herformuleren of vervangen.
- **Hallo-vraag** (screenshot): 20:14 "Had daar niet de punt ná 'hallo' en aanhalingstekens
  moeten komen?" + 16:42 "Welke vraag heeft een punt — dat zijn er duidelijk 2."
  → interpunctie-vraag met 2 juiste antwoorden / verkeerd modelantwoord.
- 16:44 "Tekst te kort door de bocht" + "Hoe laat rijdt de vierde bus, zoiets"
  → rekenvraag mist context.
- 16:38 "Moest antwoorden op Charley, maar er staat altijd 'vraag aan Charley'"
  → naamgeving-bug bij de buddy/tutor.
- 16:42 "Is een gegenereerde vraag" (context bij interpunctie-vraag hierboven).

---

## 📖 PRIO 5 — Moeilijke-woorden: foute definities (valse vrienden)
- 17:01 "Moeilijke woorden — wat is hier beter aan dit antwoord?"
- Toelichting Mark: bij een woord als **"globaal"** zegt de uitleg "over heel de wereld".
  Dat is fout: NL "globaal" = **in grote lijnen / ruwweg / ongeveer** (valse vriend met
  Engels *global*). Ook de vraag: is "globaal" hier wel het juiste moeilijke woord?

**Fix:** definitie "globaal" corrigeren + hele moeilijke-woorden-lijst nalopen op verkeerde/
valse-vriend-definities.

---

## 🖼️ Beeld & begeleidende tekst
- 19:01 "Waar is de begeleidende tekst?" (uitleg/instructie ontbreekt ergens)
- 19:05 "Kan hier een plaatje bij?"
- 17:05 "Kunnen hier echt foto's / portretten bij historische figuren?"
- 17:05 "Of bv plaatsen, gebouwen etc."

---

## 💶 Product / prijs / gezin-pakket
- 16:50 "Ik zie daar niet dat het gratis (altijd gratis) is" — PAGINA ONBEKEND (nog navragen).
- 20:08 "Wanneer krijg je een koppelcode via WhatsApp van thuis, en is een inlog niet
  handiger voor alle leden van het huis bij familie-pakket? Of gaat dit over iets anders?"
  → product-vraag over gezin-onboarding (koppelcode vs. gedeelde login).
- 16:23 (idee) "wil je ze allemaal kennen, of wil je print-hulp? (gezin-abonnement van maken)"

---

## 📅 Persoonlijke notities (GEEN Leerkwartier-bug — agenda)
- Di 25 aug — langs de voedselbank
- Ma 31 aug — KvK Utrecht
- LinkedIn: kortste route naar doelen via bekenden (bv. Jan Smulders → iemand op een school)

---

## Nog open vragen aan Mark
1. #3 "gratis" (16:50) — op welke pagina miste je dat het gratis is? (home / toets-scherm / prijzen)

## Toelichtingen die Mark al gaf
- #1 (broer van de bank) = AI-vraag zwaartekracht → veiligheids-guardrail. ✔️
- #2 (moeilijke woorden) = "globaal" fout uitgelegd → definitie-audit. ✔️
