import { describe, expect, it } from "vitest";
import { screen, renderWithRedux } from "../../../test-utils";
import "@testing-library/jest-dom";
import { MyCard } from "./MyCard";

describe("Input component", () => {
  it("the CardProps should be displayed", () => {
    renderWithRedux(
      <MyCard
        name="Frontend"
        area="Москва"
        exp="1-3 года"
        company="FIX"
        form="Удалённо"
        from={80000}
        to={100000}
        currency="RUR"
        url="https://test.ru"
      />
    );

    expect(screen.getByText(/Frontend/i)).toBeInTheDocument();
    expect(screen.getByText(/Москва/i)).toBeInTheDocument();
    expect(screen.getByText(/1-3 года/i)).toBeInTheDocument();
    expect(screen.getByText(/FIX/i)).toBeInTheDocument();
    expect(screen.getByText(/Удалённо/i)).toBeInTheDocument();
    expect(screen.getByText(/80000-100000RUR/i)).toBeInTheDocument();
  });
  it("the buttons should be displayed", () => {
    renderWithRedux(
      <MyCard
        name="Frontend"
        area="Москва"
        exp="1-3 года"
        company="FIX"
        form="Удалённо"
        from={80000}
        to={100000}
        currency="RUR"
        url="https://test.ru"
      />
    );
    expect(screen.getByText(/Откликнуться/i)).toBeInTheDocument();
    expect(screen.getByText(/Смотреть вакансию/i)).toBeInTheDocument();
  });
});
