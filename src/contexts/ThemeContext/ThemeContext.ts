import { createContext } from "react";

export type TypesOfThemes = "light" | "classic";
export type ThemeType = {
	type: TypesOfThemes;
};

type ThemeContextType = {
	value: ThemeType;
	setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
};

export const themeContextDefaultValue: ThemeContextType = {
	value: { type: "classic" },
	setTheme: () => {},
};

export const ThemeContext = createContext(themeContextDefaultValue);
