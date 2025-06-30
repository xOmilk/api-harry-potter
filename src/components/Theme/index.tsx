import { PaletteIcon } from "lucide-react";
import type { ThemeType } from "../../contexts/ThemeContext/ThemeContext";
import { useThemeContext } from "../../contexts/ThemeContext/useThemeContext";
import { DropdownMenu } from "./DropdownMenu";
import { useState } from "react";

function handleClickAndToggleTheme(
	value: ThemeType,
	setTheme: React.Dispatch<React.SetStateAction<ThemeType>>
) {}

export function Theme() {
	const { value: actualState, setTheme: setActualTheme } = useThemeContext();
	const [showDropdown, setShowDropdown] = useState(false);

	return (
		<div
			/* onClick={() =>
				handleClickAndToggleTheme(actualState, setActualTheme)
			} */
			onFocus={() => setShowDropdown(true)}
			onBlur={() => setShowDropdown(false)}
			tabIndex={0}
			title={`Tema atual: ${actualState.type}`}
		>
			<PaletteIcon />
			<p>Tema</p>
			{showDropdown === true && <DropdownMenu />}
		</div>
	);
}
