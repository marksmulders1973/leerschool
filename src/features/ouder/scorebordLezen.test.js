// 🔒 Scorebord dichtzetten, stap 1 (9 nov 2026): de app leest via de leesfuncties, met de oude query als
// terugval. Na stap 2 (kolommen dicht) geeft de oude query een fout; ook dat mag niets laten omvallen.
import { describe, it, expect, vi, beforeEach } from "vitest";

const staat = { rpc: {}, tabel: { data: [], error: null }, rpcAanroepen: [], tabelAanroepen: [] };

function keten(naam) {
  const stappen = [];
  const q = {
    select: (k, o) => { stappen.push(["select", k, o]); return q; },
    eq: (k, v) => { stappen.push(["eq", k, v]); return q; },
    is: (k, v) => { stappen.push(["is", k, v]); return q; },
    ilike: (k, v) => { stappen.push(["ilike", k, v]); return q; },
    order: () => q,
    limit: () => q,
    then: (ok, mis) => { staat.tabelAanroepen.push({ naam, stappen }); return Promise.resolve(staat.tabel).then(ok, mis); },
  };
  return q;
}

vi.mock("../../supabase.js", () => ({
  default: {
    rpc: async (naam, args) => { staat.rpcAanroepen.push([naam, args]); return staat.rpc[naam] || { data: null, error: { message: "bestaat niet" } }; },
    from: (naam) => keten(naam),
  },
}));
vi.mock("../../shared/koppeling.js", () => ({ metLinkId: (r) => r }));

import { haalScoresVoorKind } from "./kindData.js";
import { loadLeaderboardForPlayer } from "../../data/repos/leaderboardRepo.js";

const LINK = { id: "11111111-1111-4111-8111-111111111111", child_name: "Testkind", child_user_id: null };

beforeEach(() => { staat.rpc = {}; staat.tabel = { data: [], error: null }; staat.rpcAanroepen = []; staat.tabelAanroepen = []; });

describe("ouder-overzicht leest scores via scores_voor_koppeling", () => {
  it("functie geeft rijen → die worden gebruikt, de tabel wordt niet meer gelezen", async () => {
    staat.rpc.scores_voor_koppeling = { data: [{ id: 1, subject: "rekenen" }], error: null };
    const r = await haalScoresVoorKind(LINK, { select: "id, subject", subject: "cito", limit: 100 });
    expect(r).toEqual([{ id: 1, subject: "rekenen" }]);
    expect(staat.rpcAanroepen).toEqual([["scores_voor_koppeling", { p_link_id: LINK.id, p_subject: "cito", p_limit: 100, p_oud: true }]]);
    expect(staat.tabelAanroepen).toEqual([]);
  });

  it("functie ontbreekt of geeft niets → oude query als terugval (stap 1 verandert niets)", async () => {
    staat.tabel = { data: [{ id: 7, completed_at: "2026-11-01T10:00:00Z" }], error: null };
    const r = await haalScoresVoorKind(LINK, { select: "id, completed_at" });
    expect(r.map((x) => x.id)).toEqual([7]);
    expect(staat.tabelAanroepen.length).toBe(2); // link_id + oude rijen op naam
  });

  it("na stap 2: functie leeg én tabel weigert de kolom → gewoon een lege lijst, geen fout", async () => {
    staat.rpc.scores_voor_koppeling = { data: [], error: null };
    staat.tabel = { data: null, error: { code: "42501", message: "permission denied for table leaderboard" } };
    await expect(haalScoresVoorKind(LINK, { select: "id" })).resolves.toEqual([]);
  });
});

describe("eigen scores ophalen (sync) via mijn_scores", () => {
  it("eigen rijen uit de functie (mét link_id), rijen op naam zonder link_id in de kolomlijst", async () => {
    staat.rpc.mijn_scores = { data: [{ id: 1, player_name: "Testkind", link_id: LINK.id }], error: null };
    staat.tabel = { data: [{ id: 2, player_name: "testkind" }], error: null };
    const r = await loadLeaderboardForPlayer({ userId: "u1", playerName: "Testkind", limit: 500 });
    expect(r.map((x) => x.id).sort()).toEqual([1, 2]);
    expect(staat.rpcAanroepen).toEqual([["mijn_scores", { p_limit: 500 }]]);
    expect(staat.tabelAanroepen.length).toBe(1);
    const select = staat.tabelAanroepen[0].stappen.find((s) => s[0] === "select")[1];
    expect(select).not.toMatch(/link_id|user_id/);
    expect(staat.tabelAanroepen[0].stappen.some((s) => s[0] === "eq" && s[1] === "user_id")).toBe(false);
  });

  it("functie ontbreekt → oude query op user_id als terugval", async () => {
    staat.tabel = { data: [{ id: 3 }], error: null };
    const r = await loadLeaderboardForPlayer({ userId: "u1", playerName: "", limit: 10 });
    expect(r).toEqual([{ id: 3 }]);
    expect(staat.tabelAanroepen[0].stappen.some((s) => s[0] === "eq" && s[1] === "user_id")).toBe(true);
  });
});
