import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { type AuthResponse, type AuthFormData } from "../../types"

const API_URL = import.meta.env.VITE_API_URL
export const authApi = createApi({
	reducerPath: "authApi",
	baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
	endpoints: (builder) => ({
		register: builder.mutation<AuthResponse, AuthFormData>({
			query: (userData) => ({
				url: "/signup",
				method: "POST",
				body: userData,
			}),
		}),
		login: builder.mutation<AuthResponse, Omit<AuthFormData, "name">>({
			query: (credentials) => ({
				url: "/login",
				method: "POST",
				body: credentials,
			}),
		}),
	}),
})

export const { useLoginMutation, useRegisterMutation } = authApi
