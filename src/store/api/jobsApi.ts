import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { type VacancyType } from "../../types"
import type { FilterState } from "../reducers/filterSlice"

const API_URL = import.meta.env.VITE_API_URL

export const jobsApi = createApi({
	reducerPath: "jobsApi",
	baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
	endpoints: (builder) => ({
		getJobs: builder.query<
			{ items: VacancyType[]; total: number },
			FilterState
		>({
			query: (filters) => {
				const params: Record<string, string | number> = {}

				if (filters.name) params.q = filters.name
				if (filters.idCity) params["area.name"] = filters.idCity
				if (filters.skills.length > 0)
					params["snippet.requirement_like"] = filters.skills.join("|")

				params._page = filters.page + 1
				params._limit = 10
				return {
					url: "/jobs",
					params,
				}
			},
			transformResponse: (response: VacancyType[], meta) => {
				return {
					items: response,
					total: Number(meta?.response?.headers.get("x-total-count")) || 0,
				}
			},
		}),
		getJobById: builder.query<VacancyType, string>({
			query: (id) => `/jobs/${id}`,
		}),
	}),
})

export const { useGetJobByIdQuery, useGetJobsQuery } = jobsApi
