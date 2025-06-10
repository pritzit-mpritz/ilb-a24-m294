import React from 'react';
import {useMovieForm} from "./useMovieForm.ts";
import {Button, Stack, TextField} from "@mui/material";
import type {Movie} from "../../../pages/movies/overview/MovieTypes.ts";

interface MovieFormProps {
    onSave: (movie: Movie) => void;
}

const MovieForm: React.FC<MovieFormProps> = ({onSave}) => {
    const {movie, handleChange, handleSubmit} = useMovieForm({onSave});
    return (
        <div style={{padding: "0.5em"}}>
            <Stack direction={"column"} spacing={2} justifyContent={"start"} alignItems={"start"}>
                <TextField
                    fullWidth
                    label={"Title"}
                    value={movie.title}
                    onChange={(event) => handleChange("title", event.target.value)}
                />
                <TextField
                    fullWidth
                    label={"Veröffentlichung"}
                    value={movie.releaseYear}
                    onChange={(event) => handleChange("releaseYear", event.target.value)}
                />
                <TextField
                    fullWidth
                    label={"Rating"}
                    value={movie.rating}
                    onChange={(event) => handleChange("rating", event.target.value)}
                />
                <Button variant={"contained"} color={"primary"} onClick={handleSubmit}>Speichern</Button>
            </Stack>
        </div>
    );
};

export default MovieForm;