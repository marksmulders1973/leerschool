---
name: Git workflow — commit en push altijd zelf doen
description: Na code-wijzigingen aan Studiebol (of andere repos van Mark) automatisch committen en pushen zonder om bevestiging te vragen.
type: feedback
originSessionId: 8f2cd49a-0b67-406c-a7b5-7990ceaba756
---
**Regel:** Na een succesvolle code-wijziging in een git-repo van Mark, direct zelf `git add` → `git commit` → `git push` uitvoeren. Niet vragen "wil je dat ik het commit/push?".

**Why:** Mark gaf 2026-04-24 expliciete doorlopende toestemming ("nu en voortaan altijd zelf pushen"). Hij werkt solo op private repos (o.a. `marksmulders1973/leerschool`), Vercel deployt automatisch vanaf `main`. Bevestiging vragen is voor hem friction zonder waarde.

**How to apply:**
- Alleen bij **afgeronde en werkende** wijzigingen pushen. Niet bij half werk of bij falende builds/tests.
- Commit-messages: beschrijf het **waarom**, kort en concreet (geen one-word messages).
- Nooit `--no-verify` of hooks skippen tenzij hij er zelf om vraagt.
- Nooit force-pushen naar `main` zonder expliciet verzoek.
- Als er meerdere onafhankelijke wijzigingen zijn, overweeg aparte commits per logische eenheid — maar bundel liever dan over-splitten (hij heeft geen review-proces dat kleine commits nodig maakt).
- Na push: Vercel-deploy duurt ~2 min; als de wijziging tijdkritisch is, noem de verwachte deploy-tijd.
- Default branch is `main`; er is geen feature-branch-flow.

**Uitzondering:** bij risicovolle acties (force-push, branch-delete, package-upgrade die breaking kan zijn, secrets-gerelateerde commits) wél eerst bevestigen. De doorlopende toestemming dekt "gewone" code-wijzigingen en bugfixes.
