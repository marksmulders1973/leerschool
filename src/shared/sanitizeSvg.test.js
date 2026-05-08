import { describe, it, expect } from "vitest";
import { sanitizeSvg } from "./sanitizeSvg.js";

describe("sanitizeSvg", () => {
  it("laat veilige SVG ongewijzigd door", () => {
    const safe = '<svg xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="5" fill="red"/></svg>';
    const out = sanitizeSvg(safe);
    expect(out).toContain("<svg");
    expect(out).toContain("<circle");
    expect(out).toContain('fill="red"');
  });

  it("strip <script> uit SVG", () => {
    const evil = '<svg><script>alert(1)</script><circle r="5"/></svg>';
    const out = sanitizeSvg(evil);
    expect(out).not.toContain("<script");
    expect(out).not.toContain("alert");
    expect(out).toContain("<circle");
  });

  it("strip onclick/onload event-handlers", () => {
    const evil = '<svg><circle r="5" onclick="alert(1)" onload="alert(2)"/></svg>';
    const out = sanitizeSvg(evil);
    expect(out).not.toContain("onclick");
    expect(out).not.toContain("onload");
    expect(out).not.toContain("alert");
    expect(out).toContain("<circle");
  });

  it("strip javascript: URLs in href/xlink:href", () => {
    const evil = '<svg><a href="javascript:alert(1)"><circle r="5"/></a></svg>';
    const out = sanitizeSvg(evil);
    expect(out).not.toMatch(/javascript:/i);
  });

  it("retourneert lege string voor null/undefined/non-string", () => {
    expect(sanitizeSvg(null)).toBe("");
    expect(sanitizeSvg(undefined)).toBe("");
    expect(sanitizeSvg(123)).toBe("");
    expect(sanitizeSvg("")).toBe("");
  });

  it("behoudt veelgebruikte SVG-elementen (path, text, g, rect, line)", () => {
    const svg = '<svg><g><rect x="0" y="0" width="10" height="10"/><line x1="0" y1="0" x2="10" y2="10"/><path d="M0 0 L10 10"/><text x="5" y="5">hi</text></g></svg>';
    const out = sanitizeSvg(svg);
    expect(out).toContain("<rect");
    expect(out).toContain("<line");
    expect(out).toContain("<path");
    expect(out).toContain("<text");
    expect(out).toContain("hi");
  });
});
