import { AppShell } from "@mantine/core"
import "./App.css"
import { Header } from "./components/Header/Header"
import { AppRoutes } from "./routes/routes"

function App() {
	return (
		<AppShell header={{ height: 60 }}>
			<AppShell.Header>
				<Header />
			</AppShell.Header>
			<AppShell.Main>
				<AppRoutes />
			</AppShell.Main>
		</AppShell>
	)
}

export default App
