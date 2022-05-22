import React from "react";
import {Routes, Route} from 'react-router-dom';
import { NavBar } from "./components/Navbar";
import { Form } from "./pages/Form";
import { Home } from "./pages/Home";
const AplicationRoutes = () => {
    return(
        <>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/form">
                    <Route path=":movieId" element={<Form/>}/>
                </Route>
            </Routes>
        </>
    )
}

export {AplicationRoutes}