import {
	Anchor,
	Button,
	Container,
	Paper,
	PasswordInput,
	Stack,
	Text,
	TextInput,
} from "@mantine/core"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useLoginMutation, useRegisterMutation } from "../store/api/authApi"
import type { ApiError, AuthFormData } from "../types"
import { setCredentials } from "../store/reducers/authSlice"
import { useTypedDispatch } from "../hooks/redux"
import { useLocation, useNavigate } from "react-router"

export const Auth = () => {
	const [isRegister, setIsRegister] = useState<boolean>(false)
	const dispatch = useTypedDispatch()
	const navigate = useNavigate()
	const location = useLocation()
	const from = location.state?.from?.pathname || "/vacancies"
	const [registerUser, { isLoading: isRegLoading }] = useRegisterMutation()
	const [loginUser, { isLoading: isLoginLoading }] = useLoginMutation()
	const {
		register,
		formState: { errors, isValid },
		handleSubmit,
		reset,
	} = useForm<AuthFormData>({ mode: "onBlur" })

	const onSubmit = async (data: AuthFormData) => {
		try {
			const res = isRegister
				? await registerUser(data).unwrap()
				: await loginUser(data).unwrap()
			dispatch(setCredentials(res))
			navigate(from, { replace: true })
			alert("Успешно!")
		} catch (err) {
			const error = err as ApiError
			alert(error.data || "Ошибка")
		}
	}

	return (
		<Container size={420} my={40}>
			<Text size="lg" fw={500} ta="center">
				{isRegister ? "Регистрация" : "Вход"}
			</Text>
			<Paper withBorder shadow="md" p={30} mt={30} radius="md">
				<form onSubmit={handleSubmit(onSubmit)}>
					<Stack>
						{isRegister && (
							<TextInput
								label="Name"
								{...register("name", {
									required: "Поле обязательно",
								})}
								error={errors.name?.message as string}
							/>
						)}

						<TextInput
							label="Email"
							{...register("email", {
								required: "Поле обязательно",
								pattern: {
									value: /^\S+@\S+$/,
									message: "Неверный формат почты",
								},
							})}
							error={errors.email?.message as string}
						/>
						<PasswordInput
							label="Password"
							{...register("password", {
								required: "Поле обязательно",
								minLength: { value: 6, message: "Минимум 6 символов" },
							})}
							error={errors.password?.message as string}
						/>
						<Button
							type="submit"
							fullWidth
							mt="xl"
							disabled={!isValid}
							loading={isRegLoading || isLoginLoading}
						>
							{isRegister ? "Зарегистрироваться" : "Войти"}
						</Button>
					</Stack>
				</form>
				<Anchor
					component="button"
					type="button"
					size="xs"
					mt="md"
					onClick={() => {
						setIsRegister(!isRegister)
						reset()
					}}
				>
					{isRegister ? "Уже есть аккаунт? Войти" : "Нет аккаунта? Создать"}
				</Anchor>
			</Paper>
		</Container>
	)
}
