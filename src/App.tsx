import "./App.css";
import { Header } from "./components/Header/Header";
import { InputBlock } from "./components/inputBlock/InputBlock";
import { SelectCity } from "./components/SelectCity/SelectCity";
import { SkillSet } from "./components/SkillSet/SkillSet";
import { MyPagination } from "./components/MyPagination/MyPagination";
import { Vacancies } from "./Modules/VacanciesList/VacanciesList";
import { Flex } from "@mantine/core";

function App() {
  return (
    <>
      <Header />
      <InputBlock />
      <Flex gap={24} w={1000}>
        <Flex gap={10} direction="column">
          <SkillSet />
          <SelectCity />
        </Flex>
        <Flex gap={10} direction="column">
          <Vacancies />
          <MyPagination />
        </Flex>
      </Flex>
    </>
  );
}

export default App;
