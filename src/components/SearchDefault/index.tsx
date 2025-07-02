import { SearchDefaultButton } from "./SearchDefaultButton";
import { SearchDefaultInput } from "./SearchDefaultInput";
import styles from "./styles.module.css";

SearchDefault.Input = SearchDefaultInput;
SearchDefault.Button = SearchDefaultButton;

type SearchDefaultProps = {
	children: React.ReactNode;
};

export function SearchDefault({ children }: SearchDefaultProps) {
	return (
		<div className={styles.research}>
			{children}
		</div>
	);
}
