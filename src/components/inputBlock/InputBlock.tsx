import { Flex, Text } from "@mantine/core";
import "@mantine/core/styles.css";
import { Input } from "../Input/Input";

export const InputBlock = () => {
  return (
    <Flex justify="space-between" mt={52} mb={24}  >
      <Flex w={366} h={66} direction="column" align="flex-start">
        <Text fw={700} fz="h2">
          Список вакансий
        </Text>
        <Text fw={500} fz={20}>
          по профессии Frontend-разработчик
        </Text>
      </Flex>
      <Input />
    </Flex>
  );
};
