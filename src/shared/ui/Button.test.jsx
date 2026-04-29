import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Button from "./Button.jsx";

describe("Button", () => {
  it("rendert kinderen", () => {
    render(<Button>Klik mij</Button>);
    expect(screen.getByRole("button", { name: /klik mij/i })).toBeInTheDocument();
  });

  it("respecteert disabled-prop", () => {
    render(<Button disabled>Doorgaan</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("geeft fullWidth=100% door als prop gezet", () => {
    render(<Button fullWidth>Wijd</Button>);
    expect(screen.getByRole("button")).toHaveStyle({ width: "100%" });
  });

  it("kan een onClick handler ontvangen en aanroepen", () => {
    let clicked = 0;
    const onClick = () => {
      clicked++;
    };
    render(<Button onClick={onClick}>Klik</Button>);
    screen.getByRole("button").click();
    expect(clicked).toBe(1);
  });

  it("rendert leftIcon en rightIcon", () => {
    render(
      <Button leftIcon={<span data-testid="li">L</span>} rightIcon={<span data-testid="ri">R</span>}>
        Tekst
      </Button>
    );
    expect(screen.getByTestId("li")).toBeInTheDocument();
    expect(screen.getByTestId("ri")).toBeInTheDocument();
  });
});
