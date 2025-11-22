import { useState } from "react";
import {
  TextInput,
  Button,
  Pill,
  Box,
  InputWrapper,
  Flex,
} from "@mantine/core";
import "@mantine/core/styles.css";
import styles from "./SkillSet.module.css";
import { useTypedDispatch, useTypedSelector } from "../../hooks/redux";
import { addSkill, removeSkill } from "../../store/reducers/filterSlice";
import { useSearchParams } from "react-router";

export const SkillSet = () => {
  const { skills, name, idCity } = useTypedSelector(
    (state) => state.filterReducer
  );
  const dispatch = useTypedDispatch();
  const [newSkill, setNewSkill] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const handleAddSkill = () => {
    if (newSkill.trim()) {
      dispatch(addSkill(newSkill.trim()));
      setNewSkill("");
      searchParams.set("skills", [...skills, newSkill.trim()].join(","));
      if (name) {
        searchParams.set("text", name);
      } else {
        searchParams.delete("text");
      }

      searchParams.set("area", idCity);
      setSearchParams(searchParams);
      setSearchParams(searchParams);
    }
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    dispatch(removeSkill(skillToRemove));
    const newSkills = skills.filter((skill) => skill !== skillToRemove);
    if (newSkills.length > 0) {
      searchParams.set("skills", newSkills.join(","));
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
      handleAddSkill();
    }
  };

  return (
    <Box className={styles.wrapper}>
      <InputWrapper label="Ключевые навыки">
        <Flex justify="space-between" gap={8} mt="xs">
          <TextInput
            size="xs"
            placeholder="Навык"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            onKeyDown={handleKeyDown}
            style={{ flexGrow: 1 }}
          />
          <Button
            w={34}
            h={30}
            p={0}
            radius={8}
            onClick={handleAddSkill}
            variant="filled"
            size="sm"
          >
            +
          </Button>
        </Flex>
      </InputWrapper>
      <Box mt="sm" className={styles.box}>
        {skills.map((skill: string) => (
          <Pill
            key={skill}
            withRemoveButton
            onRemove={() => handleRemoveSkill(skill)}
          >
            {skill}
          </Pill>
        ))}
      </Box>
    </Box>
  );
};
