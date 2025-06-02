import React, { useState } from "react";
import "./CardLogin.css";
import loginResponse from "../../../../Helper/LoginRespons";
import {useNavigate } from "react-router-dom";

const CardLogin = ({prop}) => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('');
    const [error, setError] = useState();
    const navigate = useNavigate();

    const handleClick = async () => {
        try{
            const token = await loginResponse(login, password);
            console.log("Успешный вход. Access token:", token);
            prop.foo();
            prop.toggle();
        }
        catch(err){
            console.log(err.message);
            setError(err.message);
        }
    } 

    const handleCheangeSetLogin = (e) => {
        setLogin(e.target.value)
    }

    const handleCheangeSetPassword = (e) => {
        setPassword(e.target.value)
    }

    const handleClickSingUp = () => {
        prop.toggle()
        navigate('/lotusclient/Signup');
    }

    const handleClickUpdatePassword = () => {
        console.log("Забыли Пароль?")
    }

    return(
    <>
        <div onClick={prop.toggle} className="overlay"></div>
        <div className="DivCardLogin">
            <div className="DivLogin">
                <h3 className="HeaderLogin">Логин:</h3>
                <input type="text" className="InputLogin" value={login} onChange={handleCheangeSetLogin}></input>
            </div>
            <div className="DivPassword">
                <h3 className="headerPassword">Пароль:</h3>
                <input type="password" className="InputPassword" value={password} onChange={handleCheangeSetPassword}></input>
            </div>
            <div className="DivHelps">
                <h5 onClick={handleClickSingUp} className="TextHelps Margin-Helps">Зарегистрироваться</h5>
                <h5 onClick={handleClickUpdatePassword} className="TextHelps">Забыли пароль?</h5>
            </div>
            {error && <h3 className="ErrorLogin">{error}</h3>}
            <button className="ButtonLogin" onClick={handleClick}>Войти</button>
        </div>
    </>
    )
}

export default CardLogin;