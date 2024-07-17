import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import {ReactJSXElement} from "@emotion/react/types/jsx-namespace";
import {Route, Routes, BrowserRouter} from "react-router-dom";
import {Notification} from "./ui_components/Notifications";
import {Navigation} from "./ui_components/Navigation";
import {Chat} from "./pages/Chat";
import {Impressum} from "./pages/Impressum";
import {License} from "./pages/License";
import {Datenschutz} from './pages/Datenschutz';

function Main(): ReactJSXElement {
    return (
        <div>
            <BrowserRouter>
                <Navigation>
                <Notification variant={'filled'} tooltip={'klicken, um die Nachricht zu entfernen'} spacingBottom={150}/>
                    <Routes>
                        <Route path={''} element={<Chat/>}/>
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
