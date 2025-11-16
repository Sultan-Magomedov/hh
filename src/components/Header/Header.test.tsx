import { describe, expect, it } from "vitest";
import { screen, renderWithRedux } from "../../../test-utils";
import "@testing-library/jest-dom";
import { Header } from "./Header";

describe("Header component", () => {
  it("the menu should be displayed", () => {
    renderWithRedux(<Header />);
    expect(screen.getByText(/Вакансии FE/i)).toBeInTheDocument();
    expect(screen.getByText(/Обо мне/i)).toBeInTheDocument();
  });
});
