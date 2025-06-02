import React, { useState } from "react";
import "./header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
    
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const idClient = localStorage.getItem("idClient");
    const toggleMenu = () => setIsOpen(!isOpen);

    const goTo = (path) => {
        navigate(path);
        setIsOpen(false); // закрыть меню после перехода
    };
    
    const scrollToSection = (id) => {
        navigate("/lotusclient/")
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 80; // высота твоего header в пикселях
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
        <div className="Header">
            <div className="DivLogoCom">
                <img src={`${process.env.PUBLIC_URL}/photo.svg`} className="Logo" alt="Eco-tara"/>
            </div>
            <div className="DivEmail">
                <img src={`${process.env.PUBLIC_URL}/email.jpg`} className="Email" alt="Email"/>
                <a href="mailto:eko-tara21@mail.ru" className="TextHeader">eko-tara21@mail.ru</a>
            </div>
            <div className="DivPhoneOne">
                <img src={`${process.env.PUBLIC_URL}/phone.jpg`} className="PhoneOne" alt="Phone"/>
                <a href="tel:+77072309323" className="TextHeader">+7 707 230-93-23</a>
            </div>
            <div className="DivPhoneTwo">
                <img src={`${process.env.PUBLIC_URL}/phone.jpg`} className="PhoneTwo" alt="Phone"/>
                <a href="tel:+77754646692" className="TextHeader">+7 775 464-66-92</a>
            </div>
            <div className="DivButtons">
                <img src={`${process.env.PUBLIC_URL}/Whatsapp.png`} href="https://api.whatsapp.com/send/?phone=%2B77072309323&text&type=phone_number&app_absent=0" className="Whatsapp" alt="Whatup"/>
                {isOpen && <div className="overlayMenu" onClick={toggleMenu}></div>}
                <div className="DivButtonMenu">
                    <button className="buttonMenu" onClick={toggleMenu}>Меню</button>
                    {isOpen && (
                        <div className="dropdown">
                            <button onClick={() => scrollToSection('Main')} className="linkButton">На главную</button>
                            <button onClick={() => scrollToSection('Catalog')} className="linkButton">Каталог</button>
                            <button onClick={() => scrollToSection('About')} className="linkButton">О компании</button>
                            <button onClick={() => scrollToSection('Contacts')} className="linkButton">Контакты</button>
                            {idClient && <button onClick={() => goTo(`/lotusclient/PersonalAccount/${idClient}`)} className="linkButton">Личный кабинет</button>}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Header;