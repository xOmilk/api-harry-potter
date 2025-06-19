export async function getSpells() {
	const url = `https://potterapi-fedeperin.vercel.app/pt/characters`;

	const urlResponse = await fetch(url);
	const dataResponse = await urlResponse.json();
	
	return dataResponse;
}
