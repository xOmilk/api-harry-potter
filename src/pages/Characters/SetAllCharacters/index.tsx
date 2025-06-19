import { BoxListItens } from "../../../components/BoxListItens";
import type { CharacterType } from "../code/CharacterType";

import styles from "./styles.module.css";

type SetAllCharactersProps = {
	Characters: CharacterType[];
	setChoosedCharacter: (character: CharacterType) => void;
	setShowOnlyOneCharacter: (boolean: boolean) => void;
};

export function SetAllCharacters({
	Characters,
	setChoosedCharacter,
	setShowOnlyOneCharacter,
}: SetAllCharactersProps) {
	return (
		<BoxListItens>
			<div className={styles.listOfCharacters}>
				{Characters.length !== 0 ? (
					Characters.map((character) => (
						<div
							key={character.index}
							className={styles.character}
							onClick={() => {
								setShowOnlyOneCharacter(true);
								setChoosedCharacter(character);
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
					))
				) : (
					<p>Você não digitou nenhum personagem valido.</p>
				)}
			</div>
		</BoxListItens>
	);
}
