import { createContext } from "react";
import type { MovieStatesModel } from "../../models/MovieStatesModel";
import { movieContextDefaultValue } from "./movieContextDefaultValue";

type MovieContextType = {
	state: MovieStatesModel;
};
export const MovieContext = createContext<MovieContextType>({
	state: movieContextDefaultValue,
});
