import React, { useEffect, useState } from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
import ResponseCreateAuth from "./helper/ResponseCreateAuth";

const Signup = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        FIO_director: '',
        address: '',
        numberTelephone: '',
        email: '',
        account_number: '',
        BIC: '',
        correspondent_account: '',
        IIN: '',
        KPP: '',
        name_bank: '',
        address_bank: '',
    });

    const [authData,setAuthData] = useState({
        email: '',
        password: '',
        idcompany: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        if(name === "email"){
            setAuthData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    const handleChangeAuth = (e) => {
        const { name, value } = e.target;

        setAuthData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleClickBackMain = () => {
        navigate("/lotusclient/");
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:3000/company', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("accessToken")}`
            },
            withCredentials: true,
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Ошибка при создании компании и заказа');
            }
            return response.json();
        })
        .then(data => {
            setAuthData((prevData) => ({
                ...prevData,
                idcompany: data.company_id,
            }));
        })
        .catch(error => {
            console.error('Ошибка при отправке:', error);
        });

        console.log('Отправляем в БД:', formData);
    };

    useEffect(() => {
        if (authData.idcompany !== '') {
            ResponseCreateAuth(authData.email, authData.password, authData.idcompany);
            navigate(`/lotusclient/PersonalAccount/${authData.idcompany}`)
        }
    }, [authData.idcompany])

    const translateKey = (key) => {
        switch (key) {
            case "name":
                return("Название");
            case "FIO_director":
                return("ФИО Директора");
            case "address":
                return("Адрес");
            case "numberTelephone":
                return("Номер телефона")
            case "email":
                return("Email");
            case "account_number":
                return("Рассчётный счёт");
            case "BIC":
                return("БИК");
            case "correspondent_account":
                return("Корреспондентский счёт");
            case "IIN":
                return("ИИН");
            case "KPP":
                return("КПП");
            case "name_bank":
                return("Название банка");
            case "address_bank":
                return("Адрес банка")
      
            default:
                break;
        }
    }

    return(
        <div className="DivSignup">
            <form onSubmit={handleSubmit}>
                {Object.entries(formData).map(([key, value]) =>{ 
                    const transKey = translateKey(key);
                    return(
                        <div className="DivInputCompany" key={key}>
                            <h4 className="textCompany">{transKey}:</h4>
                            <input
                                className="InputCompany"
                                type="text"
                                name={key}
                                value={value}
                                onChange={handleChange}
                                placeholder={key}
                            />
                        </div>
                )})}
                <h4 className="TextCreatePassword">Придумайте пароль для личного кабинета:</h4>
                <div className="DivInputCompany">
                    <h4 className="textCompany">Пароль:</h4>
                    <input
                        className="InputCompany"
                        type="text"
                        name="password"
                        value={authData.password}
                        onChange={handleChangeAuth}
                        placeholder="password"
                    />
                </div>
                <div className="DivButton">
                    <button className="ButtonBackMain" type="button" onClick={handleClickBackMain}>На главную</button>
                    <button className="ButtonAccept" type="submit">Зарегистрироваться</button>
                </div>
            </form>
        </div>
    )
}

export default Signup;