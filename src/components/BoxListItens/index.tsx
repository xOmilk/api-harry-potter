import styles from "./styles.module.css";

type BoxListItensProps = {
	children: React.ReactNode;
};

export function BoxListItens({ children }: BoxListItensProps) {
	return <div className={styles.boxPatternStyle}>{children}</div>;
}
