import { Tabs } from "@mantine/core";
import styles from "./TabsCity.module.css";
import { useNavigate, useSearchParams } from "react-router";
import { useTypedDispatch, useTypedSelector } from "../../hooks/redux";
import { useEffect } from "react";
import { fetchVacancies } from "../../store/reducers/searchSlice";
import { setCityId } from "../../store/reducers/filterSlice";

export const TabsCity = () => {
  const navigate = useNavigate();
  const { idCity, skills, name } = useTypedSelector(
    (state) => state.filterReducer
  );
  const dispatch = useTypedDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const changeHandler = (value: string) => {
    if (!value) return;
    dispatch(setCityId(value));

    const path = value === "1" ? "moscow" : value === "2" ? "petersburg" : "";

    if (path) {
      navigate(`${path}`);
    }

    if (skills.length > 0) {
      searchParams.set("skills", skills.join(","));
    } else {
      searchParams.delete("skills");
    }

    if (name) {
      searchParams.set("text", name);
    } else {
      searchParams.delete("text");
    }

    searchParams.set("area", idCity);
    setSearchParams(searchParams);

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
