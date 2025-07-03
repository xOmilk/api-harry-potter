import { useEffect, useState } from "react";
import {
	CharacterContext,
	type CharacterContextType,
} from "./CharacterContext";
import { useCharacterContext } from "./useCharacterContext";
import type { CharacterType } from "../../pages/Characters/code/CharacterType";
import { fetchCharacters, searchEspecificCharacter } from "../../pages/Characters/code/characters";

type CharacterContextProviderProps = {
	children: React.ReactNode;
};
export function CharacterContextProvider({
	children,
}: CharacterContextProviderProps) {
	const [allCharacterState, setallCharacterState] = useState<CharacterType[]>(
		async () => {
			const response = await searchEspecificCharacter('');
			return response;
		}
	);
	const { allCharacters } = useCharacterContext();

	const [especificCharacter, setEspecificCharacter] = useState({
		fullName: "",
		nickname: "",
		hogwartsHouse: "",
		image: "",
		interpretedBy: "",
		birthdate: "",
		index: 0,
	});

	useEffect(() => {
		console.log("Pesquisa de todos os characters");
		console.log(allCharacters);
	}, []);

	const CharacterStateValue: CharacterContextType = {
		allCharacters: allCharacterState,
		especificCharacter: {
			value: especificCharacter,
			setEspecificCharacter,
		},
	};

	return (
		<CharacterContext.Provider value={CharacterStateValue}>
			{children}
		</CharacterContext.Provider>
	);
}
