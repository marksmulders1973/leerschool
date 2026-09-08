-- 🧹 Bewaartermijn voor de statistiek-tabel (Mark 4 sep 2026: "als heel veel
-- kinderen dit gebruiken, is er dan wel opslag genoeg?").
--
-- WAAROM
-- `events` is de enige tabel zonder natuurlijke bovengrens. Elke sessie schrijft
-- nieuwe rijen, voor altijd. learn_progress groeit juist NIET mee met hoe vaak
-- een kind oefent, want die doet een upsert op (owner_key, pad, stap) — een kind
-- dat dezelfde stap tien keer doet, houdt één rij.
--
-- Gemeten op 4 sep 2026:
--   database totaal      31 MB   (gratislaag = 500 MB)
--   events            6,2 MB / 16.648 rijen = 378 bytes per rij
--   learn_progress    496 kB / 1.147 rijen  = 443 bytes per rij, 10,9 per kind
--   alle 345 leerpaden samen: 2.255 stappen → harde bovengrens 1,1 MB per kind
--
-- Projectie: bij 1.000 kinderen die 3x per week oefenen komt events op ~39 MB
-- per maand. Dan is de gratislaag binnen ruim een jaar vol — puur door
-- statistiek, niet door leerwerk.
--
-- HOE
-- Rijen ouder dan 12 maanden worden eerst samengevat naar dagtotalen en daarna
-- verwijderd. Trendlijnen blijven (hoeveel, wat, via welke bron), alleen de
-- losse regels verdwijnen. Gemeten compressie bij proefdraaien: 3.431 events →
-- 784 samenvattingsrijen, factor 4,4.
--
-- Draait als pg_cron-taak in de database, niet als functie in api/: daar is de
-- hostinggrens al bereikt (max 12 gebundelde functies, er staan 22 bestanden).
-- Zie reference_studiebol_infra.
--
-- `path` bewust niet in de samenvatting: 68 unieke paden zou hem bijna zo groot
-- maken als het origineel, en welke pagina iemand ruim een jaar geleden opende
-- is geen sturingsinformatie meer. Naam en bron wél — die voeden het
-- maand-in-cijfers-blok van het dagrapport.
--
-- Stand bij aanmaken: oudste event is 4 juni 2026, dus er valt nog niets weg.
-- De taak staat klaar voor wanneer het wél nodig is.

create table if not exists public.events_dagelijks (
  dag             date    not null,
  name            text    not null,
  -- Let op: mag niet null zijn, want het zit in de sleutel. Heel veel events
  -- hebben geen bron (direct verkeer). Bij het proefdraaien klapte de functie
  -- hierop — zonder die test was de eerste echte run 's nachts stil gefaald.
  source          text    not null default '',
  aantal          integer not null,
  unieke_sessies  integer not null,
  primary key (dag, name, source)
);

comment on table public.events_dagelijks is
  'Dagtotalen van opgeruimde events (ouder dan 12 maanden). Gevuld door events_opschonen(); de losse rijen in events zijn dan verwijderd.';

-- Interne statistiek: alleen de service-role mag hierbij, dus RLS aan zonder
-- policies.
alter table public.events_dagelijks enable row level security;

create or replace function public.events_opschonen(bewaar_maanden integer default 12)
returns table (samengevat integer, verwijderd integer)
language plpgsql
security definer
set search_path = public
as $$
declare
  grens timestamptz;
  n_sam integer := 0;
  n_del integer := 0;
begin
  -- Afronden op een hele dag, zodat een dag nooit half verwerkt wordt: anders
  -- zou een volgende run dezelfde dag nóg eens samenvatten.
  grens := date_trunc('day', now() - make_interval(months => bewaar_maanden));

  with samenvatting as (
    select created_at::date as dag,
           name,
           coalesce(source, '') as source,
           count(*)::integer as aantal,
           count(distinct session)::integer as unieke_sessies
    from public.events
    where created_at < grens
    group by 1, 2, 3
  ), ingevoegd as (
    insert into public.events_dagelijks (dag, name, source, aantal, unieke_sessies)
    select dag, name, source, aantal, unieke_sessies from samenvatting
    on conflict (dag, name, source) do update
      set aantal = public.events_dagelijks.aantal + excluded.aantal,
          unieke_sessies = greatest(public.events_dagelijks.unieke_sessies, excluded.unieke_sessies)
    returning 1
  )
  select count(*)::integer into n_sam from ingevoegd;

  delete from public.events where created_at < grens;
  get diagnostics n_del = row_count;

  return query select n_sam, n_del;
end;
$$;

comment on function public.events_opschonen(integer) is
  'Vat events ouder dan N maanden samen in events_dagelijks en verwijdert ze daarna. Eén transactie: of allebei, of geen van beide.';

revoke all on function public.events_opschonen(integer) from public, anon, authenticated;

-- Maandelijks, de 1e om 03:15 — na de maandwissel, zodat het
-- maand-in-cijfers-blok van het dagrapport zijn vergelijking al gemaakt heeft.
select cron.unschedule('events-opschonen')
where exists (select 1 from cron.job where jobname = 'events-opschonen');

select cron.schedule(
  'events-opschonen',
  '15 3 1 * *',
  $$select public.events_opschonen(12)$$
);
