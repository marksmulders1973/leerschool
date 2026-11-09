// De foutvanger zelf: valt een scherm om, dan gaat er precies één `app_fout` de deur uit.
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";

const gemeld = [];
vi.mock("../utils.js", () => ({ track: (naam, props) => { gemeld.push([naam, props]); return Promise.resolve(true); } }));

import ErrorBoundary, { TESTFOUT_MELDING } from "./ErrorBoundary.jsx";

function Kapot() { return <div>{nietBestaandeNaam.waarde}</div>; } // eslint-disable-line no-undef

let stil;
beforeEach(() => { gemeld.length = 0; sessionStorage.clear(); stil = vi.spyOn(console, "error").mockImplementation(() => {}); });
afterEach(() => { stil.mockRestore(); window.history.replaceState({}, "", "/"); });

describe("ErrorBoundary meldt een omgevallen scherm", () => {
  it("vergeten naam in een scherm → 'Iets ging mis' + één app_fout", () => {
    globalThis.nietBestaandeNaam = undefined; delete globalThis.nietBestaandeNaam;
    render(<ErrorBoundary><Kapot /></ErrorBoundary>);
    expect(screen.getByText("Iets ging mis")).toBeTruthy();
    expect(gemeld.length).toBe(1);
    expect(gemeld[0][0]).toBe("app_fout");
    expect(gemeld[0][1]).toMatchObject({ soort: "ReferenceError", plek: "app" });
    expect(gemeld[0][1].fout).toMatch(/nietBestaandeNaam/);
  });

  it("gewoon scherm → niets gemeld", () => {
    render(<ErrorBoundary><div>alles goed</div></ErrorBoundary>);
    expect(screen.getByText("alles goed")).toBeTruthy();
    expect(gemeld).toEqual([]);
  });

  it("?testfout=1 laat het scherm expres omvallen, herkenbaar aan de melding", () => {
    window.history.replaceState({}, "", "/?testfout=1");
    render(<ErrorBoundary><div>alles goed</div></ErrorBoundary>);
    expect(screen.getByText("Iets ging mis")).toBeTruthy();
    expect(gemeld[0][1].fout).toBe(TESTFOUT_MELDING.slice(0, 60));
    expect(gemeld[0][1].fout.startsWith("testfout")).toBe(true);
  });
});
