import type { CharacterType } from "./CharacterType";

export async function fetchCharacters(): Promise<CharacterType> {
	const url = `https://potterapi-fedeperin.vercel.app/pt/characters`;
	const urlResponse = await fetch(url);
	const data: CharacterType = await urlResponse.json();
	return data;
}

export async function searchEspecificCharacter(
	name: string
): Promise<CharacterType | CharacterType[]> {
	const urlData = await fetch(
		`https://potterapi-fedeperin.vercel.app/pt/characters?search=${name}`
	);
	const response = await urlData.json();
	console.log(response);

	return response;
}
