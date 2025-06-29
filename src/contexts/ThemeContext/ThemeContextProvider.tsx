import { useState } from "react";
import { ThemeContext, type ThemeType } from "./ThemeContext";

type ThemeContextProviderProps = {
	children: React.ReactNode;
};

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
	const [state, setState] = useState<ThemeType>({ type: "classic" });

	const theme = {
		value: state,
		setTheme: setState,
	};

	return (
		<ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
	);
}
