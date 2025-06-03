import React from 'react';
import {useMovieOverviewData} from "./useMovieOverviewData.ts";
import {Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import type {MovieTableRowProps} from "./MovieTypes.ts";
import AddIcon from '@mui/icons-material/Add';

const MovieOverview: React.FC = () => {
    const {movies, navigateToNewMovie, deleteMovie} = useMovieOverviewData();

    /**
     * MovieTableRow is a functional React component used to render a row in a movie table.
     * This component displays movie details, including title, release year, genre, and rating,
     * and provides a delete button to remove the movie.
     *
     * @component
     * @param {MovieTableRowProps} props - The props object containing the movie data to display.
     * @param {Movie} props.movie - The movie object containing details about the movie.
     * @returns {React.ReactElement} A table row displaying movie details and a delete button.
     */
    const MovieTableRow: React.FC<MovieTableRowProps> = ({movie}: MovieTableRowProps): React.ReactElement => {
        return (
            <TableRow key={movie.id}>
                <TableCell>{movie.title}</TableCell>
                <TableCell>{movie.releaseYear}</TableCell>
                <TableCell>{movie.genre.join(", ")}</TableCell>
                <TableCell>{movie.rating}</TableCell>
                <TableCell>
                    <Button
                        color={"error"}
                        variant={"contained"}
                        onClick={() => deleteMovie(movie.id)}>
                        DELME
                    </Button>
                </TableCell>
            </TableRow>
        )
    }

    return (
        <div>
            <h1>Movie Overview</h1>
            <Button variant={"contained"} color="success" startIcon={<AddIcon />} onClick={navigateToNewMovie}>New</Button>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Title</TableCell>
                            <TableCell>Veröffentlichung</TableCell>
                            <TableCell>Genre</TableCell>
                            <TableCell>Rating</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            movies
                                ? movies.map(movie => <MovieTableRow key={movie.id} movie={movie}/>)
                                : (
                                    <TableRow>
                                        <TableCell colSpan={4}>
                                            Keine Filme gefunden
                                        </TableCell>
                                    </TableRow>
                                )
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default MovieOverview;