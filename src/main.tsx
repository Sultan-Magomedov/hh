import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.tsx"
import { Provider } from "react-redux"
import { setupStore } from "./store/store.ts"
import { MantineProvider } from "@mantine/core"
import { Notifications } from "@mantine/notifications"
import "@mantine/core/styles.css"
import "@mantine/notifications/styles.css"
import { HashRouter } from "react-router"

const store = setupStore()
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<HashRouter>
			<MantineProvider>
				<Provider store={store}>
					<Notifications />
					<App />
				</Provider>
			</MantineProvider>
		</HashRouter>
	</StrictMode>,
)
