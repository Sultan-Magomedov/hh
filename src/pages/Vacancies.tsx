import { Flex } from "@mantine/core";
import { InputBlock } from "../components/inputBlock/InputBlock";
import { SkillSet } from "../components/SkillSet/SkillSet";
import { SelectCity } from "../components/SelectCity/SelectCity";
import { MyPagination } from "../components/MyPagination/MyPagination";
import { VacanciesList } from "../Modules/VacanciesList/VacanciesList";

export const Vacancies = () => {
  return (
    <>
      <InputBlock />
      <Flex gap={24} w={1000}>
        <Flex gap={10} direction="column">
          <SkillSet />
          <SelectCity />
        </Flex>
        <Flex gap={10} direction="column">
          <VacanciesList />
          <MyPagination />
        </Flex>
      </Flex>
    </>
  );
};
