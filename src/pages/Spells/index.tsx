import { useEffect, useState } from "react";
import { Container } from "../../components/Container";
import { InputSearchDefault } from "../../components/InputSearchDefault";
import type { SpellType } from "./code/SpellType";
import { getSpells } from "./code/apiRequest";

export function Spells() {
	const [valueText, setValueText] = useState("");

	const [allSpells, setAllSpells] = useState<SpellType[]>([]);

	useEffect(() => {
		const collectData = async () => {
			const response: SpellType[] = await getSpells();
			setAllSpells(response);
		};
		collectData();
	}, []);

	function handleChangeTextFn(e: React.ChangeEvent<HTMLInputElement>) {
		setValueText(e.target.value);

		allSpells.map((uniqueSpell) => {
			/* console.log("Array resultante:", valueText.match(uniqueSpell.name)); */
		});

		const filteredSpells = allSpells.filter((uniqueSpell) => {
			uniqueSpell.fullName
				.toLowerCase()
				.includes(valueText.toLowerCase());
		});

		console.log("Array resultante:", filteredSpells);
	}

	return (
		<Container>
			<InputSearchDefault
				idInputElement="spellSearch"
				value={valueText}
				onChange={(e) => handleChangeTextFn(e)}
			></InputSearchDefault>
		</Container>
	);
}
