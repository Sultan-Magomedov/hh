import { Button, TextInput } from "@mantine/core";
import "@mantine/core/styles.css";
import Search from "../../assets/icons/search.svg?react";
import styles from "./Input.module.css";
import { useTypedDispatch, useTypedSelector } from "../../hooks/redux";
import { setName } from "../../store/reducers/filterSlice";
import { fetchVacancies } from "../../store/reducers/searchSlice";
import { useSearchParams } from "react-router";

export const Input = () => {
  const { name, idCity, skills } = useTypedSelector(
    (state) => state.filterReducer
  );
  const dispatch = useTypedDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleFindButtonClick = () => {
    dispatch(fetchVacancies());
    if (skills.length > 0) {
      searchParams.set("skills", skills.join(","));
    } else {
      searchParams.delete("skills");
    }

    if (name) {
      searchParams.set("text", name);
    } else {
      searchParams.delete("text");
    }

    searchParams.set("area", idCity);
    setSearchParams(searchParams);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleFindButtonClick();
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
        value={name}
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
