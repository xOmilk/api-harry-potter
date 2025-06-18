import { BrowserRouter } from "react-router-dom";

import "./styles/theme.css";
import "./styles/globals.css";

import { Router } from "./components/Router";

export function App() {
	return (
		<BrowserRouter>
			<Router />
		</BrowserRouter>
	);
}
