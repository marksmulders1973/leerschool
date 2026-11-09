-- Herinnering koppelcode (9 nov 2026): één keer per ouder; herinnerd_at voorkomt een tweede mail.
-- Zie docs/outreach/KOPPELCODE-HERINNERING-CONCEPT.md. Live toegevoegd 9 nov via SQL.
alter table public.link_codes add column if not exists herinnerd_at timestamptz;
