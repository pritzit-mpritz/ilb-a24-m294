import type {Movie} from "../../pages/movies/overview/MovieTypes.ts";
import {performDelete, performGet, performPost} from "../DataService.ts";

const BaseUrl = `${import.meta.env.VITE_BASE_API}/movies`;

export async function getMovies(): Promise<Movie[]> {
    const data = await performGet(BaseUrl);
    return data ?? [];
}

export async function getMovieById(id: string): Promise<Movie | null> {
    const data = await performGet(`${BaseUrl}/${id}`);
    return data ?? null;
}

export async function createMovie(movie: Movie): Promise<Movie> {
    delete movie.id;
    return await performPost(BaseUrl, movie);
}

export async function deleteMovieById(id: string) {
    await performDelete(`${BaseUrl}/${id}`);
}