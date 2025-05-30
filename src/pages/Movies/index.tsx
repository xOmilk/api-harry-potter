import { useEffect, useState } from "react";
import { Container } from "../../components/Container";
import { Heading } from "../../components/Heading";
import { InputSearchDefault } from "../../components/InputSearchDefault";
import { SetMovie } from "./SetMovie";

import { searchMovie } from "../../script";

import styles from "./styles.module.css";
import type { Movie } from "../../types";

export function Movies() {
	const [wantedMovie, setWantedMovie] = useState();
	let id = "94055b36-c4dd-4ae5-aede-dd6b6e67e107";

	const idInputElement = "idInputElement";

	async function handleClick() {
		const input = document.getElementById(
			idInputElement
		) as HTMLInputElement;
		const inputValue = input.value;

		const result = await searchMovie(input.value);

		if (result) {
			if (Array.isArray(result)) {
				// Verifica se veio todos os filmes

				console.log("Todos os filmes: ", result);
			} else {
				// Verifica se é um filme unico
				console.log("Filme individual", result);

				setWantedMovie((result) => {
					console.log("Estou dentro do setWantedMovie");

					return result;
				});
			}
		} else {
			// result is null
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
			</Container>
		</div>
	);
}
