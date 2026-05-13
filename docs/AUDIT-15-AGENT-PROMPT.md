# 15-agent-audit prompt-template

Gebruik bij elke 6-8-weekse audit (zie `CLAUDE.md` → "15-agent-audit"). Mark levert deze prompt, Claude voert uit volgens onderstaand stappenplan.

## Mark's prompt-tekst (geef letterlijk aan Claude)

```
# LEERKWARTIER — MASTER MULTI-AGENT AUDIT PROMPT

Je bent niet één AI-assistent maar een elite-team van 15 gespecialiseerde
senior agents die samenwerken aan een volledige audit van Leerkwartier.

Leerkwartier bestaat al. Werkt technisch goed, heeft een sterke .md
contextfile / visie / structuur. Jullie taak is NIET om opnieuw vanaf
nul te ontwerpen.

Jullie taak is om Leerkwartier extreem kritisch te analyseren alsof:
- een investeerder miljoenen wil investeren,
- een concurrent de app probeert te verslaan,
- en een leerling morgen examen heeft.

GEEN oppervlakkige complimenten. GEEN buzzwords. ALLES praktisch toepasbaar.

## Centrale vraag (door alle 15 perspectieven heen)

"Waarom zou een leerling, ouder of school Leerkwartier kiezen boven
ChatGPT, Google, YouTube, Squla, Junior Einstein, WRTS, examenbundels
of gewone bijles?"

## 15 perspectieven

1. Product strategist — positionering, USP, waarom winnen/verliezen
2. SEO & AI-search expert — Google + ChatGPT/Perplexity/Claude/Gemini-verkeer
3. Exam UX/UI expert — snelheid, flow, stress, mobiel
4. Educational scientist — didactiek, retrieval practice, mastery, spaced rep
5. Motivation & gamification — retention loops zonder kinderachtig
6. AI learning systems architect — tutor-kwaliteit, prompts, schaalbaarheid
7. Growth & retention — referral, TikTok, social proof
8. Ouder & docent perspectief — vertrouwen, dashboard, geloofwaardigheid
9. Branding & positioning — modern/slim/Gen-Z-acceptatie
10. Mobile retention — DAU, push, gewoonten
11. Competitive intelligence — Squla/Junior Einstein/WRTS/Examenbundel
12. Student reality check — gedraag als VMBO/HAVO/VWO/groep-8 leerling, eerlijk
13. Technical scalability — performance, AI-kosten, bundle, backend
14. Monetization — freemium/abonnement/ouder/school pricing
15. Brutally honest final reviewer — synthese + score /10

## Output-structuur (vast)

1. Executive summary
2. Grootste problemen
3. Grootste kansen
4. Per agent (kort)
5. Concurrentieanalyse
6. SEO audit
7. UX/UI audit
8. Didactische audit
9. AI audit
10. Growth audit
11. Monetization audit
12. Top 10 quick wins (impact/effort)
13. Lange termijn roadmap
14. Final verdict (score /10)
15. Morgen / 3 maanden / 1 jaar

Concurrenten zijn NIET primair apps maar: uitstelgedrag, TikTok, stress,
verwarring, saaie uitleg, demotivatie, afhaken na fouten.
```

## Claude's uitvoer-stappenplan (intern)

### Stap 1 — Dispatch 4 parallelle research-agents (in ÉÉN message)

Niet 15 agents — te veel overlap + context-kosten. Vier slim geclusterde:

**Agent A: Concurrentie + product**
- WebSearch naar Squla, Junior Einstein, WRTS/StudyGo, ExamenOverzicht, Examenbundel, ChatGPT-gebruik NL leerlingen, Doorstroomtoets-aanbieders (Cito/IEP/Route 8/Dia/AMN).
- Output: concurrentiematrix-tabel × 9 kolommen (prijs/doelgroep/echt-examen/AI/uitleg/mobiel/gratis-tier/USP/zwakte) + 3 marktgaten + 3 bedreigingen + 5 strategie-bullets.

**Agent B: SEO + AI-search**
- WebSearch + WebFetch leerkwartier.app + 5 landing pages.
- Output: SEO-statusrapport + top 10 zoektermen met volume-schatting + AI-search-strategie + 3 dingen om NIET te doen + Cito-cyclus-timing.

**Agent C: Code-audit didactiek + AI-tutor**
- Read `learnPaths/{procentenPo,parabolen,examenEconomie2024T1}.js`, `VraagUitlegPad.jsx`, `LearnPath.jsx`, `LeerpadBot.jsx`, `AITutor.jsx`, `api/tutor-chat.js`, `_guard.js`, `adaptiveStore.js`, `spacedRepetition.js`.
- Output: per-onderdeel WERKT/DEELS/NIET met file:line + top 5 didactische zwaktes + top 5 AI-tutor zwaktes + 3 quick wins.

**Agent D: Code-audit performance + scalability**
- Read `vite.config.js`, `pathLoaders.js`, `examenLookup.js`, `LearnPath.jsx`, `LearnPathsHub.jsx`, `_guard.js`, `tutor-chat.js`, `generate-questions.js`, `sw.js`, `vercel.json`, `supabase/migrations/*`, `src/supabase.js`.
- Output: performance-status-tabel × 15 onderdelen + top 5 schaalbaarheids-risico's + top 5 quick-wins + AI-cost-projectie (100/1000/10000 DAU) + 3 dingen NU kapot.

### Stap 2 — Synthese zelf

Schrijf alle 15 perspectieven (niet alleen de 4 agent-outputs) met agent-rapporten + memory + codebase-kennis als basis. Output volgens vaste structuur (15 secties). Hard cijfer geven.

### Stap 3 — Bevindingen opslaan

**Niet in een apart audit-document.** Schrijf direct in `docs/AUTONOOM-BACKLOG.md` als nieuwe **Sprint-0** sectie bovenaan met categorieën:
- Audit-instant-fixes (< 1 uur werk per item)
- Audit-1-week-werk
- Audit-content-verbeteringen
- Audit-AI-tutor-fixes
- Audit-architectuur-tikbommen
- Audit-monetization-blokkers
- Audit-SEO-content-uitbreidingen
- Audit-growth-loops

Per actie: file:line waar mogelijk, effort-schatting, impact-categorie.

### Stap 4 — Memory update

- **Niet** opslaan: de audit-bevindingen zelf (staan in backlog).
- **Wel** opslaan: nieuwe strategische beslissingen (bv. paywall-prijs-keuze, positionering-keuze) als feedback-memory.
- Update `project_studiebol_review_cadens.md` met audit-datum + score + 3 belangrijkste bevindingen.

### Stap 5 — Klaar-voor-gebruik-signaal

Eindig met:
- Aantal commits gepusht
- Score /10
- 3 concrete next-actions met effort
- "Klaar voor gebruik" — Mark kan in browser/code testen.

## Geleerde lessen (update bij elke audit)

### 2026-05-13 (1e audit)
- Score: **6.0/10** — fundering 9, executie 3.
- 3 instant fixes (~3 uur werk) = QW1 (verklap-bug `defaultOpen=false`) + QW2 (adaptief op alle checks) + QW6 (daily cost-cap AI).
- Mark moet stoppen met nieuwe content tot Sprint-0 op groen.
- 4 parallelle research-agents werkten goed; output ~5000 woorden bruikbare data.
- Synthese-output: ~3000 woorden gestructureerd rapport in chat.
