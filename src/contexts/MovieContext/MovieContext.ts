import { createContext } from "react";
import type { MovieStatesModel } from "../../models/MovieStatesModel";
import { initialMovieState } from "./initialMovieValue";

type MovieContextType = {
	state: MovieStatesModel;
	setState: React.Dispatch<React.SetStateAction<MovieStatesModel>>;
};
export const MovieContext = createContext<MovieContextType>({
	state: initialMovieState,
	setState: () => {},
});
