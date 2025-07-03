import { useContext } from "react";
import { CharacterContext } from "./CharacterContext";

export function useCharacterContext() {
	const context = useContext(CharacterContext);
	if (!context)
		throw new Error(
			"useCharacterContext must be used within CharacterProvider"
		);
	return context;
}
