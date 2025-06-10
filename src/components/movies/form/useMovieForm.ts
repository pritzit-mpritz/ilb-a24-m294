import {useState} from "react";
import {createMovie} from "../../../data/movies/MovieDataService.ts";
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

export const useMovieForm = ({onSave}: {onSave: (movie:Movie) => void | Promise<void>}) => {
    const [movie, setMovie] = useState<Movie>(defaultInput);

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
            const newMovie = await createMovie(movie);
            console.log(newMovie);
            setMovie(defaultInput);

            onSave(newMovie);
        } catch (error) {
            console.error("Error creating movie", error);
        }
    }

    return {movie, handleChange, handleSubmit};
}