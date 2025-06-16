export type MovieAttributes = {
    title: string;
    poster: string;
    release_date: string;
    running_time: string;
    trailer: string;
    summary: string;
};

export type Movie = {
    id: string;
    attributes: MovieAttributes;
};

export type MoviesResponse = {
    data: Movie[];
};

export type MovieResponse = {
    data: Movie;
};