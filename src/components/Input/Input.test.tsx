import { describe, expect, it, vi } from "vitest";
import { screen, renderWithRedux, userEvent } from "../../../test-utils";
import "@testing-library/jest-dom";
import { Input } from "./Input";
import { setupStore } from "../../store/store";
import { setName } from "../../store/reducers/filterSlice";

describe("Input component", () => {
  it("the input and button should be displayed", () => {
    renderWithRedux(<Input />);
    expect(screen.getByText(/найти/i)).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/Должность или название компании/i)
    ).toBeInTheDocument();
  });
  it("when entering the input, the name field should change", async () => {
    const store = setupStore({
      filterReducer: { name: "", skills: [], idCity: "", page: 0, find: false },
    });
    const mockDispatch = vi.spyOn(store, "dispatch");

    renderWithRedux(<Input />, {
      store,
    });

    const button = screen.getByText(/найти/i);
    const input = screen.getByPlaceholderText(
      /Должность или название компании/i
    );
    await userEvent.type(input, "test");
    await userEvent.click(button);
    expect(input).toHaveValue("test");
    expect(mockDispatch).toHaveBeenCalledTimes(6);
    expect(mockDispatch).toHaveBeenCalledWith(setName("test"));
  });
});
