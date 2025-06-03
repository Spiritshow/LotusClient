import React from "react";
import "./CardOrder.css";
import { useNavigate } from "react-router-dom";

const CardOrder = ({prop}) => {
    const navigate = useNavigate();
    const acceptance_date = new Date(prop.prop.acceptance_date);
    const term = new Date(prop.prop.term);

    const transformDate = (date) => {
        if(date/10 < 1){
            return("0" + String(date))
        }else{
            return( String(date))
        }
    }
    
    const handleDleteOrder = async() => {
        try{
            const response = await fetch(`http://localhost:3000/order/${prop.prop.id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem("accessToken")}`
                },
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Ошибка при удалении заказа');
            }

            const data = await response.json();
            prop.update();
        }
        catch(error){
            console.error('Ошибка:', error.message);
        }
    }

    const handleDleteOrderPos = async() => {
        try{
            const response = await fetch(`http://localhost:3000/orderPosToOrder/${prop.prop.id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem("accessToken")}`
                },
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Ошибка при обновлении позиции');
            }

            const data = await response.json();
            
            handleDleteOrder();
        }
        catch(error){
            console.error('Ошибка:', error.message);
        }
    }

    const handleClickOrder = () => {
        navigate(`/lotusclient/PersonalAccount/${prop.prop.id_company}/Order/${prop.prop.id}`);
    }

    return(
        <div className="DivCardOrder" onClick={handleClickOrder}>
            <div className="DivDataOrder">
                <h4 className="H4DataOrder">{transformDate(acceptance_date.getDate())}.{transformDate(acceptance_date.getMonth())}.{acceptance_date.getFullYear()}</h4>
            </div>
            <div className="DivTerm">
                <h4 className="H4Term">{transformDate(term.getDate())}.{transformDate(term.getMonth())}.{term.getFullYear()}</h4>
            </div>
            <div className="DivStep">
                <h4 className="H4Step">{prop.prop.status}</h4>
            </div>
            <div className="DivTotal">
                <h4 className="H4Total">{prop.prop.total}</h4>
            </div>
            <div className="DivDeleteOrder">
                <button className="ButtonDeleteOrder" onClick={handleDleteOrderPos}><img src={`${process.env.PUBLIC_URL}/Delete.png`} className="imgDelete"/></button>
            </div>
        </div>
    )
}

export default CardOrder;