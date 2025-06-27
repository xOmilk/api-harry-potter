import type { MovieStatesModel } from "../../models/MovieStatesModel";
import type { Movie } from "../../pages/Movies/code/MoviesTypes";

const noopSetWantedMovie: React.Dispatch<
	React.SetStateAction<Movie | null>
> = () => {};
const noopSetAllMoviesData: React.Dispatch<
	React.SetStateAction<Movie[]>
> = () => {};
const noopSetShowAll: React.Dispatch<React.SetStateAction<boolean>> = () => {};
const noopSetDontShow: React.Dispatch<React.SetStateAction<boolean>> = () => {};

export const initialMovieState: MovieStatesModel = {
	wantedMovie: {
		value: null,
		setWantedMovie: noopSetWantedMovie,
	},
	allMoviesData: {
		value: [],
		setAllMoviesData: noopSetAllMoviesData,
	},
	showAll: {
		value: false,
		setShowAll: noopSetShowAll,
	},
	dontShow: {
		value: false,
		setDontShow: noopSetDontShow,
	},
};
