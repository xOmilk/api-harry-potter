import { useEffect, useState } from "react";
import { Container } from "../../components/Container";
import { Heading } from "../../components/Heading";
import { InputSearchDefault } from "../../components/InputSearchDefault";
import { SetMovie } from "./SetMovie";

import { searchMovie } from "./code/script";

import styles from "./styles.module.css";
import type { Movie } from "./code/types";
import { SetAllMovies } from "./SetAllMovies";
import { BoxListItens } from "../../components/BoxListItens";

export function Movies() {
	const [wantedMovie, setWantedMovie] = useState<Movie | null>(null);
	const [allMoviesData, setAllMoviesData] = useState<Movie[]>([]);
	const [showAll, setShowAll] = useState(false);

	const [dontShow, setDontShow] = useState(false);

	let id = "94055b36-c4dd-4ae5-aede-dd6b6e67e107";

	const idInputElement = "idInputElement";

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
			<Container>
				<div className={styles.research}>
					<InputSearchDefault
						idInputElement={idInputElement}
						placeholder="Informe o id do filme"
						type="text"
					/>
					<button onClick={handleClick}>Pesquisar</button>
				</div>
			</Container>
			<Container>
				{dontShow ? (
					<>
						<p>Você não digitou nenhum filme válido</p>
						<p>
							Você pode ver todos os filmes ao deixar o campo
							vazio
						</p>
					</>
				) : wantedMovie ? (
					<SetMovie wantedMovie={wantedMovie} />
				) : showAll ? (
					<SetAllMovies
						allMovies={allMoviesData}
						onSelectMovie={handleSelectMovie}
					/>
				) : (
					<BoxListItens>
						<p>Nesta seção você pode ver os filmes feitos</p>
						<p>
							Em caso de não digitar nada você ver a lista de
							todos os filmes
						</p>
					</BoxListItens>
				)}
			</Container>
		</div>
	);
}
