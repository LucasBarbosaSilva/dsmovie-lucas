import React from "react";
import {Routes, Route} from 'react-router-dom';
import { NavBar } from "./components/Navbar";
import { Form } from "./pages/Form";
import { Listing } from "./pages/Listing";
const AplicationRoutes = () => {
    return(
        <>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Listing/>}/>
                <Route path="/form">
                    <Route path=":movieId" element={<Form/>}/>
                </Route>
            </Routes>
        </>
    )
}

export {AplicationRoutes}