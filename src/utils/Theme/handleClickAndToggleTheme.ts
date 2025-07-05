import { toastHotAdapter } from "../../adapters/Toast/ToastHot/toastHotAdapter";
import type {
	ThemeType,
	TypesOfThemes,
} from "../../contexts/ThemeContext/ThemeContext";

export function handleClickAndToggleTheme(
	type: TypesOfThemes,
	setTheme: React.Dispatch<React.SetStateAction<ThemeType>>
) {
	const nextTheme = type === "classic" ? "light" : "classic";
	setTheme({ type: `${nextTheme}` });

	/* toastHotAdapter.info(`O tema atualmente é ${type}`); */
	toastHotAdapter.success(`O tema atualmente é: ${nextTheme}`);
}
