import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout/layout";
import Main from "../Pages/Main/Main";
import Signup from "../Pages/Signup/Signup";
import AccountPage from "../Pages/LK/AccountPage";
import PageOrder from "../Pages/LK/PageOrder/PageOrder";
import PageOrderDitail from "../Pages/LK/PageOrderDitail/PageOrderDitail";

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/lotusclient/" element={<Layout/>}>
                    <Route path="/lotusclient/" element={<Main/>}/>
                    <Route path="/lotusclient/Signup" element={<Signup/>}/>
                    <Route path="/lotusclient/PersonalAccount/:id" element={<AccountPage/>}>
                        <Route path="/lotusclient/PersonalAccount/:id" element={<PageOrder/>}/>
                        <Route path="/lotusclient/PersonalAccount/:id/Order/:idOrder" element={<PageOrderDitail/>}/>
                        <Route path="/lotusclient/PersonalAccount/:id/Documents" />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;