import { Flex } from "@mantine/core";
import { InputBlock } from "../../components/inputBlock/InputBlock";
import { SkillSet } from "../../components/SkillSet/SkillSet";
import { TabsCity } from "../../components/TabsCity/TabsCity";
import { VacanciesList } from "../../Modules/VacanciesList/VacanciesList";
import { MyPagination } from "../../components/MyPagination/MyPagination";

export const Vacancies = () => {
  return (
    <>
      <InputBlock />
      <Flex gap={24} w={1000}>
        <Flex gap={10} direction="column">
          <SkillSet />
        </Flex>
        <Flex gap={24} direction="column">
          <TabsCity />
          <Flex gap={10} direction="column">
            <VacanciesList />
          </Flex>
          <MyPagination />
        </Flex>
      </Flex>
    </>
  );
};
