var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//Função promete retornar uma resposta ou null
function getMovies(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = id === undefined ? `https://api.potterdb.com/v1/movies` : `https://api.potterdb.com/v1/movies/${id}`;
        id ? console.log("O id fornecido foi", id) : console.log("Procurando todos os filmes.");
        try {
            let result;
            result = yield fetch(url);
            let data = yield result.json();
            if (data.data) {
                //ver o filme retornado
                //console.log(data.data);
                return data.data;
            }
        }
        catch (error) {
            console.log("Erro:", error.message);
        }
        return null;
    });
}
function getAllMovies() {
    return __awaiter(this, void 0, void 0, function* () {
        const movie = yield getMovies();
        if (movie === null) {
            throw new Error("NO MOVIES WAS FOUND!");
        }
        console.log("Todos os filmes:", movie);
        return movie;
    });
}
function searchMovie(movieId) {
    return __awaiter(this, void 0, void 0, function* () {
        const movie = yield getMovies(movieId);
        if (movie === null) {
            console.log("Não foi possivel encontrar o filme procurado");
            return false;
        }
        else {
            console.log("O filme procurado foi: ", movie);
            return movie;
        }
    });
}
function setMovie(movieId) {
    return __awaiter(this, void 0, void 0, function* () {
        const movie = yield searchMovie(movieId);
        if (typeof movie === 'boolean') {
            console.log('Não foi possivel encontrar');
        }
        else {
            console.log(movie.attributes.poster);
            //Criando o poster e adicionando dentro da div img
            let divImage = document.querySelector(".img");
            let posterImg = document.createElement("img");
            posterImg.src = movie.attributes.poster;
            divImage === null || divImage === void 0 ? void 0 : divImage.appendChild(posterImg);
            //imprimindo o conteudo do filme
            let divResume = document.querySelector(".resume");
            let h3Title = document.createElement("h3");
            h3Title.innerHTML = `<p><b>${movie.attributes.title}</b></p>`;
            let pRealeaseDate = document.createElement("p");
            pRealeaseDate.innerHTML = `<p><b>Data de Lançamento:</b> ${movie.attributes.release_date}</p>`;
            let pRunningTime = document.createElement("p");
            pRunningTime.innerHTML = `<p><b>Tempo de Duração: </b>${movie.attributes.running_time}</p>`;
            let pSummary = document.createElement("p");
            pSummary.innerHTML = `<p>${movie.attributes.summary}</p>`;
            divResume === null || divResume === void 0 ? void 0 : divResume.appendChild(h3Title);
            divResume === null || divResume === void 0 ? void 0 : divResume.appendChild(pRealeaseDate);
            divResume === null || divResume === void 0 ? void 0 : divResume.appendChild(pRunningTime);
            divResume === null || divResume === void 0 ? void 0 : divResume.appendChild(pSummary);
        }
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        let id = "94055b36-c4dd-4ae5-aede-dd6b6e67e107";
        yield getAllMovies();
        console.log("------------------------");
        yield setMovie(id);
    });
}
main();
export {};
