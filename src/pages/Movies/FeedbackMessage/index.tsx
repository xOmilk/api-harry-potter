import { BoxListItens } from "../../../components/BoxListItens";

type MoviesFeedbackMessageProps = {
	titleMessage: string;
	tipMessage?: React.ReactNode;
} & React.ComponentProps<"div">;

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
