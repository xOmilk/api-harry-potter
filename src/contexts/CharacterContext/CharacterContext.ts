import { createContext } from "react";
import type { CharacterType } from "../../pages/Characters/code/CharacterType";

export type EspecificCharacterContext = {
	value: CharacterType;
	setEspecificCharacter: React.Dispatch<React.SetStateAction<CharacterType>>;
};

export type CharacterContextType = {
	especificCharacter: EspecificCharacterContext;
	allCharacters: CharacterType[];
};

export const defaultCharacterValue: CharacterContextType = {
	allCharacters: [],
	especificCharacter: {
		value: {
			fullName: "",
			nickname: "",
			hogwartsHouse: "",
			image: "",
			interpretedBy: "",
			birthdate: "",
			index: 0,
		},
		setEspecificCharacter: () => {},
	},
};

export const CharacterContext = createContext(defaultCharacterValue);
