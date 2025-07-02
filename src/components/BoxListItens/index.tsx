import styles from "./styles.module.css";

type BoxListItensProps = {
	children: React.ReactNode;
	className?: string;
} & React.ComponentProps<"div">;

export function BoxListItens({ children, className }: BoxListItensProps) {
	return (
		<div className={`${styles.boxPatternStyle} ${className}`}>
			{children}
		</div>
	);
}
