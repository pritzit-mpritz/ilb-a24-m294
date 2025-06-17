import React from 'react';
import {type ActorFormProps, useActorForm} from "./useActorForm.ts";
import {Button, Stack, TextField} from "@mui/material";

const ActorForm: React.FC<ActorFormProps> = ({onSave}) => {
    const {actorInput, handleChange, handleSubmit} = useActorForm({onSave});
    return (
        <Stack direction={"column"} spacing={2} justifyContent={"start"} alignItems={"start"} style={{padding: "0.5em"}}>
            <TextField label={"Name"}
                       fullWidth
                       value={actorInput.name}
                       onChange={(event) => handleChange("name", event.target.value)}/>
            <Button variant={"contained"} style={{alignSelf: "end"}} color={"success"} onClick={handleSubmit}>Speichern</Button>
        </Stack>
    );
};

export default ActorForm;