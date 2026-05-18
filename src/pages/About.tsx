import { Button, Card, Text } from "@mantine/core"
import { useTypedDispatch, useTypedSelector } from "../hooks/redux"

import { logout } from "../store/reducers/authSlice"

export const About = () => {
	const dispatch = useTypedDispatch()

	const user = useTypedSelector((state) => state.authReducer.user)

	const handleLogout = () => {
		dispatch(logout())
	}
	return (
		<>
			<Card padding={24} radius={12} w={659}>
				<Text size="xl" fw={700} mb={12}>
					Мой профиль
				</Text>
				{user ? (
					<>
						<Text size="md" fw={400} mb={12}>
							Имя: {user?.name}
						</Text>
						<Button color="red" onClick={handleLogout}>
							Выйти
						</Button>
					</>
				) : (
					<Text size="md" fw={400} mb={12}>
						Пусто
					</Text>
				)}
			</Card>
		</>
	)
}
