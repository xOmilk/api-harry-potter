import { Outlet } from "react-router-dom";

import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { Heading } from "../../components/Heading";
import { ThemeContextProvider } from "../../contexts/ThemeContext/ThemeContextProvider";

import "../../styles/theme.css";
import "../../styles/globals.css";

import styles from "./styles.module.css";

export function DefaultLayout() {
	return (
		<ThemeContextProvider>
			<div className="app-container">
				<Navbar />
				<main className="main-content">
					<Heading>
						<h1 className={styles.title}>Harry Potter Wiki</h1>
					</Heading>

					<Outlet />
				</main>
				<Footer />
			</div>
		</ThemeContextProvider>
	);
}
