import { Box, Card, Text } from "@mantine/core";
import { MyCard } from "../../components/MyCard/MyCard";
import { Navigate, useParams } from "react-router";
import { useTypedSelector } from "../../hooks/redux";
import type { VacancyType } from "../../types";

export const Vacancy = () => {
  const { id } = useParams();
  const vacancies = useTypedSelector((state) => state.searchReducer.vacancies);
  const foundVacancy = vacancies.find(
    (vacancy) => vacancy.id.toString() === id
  ) as VacancyType;

  if (!foundVacancy) {
    return <Navigate to="/not-found" replace />;
  }

  return (
    <>
      <Box mt={52}>
        <MyCard
          key={foundVacancy.id}
          vacancy={foundVacancy}
          showButton={false}
        />
      </Box>
      <Card padding={24} radius={12} w={659} mt={29}>
        <Text>{foundVacancy.snippet.requirement}</Text>
        <Text>{foundVacancy.snippet.responsibility}</Text>
      </Card>
    </>
  );
};
