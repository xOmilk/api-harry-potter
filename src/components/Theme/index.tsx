import { MoonIcon, SunIcon } from "lucide-react";
import { useThemeContext } from "../../contexts/ThemeContext/useThemeContext";
import { handleClickAndToggleTheme } from "../../utils/Theme/handleClickAndToggleTheme";

const nextThemeIcon = {
	classic: <SunIcon />,
	light: <MoonIcon />,
};

export function Theme() {
	const {
		value: { type: actualState },
		setTheme: setActualTheme,
	} = useThemeContext();

	return (
		<div
			onClick={() =>
				handleClickAndToggleTheme(actualState, setActualTheme)
			}
			title={`Tema atual: ${actualState}`}
		>
			{nextThemeIcon[actualState]}
			{<p>Mudar Tema</p>}
		</div>
	);
}
