import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import MdInline from "./MdInline.jsx";

describe("MdInline", () => {
  it("rendert plain text zonder markup ongewijzigd", () => {
    const { container } = render(<MdInline text="Wat is 2 + 2?" />);
    expect(container.textContent).toBe("Wat is 2 + 2?");
    expect(container.querySelector("strong")).toBeNull();
  });

  it("vet-druk-wraptt *...* over de hele zin", () => {
    const { container } = render(<MdInline text="*Wat zijn de coördinaten?*" />);
    expect(container.querySelector("strong")?.textContent).toBe("Wat zijn de coördinaten?");
    expect(container.textContent).toBe("Wat zijn de coördinaten?"); // asterisks weg
  });

  it("ondersteunt inline *bold* midden in een zin", () => {
    const { container } = render(<MdInline text="De *oorsprong* is (0, 0)." />);
    expect(container.querySelector("strong")?.textContent).toBe("oorsprong");
    expect(container.textContent).toBe("De oorsprong is (0, 0).");
  });

  it("raakt math-uitdrukkingen met losse asterisks niet", () => {
    const { container } = render(<MdInline text="2 * 3 = 6" />);
    expect(container.textContent).toBe("2 * 3 = 6");
    expect(container.querySelector("strong")).toBeNull();
  });

  it("ondersteunt meerdere bold-segmenten in één zin", () => {
    const { container } = render(<MdInline text="*Vraag:* wat is *2+2*?" />);
    const strongs = container.querySelectorAll("strong");
    expect(strongs.length).toBe(2);
    expect(strongs[0].textContent).toBe("Vraag:");
    expect(strongs[1].textContent).toBe("2+2");
  });

  it("rendert null voor null/undefined input", () => {
    const { container: c1 } = render(<MdInline text={null} />);
    expect(c1.textContent).toBe("");
    const { container: c2 } = render(<MdInline text={undefined} />);
    expect(c2.textContent).toBe("");
  });

  it("vereist dat asterisks niet-spatie aan beide kanten raken", () => {
    // "* spaced *" — niet vet, want spaties direct binnen
    const { container } = render(<MdInline text="* niet vet *" />);
    expect(container.textContent).toBe("* niet vet *");
    expect(container.querySelector("strong")).toBeNull();
  });
});
