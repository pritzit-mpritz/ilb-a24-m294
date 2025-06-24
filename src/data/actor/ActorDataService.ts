import {performDelete, performGet, performPost, performPut} from "../DataService.ts";
import type {Actor} from "../../pages/actor/overview/ActorType.ts";

const BaseUrl = `${import.meta.env.VITE_BASE_API}/actors`;

export const getActors = async (): Promise<Actor[]> => {
    try {
        return await performGet(BaseUrl);
    } catch (error) {
        console.error(error);
        return [];
    }
}

export const getActorById = async (id: string): Promise<Actor | null> => {
    try{
        return await performGet(`${BaseUrl}/${id}`);
    } catch (error) {
        console.error(error);
    }
    return null;
}

export const getActorListById = async (id: string[]): Promise<Actor[] | null> => {
    const actorIds: string[] = id.map((id) => `id=${id}`);
    try{
        return await performGet(`${BaseUrl}?${actorIds.join('&')}`);
    } catch (error) {
        console.error(error);
    }
    return null;
}

export const updateActor = async (actor: Actor): Promise<Actor | null> => {
    try{
        return await performPut(`${BaseUrl}/${actor.id}`, actor);
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const createActor = async (actor: Actor): Promise<Actor | null> => {
    try {
        return await performPost(BaseUrl, actor);
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const deleteActorById = async (id: string) => {
    try {
        await performDelete(`${BaseUrl}/${id}`);
    } catch (error) {
        console.error(error);
    }
}