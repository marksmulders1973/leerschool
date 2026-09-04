# 🔗 Koppeling — bekende grenzen

Bijgewerkt: 4 september 2026.

Een rij in `learn_progress`, `leaderboard` en `topic_mastery` draagt **één**
`link_id`. Dat is de identiteit van het kind (zie `src/shared/koppeling.js`).
Daaruit volgen een paar grenzen die je moet kennen voordat je hier iets aan
verandert.

## 1. Ouder gaat vóór leerkracht

`metLinkId()` pakt eerst de ouder-koppeling en valt alleen terug op de
leerkracht-koppeling als die er niet is.

**Gevolg:** is een kind zowel thuis als op school gekoppeld, dan dragen zijn
rijen het *ouder*-link_id. De leerkracht ziet dat werk dan niet in zijn
overzicht, ook al staat de les door hem klaargezet.

Waarom zo gelaten: de ouder-koppeling hoort bij één kind in één gezin en is
daarmee de persoonlijkste. Twee link_ids per rij zou een schemawijziging
vragen (koppeltabel), en dat is niet nodig zolang de school-doelgroep vooral
uit leerlingen zónder ouder-koppeling bestaat.

**Waaraan je het herkent:** een leerkracht meldt dat een leerling wél werkt maar
op 0 blijft staan, en die leerling blijkt thuis ook gekoppeld.

**Als het gefixt moet worden:** een aparte tabel `progress_links`
(progress_id → link_id, meerdere per rij), of `link_ids uuid[]` op de rij met
een GIN-index. Beide raken elke schrijfweg, dus niet terloops doen.

## 2. Alleen rijen mét link_id zijn zichtbaar voor de volwassene

Stand 4 sep 2026: van de 1147 rijen in `learn_progress` dragen er 5 een
`link_id` — allemaal van na de koppeling-stap-2 van 2 september.

Oudere rijen worden opgevangen door de legacy-tak in
`haalLeerpadVoortgangVoorKind()` (link_id is null + naam, en user_id als de
koppeling die kent). Die tak leunt op naam en kan dus naamgenoten meenemen
wanneer de koppeling geen `child_user_id` heeft. Dat was al zo bij de scores
en is bewust niet strenger gemaakt: strenger betekent geschiedenis kwijt.

`koppel_mijn_data` hangt bij het claimen de eigen sessie-geschiedenis alsnog
aan de koppeling — maar alleen voor de ouder-kant, niet voor de leerkracht.

## 3. Het handmatige vinkje blijft bestaan naast de gemeten voortgang

`ouder_klaargezet.gedaan` en `leraar_klaargezet.gedaan` zijn vinkjes die het
kind zelf aantikt. Kinderen doen dat vrijwel nooit, dus sinds 4 sep 2026 wordt
de voortgang gemeten uit `learn_progress` (zie `src/shared/ui/LesVoortgang.jsx`).

Het vinkje telt nog steeds als "af" wanneer het aanstaat — een kind dat het wél
aantikt, moet niet ineens weer "bezig" te zien krijgen.

## 4. Klassengrootte: geen cap, wel getest tot 2 — schaalt op papier tot 30+

Voor leerkrachten zit er géén maximum op het aantal gekoppelde leerlingen (de
ouder-kant heeft `MAX_KINDEREN = 3`). `haalLeerlingOverzicht()` doet twee
`.in(link_id, [...])`-queries en het scherm rendert één rij per leerling —
dat is bij 28-32 leerlingen (Nederlandse praktijk: gemiddeld 23, geen wettelijk
maximum, veel scholen hanteren 28) geen probleem. Wél nog nooit met een echte
klas getest; het zwaarste punt zal `LesDetail` zijn dat per opengeklapte les
het leerpad lazy laadt (~50 kB) — acceptabel, want je klapt er één tegelijk open.

## 5. `topic_mastery` heeft dezelfde RLS-regel als `learn_progress` had — en dat is oké

`tm_select_own_or_legacy` laat een ingelogde gebruiker alleen eigen rijen zien.
Alleen `api/send-ouder-rapport.js` leest die tabel voor een ander kind, en die
draait met de service-role-key (omzeilt RLS). Ouder- en leerkracht-schermen
lezen mastery niet. Gaat dat ooit veranderen, dan is hier dezelfde
koppeling-policy nodig als in `20260904_ouder_leest_learn_progress.sql`.
