import { Text } from "@mantine/core";
import "@mantine/core/styles.css";
import Logo from "../../assets/icons/hh.svg?react";
import Profile from "../../assets/icons/user-circle.svg?react";
import styles from "./Header.module.css";
import { useNavigate } from "react-router";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Logo />
        <Text fw={500} m={0}>
          .Frontend
        </Text>
      </div>
      <nav className={styles.menu}>
        <a onClick={() => navigate("/vacancies")}>Вакансии FE</a>
        <a className={styles.profile}>
          <Profile />
          <Text m={0}>Обо мне</Text>
        </a>
      </nav>
    </div>
  );
};
