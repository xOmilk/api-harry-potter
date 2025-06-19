export async function getSpells() {
	const url = `https://potterapi-fedeperin.vercel.app/pt/spells`;

	const urlResponse = await fetch(url);
	const dataResponse = await urlResponse.json();
	
	return dataResponse;
}
