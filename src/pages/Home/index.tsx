import { Container } from "../../components/Container";
import styles from "./styles.module.css";

export function Home() {
	return (
		<Container>
			<section className={styles.content}>
				<div className={styles.top}>
					<h2>Seja bem vindo a Harry Potter Wiki</h2>
					<h3>
						Este é um site desenvolvido sem fins lucrativos a fim de
						aprendizado
					</h3>
				</div>
				<p>
					O objetivo desse site é a pratica da biblioteca do React em
					conjunto com as suas funcionalidades. Funcionalidades e
					particularidades essas como:
				</p>
				<ul>
					<li>SPAs</li>
					<li>Components & Props</li>
					<li>react-router-dom</li>
					<li>useState</li>
					<li>useContext</li>
					<li>useEffect</li>
					<li>useMemu</li>
				</ul>

				<p>
					A utilização de elementos e funcionalidades do JavaScript e
					TypeScript puro como por exemplo:
				</p>
				<ul>
					<li>
						fetch{" "}
						<span>
							(Para recuperação de dados via APIs distintas)
						</span>{" "}
					</li>
					<li>
						Promise, async, await{" "}
						<span>(Trabalhar com dados de forma assíncrona)</span>
					</li>
					<li>
						Tipagem typescript{" "}
						<span>
							(A fim de evitar erros no momento de desenvolvimento
							e seguir boas praticas)
						</span>
					</li>
				</ul>
			</section>

			<section className={styles.content}>
				<p>
					Foram utilizadas algumas APIs para construção do conteudo
					desse site dentre elas:
				</p>
				<ul>
					<li>
						<a href="https://potterdb.com/" target="_blank">
							Potter DB
						</a>{" "}
						<span>(Filmes)</span>
					</li>
					<li>
						<a
							href="https://github.com/fedeperin/potterapi"
							target="_blank"
						>
							Potter API
						</a>{" "}
						<span>(Personagens)</span>
					</li>
				</ul>

				<p>
					A documentação desse site é aberta e pode ser acessada por{" "}
					<a
						href="https://github.com/xOmilk/api-harry-potter"
						target="_blank"
					>
						esse link
					</a>{" "}
					ou pelo rodapé presente em todas as páginas
				</p>
			</section>
		</Container>
	);
}
