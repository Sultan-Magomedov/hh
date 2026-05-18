import { Card, Flex, Group, Skeleton, Stack } from "@mantine/core"

export const VacancyPageSkeleton = () => {
	return (
		<Stack gap={29}>
			<Card padding={24} radius={12} w={659}>
				<Flex direction="column" gap={24}>
					<Flex direction="column" align="start" gap={16}>
						<Skeleton height={20} width="70%" />

						<Group gap={16}>
							<Skeleton height={18} width={140} />
							<Skeleton height={18} width={70} />
						</Group>
					</Flex>

					<Flex direction="column" align="start" gap={8}>
						<Skeleton height={12} width={140} />

						<Group gap={8}>
							<Skeleton height={12} width={60} />
						</Group>

						<Skeleton height={16} width={100} />
					</Flex>

					<Skeleton height={36} width={194} radius={8} />
				</Flex>
			</Card>
			<Card padding={24} radius={12} w={659}>
				<Stack gap={10}>
					<Skeleton height={14} />
					<Skeleton height={14} width="80%" />
					<Skeleton height={14} width="60%" />
				</Stack>
			</Card>
		</Stack>
	)
}
