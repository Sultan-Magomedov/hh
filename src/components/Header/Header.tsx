import { Text } from "@mantine/core";
import "@mantine/core/styles.css";
import Logo from "../../assets/icons/hh.svg?react";
import Profile from "../../assets/icons/user-circle.svg?react";
import styles from "./Header.module.css";
import { NavLink } from "react-router";

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
        <NavLink
          to="/vacancies"
          className={({ isActive }) =>
            `${styles.menuLink} ${isActive ? styles.activeLink : ""}`
          }
        >
          Вакансии FE
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `${styles.menuLink} ${styles.profile} ${isActive ? styles.activeLink : ""}`
          }
        >
          <Profile />
          <Text m={0}>Мой профиль</Text>
        </NavLink>
      </nav>
    </div>
  );
};
