import { describe, expect, it, vi } from "vitest";
import {
  screen,
  renderWithRedux,
  userEvent,
  within,
} from "../../../test-utils";
import "@testing-library/jest-dom";
import { setupStore } from "../../store/store";
import { addSkill, removeSkill } from "../../store/reducers/filterSlice";
import { SkillSet } from "./SkillSet";

describe("SkillSet component", () => {
  it("the input and button should be displayed", () => {
    renderWithRedux(<SkillSet />);
    expect(screen.getByPlaceholderText(/навык/i)).toBeInTheDocument();
    expect(screen.getByText("+")).toBeInTheDocument();
  });
  it("the pills should be displayed", () => {
    renderWithRedux(<SkillSet />);
    expect(screen.getByText(/react/i)).toBeInTheDocument();
    expect(screen.getByText(/redux/i)).toBeInTheDocument();
    expect(screen.getByText(/typescript/i)).toBeInTheDocument();
  });
  it("when you press the Enter button, the skill should be added", async () => {
    const store = setupStore({
      filterReducer: { name: "", skills: [], idCity: "", page: 0 },
    });
    const mockDispatch = vi.spyOn(store, "dispatch");

    renderWithRedux(<SkillSet />, { store });
    const input = screen.getByPlaceholderText(/навык/i);

    await userEvent.type(input, "HTML");
    expect(input).toHaveValue("HTML");
    await userEvent.keyboard("{Enter}");
    expect(input).toHaveValue("");

    expect(screen.getByText("HTML")).toBeInTheDocument();
    expect(mockDispatch).toHaveBeenCalledTimes(2);
    expect(mockDispatch).toHaveBeenCalledWith(addSkill("HTML"));
    expect(store.getState().filterReducer.skills).toContain("HTML");
  });
  it("when you click the Delete button, the skill should be deleted.", async () => {
    const store = setupStore({
      filterReducer: {
        name: "",
        skills: ["TypeScript", "React", "Redux"],
        idCity: "",
        page: 0,
      },
    });
    const mockDispatch = vi.spyOn(store, "dispatch");

    renderWithRedux(<SkillSet />, { store });
    const reactPill = screen.getByText("React").closest(".mantine-Pill-root");
    const button = within(reactPill as HTMLElement).getByRole("button", {
      hidden: true,
    });
    expect(reactPill).toBeInTheDocument();
    expect(store.getState().filterReducer.skills.length).toBe(3);

    await userEvent.click(button);

    expect(screen.queryByText("React")).not.toBeInTheDocument();
    expect(mockDispatch).toHaveBeenCalledTimes(2);
    expect(mockDispatch).toHaveBeenCalledWith(removeSkill("React"));
    expect(store.getState().filterReducer.skills.length).toBe(2);
  });
});
