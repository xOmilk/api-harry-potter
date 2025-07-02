type SearchDefaultButtonProps = {
	textButton: string;
	onClickHandler: () => void;
} & React.ComponentProps<"button">;
export function SearchDefaultButton({
	textButton,
	onClickHandler,
	...anyParams
}: SearchDefaultButtonProps) {
	return (
		<button onClick={onClickHandler} {...anyParams}>
			{textButton}
		</button>
	);
}
