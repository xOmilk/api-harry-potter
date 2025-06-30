import { Link } from "react-router-dom";

import styles from "./styles.module.css";
import { Theme } from "../Theme";
import { AiFillHome } from "react-icons/ai";
import { FaFilm, FaPalette, FaUserFriends } from "react-icons/fa";
import { GiMagicSwirl } from "react-icons/gi";

export function Navbar() {
	return (
		<nav>
			<ul className={styles.list}>
				<li className={styles.item}>
					<Link to="/">
						<AiFillHome /> Home
					</Link>
				</li>
				<li className={styles.item}>
					<Link to="/movies">
						<FaFilm /> Filmes
					</Link>
				</li>
				<li className={styles.item}>
					<Link to="/characters">
						<FaUserFriends /> Personagens
					</Link>
				</li>
				<li className={styles.item}>
					<Link to="/spells">
						<GiMagicSwirl /> Feitiços
					</Link>
				</li>
				<li className={styles.item}>
					<FaPalette /> {/* ou <Theme /> se for seu botão de tema */}
				</li>
			</ul>
		</nav>
	);
}
