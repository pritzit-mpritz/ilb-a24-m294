import React from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";
import type {Actor} from "./ActorType.ts";
import {useActorOverview} from "./useActorOverview.ts";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import ActorForm from "../../../components/actors/form/ActorForm.tsx";

const ActorOverview: React.FC = () => {
    const {actors, deleteActor, dialogOpen, setDialogOpen, onActorSaved, editActor, editActorId} = useActorOverview();

    const ActorTableRow = ({actor}: { actor: Actor }) =>
        (<TableRow>
                <TableCell>{actor.id}</TableCell>
                <TableCell>{actor.name}</TableCell>
                <TableCell>
                    <IconButton
                        color={"error"}
                        onClick={() => deleteActor(actor.id!)}>
                        <DeleteIcon/>
                    </IconButton>
                    <IconButton onClick={() => editActor(actor.id!)}>
                        <EditIcon/>
                    </IconButton>
                </TableCell>
            </TableRow>
        )

    return (
        <div>
            <h1>Actor Overview</h1>
            <Button variant={"contained"} onClick={() => setDialogOpen(true)} color="success"
                    startIcon={<AddIcon/>}>New</Button>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {actors.map(actor => <ActorTableRow key={actor.id} actor={actor}/>)}
                    </TableBody>
                </Table>
            </TableContainer>
            <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}
                    fullWidth
                    maxWidth={"xs"}>
                <DialogTitle>New Actor</DialogTitle>
                <DialogContent>
                    <ActorForm onSave={onActorSaved} actorId={editActorId}/>
                </DialogContent>
                <DialogActions>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default ActorOverview;