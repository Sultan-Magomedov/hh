import { MyCard } from "../../components/MyCard/MyCard"
import { useTypedSelector } from "../../hooks/redux"
import { Loader, Stack, Text } from "@mantine/core"
import { useGetJobsQuery } from "../../store/api/jobsApi"

export const VacanciesList = () => {
	const filters = useTypedSelector((state) => state.filterReducer)
	const { data, isLoading, isError } = useGetJobsQuery(filters)

	if (isLoading) return <Loader size="lg" />
	if (isError) return <Text>Ошибка загрузки</Text>

	return (
		<Stack gap="md">
			{data?.items.map((vacancy) => (
				<MyCard key={vacancy.id} vacancy={vacancy} showButton={true} />
			))}
		</Stack>
	)
}
