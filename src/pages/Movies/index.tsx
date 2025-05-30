import { Heading } from "../../components/Heading";
import { InputSearchDefault } from "../../components/InputSearchDefault";

import styles from "./styles.module.css";
import { searchMovie } from "../../script";
import { SetMovie } from "./SetMovie";
import { Container } from "../../components/Container";

import { useEffect, useState } from "react";

import { type Movies } from "../../types";

export function Movies() {
	const [movie, setMovie] = useState();
	let id = "94055b36-c4dd-4ae5-aede-dd6b6e67e107";

	console.log(movie);
	
	




	return (
		<div>
			<Heading>
				<h1>Harry Potter Wiki</h1>
			</Heading>
			<Container>
				<div className={styles.research}>
					<InputSearchDefault
						idInputElement="wantedMovie"
						placeholder="Digite um filme"
						type="text"
					/>
					<button>Pesquisar</button>
				</div>
			</Container>
			<Container>{movie && <SetMovie wantedMovie={movie} />}</Container>
		</div>
	);
}
