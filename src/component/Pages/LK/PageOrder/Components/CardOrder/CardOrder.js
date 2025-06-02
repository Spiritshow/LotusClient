import React from "react";
import "./CardOrder.css";

const CardOrder = ({prop}) => {
    console.log(prop)
    const acceptance_date = new Date(prop.acceptance_date);
    const term = new Date(prop.term);

    const transformDate = (date) => {
        if(date/10 < 1){
            return("0" + String(date))
        }else{
            return( String(date))
        }
    } 

    return(
        <div className="DivCardOrder">
            <div className="DivDataOrder">
                <h4 className="H4DataOrder">{transformDate(acceptance_date.getDate())}.{transformDate(acceptance_date.getMonth())}.{acceptance_date.getFullYear()}</h4>
            </div>
            <div className="DivTerm">
                <h4 className="H4Term">{transformDate(term.getDate())}.{transformDate(term.getMonth())}.{term.getFullYear()}</h4>
            </div>
            <div className="DivStep">
                <h4 className="H4Step">{prop.status}</h4>
            </div>
            <div className="DivTotal">
                <h4 className="H4Total">{prop.total}</h4>
            </div>
        </div>
    )
}

export default CardOrder;