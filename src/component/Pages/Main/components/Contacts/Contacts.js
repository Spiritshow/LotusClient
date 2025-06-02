import React from "react";
import "./Contacts.css";

const Contacts = () => {
    return(
        <div className="DivContacts" id="Contacts">
            <div className="DivContactsText">
                <div className="DivHeaderContacts">Контакты</div>
                <div className="DivHeaderCompanyName">ТОО "Эко-тара"</div>
                <div className="DivKey">Адрес: </div>
                <div className="DivValues">Казахстан, г. Петропавловск ул. Я. Гашека 25А/1<br/></div>
                <div className="DivKey">Время работы: </div>
                <div className="DivValues">С Пн по Пт, с 9-00 до 17.30<br/></div>
                <div className="DivKey">Телефон: </div>
                <div className="DivValues">+7 707 230-93-23   +7 775 464-66-92<br/></div>
                <div className="DivKey">E-mail: </div>
                <div className="DivValues">eko-tara21@mail.ru</div>
            </div>
            <div className="ImageMap"><img className="ImagePoint" src={`${process.env.PUBLIC_URL}/MapPoint.jpg`} alt="Point"/></div>
        </div>
    )
}

export default Contacts;