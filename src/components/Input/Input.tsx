import { Loader, TextInput } from "@mantine/core"
import "@mantine/core/styles.css"
import Search from "../../assets/icons/search.svg?react"

import { useTypedDispatch, useTypedSelector } from "../../hooks/redux"
import { setName } from "../../store/reducers/filterSlice"
import React, { useEffect, useState, useTransition } from "react"

export const Input = () => {
	const { name } = useTypedSelector((state) => state.filterReducer)
	const dispatch = useTypedDispatch()
	const [value, setValue] = useState(name)
	const [isPending, startTransition] = useTransition()

	useEffect(() => {
		setValue(name)
	}, [name])

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = e.currentTarget.value
		setValue(newValue)
		startTransition(() => {
			dispatch(setName(newValue))
		})
	}

	return (
		<TextInput
			w={403}
			fw={400}
			leftSection={<Search />}
			value={value}
			onChange={handleChange}
			size="md"
			radius="md"
			placeholder="Должность или название компании"
			rightSection={isPending ? <Loader size="xs" /> : null}
		/>
	)
}
