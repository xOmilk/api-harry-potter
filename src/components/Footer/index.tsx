import styles from "./styles.module.css";

export function Footer() {
	return (
		<footer className={styles.footer}>
			<a href="https://github.com/xOmilk" target="_blank">
				Feito por
			</a>
			<p>
				&copy;
				{new Date().getFullYear()}
			</p>
		</footer>
	);
}
