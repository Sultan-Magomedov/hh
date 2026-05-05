import { Pagination } from "@mantine/core"
import { useTypedDispatch, useTypedSelector } from "../../hooks/redux"
import { setPage } from "../../store/reducers/filterSlice"
import styles from "./MyPagination.module.css"
import { useGetJobsQuery } from "../../store/api/jobsApi"

export const MyPagination = () => {
	const dispatch = useTypedDispatch()
	const filters = useTypedSelector((state) => state.filterReducer)
	const { page } = filters
	const { data } = useGetJobsQuery(filters)
	const totalCount = data?.total || 0
	const totalPages = Math.ceil(totalCount / 10)

	const handlePageChange = (newPage: number) => {
		dispatch(setPage(newPage - 1))
	}

	if (totalPages <= 1) return null

	return (
		<Pagination
			className={styles.pagination}
			total={totalPages}
			value={page + 1}
			onChange={handlePageChange}
			withEdges
		/>
	)
}
