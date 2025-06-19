import { BoxListItens } from "../../../components/BoxListItens";
import { Container } from "../../../components/Container";

import type { SpellType } from "../code/SpellType";

import styles from "./styles.module.css";

type SetEspecificSpellProps = {
	spell: SpellType;
};

export function SetEspecificSpell({ spell }: SetEspecificSpellProps) {
	return (
		<BoxListItens>
			<img src={spell.source}></img>
			<div className={styles.info}>
				<h3>{spell.spell}</h3>
				<p>{spell.use}</p>
			</div>
		</BoxListItens>
	);
}
