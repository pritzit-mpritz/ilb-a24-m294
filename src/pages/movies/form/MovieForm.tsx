import React from 'react';
import {useMovieForm} from "./useMovieForm.ts";
import {Button, Stack, TextField} from "@mui/material";
import JsonView from "@uiw/react-json-view";

const MovieForm: React.FC = () => {
    const {movie, handleChange, handleSubmit} = useMovieForm();
    return (
        <div>
            <h1>Movie Form</h1>
            <Stack direction={"row"} justifyContent={"space-between"} padding={2}>
                <Stack direction={"column"} spacing={2} justifyContent={"start"} alignItems={"start"}>
                    <TextField
                        label={"Title"}
                        value={movie.title}
                        onChange={(event) => handleChange("title", event.target.value)}
                    />
                    <TextField
                        label={"Veröffentlichung"}
                        value={movie.releaseYear}
                        onChange={(event) => handleChange("releaseYear", event.target.value)}
                    />
                    <TextField
                        label={"Rating"}
                        value={movie.rating}
                        onChange={(event) => handleChange("rating", event.target.value)}
                    />
                    <Button variant={"contained"} color={"primary"} onClick={handleSubmit}>Speichern</Button>
                </Stack>
                <JsonView value={movie}/>
            </Stack>
        </div>
    );
};

export default MovieForm;