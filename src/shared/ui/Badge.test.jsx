import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Badge from "./Badge.jsx";

describe("Badge", () => {
  it("rendert kinderen", () => {
    render(<Badge>Goud</Badge>);
    expect(screen.getByText("Goud")).toBeInTheDocument();
  });

  it("rendert icon naast tekst", () => {
    render(<Badge icon={<span data-testid="ico">⭐</span>}>Top</Badge>);
    expect(screen.getByTestId("ico")).toBeInTheDocument();
    expect(screen.getByText("Top")).toBeInTheDocument();
  });

  it("ondersteunt verschillende tones", () => {
    const { rerender } = render(<Badge tone="gold">x</Badge>);
    expect(screen.getByText("x")).toBeInTheDocument();
    rerender(<Badge tone="bronze">x</Badge>);
    expect(screen.getByText("x")).toBeInTheDocument();
    rerender(<Badge tone="silver">x</Badge>);
    expect(screen.getByText("x")).toBeInTheDocument();
  });
});
