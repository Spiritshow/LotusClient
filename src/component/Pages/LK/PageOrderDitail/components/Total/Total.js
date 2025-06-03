import React, { useEffect, useState } from "react";
import "./Total.css";

const Total = ({prop}) => {
    const [value, setValue] = useState(0);

    const SumTotal = (props) => {
        let sum = 0;
        if(!!props){
            props.map(prop => 
                sum = sum + (prop.count * prop.price)
            )
            setValue(sum);
        }else {console.log(props)}
    }

    useEffect(()=> {
        SumTotal(prop);
    }, [prop])

    return (
        <div className="DivTotalDitail">
            <h3 className="HTotal">Итого: {value}</h3>
        </div>
    )
}

export default Total;