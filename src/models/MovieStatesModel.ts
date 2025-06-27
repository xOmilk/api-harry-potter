import type { Movie } from "../pages/Movies/code/MoviesTypes";

export type MovieStatesModel = {
	wantedMovie: {
		value: Movie | null;
		setWantedMovie: React.Dispatch<React.SetStateAction<Movie | null>>;
	};
	allMoviesData: {
		value: Movie[];
		setAllMoviesData: React.Dispatch<React.SetStateAction<Movie[]>>;
	};
	showAll: {
		value: boolean;
		setShowAll: React.Dispatch<React.SetStateAction<boolean>>;
	};
	dontShow: {
		value: boolean;
		setDontShow: React.Dispatch<React.SetStateAction<boolean>>;
	};
};
