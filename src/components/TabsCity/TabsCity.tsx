import { Tabs } from "@mantine/core";
import styles from "./TabsCity.module.css";
import { useNavigate } from "react-router";
import { useTypedDispatch, useTypedSelector } from "../../hooks/redux";
import { useEffect } from "react";
import { fetchVacancies } from "../../store/reducers/searchSlice";
import { setCityId } from "../../store/reducers/filterSlice";

export const TabsCity = () => {
  const navigate = useNavigate();
  const { idCity } = useTypedSelector((state) => state.filterReducer);
  const dispatch = useTypedDispatch();

  const changeHandler = (value: string) => {
    if (!value) return;
    dispatch(setCityId(value));

    const path = value === "1" ? "moscow" : value === "2" ? "petersburg" : "";

    if (path) {
      navigate(`${path}`);
    }

    dispatch(fetchVacancies());
  };

  useEffect(() => {
    dispatch(fetchVacancies());
  }, [dispatch]);

  return (
    <Tabs value={idCity} onChange={(value) => changeHandler(value || "")}>
      <Tabs.List className={styles.list}>
        <Tabs.Tab value="1">Москва</Tabs.Tab>
        <Tabs.Tab value="2">Санкт-Петербург</Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
};
