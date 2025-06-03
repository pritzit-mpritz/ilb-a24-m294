import React, {useEffect, useState} from 'react';

interface Movie {
    id: string,
    title: string,
    releaseYear: number,
    genre: string[],
    directorId: string,
    actorIds: string[],
    rating: number
}

const MovieOverview: React.FC = () => {
    const [movies, setMovies] = useState<Movie[] | null>(null);

    useEffect(() => {
        setTimeout(() => fetchMovies(), 1000);
    }, []);

    async function fetchMovies() {
        try {
            const response = await fetch('http://localhost:3000/movies');
            const data = await response.json();
            setMovies(data ?? null);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h1>Movie Overview</h1>
            <ul>
                {
                    movies
                        ? movies.map(
                            movie =>
                                <li key={movie.id}>{movie.title} - {movie.rating}</li>
                        )
                        : "Keine Filme gefunden"
                }
            </ul>
        </div>
    );
};

export default MovieOverview;