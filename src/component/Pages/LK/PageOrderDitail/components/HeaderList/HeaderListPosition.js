import React from "react";
import "./HeaderListPosition.css";

const HeaderListPosition = () => {
    return(
        <div className="CardHeaderPosition">
            <div className="DivNameProd">
                <h3 className="row">Название продукта</h3>
            </div>
            <div className="DivCount">
                <h3 className="row">Кол-во</h3>
            </div>
            <div className="DivPrice">
                <h3 className="row">Цена</h3>
            </div>
        </div>
    )
}

export default HeaderListPosition;