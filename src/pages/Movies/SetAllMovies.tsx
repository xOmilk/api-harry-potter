import { Container } from "../../components/Container";
import type { Movie } from "../../types";

import styles from "./styles2.module.css";

type SetAllMoviesProps = {
	allMovies: Movie[];
};


function selectMovie(element){

	console.log(element);
	
}


export function SetAllMovies({ allMovies }: SetAllMoviesProps) {
	console.log("Todos os filmes", allMovies);

	return (
		<div className={styles.container}>
			<p>Por não digitar nada, foi retornado todos os filmes</p>

			<div className={styles.listOfMovies}>
				{allMovies.map((element) => (
					<div key={element.id} className={styles.movie}
					onClick={(element:HTMLDivElement)=>selectMovie(element)}
					>
                        <img src={element.attributes.poster} alt="Poster Imagem" title="Poster Imagem" />
						<h3>{element.attributes.title}</h3>
						<pre>{element.id}</pre>
					</div>
				))}
			</div>
		</div>
	);
}
