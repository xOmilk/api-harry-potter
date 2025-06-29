import { type Movie, type MoviesResponse, type MovieResponse } from "./MoviesTypes";

const API_URL = "https://api.potterdb.com/v1/movies";

export async function fetchAllMovies(): Promise<Movie[]> {
	const response = await fetch(API_URL);
	if (!response.ok) throw new Error("Erro ao buscar filmes");
	const data: MoviesResponse = await response.json();
	return data.data;
}

export async function fetchMovieById(id: string): Promise<Movie | null> {
	const response = await fetch(`${API_URL}/${id}`);
	if (!response.ok) return null;
	const data: MovieResponse = await response.json();
	return data.data ?? null;
}

export async function searchMovie(
	id?: string
): Promise<Movie[] | Movie | null> {
	if (id) {
		return await fetchMovieById(id);
	} else {
		return await fetchAllMovies();
	}
}
