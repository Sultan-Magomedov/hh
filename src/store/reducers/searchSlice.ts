import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { VacancyType } from "../../types";
import ky from "ky";
import type { RootState } from "../store";

export interface SearchState {
  vacancies: VacancyType[];
  status: "loading" | "resolved" | "rejected" | null;
  error: string | null;
  pages: number;
}
interface ResponseState {
  items: VacancyType[];
  pages: number;
}

export const initialState: SearchState = {
  vacancies: [],
  status: null,
  error: null,
  pages: 0,
};

export const fetchVacancies = createAsyncThunk(
  "search/fetchVacancies",
  async (_, { getState, rejectWithValue }) => {
    try {
      const state = getState() as RootState;
      const { name, idCity, page, skills } = state.filterReducer;
      const searchText = `${name}/${skills.join(",")}`;
      const area = idCity ? `&area=${idCity}` : "";
      const response = await ky(
        `https://api.hh.ru/vacancies?industry=7&professional_role=96&per_page=10&search_field=description&page=${page}&text=${searchText}${area}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: ResponseState = await response.json();
      return { items: data.items, pages: data.pages };
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue(error);
    }
  }
);

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVacancies.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchVacancies.fulfilled, (state, action) => {
        state.status = "resolved";
        state.vacancies = action.payload.items;
        state.pages = action.payload.pages;
      })
      .addCase(fetchVacancies.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload as string;
        state.pages = 0;
      });
  },
});

export default searchSlice.reducer;
