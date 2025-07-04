import { FeedbackMessage } from "../../../components/FeedbackMessage";
import { useCharacterContext } from "../../../contexts/CharacterContext/useCharacterContext";

import styles from "./style.module.css";

export function SetEspecificCharacter() {
	const { especificCharacter } = useCharacterContext();
	const { showAllCharacters } = useCharacterContext();
	if (showAllCharacters.value) {
		return (
			<FeedbackMessage
				titleMessage="Por não digitar nada, foi mostrado todos os personagens"
				tipMessage="Digite algum personagem para pesquisar"
			/>
		);
	}

	return (
		<section className={styles.content}>
			<div className={styles.resume}>
				<img
					src={especificCharacter.value.image}
					alt={`Imagem do ator ${especificCharacter.value.interpretedBy} em harry potter`}
					title={`Imagem do ator ${especificCharacter.value.interpretedBy} em harry potter`}
				/>
				<div className={styles.info}>
					<h3>{especificCharacter.value.fullName}</h3>
					<p>Apelido: {especificCharacter.value.nickname}</p>
					<p>
						Data de nascimento: {especificCharacter.value.birthdate}
					</p>
					<p>
						Interpretado por:{" "}
						{especificCharacter.value.interpretedBy}
					</p>
					<p>
						Casa pertencente:{" "}
						{especificCharacter.value.hogwartsHouse}
					</p>
				</div>
			</div>
		</section>
	);
}
