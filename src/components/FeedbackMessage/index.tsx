import { BoxListItens } from "../BoxListItens";
import styles from './styles.module.css'

type MoviesFeedbackMessageProps = {
	titleMessage: string;
	tipMessage?: React.ReactNode;
} & React.ComponentProps<"div">;

export function FeedbackMessage({
	titleMessage,
	tipMessage,
}: MoviesFeedbackMessageProps) {
	return (
		<BoxListItens className={styles.container}>
			<h3>{titleMessage}</h3>
			<p>{tipMessage}</p>
		</BoxListItens>
	);
}
