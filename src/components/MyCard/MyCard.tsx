import { Button, Card, Flex, Group, Text } from "@mantine/core"
import "@mantine/core/styles.css"
import { useNavigate } from "react-router"
import type { VacancyType } from "../../types"
import styles from "./MyCard.module.css"
import { useTypedSelector } from "../../hooks/redux"
import type React from "react"

interface MyCardProps {
	vacancy: VacancyType
	showButton: boolean
}
export const MyCard = ({ vacancy, showButton }: MyCardProps) => {
	const navigate = useNavigate()
	const isAuth = useTypedSelector((state) => state.authReducer.isAuth)

	const handleViewClick = () => {
		if (!isAuth) {
			navigate("/auth", { state: { from: `/vacancies/${vacancy.id}` } })
			return
		}
		navigate(`/vacancies/${vacancy.id}`)
	}

	const handleApplyClick = (e: React.MouseEvent) => {
		if (!isAuth) {
			e.preventDefault()
			navigate("/auth", {
				state: { from: vacancy.alternate_url, external: true },
			})
		}
	}

	return (
		<Card padding={24} radius={12} w={659}>
			<Flex direction="column" gap={16}>
				<Flex direction="column" align="start" gap={2}>
					<Text color="blue" fz={20} fw={600}>
						{vacancy.name}
					</Text>
					<Group gap={16}>
						{vacancy.salary?.from && vacancy.salary?.to && (
							<Text>
								{vacancy.salary?.from}-{vacancy.salary?.to}
								{vacancy.salary?.currency}
							</Text>
						)}
						{!vacancy.salary?.from && vacancy.salary?.to && (
							<Text>
								до {vacancy.salary?.to}
								{vacancy.salary?.currency}
							</Text>
						)}
						{vacancy.salary?.from && !vacancy.salary?.to && (
							<Text>
								от {vacancy.salary?.from}
								{vacancy.salary?.currency}
							</Text>
						)}
						<Text>{vacancy.experience.name}</Text>
					</Group>
				</Flex>
				<Flex direction="column" align="start">
					<Text fz={14} mb={5}>
						{vacancy.employer.name}
					</Text>
					{vacancy.work_format && (
						<>
							{vacancy.work_format.map((format) => (
								<Text
									key={format.name}
									fz={9}
									mb={3}
									color={
										format.name === "Гибрид"
											? "White"
											: format.name === "Удалённо"
												? "White"
												: "#0f0f10fb"
									}
									bdrs={3}
									pl={6}
									pr={6}
									bg={
										format.name === "Гибрид"
											? "#0F0F10"
											: format.name === "Удалённо"
												? "#4263EB"
												: "#0F0F101A"
									}
									fw={700}
								>
									{format.name}
								</Text>
							))}
						</>
					)}
					<Text>{vacancy.area.name}</Text>
				</Flex>
				<Flex gap={12} align="start">
					{showButton && (
						<Button onClick={handleViewClick} color="#0F0F10" radius="md">
							Смотреть вакансию
						</Button>
					)}
					<a
						className={styles.link}
						onClick={handleApplyClick}
						href={vacancy.alternate_url}
					>
						<Button
							color="#0F0F10"
							variant={!showButton ? "" : "light"}
							radius="md"
						>
							{!showButton ? "Откликнуться на hh.ru" : "Откликнуться"}
						</Button>
					</a>
				</Flex>
			</Flex>
		</Card>
	)
}
