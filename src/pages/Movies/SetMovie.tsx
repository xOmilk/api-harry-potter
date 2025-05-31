import { type Movie } from "../../types";

import syles from "./styles.module.css";

type SetMovieProps = {
	wantedMovie: Movie;
};

function getYoutubeEmbed(url: string) {
	const idMatch = url.match(/(?:v=|\/embed\/|\.be\/)([a-zA-Z0-9_-]{11})/);
	return idMatch ? `https://www.youtube.com/embed/${idMatch[1]}` : "";
}

export function SetMovie({ wantedMovie }: SetMovieProps) {
	return (
		<section className={syles.content}>
			<div className={syles.img}>
				<img src={wantedMovie.attributes.poster} alt="" />
			</div>

			<div className={syles.resume}>
				<h3>{wantedMovie.attributes.title}</h3>
				<p>Data de Lançamento: {wantedMovie.attributes.release_date}</p>
				<p>Tempo de duração {wantedMovie.attributes.running_time}</p>
				<p>Resumo da Obra: {wantedMovie.attributes.summary}</p>
				<div className={syles.videoWrapper}>
					<iframe
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						src={getYoutubeEmbed(wantedMovie.attributes.trailer)}
					></iframe>
				</div>
			</div>
		</section>
	);
}
