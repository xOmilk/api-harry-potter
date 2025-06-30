import { House, Palette, PaletteIcon, SwatchBook } from "lucide-react";
import type { ThemeType } from "../../contexts/ThemeContext/ThemeContext";
import { useThemeContext } from "../../contexts/ThemeContext/useThemeContext";

import styles from "./styles.module.css";

function handleClickAndToggleTheme(value: ThemeType) {}

export function Theme() {
	const { value: actualState, setTheme: setActualTheme } = useThemeContext();

	return (
		<div className={styles.containerIcon}>
			<PaletteIcon />
			Tema
		</div>
	);
}
