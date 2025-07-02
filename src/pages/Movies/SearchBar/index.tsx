import { Container } from "../../../components/Container";
import { SearchDefault } from "../../../components/SearchDefault";

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
			<SearchDefault>
				<SearchDefault.Input
					idInputElement={idInputElement}
					placeholder="Informe o id do filme"
					type="text"
				/>
				<SearchDefault.Button
					textButton="Pesquisar"
					onClickHandler={onSearchHandler}
				/>
			</SearchDefault>
		</Container>
	);
}
