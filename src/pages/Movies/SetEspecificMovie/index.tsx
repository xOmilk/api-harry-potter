import { useMovieContext } from "../../../contexts/MovieContext/useMovieContext";
import syles from "./styles.module.css";
function getYoutubeEmbed(url: string) {
	// Remove possíveis barras no final
	const cleanUrl = url.trim().replace(/\/+$/, "");
	// Pega os 11 últimos caracteres
	const videoId = cleanUrl.slice(-11);
	return `https://www.youtube.com/embed/${videoId}`;
}

export function SetEspecificMovie(/* { wantedMovie }: SetMovieProps */) {
	const {
		state: {
			wantedMovie: { value: wantedMovie },
		},
	} = useMovieContext();
	if (!wantedMovie) return;

	return (
		<section className={syles.content}>
			<img
				className={syles.img}
				src={wantedMovie.attributes.poster}
				alt=""
			/>

			<div className={syles.resume}>
				<h3>{wantedMovie.attributes.title}</h3>
				<p>ID: {wantedMovie.id}</p>
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
