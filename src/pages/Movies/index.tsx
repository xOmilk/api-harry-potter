import { useEffect, useState } from "react";
import { Container } from "../../components/Container";
import { Heading } from "../../components/Heading";
import { InputSearchDefault } from "../../components/InputSearchDefault";
import { SetMovie } from "./SetMovie";

import { searchMovie } from "../../script";

import styles from "./styles.module.css";
import type { Movie } from "../../types";
import { SetAllMovies } from "./SetAllMovies";

export function Movies() {
	const [wantedMovie, setWantedMovie] = useState();

	const [allMoviesData, setAllMoviesData] = useState([]);
	const [showAll, setShowAll] = useState(false);

	const [dontShow, setDontShow] = useState(false)

	let id = "94055b36-c4dd-4ae5-aede-dd6b6e67e107";

	const idInputElement = "idInputElement";

	async function handleClick() {
		const input = document.getElementById(
			idInputElement
		) as HTMLInputElement;
		const inputValue = input.value;

		const result = await searchMovie(inputValue);

		if (result) {
			if (Array.isArray(result)) {
				// Verifica se veio todos os filmes

				setAllMoviesData(result);
				setShowAll(true);
				setWantedMovie(null);

			} else {
				// Verifica se é um filme unico
				console.log("Filme individual", result);

				setWantedMovie(result);
				setShowAll(false);
				setAllMoviesData(null)
			}
		} else {
			setDontShow(true);
			console.log("Filme não encontrado");
		}
	}

	return (
		<div>
			<Heading>
				<h1>Harry Potter Wiki</h1>
			</Heading>
			<Container>
				<div className={styles.research}>
					<InputSearchDefault
						idInputElement={idInputElement}
						placeholder="Digite um filme"
						type="text"
					/>
					<button onClick={handleClick}>Pesquisar</button>
				</div>
			</Container>
			<Container>
				{wantedMovie && <SetMovie wantedMovie={wantedMovie} />}
				{showAll && <SetAllMovies allMovies={allMoviesData}/>}

			</Container>
		</div>
	);
}
