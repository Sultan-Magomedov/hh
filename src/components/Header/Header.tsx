import { Text } from "@mantine/core";
import "@mantine/core/styles.css";
import Logo from "../../assets/icons/hh.svg?react";
import Profile from "../../assets/icons/user-circle.svg?react";
import styles from "./Header.module.css";
import { CustomLink } from "../../Ui/CustomLink/CustomLink";

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Logo />
        <Text fw={500} m={0}>
          .Frontend
        </Text>
      </div>
      <nav className={styles.menu}>
        <CustomLink className={styles.link} to="vacancies">
          Вакансии FE
        </CustomLink>
        <CustomLink className={styles.link} to="about">
          <div className={styles.profile}>
            <Profile />
            <Text m={0}>Обо мне</Text>
          </div>
        </CustomLink>
      </nav>
    </div>
  );
};
