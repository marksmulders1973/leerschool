import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Input from "./Input.jsx";

describe("Input", () => {
  it("koppelt label aan input via htmlFor/id", () => {
    render(<Input label="Naam" />);
    const input = screen.getByLabelText("Naam");
    expect(input).toBeInTheDocument();
  });

  it("toont helper-tekst bij default render", () => {
    render(<Input label="Email" helper="Voer je e-mail in" />);
    expect(screen.getByText("Voer je e-mail in")).toBeInTheDocument();
  });

  it("toont error in plaats van helper als error gezet is", () => {
    render(<Input label="Email" helper="hint" error="Verplicht veld" />);
    expect(screen.getByText("Verplicht veld")).toBeInTheDocument();
    expect(screen.queryByText("hint")).not.toBeInTheDocument();
  });

  it("zet aria-invalid bij error", () => {
    render(<Input label="x" error="oeps" />);
    expect(screen.getByLabelText("x")).toHaveAttribute("aria-invalid", "true");
  });

  it("roept onChange aan", () => {
    let v = "";
    render(<Input label="x" onChange={(e) => { v = e.target.value; }} />);
    fireEvent.change(screen.getByLabelText("x"), { target: { value: "hi" } });
    expect(v).toBe("hi");
  });
});
