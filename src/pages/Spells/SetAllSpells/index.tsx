import { BoxListItens } from "../../../components/BoxListItens";
import type { SpellType } from "../code/SpellType";

import styles from "./styles.module.css";

type SetAllSpellsProps = {
	filteredSpells: SpellType[];
	children?: React.ReactNode;
	setSpecificSpellFn: (spell: SpellType) => void;
};

export function SetAllSpells({
	filteredSpells,
	children,
	setSpecificSpellFn,
}: SetAllSpellsProps) {
	return (
		<BoxListItens>
			<div className={styles.containerList}>
				{filteredSpells.map((element) => (
					<div
						className={styles.listItem}
						key={element.spell}
						onClick={() => setSpecificSpellFn(element)}
					>
						<div>
							<img src={element.source} alt="" />
						</div>
						<div className={styles.info}>
							<h3>{element.spell}</h3>
							<p>{element.use}</p>
						</div>
					</div>
				))}
			</div>
		</BoxListItens>
	);
}
