import { BoxListItens } from "../../../components/BoxListItens";
import type { CharacterType } from "../code/CharacterType";

import styles from "./styles.module.css";

type SetAllCharactersProps = {
	Characters: CharacterType[];
};

export function SetAllCharacters({ Characters }: SetAllCharactersProps) {
	return (
		<BoxListItens>
			<div className={styles.listOfCharacters}>
				{Characters.length !== 0 ? (
					Characters.map((character) => (
						<div className={styles.character}>
							<img src={character.image} alt="" />
							<div>
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
