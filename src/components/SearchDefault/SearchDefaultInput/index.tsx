type DefaultInputProps = {
	idInputElement: string;
	placeholder: string;
} & React.ComponentProps<"input">;

export function SearchDefaultInput({
	idInputElement,
	type = "text",
	...anyParam
}: DefaultInputProps) {
	return <input id={idInputElement} type={type} {...anyParam} />;
}
