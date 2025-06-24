import {useEffect, useState} from "react";
import type {Actor} from "../../../pages/actor/overview/ActorType.ts";
import {createActor, getActorById, updateActor} from "../../../data/actor/ActorDataService.ts";

const defaultInput: Actor = {
    name: ""
}

export interface ActorFormProps {
    onSave: () => void | Promise<void>,
    actorId?: string
}

export const useActorForm = ({onSave, actorId}: ActorFormProps) => {
    const [actorInput, setActorInput] = useState<Actor>(defaultInput);

    useEffect(() => {
        if (actorId)
            fetchActor();
        else setActorInput(defaultInput);
    }, [actorId]);

    const handleChange = (key: keyof Actor, value: unknown) => {
        setActorInput({...actorInput, [key]: value})
    }

    const fetchActor = async () => {
        const actor = await getActorById(actorId!);
        if (actor) {
            setActorInput(actor)
        }
    }

    const handleSubmit = async () => {
        console.log("Trying to save actor: ", actorInput);

        if (actorInput.id)
            await updateActor(actorInput);
        else await createActor(actorInput)

        onSave();
    }

    return {actorInput, setActorInput, handleSubmit, handleChange}
}