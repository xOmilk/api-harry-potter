import { BoxListItens } from "../../../components/BoxListItens";

type MoviesFeedbackMessageProps = {
	titleMessage: string;
	tipMessage?: string;
};

export function FeedbackMessage({
	titleMessage,
	tipMessage,
}: MoviesFeedbackMessageProps) {
	return (
		<BoxListItens>
			<h3>{titleMessage}</h3>
			<p>{tipMessage}</p>
		</BoxListItens>
	);
}
