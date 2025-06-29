import { Container } from "../../components/Container";
import { SetEspecificMovie } from "./SetEspecificMovie";
import { SetAllMovies } from "./SetAllMovies";
import { SearchBar } from "./SearchBar";
import { FeedbackMessage } from "./FeedbackMessage";
import { useMovieContext } from "../../contexts/MovieContext/useMovieContext";
import { MovieContextProvider } from "../../contexts/MovieContext/MovieContextProvider";

import { handleClickMoviesFn } from "../../utils/Movies/handleClickMoviesFn";

MoviesComponents.SetAllMovies = SetAllMovies;
MoviesComponents.SetEspecificMovie = SetEspecificMovie;
MoviesComponents.SearchBar = SearchBar;
MoviesComponents.FeedBackMessage = FeedbackMessage;

export function MoviesComponents() {
	const { state } = useMovieContext();
	const idInputElement = "idInputElement";

	function renderContent() {
		if (state.dontShow.value) {
			return (
				<MoviesComponents.FeedBackMessage
					titleMessage="Você não digitou nenhum filme válido"
					tipMessage="Você pode ver todos os filmes ao deixar o campo vazio"
				/>
			);
		}
		if (state.wantedMovie.value) {
			return <MoviesComponents.SetEspecificMovie />;
		}
		if (state.showAll.value) {
			return <MoviesComponents.SetAllMovies />;
		}
		return (
			<MoviesComponents.FeedBackMessage
				titleMessage="Nesta seção você pode ver os filmes feitos"
				tipMessage="Em caso de não digitar nada você ver a lista de todos os filmes"
			/>
		);
	}

	return (
		<div>
			<MoviesComponents.SearchBar
				idInputElement={idInputElement}
				onSearchHandler={() =>
					handleClickMoviesFn(idInputElement, state)
				}
			/>
			<Container>{renderContent()}</Container>
		</div>
	);
}

export function Movies() {
	return (
		<MovieContextProvider>
			<MoviesComponents />
		</MovieContextProvider>
	);
}
