import { Navigate, useLocation } from "react-router"
import { useTypedSelector } from "../../hooks/redux"

interface ProtectedRouteProps {
	children: React.ReactNode
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
	const isAuth = useTypedSelector((state) => state.authReducer.isAuth)
	const location = useLocation()

	if (!isAuth) {
		return <Navigate to="/auth" state={{ from: location }} replace />
	}

	return children
}
