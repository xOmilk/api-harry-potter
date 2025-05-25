import { Movies } from "./types";

//Função promete retornar uma resposta ou null
async function getMovies(id?: string): Promise<Response | null> {

    const url = id === undefined ? `https://api.potterdb.com/v1/movies` : `https://api.potterdb.com/v1/movies/${id}`
    id! ? console.log("O id fornecido foi", id) : console.log("Procurando todos os filmes.");


    try {
        let result

        result = await fetch(url)
        let data = await result.json()

        if (data.data!) {
            //ver o filme retornado
            //console.log(data.data);
            return data.data;
        }
    }
    catch (error: any) {
        console.log("Erro:", error.message);
    }

    return null;
}

async function getAllMovies(): Promise<Response> {
    const movie = await getMovies()
    if (movie === null) {
        throw new Error("NO MOVIES WAS FOUND!");
    }
    console.log("Todos os filmes:", movie);
    return movie;
}

async function searchMovie(movieId: string): Promise<Response | false> {

    const movie = await getMovies(movieId)
    if (movie === null) {
        console.log("Não foi possivel encontrar o filme procurado");
        return false;
    }
    else {
        console.log("O filme procurado foi: ", movie);
        return movie;
    }

}

async function setMovie(movieId: string) {

    const movie = await searchMovie(movieId) as Movies | boolean;

    if (typeof movie === 'boolean') {
        console.log('Não foi possivel encontrar');

    }
    else {

        console.log(movie.attributes.poster);

        let divImage = document.createElement("div");
        divImage.classList.add("img");
        let posterImg = document.createElement("img");
        posterImg.src = movie.attributes.poster;
        divImage.appendChild(posterImg);
        document.getElementById("main")?.appendChild(divImage);
    }

}



async function main() {

    let id = "94055b36-c4dd-4ae5-aede-dd6b6e67e107";

    await getAllMovies();
    console.log("------------------------");

    await setMovie(id);
}
main();







