import { useEffect, useState } from "react";
import { InputSearchDefault } from "../../components/InputSearchDefault";

import type { CharacterType } from "./code/CharacterType";
import { SetAllCharacters } from "./SetAllCharacters";
import { searchEspecificCharacter } from "./code/characters";
import { Container } from "../../components/Container";
import { Heading } from "../../components/Heading";

export function Characters() {
	const [searchValue, setSearchValue] = useState("");

	const [characters, setCharacters] = useState<CharacterType[]>();

	async function onChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
		const text = e.target.value;
		setSearchValue(text);
		const movie = await searchEspecificCharacter(searchValue);
		setCharacters(movie);
	}

	useEffect(() => {
		async function loadCharacters() {
			//Carregar todos os personagens em caso nao digitar nada
			if (searchValue.trim() === "") {
				setCharacters(await searchEspecificCharacter(""));
				return;
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
			<Heading>
				<h1>Harry Potter Wiki</h1>
			</Heading>

			<InputSearchDefault
				placeholder="Digite um personagem"
				idInputElement="inputCharacter"
				onChange={onChangeInput}
				value={searchValue}
			/>

			{characters && Array.isArray(characters) && (
				<SetAllCharacters Characters={characters} />
			)}
		</Container>
	);
}
