import { useMemo, useState } from "react";
import { SearchDefault } from "../../components/SearchDefault";
import { Container } from "../../components/Container";
import { SetAllCharacters } from "./SetAllCharacters";
import { SetEspecificCharacter } from "./SetEspecifCharacter";
import { useCharacterContext } from "../../contexts/CharacterContext/useCharacterContext";
import { CharacterContextProvider } from "../../contexts/CharacterContext/CharacterContextProvider";

CharactersComponents.SetAllCharacters = SetAllCharacters;
CharactersComponents.SetEspecificCharacter = SetEspecificCharacter;

function CharactersComponents() {
	const [searchValue, setSearchValue] = useState("");

	const { showAllCharacters } = useCharacterContext();
	const { allCharacters } = useCharacterContext();

	function onChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
		const text = e.target.value;
		setSearchValue(text);
		showAllCharacters.setShowAllCharacters(true);
	}

	const filteredCharacters = useMemo(() => {
		return allCharacters.value.filter((character) => {
			return character.fullName
				.toLowerCase()
				.includes(searchValue.toLowerCase());
		});
	}, [allCharacters.value, searchValue]);

	return (
		<Container>
			<SearchDefault>
				<SearchDefault.Input
					placeholder="Digite um personagem"
					idInputElement="SearchCharacter"
					value={searchValue}
					onChange={onChangeInput}
				/>
			</SearchDefault>

			{showAllCharacters.value && (
				<CharactersComponents.SetAllCharacters
					filteredCharacters={filteredCharacters}
				/>
			)}
			{!showAllCharacters.value && (
				<CharactersComponents.SetEspecificCharacter />
			)}
		</Container>
	);
}

export function Characters() {
	return (
		<CharacterContextProvider>
			<CharactersComponents />
		</CharacterContextProvider>
	);
}
