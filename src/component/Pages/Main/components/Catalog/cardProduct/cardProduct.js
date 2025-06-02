import React from "react";
import "./cardProduct.css";

const CardProduct = ({prop}) => {
    
    const handlerClick = () => {
        prop.foo();
    }

    return(
        <div className="DivCardProdut">
            <div className="DivBodyCard">
                <img className="ImageProduct" src={`${process.env.PUBLIC_URL}${prop.url}`} alt="Товар"/>
                <h2 className="CardText">{prop.product}</h2>
            </div>
            <div className="DivButtonCreate">
                <button className="buttonCreate" onClick={handlerClick}>Заказать</button>
                <div className="outSercal"><div className="inSercal"><img className="reversArrow" src={`${process.env.PUBLIC_URL}/reversArrow.jpg`} alt="<"/></div></div>
            </div>
        </div>
    )
}

export default CardProduct;