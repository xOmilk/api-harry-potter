import { useEffect, useMemo, useState } from "react";
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

	const filteredSpells = useMemo(() => {
		return allSpells.filter((spell) =>
			spell.fullName.toLowerCase().includes(valueText.toLowerCase())
		);
	}, [allSpells, valueText]);

	//Forma que o filtro recaulcula em toda renderização
	/* const filteredSpells = allSpells.filter((spell) =>
		spell.fullName.toLowerCase().includes(valueText.toLowerCase())
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
			{filteredSpells && (
				<div className="">
					{filteredSpells.map((element) => (
						<div className="" key={element.fullName}>
							{element.fullName}
						</div>
					))}
				</div>
			)}
		</Container>
	);
}
