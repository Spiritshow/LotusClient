import React, { useState } from "react";
import "./SidebarAcc.css";
import { useNavigate } from "react-router-dom";
import Logout from "./helper/Logout";

const SidebarAcc = () => {
    
    const [classNameOrder, setClassNameOrder] = useState("Active");
    const [classNameDocument,setClassNameDocument] = useState("Passiv");
    const navigate = useNavigate();
    const idClient = localStorage.getItem("idClient");
    const handleClickOrder = () => {
        setClassNameOrder("Active");
        setClassNameDocument("Passiv")
        
        navigate(`/lotusclient/PersonalAccount/${idClient}`);
    }

    const handleClickDocument = () => {
        setClassNameOrder("Passiv");
        setClassNameDocument("Active")
        
        navigate(`/lotusclient/PersonalAccount/${idClient}/Documents`);
    }

    const handleClickExit = () => {
        Logout();
        navigate(`/lotusclient/`);
    }

    return(
        <div className="DivSidebarAcc">
            <button className={"ButtonOrder " + classNameOrder} onClick={handleClickOrder}>Заказы</button>
            <button className={"ButtonDocument " + classNameDocument} onClick={handleClickDocument}>Документы</button>
            <button className="ButtonExit" onClick={handleClickExit}>Выйти из аккаунта</button>
        </div>
    )
}

export default SidebarAcc;