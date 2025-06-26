import { Container } from "../../../components/Container";
import { InputSearchDefault } from "../../../components/InputSearchDefault";
import styles from "./styles.module.css";

type MoviesSearchBarProps = {
	idInputElement: string;
	onSearchHandler: () => void;
};

export function SearchBar({
	idInputElement,
	onSearchHandler,
}: MoviesSearchBarProps) {
	return (
		<Container>
			<div className={styles.research}>
				<InputSearchDefault
					idInputElement={idInputElement}
					placeholder="Informe o id do filme"
					type="text"
				/>
				<button onClick={onSearchHandler}>Pesquisar</button>
			</div>
		</Container>
	);
}
