import { Card, Flex, Group, Skeleton } from "@mantine/core"

export const VacancyListSkeleton = () => {
	return (
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

				<Flex gap={12} align="start">
					<Skeleton height={36} width={176} radius={8} />

					<Skeleton height={36} width={135} radius={8} />
				</Flex>
			</Flex>
		</Card>
	)
}
