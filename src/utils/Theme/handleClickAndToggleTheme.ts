import type {
	ThemeType,
	TypesOfThemes,
} from "../../contexts/ThemeContext/ThemeContext";

export function handleClickAndToggleTheme(
	type: TypesOfThemes,
	setTheme: React.Dispatch<React.SetStateAction<ThemeType>>
) {
	if (type === "classic") {
		setTheme({ type: "light" });
	} else if (type === "light") {
		setTheme({ type: "classic" });
	}
}
