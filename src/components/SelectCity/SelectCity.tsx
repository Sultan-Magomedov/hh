import { Box, Select } from "@mantine/core";
import "@mantine/core/styles.css";
import styles from "./SelectCity.module.css";
import Map from "../../assets/icons/map-pin.svg?react";
import { setCityId } from "../../store/reducers/filterSlice";
import { fetchVacancies } from "../../store/reducers/searchSlice";
import { useTypedDispatch, useTypedSelector } from "../../hooks/redux";

export const SelectCity = () => {
  const dispatch = useTypedDispatch();
  const idCity = useTypedSelector((state) => state.filterReducer.idCity);

  const data = [
    { value: "", label: "Все города" },
    { value: "1", label: "Москва" },
    { value: "2", label: "Санкт-Петербург" },
  ];

  const handleCityIdChange = (value: string | null) => {
    const selectedCityId = value || "";
    dispatch(setCityId(selectedCityId));
    dispatch(fetchVacancies());
  };
  return (
    <Box className={styles.wrapper}>
      <Select
        leftSection={<Map />}
        placeholder="Выберите город"
        data={data}
        value={idCity === "" ? null : idCity}
        onChange={handleCityIdChange}
        searchable
      />
    </Box>
  );
};
