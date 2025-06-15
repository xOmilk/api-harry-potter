import { useState } from "react";
import { InputSearchDefault } from "../../components/InputSearchDefault";

import styles from "./styles.module.css";
import type { CharacterType } from "./code/CharacterType";
import { SetAllCharacters } from "./SetAllCharacters";
import { searchEspecificCharacter } from "./code/characters";
import { Container } from "../../components/Container";
import { Heading } from "../../components/Heading";

export function Characters() {
	const [value, setValue] = useState("");

	const [character, setCharacter] = useState<CharacterType[]>();

	async function onChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
		const text = e.target.value;
		setValue(text);
		const movie = await searchEspecificCharacter(value);
		setCharacter(movie);
	}

	return (
		<Container>
			<Heading>
				<h1>Harry Potter Wiki</h1>
			</Heading>

			<InputSearchDefault
				placeholder="Digite um personagem"
				idInputElement="kk"
				onChange={onChangeInput}
				value={value}
			/>

			{character && Array.isArray(character) && (
				<SetAllCharacters Characters={character} />
			)}
		</Container>
	);
}
