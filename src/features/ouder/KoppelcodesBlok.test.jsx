// @vitest-environment jsdom
import { describe, it, expect, vi } from "vitest";
import { render, fireEvent, screen } from "@testing-library/react";
import KoppelcodesBlok from "./KoppelcodesBlok.jsx";

describe("KoppelcodesBlok", () => {
  it("leeg gezin: vraagt hoeveel kinderen en maakt 1/2/3 codes", () => {
    const onMaak = vi.fn();
    render(<KoppelcodesBlok codes={[]} aantalKinderen={0} over={3} onMaak={onMaak} />);
    expect(screen.getByText("Hoeveel kinderen wil je koppelen?")).toBeTruthy();
    fireEvent.click(screen.getByText("2"));
    expect(onMaak).toHaveBeenCalledWith(2);
    expect(screen.queryByText(/Nog een code/)).toBeNull();
  });
  it("met codes: toont elke code groot, wissen vraagt bevestiging, extra-knop zolang er ruimte is", () => {
    const onWis = vi.fn(); const onMaak = vi.fn();
    render(<KoppelcodesBlok codes={[{ id: "a", code: "H7KP2Q" }, { id: "b", code: "B5QWVU" }]} aantalKinderen={0} over={1} onWis={onWis} onMaak={onMaak} />);
    expect(screen.getByText("H7KP2Q")).toBeTruthy();
    expect(screen.getByText(/Laat je kind deze code zien/)).toBeTruthy();
    fireEvent.click(screen.getByLabelText("Code H7KP2Q wissen"));
    expect(onWis).not.toHaveBeenCalled();
    fireEvent.click(screen.getByText("Ja, wissen"));
    expect(onWis).toHaveBeenCalledWith("a");
    fireEvent.click(screen.getByText(/Nog een code/));
    expect(onMaak).toHaveBeenCalledWith(1);
  });
  it("vol (3): geen extra-knop", () => {
    render(<KoppelcodesBlok codes={[{ id: "a", code: "AAAAAA" }]} aantalKinderen={2} over={0} />);
    expect(screen.queryByText(/Nog een code/)).toBeNull();
  });
});
