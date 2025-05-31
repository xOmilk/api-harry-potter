import type { Movie } from "../../types";

import styles from "./styles2.module.css";

type SetAllMoviesProps = {
	allMovies: Movie[];
	onSelectMovie: (movie: Movie) => void;
};

export function SetAllMovies({ allMovies, onSelectMovie }: SetAllMoviesProps) {
	return (
		<div className={styles.container}>
			<p>Por não digitar nada, foi retornado todos os filmes</p>
			<p><u>Clique</u> em algum filme para selecionar</p>
			<div className={styles.listOfMovies}>
				{allMovies.map((element) => (
					<div
						className={styles.movie}
						onClick={() => onSelectMovie(element)}
					>
						<img
							src={element.attributes.poster}
							alt="Poster Imagem"
							title="Poster Imagem"
						/>
						<h3>{element.attributes.title}</h3>
						<pre>{element.id}</pre>
					</div>
				))}
			</div>
		</div>
	);
}
