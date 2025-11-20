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

export const SkillSet = () => {
  const skills = useTypedSelector((state) => state.filterReducer.skills);
  const dispatch = useTypedDispatch();
  const [newSkill, setNewSkill] = useState("");

  const handleAddSkill = () => {
    if (newSkill.trim()) {
      dispatch(addSkill(newSkill.trim()));
      setNewSkill("");
    }
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    dispatch(removeSkill(skillToRemove));
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
