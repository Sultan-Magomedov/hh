import { useEffect } from "react";
import { MyCard } from "../../components/MyCard/MyCard";
import { fetchVacancies } from "../../store/reducers/searchSlice";
import { useTypedDispatch, useTypedSelector } from "../../hooks/redux";
import { Box, Text } from "@mantine/core";
import styles from "./VacanciesList.module.css";
import { useLocation, useSearchParams } from "react-router";
import { addSkill, setCityId, setName } from "../../store/reducers/filterSlice";

export const VacanciesList = () => {
  const { vacancies, error } = useTypedSelector((state) => state.searchReducer);
  const dispatch = useTypedDispatch();
  const [searchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/FE-project-routing/vacancies") return;
    const textUrl = searchParams.get("text") || "";
    const cityUrl = searchParams.get("area") || "";
    const skillsUrl = searchParams.get("skills")?.split(",") || [];
    dispatch(setName(textUrl));
    dispatch(setCityId(cityUrl));
    skillsUrl.forEach((skill) => dispatch(addSkill(skill)));
    dispatch(fetchVacancies());
  }, [dispatch, searchParams, location.pathname]);
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
