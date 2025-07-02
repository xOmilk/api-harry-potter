import { Link } from "react-router-dom";

import styles from "./styles.module.css";
import { Theme } from "../Theme";
import { AiFillHome } from "react-icons/ai";
import { FaFilm, FaUserFriends } from "react-icons/fa";
import { GiMagicSwirl } from "react-icons/gi";

export function Navbar() {
	return (
		<nav className={styles.listContainer}>
			<ul className={styles.ulList}>
				<li className={`${styles.item} ${styles.home}`}>
					<Link to="/">
						<AiFillHome />
						<p>Home</p>
					</Link>
				</li>
				<li className={`${styles.item} ${styles.movies}`}>
					<Link to="/movies">
						<FaFilm />
						<p>Filmes</p>
					</Link>
				</li>
				<li className={`${styles.item} ${styles.characters}`}>
					<Link to="/characters">
						<FaUserFriends />
						<p>Personagens</p>
					</Link>
				</li>
				<li className={`${styles.item} ${styles.spells}`}>
					<Link to="/spells">
						<GiMagicSwirl />
						<p>Feitiços</p>
					</Link>
				</li>
				<li className={`${styles.item} ${styles.theme}`}>
					<Theme />
				</li>
			</ul>
		</nav>
	);
}
