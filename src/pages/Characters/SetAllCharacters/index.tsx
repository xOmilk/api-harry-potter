import { BoxListItens } from "../../../components/BoxListItens";
import { useCharacterContext } from "../../../contexts/CharacterContext/useCharacterContext";
import type { CharacterType } from "../code/CharacterType";

import styles from "./styles.module.css";

type SetAllCharacterProps = {
	filteredCharacters: CharacterType[];
};

export function SetAllCharacters({
	filteredCharacters: allCharacters,
}: SetAllCharacterProps) {
	const { especificCharacter } = useCharacterContext();
	const { showAllCharacters } = useCharacterContext();

	if (!allCharacters) return;

	return (
		<BoxListItens className={styles.container}>
			<section className={styles.listOfCharacters}>
				{allCharacters.length !== 0 &&
					allCharacters.map((character) => (
						<div
							key={character.index}
							className={styles.character}
							onClick={() => {
								showAllCharacters.setShowAllCharacters(false);
								especificCharacter.setEspecificCharacter(
									character
								);
							}}
						>
							<img src={character.image} alt="" />
							<div className={styles.info}>
								<h3>{character.fullName}</h3>
								<p>
									Apelido do personagem:{" "}
									<b>{character.nickname}</b>
								</p>
							</div>
						</div>
					))}
				{allCharacters.length === 0 && (
					<p>Você não digitou nenhum personagem valido.</p>
				)}
			</section>
		</BoxListItens>
	);
}
