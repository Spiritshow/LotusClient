import React, { useState } from "react";
import "./Main.css";
import MainComponent from "./components/MainComponent/MainComponent";
import Catalog from "./components/Catalog/Catalog";
import Company from "./components/Company/Company";
import Contacts from "./components/Contacts/Contacts";
import CardLogin from "./components/Login/CardLogin";
import CreateOrder from "./components/CreateOrder/CreateOrder";

const Main = () => {
    const [toggleLogin,setToggleLogin] = useState(false);
    const [toggleCreate, setToggleCreate] = useState(false);
    
    const handleToggleCreate = () => {
        setToggleCreate(!toggleCreate);
    } 

    const handleToggleLogin = () => {
        if(!localStorage.getItem("accessToken")){
            setToggleLogin(!toggleLogin);
        }
        else{
            setToggleLogin(false);
            handleToggleCreate();
        }
    }

    return(
        <div className="DivMain">
            {toggleLogin && <CardLogin prop={{foo: handleToggleCreate, toggle: handleToggleLogin}}/>}
            {toggleCreate && <CreateOrder prop={{toggle: handleToggleCreate}}/>}
            <MainComponent/>
            <Catalog prop={{foo: handleToggleLogin}}/>
            <Company/>
            <Contacts/>
        </div>
    )
}

export default Main;