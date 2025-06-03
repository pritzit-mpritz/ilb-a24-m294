export interface Movie {
    id?: string,
    title: string,
    releaseYear: number,
    genre: string[],
    directorId: string,
    actorIds: string[],
    rating: number
}

export interface MovieOverviewData {
    movies: Movie[] | null,
    fetchMovies: () => void | Promise<void>,
    deleteMovie: (id: string) => void | Promise<void>,
    navigateToNewMovie: () => void | Promise<void>
}

export interface MovieTableRowProps {
    movie: Movie
}