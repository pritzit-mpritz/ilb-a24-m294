import {useEffect, useState} from "react";
import type {Actor} from "./ActorType.ts";
import {deleteActorById, getActors} from "../../../data/actor/ActorDataService.ts";

export const useActorOverview = () => {
    const [actors, setActors] = useState<Actor[]>([]);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [editActorId, setEditActorId] = useState<string | undefined>();

    useEffect(() => {
        fetchActors();
    }, []);

    const fetchActors = async () => {
        setActors([]);
        const fetchedActors = await getActors();
        console.log("Got actors: ", fetchedActors);
        setActors(fetchedActors);
    };

    const deleteActor = async (id: string) => {
        console.log("Deleting Actor " + id);
        await deleteActorById(id);
        await fetchActors();
    }

    const editActor = async (id: string) => {
        console.log("Editing Actor " + id);
        setEditActorId(id);
        setDialogOpen(true);
    }

    const onActorSaved = async () => {
        setDialogOpen(false);
        await fetchActors();
    }

    return {actors, deleteActor, dialogOpen, setDialogOpen, onActorSaved, editActorId, editActor};
}