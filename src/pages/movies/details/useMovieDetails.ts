import {useParams} from "react-router";
import {useEffect, useState} from "react";
import type {Movie} from "../overview/MovieTypes.ts";
import * as MovieDataService from "../../../data/movies/MovieDataService.ts";
import type {Actor} from "../../actor/overview/ActorType.ts";
import * as ActorDataService from "../../../data/actor/ActorDataService.ts";

export const useMovieDetails = () => {
    const {id} = useParams();
    const [movie, setMovie] = useState<Movie | null>(null);
    const [actors, setActors] = useState<Actor[] | null>(null);

    useEffect(() => {
        fetchMovie().then(movies => fetchActors(movies?.actorIds));
    }, [])

    /**
     * Fetches the movie based on the given id parameter.
     * Changes the movie state to the fetched movie
     * @returns the fetched Movie for further processing
     */
    const fetchMovie = async () => {
        const movieInternal = await MovieDataService.getMovieById(id!);
        setMovie(movieInternal);
        return movieInternal;
    }

    /**
     * Fetches the actor collection based on the actor-ids.
     * Changes the actors state to the fetched actor-list
     * If the actorIds are undefined or unset. The method exits
     *
     * @param actorIds The id-collection of the actors to fetch
     */
    async function fetchActors(actorIds: string[] | undefined) {
        if(!actorIds) return;

        const actors = await ActorDataService.getActorListById(actorIds);
        setActors(actors);
    }

    return {movieId: id, movie, actors}
}