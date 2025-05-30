import styles from "./styles.module.css";

type InputDefaultProps = {
	idInputElement: string;
} & React.ComponentProps<"input">;

export function InputSearchDefault({
	idInputElement,
	type = "text",
	...anyParam
}: InputDefaultProps) {
	return (
		<>
			<input
				id={idInputElement}
				className={styles.input}
				type={type}
				{...anyParam}
			/>
		</>
	);
}
