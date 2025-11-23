import { Card, Text } from "@mantine/core";
import styles from "./Profile.module.css";

export const Profile = () => {
  return (
    <Card className={styles.card}>
      <Text fw={700} fz="h2">
        Иван Васильев
      </Text>
      <Text fz={16}>
        Привет! Я - Frontend-разработчик. Пишу приложения на React + TypeScript
        + Redux Toolkit.
      </Text>
    </Card>
  );
};
