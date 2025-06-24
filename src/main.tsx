import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import {BrowserRouter, Route, Routes} from "react-router";
import App from "./App.tsx";
import MovieOverview from "./pages/movies/overview/MovieOverview.tsx";
import ActorOverview from "./pages/actor/overview/ActorOverview.tsx";
import DirectorOverview from "./pages/DirectorOverview.tsx";
import MovieDetails from "./pages/movies/details/MovieDetails.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route element={<App/>}>
                    <Route path="" element={<h1>Home</h1>}/>
                    <Route path="movies" >
                        <Route index element={<MovieOverview />} />
                        <Route path={":id"} element={<MovieDetails />} />
                    </Route>
                    <Route path="actors" element={<ActorOverview />}/>
                    <Route path="directors" element={<DirectorOverview />}/>
                    <Route path="*" element={<p>This link does not exist</p>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)