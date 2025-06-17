import {useState} from "react";
import type {Actor} from "../../../pages/actor/overview/ActorType.ts";
import {createActor} from "../../../data/actor/ActorDataService.ts";

const defaultInput: Actor = {
    name: ""
}

export interface ActorFormProps {
    onSave: () => void | Promise<void>
}

export const useActorForm = ({onSave}: ActorFormProps) => {
    const [actorInput, setActorInput] = useState<Actor>(defaultInput);

    const handleChange = (key: keyof Actor, value: unknown) => {
        setActorInput({...actorInput, [key]: value})
    }

    const handleSubmit = async () => {
        console.log("Trying to save actor: ", actorInput);

        await createActor(actorInput)

        onSave();
    }

    return {actorInput, setActorInput, handleSubmit, handleChange}
}