import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Card from "./Card.jsx";

describe("Card", () => {
  it("rendert kinderen", () => {
    render(<Card>Inhoud</Card>);
    expect(screen.getByText("Inhoud")).toBeInTheDocument();
  });

  it("default variant is study (1px border-soft)", () => {
    render(<Card data-testid="c">x</Card>);
    const el = screen.getByTestId("c");
    expect(el.style.border).toContain("1px solid");
  });

  it("exercise variant heeft 2px primary border", () => {
    render(<Card variant="exercise" data-testid="c">x</Card>);
    expect(screen.getByTestId("c").style.border).toContain("2px solid");
  });

  it("ondersteunt 'as' prop voor andere tagnamen", () => {
    render(<Card as="section" data-testid="c">x</Card>);
    expect(screen.getByTestId("c").tagName).toBe("SECTION");
  });
});
