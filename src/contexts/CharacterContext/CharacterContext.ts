import { createContext } from "react";
import type { CharacterType } from "../../pages/Characters/code/CharacterType";

export type EspecificCharacter = {
	value: CharacterType;
	setEspecificCharacter: React.Dispatch<React.SetStateAction<CharacterType>>;
};

export type allCharacters = {
	value: CharacterType[];
	setAllCharacters: React.Dispatch<React.SetStateAction<CharacterType[]>>;
};

export type ShowAllCharacters = {
	value: boolean;
	setShowAllCharacters: React.Dispatch<React.SetStateAction<boolean>>;
};

export type CharacterContextType = {
	especificCharacter: EspecificCharacter;
	allCharacters: allCharacters;
	showAllCharacters: ShowAllCharacters;
};

export const defaultCharacterValue: CharacterContextType = {
	allCharacters: {
		value: [],
		setAllCharacters: () => {},
	},
	showAllCharacters: { value: true, setShowAllCharacters: () => {} },
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
