import { Box, Card, Text } from "@mantine/core";
import { MyCard } from "../components/MyCard/MyCard";
import { useParams } from "react-router";
import { useTypedSelector } from "../hooks/redux";

export const Vacancy = () => {
  const { id } = useParams();
  const vacancies = useTypedSelector((state) => state.searchReducer.vacancies);
  const foundVacancy = vacancies.filter((vacancy) => vacancy.id == id);
  return (
    <>
      <Box mt={52}>
        {foundVacancy.map((vacancy) => (
          <MyCard key={vacancy.id} vacancy={vacancy} showButton={false} />
        ))}
      </Box>
      {Boolean(foundVacancy[0]) && (
        <Card padding={24} radius={12} w={659} mt={29}>
          <Text>{foundVacancy[0].snippet.requirement}</Text>
          <Text>{foundVacancy[0].snippet.responsibility}</Text>
        </Card>
      )}
    </>
  );
};
