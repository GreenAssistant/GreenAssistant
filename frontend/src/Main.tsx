import React from 'react';
import {Route, Routes, BrowserRouter} from "react-router-dom";
import {Home} from "./pages/Home";
import 'bootstrap/dist/css/bootstrap.css'
import {ReactJSXElement} from "@emotion/react/types/jsx-namespace";
import {Notification} from "./ui_components/Notifications";
import {Navigation} from "./ui_components/Navigation";
import {Impressum} from "./pages/Impressum";
import {License} from "./pages/License";
import { Datenschutz } from './pages/Datenschutz';

function Main(): ReactJSXElement {
    return (
        <div>
            <BrowserRouter>
                <Navigation>
                <Notification variant={'outlined'} tooltip={'klicken, um die Nachricht zu entfernen'} spacingBottom={150}/>
                    <Routes>
                        <Route path={''} element={<Home/>}/>
                        <Route path={'/datenschutz'} element={<Datenschutz/>}/>
                        <Route path={'/impressum'} element={<Impressum/>}/>
                        <Route path={'/lizenz'} element={<License/>}/>
                    </Routes>
                </Navigation>
            </BrowserRouter>
        </div>
    );
}

export default Main;
