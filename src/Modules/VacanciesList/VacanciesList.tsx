import { useEffect, useRef } from "react";
import { MyCard } from "../../components/MyCard/MyCard";
import { fetchVacancies } from "../../store/reducers/searchSlice";
import { useTypedDispatch, useTypedSelector } from "../../hooks/redux";
import { Box, Text } from "@mantine/core";
import {
  setCityId,
  setName,
  setPage,
  setSkills,
} from "../../store/reducers/filterSlice";
import { useSearchParams } from "react-router";
import styles from "./VacanciesList.module.css";

export const VacanciesList = () => {
  const { vacancies, error } = useTypedSelector((state) => state.searchReducer);
  const dispatch = useTypedDispatch();
  const { name, idCity, page, find, skills } = useTypedSelector(
    (state) => state.filterReducer
  );
  const skillsA = skills.join(",");
  const [searchParams, setSearchParams] = useSearchParams();
  const filtersRef = useRef({ name, idCity, page, skillsA });
  const searchText = `${name}/${skills.join(",")}`;

  useEffect(() => {
    const urlText = searchParams.get("text") || "";
    const urlArea = searchParams.get("area") || "";
    const urlPageParam = searchParams.get("page");
    const parsedPage = parseInt(urlPageParam || "0", 10);
    const urlPage = isNaN(parsedPage) ? 0 : parsedPage;

    if (urlText !== searchText) {
      const parts = urlText.split("/");
      const searchName = parts[0].trim();
      dispatch(setName(searchName));

      if (parts.length > 1) {
        const searchSkills = parts[1]
          .split(",")
          .map((skill) => skill.trim())
          .filter((skill) => skill.length > 0);

        dispatch(setSkills(searchSkills));
      }
    }
    if (urlArea !== idCity) {
      dispatch(setCityId(urlArea));
    }
    if (urlPage !== page) {
      dispatch(setPage(urlPage));
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, searchParams]);

  useEffect(() => {
    if (
      filtersRef.current.name !== name ||
      filtersRef.current.idCity !== idCity ||
      filtersRef.current.page !== page ||
      filtersRef.current.skillsA !== skills.join(",")
    ) {
      setSearchParams({
        text: searchText,
        area: idCity,
        page: page.toString(),
      });
      filtersRef.current = { name, idCity, page, skillsA };

      return;
    }

    dispatch(fetchVacancies());
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, setSearchParams, idCity, page, find, skills]);
  return (
    <>
      {error && (
        <Box className={styles.box}>
          <Text size="lg" fw={700}>
            {error}
          </Text>
        </Box>
      )}
      {vacancies.map((vacancy) => (
        <MyCard key={vacancy.id} vacancy={vacancy} showButton={true} />
      ))}
    </>
  );
};
