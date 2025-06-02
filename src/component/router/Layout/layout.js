import React from "react";
import Header from "./Header/header";
import { Outlet } from "react-router-dom";
import "./layout.css";

const Layout = () => {
    return(
        <>
            <Header/>
            <div className="DivOutlet">
                <Outlet/>
            </div>
        </>
    )
}

export default Layout;