import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Movies } from "./pages/Movies";

import "./styles/theme.css";
import "./styles/globals.css";
import { Spells } from "./pages/Spells";
import { Characters } from "./pages/Characters";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

export function App() {
	return (
		<BrowserRouter>
			<Navbar />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/characters" element={<Characters />} />
				<Route path="/movies" element={<Movies />} />
			</Routes>

			<Footer />
		</BrowserRouter>
	);
}
