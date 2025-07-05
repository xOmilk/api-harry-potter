import styles from "./styles.module.css";

type ToastHotInfoProps = {
	message: string;
};

export function ToastHotInfo({ message }: ToastHotInfoProps) {
	return (
		<div className={styles.info}>
			<p>{message}</p>
		</div>
	);
}


