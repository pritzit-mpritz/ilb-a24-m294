import React, {useState} from 'react';
import {Button} from "@mui/material";

const ActorOverview: React.FC = () => {
    const [visible, setVisible] = useState<boolean>(false);
    return (
        <div>
            <h1>Actor Overview</h1>
            <Button variant={"outlined"} onClick={() => setVisible(!visible)}>
                Toggle visible
            </Button>

            <div style={{display: visible ? 'block' : 'none', width: "100px", height: "100px", background: "green"}}></div>
        </div>
    );
};

export default ActorOverview;