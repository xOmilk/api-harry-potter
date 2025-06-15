import type { CharacterType } from "../code/CharacterType";

import styles from "./styles.module.css";

type SetAllCharactersProps = {
	Characters: CharacterType[];
};

export function SetAllCharacters({ Characters }: SetAllCharactersProps) {
	console.log("CHEGOU AQUI");

	return (
		<div className={styles.listOfCharacters}>
			{Characters.map((character) => (
				<div className={styles.character}>
					<img src={character.image} alt="" />
					<div>
						<h3>{character.fullName}</h3>
						<p>
							Apelido do personagem: <b>{character.nickname}</b>
						</p>
					</div>
				</div>
			))}
		</div>
	);
}
