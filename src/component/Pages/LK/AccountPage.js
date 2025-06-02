import React from "react";
import "./AccountPage.css";
import SidebarAcc from "./SidebarAcc/SidebarAcc";
import { Outlet } from "react-router-dom";

const AccountPage = () => {
    return(
        <>
            <SidebarAcc/>
            <div className="DivAccountPage">
                <Outlet/>
            </div>
        </>
    )
}

export default AccountPage;