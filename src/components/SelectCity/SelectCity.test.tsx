import { describe, expect, it, vi } from "vitest";
import { screen, renderWithRedux, userEvent } from "../../../test-utils";
import "@testing-library/jest-dom";
import { setupStore } from "../../store/store";
import { SelectCity } from "./SelectCity";
import { setCityId } from "../../store/reducers/filterSlice";

describe("SelectCity component", () => {
  it("the select should be displayed", () => {
    renderWithRedux(<SelectCity />);
    expect(screen.getByPlaceholderText(/Выберите город/i)).toBeInTheDocument();
  });
  it("the select options should be displayed", () => {
    renderWithRedux(<SelectCity />);
    expect(screen.getByText(/москва/i)).toBeInTheDocument();
    expect(screen.getByText(/Санкт-Петербург/i)).toBeInTheDocument();
    expect(screen.getByText(/Все города/i)).toBeInTheDocument();
  });
  it("IdCity should be added when selecting a city", async () => {
    const store = setupStore({
      filterReducer: { name: "", skills: [], idCity: "", page: 0 },
    });
    const mockDispatch = vi.spyOn(store, "dispatch");

    renderWithRedux(<SelectCity />, { store });
    const select = screen.getByPlaceholderText(/Выберите город/i);
    const city = screen.getByText(/москва/i);
    await userEvent.click(city);

    expect(select).toHaveValue("Москва");
    expect(mockDispatch).toHaveBeenCalledTimes(2);
    expect(mockDispatch).toHaveBeenCalledWith(setCityId("1"));
    expect(store.getState().filterReducer.idCity).toContain("1");
  });
});
