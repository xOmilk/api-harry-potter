import type { CharacterType } from "../code/CharacterType";

import styles from "./style.module.css";

type SetEspecificCharacterProps = {
	character: CharacterType;
};

export function SetEspecificCharacter({
	character,
}: SetEspecificCharacterProps) {
	return (
		<div className={styles.content}>
			<div className={styles.img}>
				<img
					src={character.image}
					alt={`Imagem do ator ${character.interpretedBy} em harry potter`}
					title={`Imagem do ator ${character.interpretedBy} em harry potter`}
				/>
			</div>
			<div className={styles.resume}>
				<h3>{character.fullName}</h3>
				<p>Apelido: {character.nickname}</p>
				<p>Data de nascimento: {character.birthdate}</p>
				<p>Interpretado por: {character.interpretedBy}</p>
				<p>Casa pertencente: {character.hogwartsHouse}</p>
			</div>
		</div>
	);
}
