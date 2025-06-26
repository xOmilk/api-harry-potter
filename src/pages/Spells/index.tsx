import { useEffect, useMemo, useState } from "react";
import { Container } from "../../components/Container";
import { InputSearchDefault } from "../../components/InputSearchDefault";
import type { SpellType, SpellTypeWithUrl } from "./code/SpellType";
import { getSpells, getSpellsWithImages } from "./code/apiRequest";

import styles from "./style.module.css";
import { SetAllSpells } from "./SetAllSpells";

export function Spells() {
	const [valueText, setValueText] = useState("");

	const [allSpells, setAllSpells] = useState<SpellType[]>([]);

	useEffect(() => {
		const collectData = async () => {
			const response = await getSpells();
			setAllSpells(response);
		};
		collectData();
	}, []);

	const filteredSpells = useMemo(() => {
		return allSpells.filter((spell) =>
			spell.spell.toLowerCase().includes(valueText.toLowerCase())
		);
	}, [allSpells, valueText]);

	//Forma que o filtro recaulcula em toda renderização
	/* const filteredSpells = allSpells.filter((spell) =>
		spell.spell.toLowerCase().includes(valueText.toLowerCase())
	); */

	function handleChangeTextFn(e: React.ChangeEvent<HTMLInputElement>) {
		setValueText(e.target.value);
	}

	console.log(filteredSpells);

	return (
		<Container>
			<InputSearchDefault
				idInputElement="spellSearch"
				value={valueText}
				onChange={(e) => handleChangeTextFn(e)}
			></InputSearchDefault>

			{/* Adicionar elemento dentro de um contexto */}
			{filteredSpells && <SetAllSpells filteredSpells={filteredSpells} />}
		</Container>
	);
}
