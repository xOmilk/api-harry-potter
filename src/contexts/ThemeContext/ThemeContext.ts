import { createContext, useContext } from "react";

type TypesOfThemes = "light" | "dark" | "classic";
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
