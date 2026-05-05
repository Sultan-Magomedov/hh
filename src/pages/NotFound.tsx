import { Box, Card, Text } from "@mantine/core";
import { Link } from "react-router";

export const NotFound = () => {
  return (
    <Box mt={52}>
      <Card padding={24} radius={12} w={659}>
        <Text size="xl" fw={700} mb={12}>
          404 - Страница не найдена
        </Text>
        <Text mb={8}>Похоже, вы перешли по несуществующему адресу.</Text>
        <Link to="/vacancies">Перейти к вакансиям</Link>
      </Card>
    </Box>
  );
};
