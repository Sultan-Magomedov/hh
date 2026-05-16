import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import { type User } from "../../types"

interface AuthState {
	user: User | null
	token: string | null
	isAuth: boolean
}
const initialState: AuthState = {
	user: localStorage.getItem("user")
		? JSON.parse(localStorage.getItem("user")!)
		: null,
	token: localStorage.getItem("token"),
	isAuth: !!localStorage.getItem("token"),
}

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setCredentials: (
			state,
			{
				payload: { user, accessToken },
			}: PayloadAction<{ user: User; accessToken: string }>,
		) => {
			state.user = user
			state.token = accessToken
			state.isAuth = true
			localStorage.setItem("user", JSON.stringify(user))
			localStorage.setItem("token", accessToken)
		},
		logout: (state) => {
			state.user = null
			state.token = null
			state.isAuth = false
			localStorage.removeItem("user")
			localStorage.removeItem("token")
		},
	},
})

export const { setCredentials, logout } = authSlice.actions
export default authSlice.reducer
