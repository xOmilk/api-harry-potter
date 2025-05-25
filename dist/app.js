"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function getMovies(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = `https://api.potterdb.com/v1/movies/1`;
        let result;
        try {
            result = yield fetch(url);
            let data = yield result.json();
            console.log(data.data);
            return data.data;
        }
        catch (error) {
            console.log("Erro:", error.message);
        }
    });
}
function printMovies() {
    return __awaiter(this, void 0, void 0, function* () {
    });
}
getMovies(1);
