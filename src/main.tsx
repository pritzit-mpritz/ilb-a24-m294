import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import {BrowserRouter, Route, Routes} from "react-router";
import App from "./App.tsx";
import MovieOverview from "./pages/MovieOverview.tsx";
import ActorOverview from "./pages/ActorOverview.tsx";
import DirectorOverview from "./pages/DirectorOverview.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route element={<App/>}>
                    <Route path="" element={<h1>Home</h1>}/>
                    <Route path="movies" element={<MovieOverview />}/>
                    <Route path="actors" element={<ActorOverview />}/>
                    <Route path="directors" element={<DirectorOverview />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)