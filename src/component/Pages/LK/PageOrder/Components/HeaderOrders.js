import React from "react";
import "./HeaderOrders.css";

const HeaderOrders = () => {
    return(
        <div className="DivHeaderOrders">
                <div className="DivDataOrder">
                    <h4 className="H4DataOrder">Дата заказа</h4>
                </div>
                <div className="DivTerm">
                    <h4 className="H4Term">Срок</h4>
                </div>
                <div className="DivStep">
                    <h4 className="H4Step">Статус</h4>
                </div>
                <div className="DivTotal">
                    <h4 className="H4Total">Сумма</h4>
                </div>
        </div>
    )
}

export default HeaderOrders;