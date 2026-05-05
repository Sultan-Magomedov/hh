import { useSearchParams } from "react-router"
import { useTypedDispatch, useTypedSelector } from "./redux"
import { useEffect, useRef } from "react"
import {
	setCityId,
	setName,
	setPage,
	setSkills,
} from "../store/reducers/filterSlice"

export const useSyncFilters = () => {
	const [searchParams, setSearchParams] = useSearchParams()
	const dispatch = useTypedDispatch()
	const filters = useTypedSelector((state) => state.filterReducer)
	const isMounted = useRef(false)

	useEffect(() => {
		const name = searchParams.get("name")
		const city = searchParams.get("city")
		const page = parseInt(searchParams.get("page") || "0", 10)
		const skills = searchParams.get("skills")?.split(",").filter(Boolean) || []

		if (name) dispatch(setName(name))
		if (city) dispatch(setCityId(city))
		if (page) dispatch(setPage(page))
		if (skills.length > 0) dispatch(setSkills(skills))

		isMounted.current = true
	}, [])

	useEffect(() => {
		if (isMounted.current) {
			const params: Record<string, string> = {}
			if (filters.name) params.name = filters.name
			if (filters.idCity) params.city = filters.idCity
			if (filters.page > 0) params.page = filters.page.toString()
			if (filters.skills.length > 0) params.skills = filters.skills.join(",")

			setSearchParams(params, { replace: true })
		}
	}, [filters, setSearchParams])
}
