import { describe, expect, it } from "vitest";
import searchReducer, { fetchVacancies, initialState } from "../searchSlice";

const mockVacancies = [
  {
    id: "1",
    name: "Frontend",
    area: { name: "Москва" },
    experience: { name: "1 год" },
    employer: { name: "Test" },
    work_format: [
      {
        name: "Удалённо",
      },
    ],
    salary: {
      currency: "RUR",
      from: 80000,
      to: 100000,
    },
    alternate_url: "test url",
  },
  {
    id: "2",
    name: "Frontend",
    area: { name: "Москва" },
    experience: { name: "1 год" },
    employer: { name: "Test" },
    work_format: [
      {
        name: "Удалённо",
      },
    ],
    salary: {
      currency: "RUR",
      from: 80000,
      to: 100000,
    },
    alternate_url: "test url",
  },
];
const payload = {
  items: mockVacancies,
  pages: 10,
};
describe("searchSlice reducer", () => {
  it("should return the initial state", () => {
    expect(searchReducer(undefined, { type: "unknown" })).toEqual(initialState);
  });

  it("should handle fetchVacancies.pending", () => {
    const action = {
      type: fetchVacancies.pending.type,
      payload: "test",
    };
    const state = searchReducer(initialState, action);
    expect(state.status).toBe("loading");
    expect(state.error).toBeNull();
    expect(state.vacancies).toEqual([]);
    expect(state.pages).toBe(0);
  });

  it("should handle fetchVacancies.fulfilled", () => {
    const action = {
      type: fetchVacancies.fulfilled.type,
      payload: payload,
    };
    const state = searchReducer(
      { ...initialState, status: "loading", vacancies: [] },
      action
    );
    expect(state.status).toBe("resolved");
    expect(state.vacancies).toEqual(mockVacancies);
    expect(state.error).toBeNull();
    expect(state.pages).toBe(payload.pages);
  });

  it("should handle fetchVacancies.rejected", () => {
    const action = {
      type: fetchVacancies.rejected.type,
      payload: "error",
    };
    const state = searchReducer(
      {
        ...initialState,
        status: "loading",
        error: null,
      },
      action
    );

    expect(state.status).toBe("rejected");
    expect(state.error).toBe("error");
    expect(state.vacancies).toEqual([]);
    expect(state.pages).toBe(0);
  });
});
