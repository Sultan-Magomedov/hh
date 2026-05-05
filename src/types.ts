interface IdNamePair {
	name?: string
}
export interface VacancyType {
	id: string
	name: string
	area: { name: string }
	experience: { name: string }
	employer: { name: string }
	work_format: IdNamePair[] | null
	salary: {
		currency: string
		from: number | null
		to: number | null
	} | null
	alternate_url: string
	snippet: {
		requirement: string
		responsibility: string
	}
}

export interface User {
	id?: string
	name?: string
	email: string
	password: string
}

export type AuthFormData = Pick<User, "name" | "email" | "password">

export interface AuthResponse {
	accessToken: string
	user: User
}
export interface ApiError {
	data: string
	status: number
}
