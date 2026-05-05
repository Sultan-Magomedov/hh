import { combineReducers, configureStore } from "@reduxjs/toolkit"
import filterReducer from "./reducers/filterSlice"
import authReducer from "./reducers/authSlice"
import { authApi } from "./api/authApi"
import { jobsApi } from "./api/jobsApi"

const rootReducer = combineReducers({
	filterReducer,
	authReducer,
	[authApi.reducerPath]: authApi.reducer,
	[jobsApi.reducerPath]: jobsApi.reducer,
})

export const setupStore = (preloadedState?: Partial<RootState>) => {
	return configureStore({
		reducer: rootReducer,
		preloadedState,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware().concat(authApi.middleware, jobsApi.middleware),
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"]
