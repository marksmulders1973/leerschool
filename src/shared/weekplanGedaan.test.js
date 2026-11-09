// 📅 Weekplanner — wanneer telt een dag als gedaan (herzien 9 nov 2026).
// Het kind-toestel praat met de server via twee RPC's; die zijn hier nagebootst.
import { describe, it, expect, vi, beforeEach } from "vitest";

const L1 = "11111111-1111-4111-8111-111111111111";
const L2 = "22222222-2222-4222-8222-222222222222";
const server = { rijen: [], gedaan: [] };

vi.mock("../supabase.js", () => ({
  default: {
    rpc: async (naam, args) => {
      if (naam === "weekplan_voor_kind") return { data: server.rijen.filter((r) => r.link_id === args.p_link_id), error: null };
      if (naam === "weekplan_gedaan") {
        server.gedaan.push(args.p_id);
        const r = server.rijen.find((x) => x.id === args.p_id);
        if (r) r.gedaan = true;
        return { data: { ok: !!r }, error: null };
      }
      return { data: null, error: null };
    },
  },
}));
vi.mock("../utils.js", () => ({ track: () => {} }));

import { haalWeekplanVoorKind, werkPlanBij, lesAfVoorPlan, startsetRondjeKlaar, kwartierVolVoorPlan, vandaagIso } from "./weekplan.js";
import { addSeconds } from "./dailyGoal.js";
import { meldLeermoment } from "./leermoment.js";

const NAAM = "Testkind Noor";
const vandaag = vandaagIso();
const koppel = (ouders) => localStorage.setItem("lk_koppelingen", JSON.stringify({
  [NAAM.toLowerCase()]: { ouder: ouders[ouders.length - 1], ouders },
}));

beforeEach(() => {
  localStorage.clear();
  server.rijen = [];
  server.gedaan = [];
  localStorage.setItem("ls_user", JSON.stringify({ name: NAAM }));
});

describe("weekplanner — gedaan", () => {
  it("twee ouders: het kind ziet beide plannen, niet alleen dat van de laatste koppeling", async () => {
    koppel([{ link_id: L1 }, { link_id: L2 }]);
    server.rijen = [
      { id: "a", link_id: L1, dag: vandaag, soort: "les", path_id: "breuken-po", gedaan: false },
      { id: "b", link_id: L2, dag: vandaag, soort: "charley", path_id: null, gedaan: false },
    ];
    const rijen = await haalWeekplanVoorKind(NAAM);
    expect(rijen.map((r) => r.id).sort()).toEqual(["a", "b"]);
  });

  it("een lange les telt na een kwartier oefenen, ook als het leerpad niet af is", async () => {
    koppel([{ link_id: L1 }]);
    server.rijen = [{ id: "a", link_id: L1, dag: vandaag, soort: "les", path_id: "maten-eenheden", gedaan: false }];
    expect(await werkPlanBij(NAAM, await haalWeekplanVoorKind(NAAM))).toBe(false); // nog niets gedaan
    expect(server.gedaan).toEqual([]);
    meldLeermoment();
    addSeconds(900);
    await kwartierVolVoorPlan();
    expect(server.gedaan).toContain("a");
  });

  it("inhalen: de ouder zet de dag klaar nadat het kwartier al vol was", async () => {
    koppel([{ link_id: L1 }]);
    meldLeermoment();
    addSeconds(900); // kwartier vol, er staat nog niets klaar
    await kwartierVolVoorPlan();
    expect(server.gedaan).toEqual([]);
    server.rijen = [{ id: "c", link_id: L1, dag: vandaag, soort: "charley", path_id: null, gedaan: false }];
    expect(await werkPlanBij(NAAM, await haalWeekplanVoorKind(NAAM))).toBe(true); // de kaart op /mijn doet dit bij openen
    expect(server.gedaan).toEqual(["c"]);
  });

  it("broer of zus op dezelfde tablet: het kwartier van de een is niet het vinkje van de ander", async () => {
    koppel([{ link_id: L1 }]);
    server.rijen = [{ id: "c", link_id: L1, dag: vandaag, soort: "charley", path_id: null, gedaan: false }];
    localStorage.setItem("ls_user", JSON.stringify({ name: "Testkind Broer" }));
    meldLeermoment();
    addSeconds(900);
    expect(await werkPlanBij(NAAM, await haalWeekplanVoorKind(NAAM))).toBe(false);
    expect(server.gedaan).toEqual([]);
  });

  it("de eerste 20 vragen: telt zodra het klaargezette rondje af is, ook binnen het kwartier", async () => {
    koppel([{ link_id: L1 }]);
    server.rijen = [{ id: "s", link_id: L1, dag: vandaag, soort: "les", path_id: "startset:3|rekenen", gedaan: false }];
    await startsetRondjeKlaar(NAAM, "3|taal"); // een ander vak telt niet
    expect(server.gedaan).toEqual([]);
    await startsetRondjeKlaar(NAAM, "3|rekenen");
    expect(server.gedaan).toEqual(["s"]);
  });

  it("les af: alleen de les van vandaag, en morgen blijft open", async () => {
    koppel([{ link_id: L1 }]);
    const morgen = new Date(); morgen.setDate(morgen.getDate() + 1);
    server.rijen = [
      { id: "v", link_id: L1, dag: vandaag, soort: "les", path_id: "breuken-po", gedaan: false },
      { id: "m", link_id: L1, dag: vandaagIso(morgen), soort: "les", path_id: "breuken-po", gedaan: false },
    ];
    await lesAfVoorPlan(NAAM, "procenten-po");
    expect(server.gedaan).toEqual([]);
    await lesAfVoorPlan(NAAM, "breuken-po");
    expect(server.gedaan).toEqual(["v"]);
  });
});
