import { Link } from "react-router-dom";

import styles from "./styles.module.css";

export function Navbar() {
	return (
		<ul className={styles.list}>
			<li className={styles.item}>
				<Link to="/">Home</Link>
			</li>
			<li className={styles.item}>
				<Link to="/movies">Filmes</Link>
			</li>
			<li className={styles.item}>
				<Link to="/characters">Personagens</Link>
			</li>
		</ul>
	);
}
