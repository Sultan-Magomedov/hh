import { Navigate, Route, Routes } from "react-router";
import { Vacancies } from "../pages/Vacancies/Vacancies";
import { Vacancy } from "../pages/Vacancy/Vacancy";
import { MainLayout } from "../layouts/MainLayout";
import { TabsCity } from "../components/TabsCity/TabsCity";
import { NotFound } from "../pages/NotFound/NotFound";
import { Profile } from "../pages/Profile/Profile";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/hh/" element={<MainLayout />}>
        <Route index element={<Navigate to="vacancies" replace />} />
        <Route path="vacancies" element={<Vacancies />}>
          <Route path="moscow" element={<TabsCity />} />
          <Route path="petersburg" element={<TabsCity />} />
        </Route>
        <Route path="about" element={<Profile />} />
        <Route path="vacancies/:id" element={<Vacancy />} />
        <Route path="not-found" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
