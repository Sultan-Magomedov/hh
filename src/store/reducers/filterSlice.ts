import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

export interface FilterState {
	name: string
	skills: string[]
	idCity: string
	page: number
	find: boolean
}

export const initialState: FilterState = {
	name: "",
	skills: ["TypeScript", "React"],
	idCity: "",
	page: 0,
	find: false,
}

export const filterSlice = createSlice({
	name: "filter",
	initialState,
	reducers: {
		setName: (state, action: PayloadAction<string>) => {
			state.name = action.payload
		},
		setFind: (state, action: PayloadAction<boolean>) => {
			state.find = action.payload
			state.page = 0
		},
		setSkills: (state, action: PayloadAction<string[]>) => {
			state.skills = action.payload
			state.page = 0
		},
		addSkill: (state, action: PayloadAction<string>) => {
			if (action.payload && !state.skills.includes(action.payload)) {
				state.skills.push(action.payload)
			}
			state.page = 0
		},
		removeSkill: (state, action: PayloadAction<string>) => {
			state.skills = state.skills.filter((skill) => skill !== action.payload)
			state.page = 0
		},
		setCityId: (state, action: PayloadAction<string>) => {
			state.idCity = action.payload
			state.page = 0
		},
		setPage: (state, action: PayloadAction<number>) => {
			state.page = action.payload
		},
	},
})

export const {
	setName,
	addSkill,
	removeSkill,
	setCityId,
	setPage,
	setFind,
	setSkills,
} = filterSlice.actions

export default filterSlice.reducer
