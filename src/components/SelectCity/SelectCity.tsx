import { Box, Select } from "@mantine/core"
import "@mantine/core/styles.css"
import styles from "./SelectCity.module.css"
import Map from "../../assets/icons/map-pin.svg?react"
import { setCityId } from "../../store/reducers/filterSlice"
import { useTypedDispatch, useTypedSelector } from "../../hooks/redux"

export const SelectCity = () => {
	const dispatch = useTypedDispatch()
	const idCity = useTypedSelector((state) => state.filterReducer.idCity)

	const data = [
		{ value: "", label: "Все города" },
		{ value: "Москва", label: "Москва" },
		{ value: "Санкт-Петербург", label: "Санкт-Петербург" },
	]

	return (
		<Box className={styles.wrapper}>
			<Select
				leftSection={<Map />}
				placeholder="Выберите город"
				data={data}
				value={idCity || ""}
				onChange={(value) => dispatch(setCityId(value ?? ""))}
				searchable
				clearable
			/>
		</Box>
	)
}
