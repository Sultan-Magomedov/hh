import { TextInput } from "@mantine/core"
import "@mantine/core/styles.css"
import Search from "../../assets/icons/search.svg?react"

import { useTypedDispatch, useTypedSelector } from "../../hooks/redux"
import { setName } from "../../store/reducers/filterSlice"
import React, { useEffect, useState } from "react"
import { useDebouncedValue } from "../../hooks/useDebouncedValue"

export const Input = () => {
	const { name } = useTypedSelector((state) => state.filterReducer)
	const dispatch = useTypedDispatch()
	const [value, setValue] = useState(name)
	const debouncedValue = useDebouncedValue(value, 500)

	useEffect(() => {
		setValue(name)
	}, [name])

	useEffect(() => {
		dispatch(setName(debouncedValue))
	}, [debouncedValue, dispatch])

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.currentTarget.value)
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
		/>
	)
}
