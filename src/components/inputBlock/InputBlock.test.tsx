import { describe, expect, it } from "vitest";
import { screen, renderWithRedux } from "../../../test-utils";
import "@testing-library/jest-dom";
import { InputBlock } from "./InputBlock";

describe("InputBlock component", () => {
  it("the title should be displayed", () => {
    renderWithRedux(<InputBlock />);
    expect(screen.getByText(/Список вакансий/i)).toBeInTheDocument();
  });
});
