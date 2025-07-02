import styles from "./styles.module.css";

type HeaderProps = {
	children: React.ReactNode;
};

export function Heading({ children }: HeaderProps) {
	return (
		<header className={styles.header}>
			<h1>{children}</h1>
		</header>
	);
}
