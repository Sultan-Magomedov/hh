import { describe, expect, it } from "vitest";
import filterReducer, {
  addSkill,
  initialState,
  removeSkill,
  setCityId,
  setFind,
  setName,
  setPage,
  setSkills,
} from "../filterSlice";

describe("initial state", () => {
  it("should be initialState", () => {
    const state = filterReducer(undefined, { type: "unknown" });
    expect(state).toEqual(initialState);
  });
});

describe("setName", () => {
  it("the name should be changed", () => {
    const state = filterReducer(initialState, setName("test"));
    expect(initialState.name).toBe("");
    expect(state.name).toBe("test");
  });
});

describe("addSkill", () => {
  it("should add a new skill", () => {
    const state = filterReducer(initialState, addSkill("CSS"));
    expect(initialState.skills.length).toBe(3);
    expect(state.skills.length).toBe(4);
  });
  it("not should add an existing skill", () => {
    const state = filterReducer(initialState, addSkill("CSS"));
    const secondState = filterReducer(state, addSkill("CSS"));
    expect(state.skills.length).toBe(4);
    expect(secondState.skills.length).toBe(4);
  });
});

describe("removeSkill", () => {
  it("the should delete a skill", () => {
    const state = filterReducer(initialState, addSkill("CSS"));
    const secondState = filterReducer(state, removeSkill("CSS"));
    expect(state.skills.length).toBe(4);
    expect(secondState.skills.length).toBe(3);
  });
});

describe("setCityId", () => {
  it("the idCity should be changed", () => {
    const state = filterReducer(initialState, setCityId("123"));
    expect(initialState.idCity).toBe("");
    expect(state.idCity).toBe("123");
  });
});

describe("setPage", () => {
  it("the page should be changed", () => {
    const state = filterReducer(initialState, setPage(1));
    expect(initialState.page).toBe(0);
    expect(state.page).toBe(1);
  });
});

describe("setFind", () => {
  it("the find should be changed", () => {
    const state = filterReducer(initialState, setFind(true));
    expect(initialState.find).toBe(false);
    expect(state.find).toBe(true);
  });
});

describe("setSkills", () => {
  it("the skills should be changed", () => {
    const state = filterReducer(initialState, setSkills(["React", "Js"]));
    expect(initialState.skills.length).toBe(3);
    expect(state.skills.length).toBe(2);
  });
});
