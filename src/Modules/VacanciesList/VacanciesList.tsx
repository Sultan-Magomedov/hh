import { useEffect } from "react";
import { MyCard } from "../../components/MyCard/MyCard";
import { fetchVacancies } from "../../store/reducers/searchSlice";
import { useTypedDispatch, useTypedSelector } from "../../hooks/redux";
import { Box, Text } from "@mantine/core";

export const Vacancies = () => {
  const { vacancies, error } = useTypedSelector((state) => state.searchReducer);
  const dispatch = useTypedDispatch();

  useEffect(() => {
    dispatch(fetchVacancies());
  }, [dispatch]);
  return (
    <>
      {error && (
        <Box
          style={{
            maxWidth: "659px",
            padding: "24px",
            wordWrap: "break-word",
            whiteSpace: "normal",
          }}
        >
          <Text size="lg" fw={700}>
            {error}
          </Text>
        </Box>
      )}
      {vacancies.map((vacancy) => (
        <MyCard
          key={vacancy.id}
          area={vacancy.area.name}
          name={vacancy.name}
          exp={vacancy.experience.name}
          company={vacancy.employer.name}
          form={vacancy.work_format?.[0]?.name}
          from={vacancy.salary?.from}
          to={vacancy.salary?.to}
          currency={vacancy.salary?.currency}
          url={vacancy.alternate_url}
        />
      ))}
    </>
  );
};
