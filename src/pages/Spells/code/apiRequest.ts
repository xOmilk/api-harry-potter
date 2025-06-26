import type { SpellType } from "./SpellType";

export async function getSpells() {
	const url = `https://potterapi-fedeperin.vercel.app/pt/spells`;

	const urlResponse = await fetch(url);
	const dataResponse: SpellType[] = await urlResponse.json();

	return dataResponse;
}

export function formatSpellNameForUrl(name: string): string {
	return name
		.toLowerCase()
		.replace(/\s+/g, "_") // Substitui espaços por underscores (_)
		.replace(/[^a-z0-9_]/g, ""); // Remove caracteres especiais, exceto letras, números e underscore
}

export async function getSpellsWithImages() {
	// Mudei o nome para ser mais claro
	const spellDataBaseApi = await getSpells();

	const promises = spellDataBaseApi.map(async (spellData) => {
		const formattedName = formatSpellNameForUrl(spellData.spell);
		const urlToTryPng = `https://hogwartslegacy.wiki.fextralife.com/file/Hogwarts-Legacy/${formattedName}_spell_hogwarts_legacy_wiki_guide.png`;
		const urlToTryJpg = `https://hogwartslegacy.wiki.fextralife.com/file/Hogwarts-Legacy/thumbnails/${formattedName}_spell_hogwarts_legacy_wiki_95px.jpg`;

		try {
			const response = await fetch(urlToTryPng, { method: "HEAD" });
			if (response.ok) {
				return { ...spellData, imageUrl: urlToTryPng };
			}

			const responseJpg = await fetch(urlToTryJpg, { method: "HEAD" });
			if (responseJpg.ok) {
				return { ...spellData, imageUrl: urlToTryJpg };
			}

			return spellData;
		} catch (e) {
			return spellData;
		}
	});

	const allResults = await Promise.all(promises);

	const validSpellsOnly = allResults.filter(
		// O 'is' aqui é um "Type Guard" do TypeScript, ele garante
		// que o array resultante é do tipo correto.
		(spell): spell is SpellType & { imageUrl: string } =>
			"imageUrl" in spell
	);

	console.log(validSpellsOnly);
	return validSpellsOnly;
}
