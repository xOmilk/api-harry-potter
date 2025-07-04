import { useEffect, useState } from "react";
import {
	CharacterContext,
	type CharacterContextType,
} from "./CharacterContext";
import type { CharacterType } from "../../pages/Characters/code/CharacterType";
import { searchEspecificCharacter } from "../../pages/Characters/code/characters";

type CharacterContextProviderProps = {
	children: React.ReactNode;
};
export function CharacterContextProvider({
	children,
}: CharacterContextProviderProps) {
	const [allCharacterState, setAllCharacterState] = useState<CharacterType[]>(
		[]
	);

	const [showAllCharacters, setShowAllCharacters] = useState<boolean>(true);

	const [especificCharacter, setEspecificCharacter] = useState<CharacterType>(
		{
			fullName: "",
			nickname: "",
			hogwartsHouse: "",
			image: "",
			interpretedBy: "",
			birthdate: "",
			index: 0,
		}
	);

	const CharacterStateValue: CharacterContextType = {
		allCharacters: {
			value: allCharacterState,
			setAllCharacters: setAllCharacterState,
		},
		especificCharacter: {
			value: especificCharacter,
			setEspecificCharacter,
		},
		showAllCharacters: {
			value: showAllCharacters,
			setShowAllCharacters,
		},
	};

	useEffect(() => {
		async function fetchAllCharacters() {
			const response = await searchEspecificCharacter("");

			if (Array.isArray(response)) {
				setAllCharacterState([...response]);
			} else {
				setAllCharacterState([response]);
			}
		}
		fetchAllCharacters();
	}, []);

	return (
		<CharacterContext.Provider value={CharacterStateValue}>
			{children}
		</CharacterContext.Provider>
	);
}
