import React from 'react';
import {useMovieDetails} from "./useMovieDetails.ts";
import JsonView from "@uiw/react-json-view";
import {Card, CardContent, Paper, Rating, Stack} from "@mui/material";

const MovieDetails: React.FC = () => {
    const {movieId, movie, actors} = useMovieDetails();

    if (!movieId) {
        return (<h1>No movie found</h1>);
    }

    return (
        <div style={{paddingTop: "1em"}}>
            <Card component={Paper}>
                <CardContent>
                    <Stack spacing={2} direction="row" alignItems="center">
                        <h1>{movie?.title}</h1>
                        <Rating value={movie?.rating ?? 0} max={10} precision={0.5} readOnly />
                    </Stack>
                    <p>Released in: {movie?.releaseYear}</p>
                    <p style={{fontWeight: "bold"}}>
                        Genres
                    </p>
                    <ul>
                        {
                            (movie && movie.genre.length > 0)
                                ? movie?.genre.map(genre => <li key={genre}>{genre}</li>)
                                : <li>No genres</li>
                        }
                    </ul>
                </CardContent>
            </Card>
            <Card component={Paper}>
                <CardContent>
                    {actors && <JsonView value={actors} /> }
                </CardContent>
            </Card>
            {movie && <JsonView value={movie}/>}
        </div>
    );
};

export default MovieDetails;