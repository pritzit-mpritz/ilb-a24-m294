import {useEffect, useState} from "react";
import type {Movie, MovieOverviewData} from "./MovieTypes.ts";
import {useNavigate} from "react-router";
import {deleteMovieById, getMovies} from "../../../data/movies/MovieDataService.ts";

/**
 * A custom hook used to fetch and manage movie overview data. The hook fetches
 * a list of movies from a specified endpoint and provides the movie data.
 *
 * @returns {MovieOverviewData} An object containing the movie data.
 */
export const useMovieOverviewData = (): MovieOverviewData => {
    const [movies, setMovies] = useState<Movie[] | null>(null);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [editMovieId, setEditMovieId] = useState<string | undefined>();

    const navigate = useNavigate();

    useEffect(() => {
        fetchMovies();
    }, []);

    useEffect(() => {
        if(!dialogOpen)
            setEditMovieId(undefined);
    }, [dialogOpen]);

    /**
     * Fetches movies from a specified API endpoint and updates the state with the fetched data.
     * Handles any errors that may occur during the fetch operation.
     *
     * @return {Promise<void>} A promise that resolves when the movies are successfully fetched and state is updated.
     */
    async function fetchMovies(): Promise<void> {
        setMovies(null);
        try {
            const tempMovies = await getMovies();
            setMovies(tempMovies);
        } catch (error) {
            console.error(error);
        }
    }

    const navigateToNewMovie = () => {
        console.log("Navigate to new movie");
        navigate("/movies/new");
    }

    async function deleteMovie(id: string) {
        console.log("Deleting Movie" + id);
        try {
            await deleteMovieById(id);
            await fetchMovies();
        } catch (error) {
            console.error(error);
        }
    }

    async function editMovie(id: string) {
        console.log("Editing Movie " + id);
        setEditMovieId(id);
        setDialogOpen(true);
    }

    async function onMovieSaved() {
        setDialogOpen(false);
        await fetchMovies();
    }

    return {movies, dialogOpen, editMovieId, setDialogOpen, onMovieSaved, fetchMovies, navigateToNewMovie, deleteMovie, editMovie};
}