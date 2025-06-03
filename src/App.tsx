import './App.css'
import {NavLink, Outlet} from "react-router";
import {AppBar, Stack, Toolbar, Typography} from "@mui/material";

function App() {
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        ILB A24 M294
                    </Typography>
                    <Stack direction={"row"} spacing={2} justifyContent={"center"}>
                        <NavLink className={({isActive}) => isActive ? "menu-navlink active-link" : "menu-navlink "}
                                 to="/actors">Actors</NavLink>
                        <NavLink className={({isActive}) => isActive ? "menu-navlink active-link" : "menu-navlink "}
                                 to="/directors">Directors</NavLink>
                        <NavLink className={({isActive}) => isActive ? "menu-navlink active-link" : "menu-navlink "}
                                 to="/movies">Movies</NavLink>
                    </Stack>
                </Toolbar>
            </AppBar>
            <Outlet/>
        </>
    )
}

export default App
