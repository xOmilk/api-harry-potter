import { useState } from "react";

import { searchMovie } from "./code/apiRequest";
import type { Movie } from "./code/MoviesTypes";

import { Container } from "../../components/Container";
import { SetEspecificMovie } from "./SetEspecificMovie";
import { SetAllMovies } from "./SetAllMovies";
import { SearchBar } from "./SearchBar";
import { FeedbackMessage } from "./FeedbackMessage";

Movies.SetAllMovies = SetAllMovies;
Movies.SetEspecificMovie = SetEspecificMovie;
Movies.SearchBar = SearchBar;
Movies.FeedBackMessage = FeedbackMessage;

export function Movies() {
	const [wantedMovie, setWantedMovie] = useState<Movie | null>(null);
	const [allMoviesData, setAllMoviesData] = useState<Movie[]>([]);
	const [showAll, setShowAll] = useState(false);
	const [dontShow, setDontShow] = useState(false);
	
	const idInputElement = "idInputElement";
	/* let id = "94055b36-c4dd-4ae5-aede-dd6b6e67e107"; */

	async function handleClick() {
		const input = document.getElementById(
			idInputElement
		) as HTMLInputElement;
		const inputValue = input.value;

		const result = await searchMovie(inputValue);

		if (result) {
			setDontShow(false);
			if (Array.isArray(result)) {
				// Seleciona todos os filmes

				setAllMoviesData(result);
				setShowAll(true);
				setWantedMovie(null);
			} else {
				// Somente um filme
				console.log("Filme individual", result);

				setWantedMovie(result);
				setShowAll(false);
				setAllMoviesData([]);
			}
		} else {
			setDontShow(true);
			console.log("Filme não encontrado");
		}
	}

	function handleSelectMovie(movie: Movie) {
		setWantedMovie(movie);
		setShowAll(false); // Esconde a lista ao selecionar um filme
	}

	return (
		<div>
			<Movies.SearchBar
				idInputElement={idInputElement}
				onSearchHandler={handleClick}
			/>
			<Container>
				{dontShow ? (
					<Movies.FeedBackMessage
						titleMessage="Você não digitou nenhum filme válido"
						tipMessage="Você pode ver todos os filmes ao deixar o campo
							vazio"
					/>
				) : wantedMovie ? (
					<Movies.SetEspecificMovie wantedMovie={wantedMovie} />
				) : showAll ? (
					<Movies.SetAllMovies
						allMovies={allMoviesData}
						onSelectMovie={handleSelectMovie}
					/>
				) : (
					<Movies.FeedBackMessage
						titleMessage="Nesta seção você pode ver os filmes feitos"
						tipMessage="Em caso de não digitar nada você ver a lista de
							todos os filmes"
					/>
				)}
			</Container>
		</div>
	);
}
