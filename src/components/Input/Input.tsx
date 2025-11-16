import { Button, TextInput } from "@mantine/core";
import "@mantine/core/styles.css";
import Search from "../../assets/icons/search.svg?react";
import styles from "./Input.module.css";
import { useTypedDispatch, useTypedSelector } from "../../hooks/redux";
import { setName } from "../../store/reducers/filterSlice";
import { fetchVacancies } from "../../store/reducers/searchSlice";

export const Input = () => {
  const title = useTypedSelector((state) => state.filterReducer.name);
  const dispatch = useTypedDispatch();

  const handleFindButtonClick = () => {
    dispatch(fetchVacancies());
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      dispatch(fetchVacancies());
    }
  };

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setName(e.target.value));
  };

  return (
    <label className={styles.group}>
      <TextInput
        w={403}
        fw={400}
        leftSection={<Search />}
        value={title}
        onChange={handleFilter}
        onKeyDown={handleKeyDown}
        size="md"
        radius="md"
        placeholder="Должность или название компании"
      />
      <Button
        fw={400}
        w={93}
        h={42}
        type="button"
        onClick={handleFindButtonClick}
      >
        Найти
      </Button>
    </label>
  );
};
