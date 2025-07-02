import { MoviesComponents } from "..";
import { useMovieContext } from "../../../contexts/MovieContext/useMovieContext";
import type { MovieStatesModel } from "../../../models/MovieStatesModel";
import type { Movie } from "../code/MoviesTypes";
import styles from "./styles.module.css";

export function SetAllMovies(/* { allMovies, onSelectMovie }: SetAllMoviesProps */) {
	const { state } = useMovieContext();
	const allMovies = state.allMoviesData.value;

	if (allMovies.length === 0) return;

	function handleSelectMovie(movie: Movie, state: MovieStatesModel) {
		state.wantedMovie.setWantedMovie(movie);
		state.showAll.setShowAll(false); // Esconde a lista ao selecionar um filme

		console.log(state);
	}

	return (
		<div className={styles.container}>
			<MoviesComponents.FeedBackMessage
				titleMessage="Por não digitar nada, foi retornado todos os filmes"
				tipMessage={
					<span>
						<u>Clique</u> em algum filme para ver detalhes
					</span>
				}
			/>
			<div className={styles.listOfMovies}>
				{allMovies.map((element) => (
					<div
						className={styles.movie}
						onClick={() => handleSelectMovie(element, state)}
					>
						<img
							src={element.attributes.poster}
							alt="Poster Imagem"
							title="Poster Imagem"
						/>
						<h3>{element.attributes.title}</h3>
						<p>{element.id}</p>
					</div>
				))}
			</div>
		</div>
	);
}
