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
		<div className={styles.research}>
			<input
				id={idInputElement}
				type={type}
				{...anyParam}
			/>
		</div>
	);
}
