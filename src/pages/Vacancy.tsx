import { Box, Card, Text, Transition } from "@mantine/core"
import { MyCard } from "../components/MyCard/MyCard"
import { useParams } from "react-router"
import { NotFound } from "./NotFound"
import { useGetJobByIdQuery } from "../store/api/jobsApi"
import { VacancyPageSkeleton } from "../components/VacancyPageSceleton/VacancyPageSceleton"

export const Vacancy = () => {
	const { id } = useParams<{ id: string }>()
	const {
		data: vacancy,
		isLoading,
		isError,
	} = useGetJobByIdQuery(id || "", {
		skip: !id,
	})

	if (isLoading) return <VacancyPageSkeleton />
	if (isError || !vacancy) {
		return <NotFound />
	}

	return (
		<Transition
			mounted={!isLoading && !!vacancy}
			transition="fade"
			duration={200}
			timingFunction="ease"
		>
			{(styles) => (
				<Box style={styles}>
					<MyCard vacancy={vacancy} showButton={false} />

					<Card padding={24} radius={12} w={659} mt={29}>
						<Text>{vacancy.snippet.requirement}</Text>
						<Text>{vacancy.snippet.responsibility}</Text>
					</Card>
				</Box>
			)}
		</Transition>
	)
}
