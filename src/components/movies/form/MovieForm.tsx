import React from 'react';
import {type MovieFormProps, useMovieForm} from "./useMovieForm.ts";
import {Button, Stack, TextField} from "@mui/material";

const MovieForm: React.FC<MovieFormProps> = ({onSave, movieId}) => {
    const {movie, handleChange, handleSubmit} = useMovieForm({onSave, movieId});

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