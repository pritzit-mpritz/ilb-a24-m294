import {useEffect, useState} from "react";
import {createMovie, getMovieById, updateMovie} from "../../../data/movies/MovieDataService.ts";
import type {Movie} from "../../../pages/movies/overview/MovieTypes.ts";

const defaultInput = {
    id: "",
    title: "",
    releaseYear: 0,
    genre: [],
    directorId: "",
    actorIds: [],
    rating: 0
};

export interface MovieFormProps {
    onSave: (movie: Movie) => void;
    movieId?: string;
}

export const useMovieForm = ({onSave, movieId}: MovieFormProps) => {
    const [movie, setMovie] = useState<Movie>(defaultInput);

    useEffect(() => {
        if(movieId) {
            fetchMovie();
        }
        else {
            setMovie(defaultInput);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [movieId]);

    const fetchMovie = async () => {
        if (movieId) {
            console.log("Fetching movie " + movieId);
            const fetchedMovie = await getMovieById(movieId);
            setMovie(fetchedMovie ?? defaultInput);
        }
    }

    const handleChange = (key: keyof Movie, value: unknown) => {
        setMovie({...movie, [key]: value})
    }

    const handleSubmit = async () => {
        console.log(movie);

        movie.releaseYear = Number(movie.releaseYear);
        movie.rating = Number(movie.rating);

        if (Number.isNaN(movie.releaseYear)) {
            handleChange("releaseYear", 0);
            return;
        }
        if (Number.isNaN(movie.rating)) {
            handleChange("rating", 0);
            return;
        }

        try {
            let newMovie;
            if (movieId) {
                newMovie = await updateMovie(movie.id!, movie);
            }
            else {
              newMovie = await createMovie(movie);
            }
            console.log(newMovie);
            setMovie(defaultInput);

            onSave(newMovie);
        } catch (error) {
            console.error("Error creating movie", error);
        }
    }

    return {movie, handleChange, handleSubmit};
}