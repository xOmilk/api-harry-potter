import styles from "./styles.module.css";

type HeaderProps = {
	children: React.ReactNode;
};

export function Heading({ children }: HeaderProps) {
	return <div className={styles.header}>{children}</div>;
}
