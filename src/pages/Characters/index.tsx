import { useEffect, useState } from "react";
import { SearchDefault } from "../../components/SearchDefault";
import { Container } from "../../components/Container";

import type { CharacterType } from "./code/CharacterType";
import { searchEspecificCharacter } from "./code/characters";
import { SetAllCharacters } from "./SetAllCharacters";
import { SetEspecificCharacter } from "./SetEspecifCharacter";

export function Characters() {
	const [searchValue, setSearchValue] = useState("");

	const [characters, setCharacters] = useState<CharacterType[]>();

	const [choosedCharacter, setChoosedCharacter] =
		useState<CharacterType | null>(null);

	const [showOnlyOneCharacter, setShowOnlyOneCharacter] =
		useState<boolean>(false);

	async function onChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
		const text = e.target.value;
		setSearchValue(text);
		const movie = await searchEspecificCharacter(searchValue);
		setCharacters(movie);
	}

	function fnChooseCharacter(character: CharacterType) {
		setChoosedCharacter(character);
	}

	useEffect(() => {
		async function loadCharacters() {
			//Carregar todos os personagens em caso nao digitar nada
			if (searchValue.trim() === "") {
				setCharacters(await searchEspecificCharacter(""));
				return;
			}

			if (searchValue.length > 0 || searchValue === "") {
				setShowOnlyOneCharacter(false);
			}

			const result = await searchEspecificCharacter(searchValue);

			if (result) {
				setCharacters(Array.isArray(result) ? result : [result]);
			} else {
				setCharacters([]);
			}
		}

		const delayAfterStopTyping = 500;
		const timerId = setTimeout(() => {
			loadCharacters();
		}, delayAfterStopTyping);

		return () => clearTimeout(timerId);
	}, [searchValue]);

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

			{!showOnlyOneCharacter &&
				characters &&
				Array.isArray(characters) && (
					<SetAllCharacters
						Characters={characters}
						setChoosedCharacter={fnChooseCharacter}
						setShowOnlyOneCharacter={setShowOnlyOneCharacter}
					/>
				)}

			{showOnlyOneCharacter && choosedCharacter !== null && (
				<SetEspecificCharacter character={choosedCharacter} />
			)}
		</Container>
	);
}
