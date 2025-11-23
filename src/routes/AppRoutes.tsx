import { Navigate, Route, Routes } from "react-router";
import { Vacancies } from "../pages/Vacancies";
import { Vacancy } from "../pages/Vacancy";
import { MainLayout } from "../layouts/MainLayout";
import { TabsCity } from "../components/TabsCity/TabsCity";
import { NotFound } from "../pages/NotFound";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Navigate to="vacancies" replace />} />
        <Route path="vacancies" element={<Vacancies />}>
          <Route path="moscow" element={<TabsCity />} />
          <Route path="petersburg" element={<TabsCity />} />
        </Route>
        <Route path="vacancies/:id" element={<Vacancy />} />
        <Route path="not-found" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
