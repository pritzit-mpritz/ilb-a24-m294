import {useState} from "react";
import type {Movie} from "../overview/MovieTypes.ts";
import {useNavigate} from "react-router";

export const useMovieForm = () => {
    const navigate = useNavigate();
    const [movie, setMovie] = useState<Movie>({
        id: "",
        title: "",
        releaseYear: 0,
        genre: [],
        directorId: "",
        actorIds: [],
        rating: 0
    });

    const handleChange = (key: keyof Movie, value: unknown) => {
        console.log(key, value);
        setMovie({...movie, [key]: value})
    }

    const handleSubmit = async () => {
        console.log(movie);

        delete movie.id;

        movie.releaseYear = Number(movie.releaseYear);
        movie.rating = Number(movie.rating);

        if(Number.isNaN(movie.releaseYear)) {
            handleChange("releaseYear", 0);
            return;
        }
        if(Number.isNaN(movie.rating)) {
            handleChange("rating", 0);
            return;
        }

        //TODO: Move to DataService
        const jsonString = JSON.stringify(movie);
        console.log(jsonString);
        const result = await fetch("http://localhost:3000/movies", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: jsonString
        })

        if(result.ok){
            console.log("Movie was created", await result.json());
            setMovie({
                id: "",
                title: "",
                releaseYear: 0,
                genre: [],
                directorId: "",
                actorIds: [],
                rating: 0
            });
            navigate("/movies");
        }
        else {
            console.log("Error creating movie", await result.json());
        }
    }

    return {movie, handleChange, handleSubmit};
}