# Kliktest-scripts steuntaal (Nieuwkomer-pakket)

Gemaakt 24 sep 2026 door vier agents (één per steuntaal) op verzoek van Mark:
"loop de vertaling na met agents voor elke taal — is elk woord/zin te vertalen,
werkt het klikken, is het duidelijk?"

Draai ze vanuit de projectmap (anders wordt playwright niet gevonden):

    node scripts/agenttests/steuntest-ar.mjs      # Arabisch (meest complete script)
    node scripts/agenttests/steuntest-uk.mjs      # Oekraïens
    node scripts/agenttests/steuntest-en.mjs      # Engels, optioneel <pad-id> als argument
    node scripts/agenttests/steuntest-tr.mjs      # Turks, test ook de code-ingang

Ze draaien tegen de LIVE site en klikken via JS (locator.click wordt nooit "stable").
Logs en screenshots gaan naar de scratchpad van de sessie.
