import { createSlice } from "@reduxjs/toolkit";

export interface FilterState {
  name: string;
  skills: string[];
  idCity: string;
  page: number;
  find: boolean;
}

export const initialState: FilterState = {
  name: "",
  skills: ["TypeScript", "React", "Redux"],
  idCity: "",
  page: 0,
  find: false,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setFind: (state, action) => {
      state.find = action.payload;
      state.page = 0;
    },
    setSkills(state, action) {
      state.skills = action.payload;
      state.page = 0;
    },
    addSkill: (state, action) => {
      if (action.payload && !state.skills.includes(action.payload)) {
        state.skills.push(action.payload);
      }
      state.page = 0;
    },
    removeSkill: (state, action) => {
      state.skills = state.skills.filter((skill) => skill !== action.payload);
      state.page = 0;
    },
    setCityId: (state, action) => {
      state.idCity = action.payload;
      state.page = 0;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const {
  setName,
  addSkill,
  removeSkill,
  setCityId,
  setPage,
  setFind,
  setSkills,
} = filterSlice.actions;

export default filterSlice.reducer;
