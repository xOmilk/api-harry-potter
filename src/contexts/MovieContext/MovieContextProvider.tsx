import { useState } from "react";
import { MovieContext } from "./MovieContext";
import type { Movie } from "../../pages/Movies/code/MoviesTypes";

type MovieContextProviderProps = {
	children: React.ReactNode;
};

export function MovieContextProvider({ children }: MovieContextProviderProps) {
	const [wantedMovie, setWantedMovie] = useState<Movie | null>(null);
	const [allMoviesData, setAllMoviesData] = useState<Movie[]>([]);
	const [showAll, setShowAll] = useState(false);
	const [dontShow, setDontShow] = useState(false);

	const state = {
		wantedMovie: { value: wantedMovie, setWantedMovie },
		allMoviesData: { value: allMoviesData, setAllMoviesData },
		showAll: { value: showAll, setShowAll },
		dontShow: { value: dontShow, setDontShow },
	};

	return (
		<MovieContext.Provider value={{ state }}>
			{children}
		</MovieContext.Provider>
	);
}
