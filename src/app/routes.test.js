import { describe, it, expect } from "vitest";
import { PAGE_TO_PATH, pathForPage, pageForPath } from "./routes.js";

describe("PAGE_TO_PATH", () => {
  it("mapt home naar root", () => {
    expect(PAGE_TO_PATH.home).toBe("/");
  });

  it("alle paden beginnen met /", () => {
    for (const [page, path] of Object.entries(PAGE_TO_PATH)) {
      expect(path.startsWith("/"), `${page}: ${path}`).toBe(true);
    }
  });

  it("alle paden zijn uniek", () => {
    const paths = Object.values(PAGE_TO_PATH);
    expect(new Set(paths).size).toBe(paths.length);
  });
});

describe("pathForPage", () => {
  it("vindt het pad voor bekende page-keys", () => {
    expect(pathForPage("home")).toBe("/");
    expect(pathForPage("my-mastery")).toBe("/voortgang");
    expect(pathForPage("learn-paths-hub")).toBe("/leren");
  });

  it("returnt null voor onbekende page", () => {
    expect(pathForPage("bestaat-niet")).toBeNull();
  });
});

describe("pageForPath", () => {
  it("vindt page voor exacte match", () => {
    expect(pageForPath("/")).toBe("home");
    expect(pageForPath("/voortgang")).toBe("my-mastery");
    expect(pageForPath("/leren")).toBe("learn-paths-hub");
  });

  it("matcht sub-route op startsWith (langste match wint)", () => {
    // /leren/pad is langer dan /leren → match learn-path
    expect(pageForPath("/leren/pad")).toBe("learn-path");
  });

  it("valt terug op 'home' bij onbekend pad", () => {
    expect(pageForPath("/onbekend-pad")).toBe("home");
  });
});
