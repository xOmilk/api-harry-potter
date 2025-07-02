import { MoonIcon, SunIcon } from "lucide-react";
import { useThemeContext } from "../../contexts/ThemeContext/useThemeContext";
import { handleClickAndToggleTheme } from "../../utils/Theme/handleClickAndToggleTheme";
import { useEffect } from "react";

const nextThemeIcon = {
	classic: <SunIcon />,
	light: <MoonIcon />,
};

export function Theme() {
	const {
		value: { type: theme },
		setTheme: setActualTheme,
	} = useThemeContext();

	useEffect(() => {
		//Cada vez que meu tema mudar
		document.documentElement.setAttribute("data-theme", theme);
		localStorage.setItem("potterwiki-theme", theme);
	}, [theme]);

	return (
		<div
			onClick={() => handleClickAndToggleTheme(theme, setActualTheme)}
			title={`Tema atual: ${theme}`}
		>
			{nextThemeIcon[theme]}
			{<p>Mudar Tema</p>}
		</div>
	);
}
