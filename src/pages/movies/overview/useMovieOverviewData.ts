import {useEffect, useState} from "react";
import type {Movie, MovieOverviewData} from "./MovieTypes.ts";
import {useNavigate} from "react-router";

/**
 * A custom hook used to fetch and manage movie overview data. The hook fetches
 * a list of movies from a specified endpoint and provides the movie data.
 *
 * @returns {MovieOverviewData} An object containing the movie data.
 */
export const useMovieOverviewData = (): MovieOverviewData => {
    const [movies, setMovies] = useState<Movie[] | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetchMovies();
    }, []);

    /**
     * Fetches movies from a specified API endpoint and updates the state with the fetched data.
     * Handles any errors that may occur during the fetch operation.
     *
     * @return {Promise<void>} A promise that resolves when the movies are successfully fetched and state is updated.
     */
    async function fetchMovies(): Promise<void> {
        //TODO: Move to DataService
        setMovies(null);
        setTimeout(async () => {
            try {
                const response = await fetch('http://localhost:3000/movies');
                const data = await response.json();
                setMovies(data ?? null);
            } catch (error) {
                console.log(error);
            }
        }, 2000);
    }

    const navigateToNewMovie = () => {
        console.log("Navigate to new movie");
        navigate("/movies/new");
    }

    async function deleteMovie(id: string) {
        console.log(id);
    }

    return {movies, fetchMovies, navigateToNewMovie, deleteMovie};
}