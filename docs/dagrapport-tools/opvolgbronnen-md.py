#!/usr/bin/env python3
"""Zet een JSON-array met rijen uit de Supabase-tabel `opvolgbronnen` om naar docs/OPVOLGBRONNEN.md.

Gebruik (vanuit de repo-map):
    python docs/dagrapport-tools/opvolgbronnen-md.py < rijen.json > docs/OPVOLGBRONNEN.md

`rijen.json` = resultaat van `select * from opvolgbronnen` (bv. via de Supabase-MCP,
weggeschreven naar een bestand). Sortering: volgende_opvolging oplopend (NULL onderaan).

Cadans-regel (Mark, 11 sep 2026): drie vaste opvolgmomenten per jaar, altijd met nieuws:
  1 sep (nieuw schooljaar) · 1 dec (Doorstroomtoets over 8 weken) · 1 mei (voorlopig schooladvies groep 7).
volgende_opvolging = eerste vaste moment >= 60 dagen na laatste_contact.
status 'nee' -> 2027-09-01 (nieuw schooljaar, opnieuw proberen). Specifieke afspraken gaan voor.
"""
import json
import sys
from collections import Counter
from datetime import date

rows = json.load(sys.stdin)


def s(v):
    if v is None:
        return ''
    return str(v).replace('|', '/').replace('\n', ' ')


def sortkey(r):
    v = r.get('volgende_opvolging')
    return (v is None, v or '', (r.get('organisatie') or '').lower())


rows.sort(key=sortkey)
vandaag = date.today().isoformat()
per_status = Counter(r.get('status') for r in rows)
per_type = Counter(r.get('type') for r in rows)
per_moment = Counter((r.get('volgende_opvolging') or 'geen') for r in rows)

out = []
out.append('# 📇 Opvolgbronnen — alle organisaties die we kennen, met opvolgdatum')
out.append('')
out.append('*Gegenereerd %s uit de Supabase-tabel `opvolgbronnen` (project studiebol). Bron van waarheid = de tabel; dit bestand is de leesbare export. Vernieuwen: `python docs/dagrapport-tools/opvolgbronnen-md.py < rijen.json > docs/OPVOLGBRONNEN.md`.*' % vandaag)
out.append('')
out.append('## Cadans-regel (Mark, 11 sep 2026)')
out.append('')
out.append('Drie vaste opvolgmomenten per jaar, altijd mét nieuws (nooit een kale herinnering):')
out.append('')
out.append('| Moment | Waarom | Wat we dan te melden hebben |')
out.append('|---|---|---|')
out.append('| **1 september** | nieuw schooljaar | nieuwe functies van de zomer, groep-8-start, flyer-voorraad |')
out.append('| **1 december** | Doorstroomtoets over 8 weken | Kwartiercheck, aftelweken, examensimulatie |')
out.append('| **1 mei** | voorlopig schooladvies groep 7 | kijkmoment groep 7, zomerplan |')
out.append('')
out.append('`volgende_opvolging` = eerste vaste moment dat minstens 60 dagen na `laatste_contact` ligt. Status `nee` → 1 september 2027 (nieuw schooljaar, opnieuw proberen). Status `partner` → zelfde cadans, met een succes-update. Specifieke afspraken (bv. Kinderhulp november, Apeldoorn oktober) gaan vóór de cadans. Nieuwe organisaties komen erbij via de intermediair-radar (e-maillijst, intranet-verwijzers, oefenpakket-aanvragen).')
out.append('')
out.append('## Tellingen')
out.append('')
out.append('**Totaal: %d organisaties.**' % len(rows))
out.append('')
out.append('| Status | Aantal |')
out.append('|---|---|')
for k, v in sorted(per_status.items(), key=lambda x: -x[1]):
    out.append('| %s | %d |' % (k, v))
out.append('')
out.append('| Type | Aantal |')
out.append('|---|---|')
for k, v in sorted(per_type.items(), key=lambda x: -x[1]):
    out.append('| %s | %d |' % (k, v))
out.append('')
out.append('| Volgend opvolgmoment | Aantal |')
out.append('|---|---|')
for k, v in sorted(per_moment.items()):
    out.append('| %s | %d |' % (k, v))
out.append('')
out.append('## Eerstvolgende opvolgingen (specifieke afspraken vóór de cadans)')
out.append('')
out.append('| Datum | Organisatie | Status | Reden |')
out.append('|---|---|---|---|')
for r in rows:
    if r.get('volgende_opvolging') and r['volgende_opvolging'] < '2026-12-01':
        out.append('| %s | %s | %s | %s |' % (s(r['volgende_opvolging']), s(r['organisatie']), s(r['status']), s(r.get('opvolg_reden'))))
out.append('')
out.append('## Volledige lijst (gesorteerd op volgende opvolging)')
out.append('')
out.append('| Volgende | Organisatie | Type | Plaats | Contact | E-mail | Code | Binnen via | Status | Laatste contact | Reden | Notities |')
out.append('|---|---|---|---|---|---|---|---|---|---|---|---|')
for r in rows:
    out.append('| %s |' % ' | '.join(s(r.get(k)) for k in ['volgende_opvolging', 'organisatie', 'type', 'plaats', 'contact_naam', 'email', 'code', 'hoe_binnen', 'status', 'laatste_contact', 'opvolg_reden', 'notities']))
out.append('')
sys.stdout.write('\n'.join(out) + '\n')
