import { useContext } from "react";
import { MovieContext } from "./MovieContext";

export function useMovieContext() {
	const context = useContext(MovieContext);
	if (!context)
		throw new Error("useMoviesContext must be used within MoviesProvider");
	return context;
}
