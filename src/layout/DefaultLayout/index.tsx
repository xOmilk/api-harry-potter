import { Outlet } from "react-router-dom";

import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { Heading } from "../../components/Heading";
import { ThemeContextProvider } from "../../contexts/ThemeContext/ThemeContextProvider";

import "../../styles/theme.css";
import "../../styles/globals.css";

export function DefaultLayout() {
	return (
		<ThemeContextProvider>
			<div className="app-container">
				<Navbar />
				<main className="main-content">
					<Heading>Harry Potter Wiki</Heading>

					<Outlet />
				</main>
				<Footer />
			</div>
		</ThemeContextProvider>
	);
}
