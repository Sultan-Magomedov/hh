import { Route, Routes } from "react-router";
import { Vacancies } from "../pages/Vacancies";
import { Vacancy } from "../pages/Vacancy";

export const AppRoutes = () => {
  const navigationRoutes = [
    { path: "/vacancies", element: <Vacancies /> },
    { path: "/vacancies/:id", element: <Vacancy /> },
  ];
  return (
    <Routes>
      {navigationRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};
