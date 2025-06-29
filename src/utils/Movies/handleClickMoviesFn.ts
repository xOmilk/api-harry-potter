import type { MovieStatesModel } from "../../models/MovieStatesModel";
import { searchMovie } from "../../pages/Movies/code/apiRequest";

export async function handleClickMoviesFn(
	idInputElement: string,
	state: MovieStatesModel
) {
	const input = document.getElementById(idInputElement) as HTMLInputElement;
	const inputValue = input.value;

	const result = await searchMovie(inputValue);

	if (result) {
		state.dontShow.setDontShow(false);
		if (Array.isArray(result)) {
			// Seleciona todos os filmes

			state.allMoviesData.setAllMoviesData(result);
			state.showAll.setShowAll(true);
			state.wantedMovie.setWantedMovie(null);
		} else {
			// Somente um filme
			console.log("Filme individual", result);

			state.wantedMovie.setWantedMovie(result);
			state.showAll.setShowAll(false);
			state.allMoviesData.setAllMoviesData([]);
		}
	} else {
		state.dontShow.setDontShow(true);
		console.log("Filme não encontrado");
	}

	console.log(state);
}
