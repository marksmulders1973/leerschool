-- Bug-jacht 7/7: dagen zonder bruikbare nieuws-vraag krijgen een marker-rij
-- (vraag = null) zodat de AI-generatie max 1x per dag draait i.p.v. bij elk
-- bezoek opnieuw (onbegrensde AI-kosten). Zie api/actuele-vraag.js.
alter table actuele_vraag alter column vraag drop not null;
