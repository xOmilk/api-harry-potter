import { House, Palette, PaletteIcon, SwatchBook } from "lucide-react";
import type { ThemeType } from "../../contexts/ThemeContext/ThemeContext";
import { useThemeContext } from "../../contexts/ThemeContext/useThemeContext";

function handleClickAndToggleTheme(
	value: ThemeType,
	setTheme: React.Dispatch<React.SetStateAction<ThemeType>>
) {}

export function Theme() {
	const { value: actualState, setTheme: setActualTheme } = useThemeContext();

	return (
		<div
			onClick={() =>
				handleClickAndToggleTheme(actualState, setActualTheme)
			}
			title={`Tema atual: ${actualState}`}
		>
			<PaletteIcon />
			<p>Tema</p>
		</div>
	);
}
