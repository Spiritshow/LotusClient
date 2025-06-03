import React, { useState } from "react";
import "./CardOrderPosition.css"
const CardOrderPosition = ({prop}) => {

    return(
        <div className="CardOrderPosition">
            <div className="DivNameProd">
                <h3 className="row">{prop.name}</h3>
            </div>
            <div className="DivCount">
                <h3 className="row">{prop.count}</h3>
            </div>
            <div className="DivPrice">
                <h3 className="row">{prop.price}</h3>
            </div>
        </div>
    )

}

export default CardOrderPosition;