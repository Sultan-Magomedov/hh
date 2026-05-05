import { Box, Card, Text } from "@mantine/core"

export const About = () => {
	return (
		<Box mt={52}>
			<Card padding={24} radius={12} w={659}>
				<Text size="xl" fw={700} mb={12}>
					Мой профиль
				</Text>
			</Card>
		</Box>
	)
}
