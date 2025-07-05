import { BrowserRouter } from "react-router-dom";

import "./styles/theme.css";
import "./styles/globals.css";

import { Router } from "./components/Router";
import { Toaster } from "react-hot-toast";

export function App() {
	return (
		<BrowserRouter>
			<Router />
			<Toaster position="top-center" />
		</BrowserRouter>
	);
}
