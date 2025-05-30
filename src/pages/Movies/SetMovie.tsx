import { type Movies } from "../../types";

import syles from "./styles.module.css";

type SetMovieProps = {
	wantedMovie: Movies;
};

export function SetMovie({ wantedMovie }: SetMovieProps) {
	if (wantedMovie instanceof Response) {
		return (
			<section className={syles.content}>
				<div className={syles.img}>
					<img src={wantedMovie.attributes.poster} alt="" />
				</div>

				<div className={syles.resume}>
					<h3>{wantedMovie.attributes.title}</h3>
					<p>
						Data de Lançamento:{" "}
						{wantedMovie.attributes.release_date}
					</p>
					<p>
						Tempo de duração {wantedMovie.attributes.running_time}
					</p>
					<p>Resumo da Obra: {wantedMovie.attributes.summary}</p>
					<iframe src={wantedMovie.attributes.trailer}></iframe>
				</div>
			</section>
		);
	}
}
