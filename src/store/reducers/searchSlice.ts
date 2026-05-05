import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import type { VacancyType } from "../../types"
import type { RootState } from "../store"

export interface SearchState {
	vacancies: VacancyType[]
	status: "loading" | "resolved" | "rejected" | null
	error: string | null
	pages: number
}
interface ResponseState {
	items: VacancyType[]
	pages: number
}

export const initialState: SearchState = {
	vacancies: [],
	status: null,
	error: null,
	pages: 0,
}

export const fetchVacancies = createAsyncThunk(
	"search/fetchVacancies",
	async (_, { getState, rejectWithValue }) => {
		try {
			const state = getState() as RootState
			const { name, idCity, page, skills } = state.filterReducer
			const normalizedName = name.trim().toLowerCase()
			const normalizedSkills = skills.map((skill) => skill.trim().toLowerCase())
			const cityById: Record<string, string> = {
				"1": "москва",
				"2": "санкт-петербург",
			}
			const normalizedCity = cityById[idCity] ?? ""

			const jobs = await api.getJobs()

			const filtered = jobs.filter((vacancy) => {
				const haystack = [
					vacancy.name,
					vacancy.snippet.requirement,
					vacancy.snippet.responsibility,
				]
					.join(" ")
					.toLowerCase()

				const matchesName =
					normalizedName.length === 0 || haystack.includes(normalizedName)
				const matchesSkills = normalizedSkills.every(
					(skill) => skill.length === 0 || haystack.includes(skill),
				)
				const matchesCity =
					normalizedCity.length === 0 ||
					vacancy.area.name.toLowerCase() === normalizedCity

				return matchesName && matchesSkills && matchesCity
			})

			const perPage = 10
			const startIndex = page * perPage
			const items = filtered.slice(startIndex, startIndex + perPage)
			const pages = Math.max(1, Math.ceil(filtered.length / perPage))

			const data: ResponseState = { items, pages }
			return data
		} catch (error) {
			if (error instanceof Error) {
				return rejectWithValue(error.message)
			}
			return rejectWithValue(error)
		}
	},
)

export const searchSlice = createSlice({
	name: "search",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchVacancies.pending, (state) => {
				state.status = "loading"
				state.error = null
			})
			.addCase(fetchVacancies.fulfilled, (state, action) => {
				state.status = "resolved"
				state.vacancies = action.payload.items
				state.pages = action.payload.pages
			})
			.addCase(fetchVacancies.rejected, (state, action) => {
				state.status = "rejected"
				state.error = action.payload as string
				state.pages = 0
			})
	},
})

export default searchSlice.reducer
