import { BoxListItens } from "../../../components/BoxListItens";
import { formatSpellNameForUrl } from "../code/apiRequest";
import type { SpellType, SpellTypeWithUrl } from "../code/SpellType";

import styles from "./styles.module.css";

type SetAllSpellsProps = {
	filteredSpells: SpellTypeWithUrl[];
	/* 	setSpecificSpellFn?: (spell: SpellType) => void; */
};

export function SetAllSpells({
	filteredSpells,
}: /* 	setSpecificSpellFn, */
SetAllSpellsProps) {
	return (
		<BoxListItens>
			<div className={styles.containerList}>
				{filteredSpells.map((element) => (
					<div
						className={styles.listItem}
						key={element.spell}
						/* 						onClick={() => setSpecificSpellFn(element)} */
					>
						<div>
							<img
								src={
									element.spell
										.toLowerCase()
										.match("wingardium")
										? `https://hogwartslegacy.wiki.fextralife.com/file/Hogwarts-Legacy/thumbnails/levioso_spell_hogwarts_legacy_wiki_95px.jpg`
										: `https://hogwartslegacy.wiki.fextralife.com/file/Hogwarts-Legacy/${formatSpellNameForUrl(
												element.spell
										  )}-hogwarts-legacy-wiki-guide.png`
								}
							/>
						</div>
						<div className={styles.info}>
							<h3>{element.spell}</h3>
							<p>{element.use}</p>
							<p>{formatSpellNameForUrl(element.spell)}</p>
						</div>
					</div>
				))}
			</div>
		</BoxListItens>
	);
}
