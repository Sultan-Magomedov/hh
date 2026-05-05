import { Box, Card, Loader, Text } from "@mantine/core"
import { MyCard } from "../components/MyCard/MyCard"
import { useParams } from "react-router"
import { NotFound } from "./NotFound"
import { useGetJobByIdQuery } from "../store/api/jobsApi"

export const Vacancy = () => {
	const { id } = useParams<{ id: string }>()
	const {
		data: vacancy,
		isLoading,
		isError,
	} = useGetJobByIdQuery(id || "", {
		skip: !id,
	})

	if (isLoading) return <Loader size="xl" variant="dots" />
	if (isError || !vacancy) {
		return <NotFound />
	}

	return (
		<>
			<Box mt={52}>
				<MyCard vacancy={vacancy} showButton={false} />
			</Box>
			{Boolean(vacancy) && (
				<Card padding={24} radius={12} w={659} mt={29}>
					<Text>{vacancy.snippet.requirement}</Text>
					<Text>{vacancy.snippet.responsibility}</Text>
				</Card>
			)}
		</>
	)
}
