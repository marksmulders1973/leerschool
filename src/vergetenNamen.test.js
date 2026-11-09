// De poort scripts/check-vergeten-namen.mjs draait vóór elke build. Hier: vangt hij wat hij moet vangen,
// en laat hij gewone code met rust?
import { describe, it, expect } from "vitest";
import { vindVergetenNamen } from "../scripts/check-vergeten-namen.mjs";

const namen = (code) => vindVergetenNamen(code).map((v) => v.naam);

describe("poort: vergeten namen", () => {
  it("een hook zonder import (de fout van 6 nov in PakketUitleg)", () => {
    const code = `import { useState } from "react";
export default function Pakket({ open }) {
  const sub = useSubscription();
  const [x] = useState(0);
  return open ? sub.plan + x : null;
}`;
    expect(vindVergetenNamen(code)).toEqual([{ naam: "useSubscription", regel: 3 }]);
  });

  it("weggehaalde state die nog gebruikt wordt (de fout in de leerpaden-hub)", () => {
    const code = `export function Lijst({ vakken }) {
  return vakken.map((v) => <button key={v} onClick={() => toggleSubject(v)}>{expandedSubjects.has(v) ? "open" : "dicht"}</button>);
}`;
    expect(namen(code).sort()).toEqual(["expandedSubjects", "toggleSubject"]);
  });

  it("een component in JSX zonder import", () => {
    expect(namen(`export const A = () => <div><Knop label="x" /></div>;`)).toEqual(["Knop"]);
  });

  it("hangt niet af van de Node-versie: WebSocket en Buffer zijn bekend, een eigen verzinsel op globalThis niet", () => {
    // 9 nov 2026: Node 24 kent WebSocket zelf, Node 20 (de testronde op GitHub) niet → daar faalde de poort.
    globalThis.__alleenInDezeNode = 1;
    try {
      expect(namen(`export const s = () => new WebSocket("wss://x"); export const b = Buffer.from("a"); export const c = structuredClone({});`)).toEqual([]);
      expect(namen(`export const x = __alleenInDezeNode + 1;`)).toEqual(["__alleenInDezeNode"]);
    } finally { delete globalThis.__alleenInDezeNode; }
  });

  it("gewone code: imports, parameters, browser-namen en html-tags zijn geen fout", () => {
    const code = `import React, { useEffect } from "react";
import { track as meet } from "./utils.js";
const KEY = "k";
export function Goed({ naam, ...rest }) {
  useEffect(() => { try { localStorage.setItem(KEY, naam); window.dispatchEvent(new CustomEvent("x")); } catch (e) { console.log(e); } }, [naam]);
  const [a, { b = 2 } = {}] = [1];
  for (const k of Object.keys(rest)) meet(k, a + b);
  return <section onClick={() => fetch("/x").then((r) => r.json())}>{typeof navigator !== "undefined" && navigator.onLine ? "ja" : "nee"}</section>;
}`;
    expect(namen(code)).toEqual([]);
  });
});
