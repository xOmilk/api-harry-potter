async function handleClickMoviesFn() {
	const input = document.getElementById(idInputElement) as HTMLInputElement;
	const inputValue = input.value;

	const result = await searchMovie(inputValue);

	if (result) {
		setDontShow(false);
		if (Array.isArray(result)) {
			// Seleciona todos os filmes

			setAllMoviesData(result);
			setShowAll(true);
			setWantedMovie(null);
		} else {
			// Somente um filme
			console.log("Filme individual", result);

			setWantedMovie(result);
			setShowAll(false);
			setAllMoviesData([]);
		}
	} else {
		setDontShow(true);
		console.log("Filme não encontrado");
	}
}
