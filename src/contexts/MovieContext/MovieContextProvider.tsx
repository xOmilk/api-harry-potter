import { useState } from "react";
import { MovieContext } from "./MovieContext";
import { initialMovieState } from "./initialMovieValue";

type MovieContextProviderProps = {
	children: React.ReactNode;
};

export function MovieContextProvider({ children }: MovieContextProviderProps) {
	const [state, setState] = useState(initialMovieState);

	return (
		<MovieContext.Provider value={{ state, setState }}>
			{children}
		</MovieContext.Provider>
	);
}
