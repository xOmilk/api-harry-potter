

async function getMovies(id: number) {
    const url = `https://api.potterdb.com/v1/movies/1`

    let result
    try {

        result = await fetch(url)
        let data = await result.json()

        console.log(data.data);

        return data.data;
    }
    catch (error: any) {

        console.log("Erro:", error.message);


    }


}

async function printMovies() {



}

getMovies(1)


