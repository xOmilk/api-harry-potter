import { useState } from "react";
import {
	ThemeContext,
	type ThemeType,
	type TypesOfThemes,
} from "./ThemeContext";

type ThemeContextProviderProps = {
	children: React.ReactNode;
};

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
	const [state, setState] = useState<ThemeType>(() => {
		const storageTheme = (localStorage.getItem("potterwiki-theme") ??
			"classic") as TypesOfThemes;
		return { type: storageTheme };
	});

	const theme = {
		value: state,
		setTheme: setState,
	};

	return (
		<ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
	);
}
