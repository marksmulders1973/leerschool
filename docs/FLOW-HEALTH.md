# 🩺 Flow-Health — "LIVE" betekent niks tot de data het bewijst

> Mark, 29 aug 2026: twee flows die de docs "LIVE" noemden (partnercode-activatie
> + ouder→kind klaargezet) bleken dood/kapot toen hij ze toevallig zelf tegenkwam.
> Les: **we controleerden nooit of er echt data doorheen komt.** Een banner die
> "getoond" logt lijkt te leven, maar één laag dieper stond alles op 0.
>
> Dit document is het vangnet: per binding-flow één **assertie** — welk event of
> welke tabel-rij MOET groeien als de flow leeft. Draai deze checks in **élk
> dagrapport**. Staat een "LIVE"-flow structureel op 0 → 🔴 ALARM, niet wegpoetsen
> als "lage conversie". De database is de waarheid.

## Regels
- Een flow is pas "LIVE" als zijn assertie de afgelopen 30 dagen **> 0** is (buiten
  eigen test-uids). Anders: status "geclaimd, onbewezen".
- 0 over een periode waarin er wél instroom was (scans/koppelingen/bezoeken) = 🔴 bug,
  niet "niemand gebruikt het". Onderzoek de flow live vóór je 'm LIVE noemt.
- Nieuwe binding-flow bouwen? → hier een rij toevoegen mét de assertie-query.
  Klaar = de assertie is een keer groen geweest in productie.

## Binding-flows + nul-alarm-asserties

| Flow | "Leeft" als > 0 | Bron | Alarm bij 0 terwijl… |
|------|-----------------|------|----------------------|
| Partnercode-activatie | `partner_actief` (7d) | events | er `partner_bezoek` was |
| Partner-banner-interactie | `partner_welkom_vraag` OF `partner_welkom_oefenen`/`_ouder` (7d) | events | er `partner_welkom_toon` was |
| Ouder→kind klaarzetten | rijen in `ouder_klaargezet` OF `volwassen_zet_klaar` (7d) | tabel/events | er `parent_child_links.verified` bestaat |
| Kind ziet klaargezet | `voor_jou_klaargezet(<naam>)` geeft rijen | RPC | er ouder_klaargezet-rijen voor die link zijn |
| Kind vinkt af | `klaargezet_gedaan` (7d) | events | er klaargezette items zijn |
| Leerkracht→leerling | rijen in `leraar_klaargezet` (7d) | tabel | er `leraar_leerling_links.verified` bestaat |
| E-mail-capture | nieuwe `upgrade_waitlist`/`learn_path_waitlist` (7d) | tabel | er bezoek op /oefenpakket etc. was |
| Kwartiercheck-lead | check-afronding → mail-event (7d) | events | er checks gestart zijn |

## De assertie-query (draai in élk dagrapport)

```sql
-- Elke rij met status 🔴 = "LIVE"-flow die 0 produceert terwijl er wél instroom was.
with e as (
  select name, count(*) n
  from events_echt
  where created_at >= now() - interval '7 days'
  group by name
)
select
  'partnercode-activatie' as flow,
  coalesce((select n from e where name='partner_actief'),0)        as leeft,
  coalesce((select n from e where name='partner_bezoek'),0)        as instroom
union all select 'partner-banner-interactie',
  coalesce((select n from e where name='partner_welkom_vraag'),0)
   + coalesce((select n from e where name='partner_welkom_oefenen'),0)
   + coalesce((select n from e where name='partner_welkom_ouder'),0),
  coalesce((select n from e where name='partner_welkom_toon'),0)
union all select 'ouder->kind klaarzetten',
  (select count(*) from ouder_klaargezet),
  (select count(*) from parent_child_links where verified)
union all select 'leerkracht->leerling',
  (select count(*) from leraar_klaargezet),
  (select count(*) from leraar_leerling_links where verified);
-- interpretatie: leeft=0 EN instroom>0  → 🔴 ALARM (flow kapot of onbereikbaar)
--                leeft>0                 → 🟢 bewezen levend
--                leeft=0 EN instroom=0   → 🟡 nog geen data (niet claimen als LIVE)
```

## Stand bij aanmaak (29 aug 2026 — nulmeting)
- 🔴 **partnercode-activatie**: `partner_actief` = 0 ooit (sinds 13 jul), terwijl 74 scans.
  → mechanisme rendert/werkt op de home (live geverifieerd), maar wordt niet bereikt:
  3-vraagjes pas 28 aug live + terugkerende apparaten hervatten naar /mijn (geen banner).
- 🔴 **partner-banner-interactie**: 0 kliks/vragen bij 43× getoond (grotendeels vóór 28 aug;
  de in-banner-vraagjes bestonden toen nog niet).
- 🟢/🟡 **ouder→kind**: schrijf-kant bewezen (7× `volwassen_zet_klaar`, 4 verified links),
  tabel nu 0 (testrijen weggetoggled). Lees/afvink-kant: nog live te verifiëren cross-device.
- 🟡 **leerkracht→leerling**: 0 rijen — nog niet bewezen in productie.
