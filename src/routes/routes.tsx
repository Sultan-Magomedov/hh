import { Navigate, Route, Routes } from "react-router"
import { Vacancies } from "../pages/Vacancies.tsx"
import { Vacancy } from "../pages/Vacancy.tsx"
import { About } from "../pages/About.tsx"
import { NotFound } from "../pages/NotFound.tsx"
import { Auth } from "../pages/Auth.tsx"
import { ProtectedRoute } from "../components/ProtectedRoute/ProtectedRoute.tsx"

export const AppRoutes = () => {
	const navigationRoutes = [
		{ path: "/", element: <Vacancies /> },
		{ path: "/vacancies", element: <Vacancies /> },
		{
			path: "/vacancies/:id",
			element: (
				<ProtectedRoute>
					<Vacancy />,
				</ProtectedRoute>
			),
		},
		{ path: "/auth", element: <Auth /> },
		{
			path: "/profile",
			element: (
				<ProtectedRoute>
					<About />
				</ProtectedRoute>
			),
		},
		{ path: "/about", element: <Navigate to="/profile" replace /> },
		{
			path: "*",
			element: <NotFound />,
		},
	]
	return (
		<Routes>
			{navigationRoutes.map((route) => (
				<Route key={route.path} path={route.path} element={route.element} />
			))}
		</Routes>
	)
}
