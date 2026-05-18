import { MyCard } from "../../components/MyCard/MyCard"
import { useTypedSelector } from "../../hooks/redux"
import { Stack, Alert, Transition, Box, Card, Text } from "@mantine/core"
import { useGetJobsQuery } from "../../store/api/jobsApi"
import { VacancyListSkeleton } from "../../components/VacancyListSceleton/VacansyListSceleton"

export const VacanciesList = () => {
	const filters = useTypedSelector((state) => state.filterReducer)
	const { data, isLoading, isError } = useGetJobsQuery(filters)

	if (isLoading) {
		return (
			<Stack gap="md">
				{Array.from({ length: 10 }).map((_, index) => (
					<VacancyListSkeleton key={index} />
				))}
			</Stack>
		)
	}
	if (isError) {
		return (
			<Alert
				w={659}
				color="red"
				radius="md"
				title="Ошибка загрузки"
				styles={{
					label: {
						width: "100%",
						textAlign: "center",
					},
				}}
			>
				Не удалось загрузить список вакансий. Если проект долго не открывался,
				сервер может запускаться до 30 секунд.
			</Alert>
		)
	}

	if (data && data.items.length === 0) {
		return (
			<Card w={659} padding={24} radius={12}>
				<Stack gap="sm" align="center">
					<Text fw={600} fz={18}>
						😕 Вакансии не найдены
					</Text>

					<Text c="dimmed" ta="center">
						Попробуйте изменить фильтры или поиск
					</Text>
				</Stack>
			</Card>
		)
	}

	return (
		<Transition
			mounted={!isLoading && !!data?.items}
			transition="fade"
			duration={200}
			timingFunction="ease"
		>
			{(styles) => (
				<Box style={styles}>
					<Stack gap="md">
						{data?.items.map((vacancy) => (
							<MyCard key={vacancy.id} vacancy={vacancy} showButton={true} />
						))}
					</Stack>
				</Box>
			)}
		</Transition>
	)
}
