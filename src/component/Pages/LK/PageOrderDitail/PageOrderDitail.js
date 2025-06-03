import React, { useEffect, useState } from "react";
import "./PageOrderDitail.css";
import { useParams, useSearchParams } from "react-router-dom";
import StatusList from "./components/StatusList/StatusList";
import HeaderListPosition from "./components/HeaderList/HeaderListPosition";
import CardOrderPosition from "./components/CardOrderPosition/CardOrderPosition";
import Total from "./components/Total/Total";

const PageOrderDitail = () => {
    const id_order = useParams();
    const [order, setOrder] = useState({});
    const [orderPosition, setOrderPosition] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        fetch('http://localhost:3000/orders/' + id_order.id,{
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`
          },
          withCredentials: true
        })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Ошибка при загрузке данных');
        }
        return response.json();
      })
      .then((data) => {
        setOrder(data[0]);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
    }, [])

    useEffect(() => {
        fetch('http://localhost:3000/position_order/'+ id_order.idOrder,{
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`
          },
          withCredentials: true
        })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Ошибка при загрузке данных');
        }
        return response.json();
      })
      .then((data) => {
        setOrderPosition(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
    }, [])

    const handleDownload = async () => {
        try {
            const response = await fetch('http://localhost:3000/generate-doc/'+id_order.idOrder,{
                method: "GET",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`
                },
                withCredentials: true
            });

            if (!response.ok) {;
                throw new Error('Ошибка при загрузке документа');
            }

            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);

            const link = document.createElement('a');
            link.href = url;
            link.download = `Договор_№${order.id}.docx`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            console.error('Ошибка:', error);
            alert('Не удалось загрузить файл');
        }
    };

    const handleCreatePay = async() => {
        try {
            const response = await fetch(`http://localhost:3000/generate-excel/${id_order.idOrder}`);

            if (!response.ok) {
                throw new Error(`Ошибка загрузки файла: ${response.statusText}`);
            }

            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);

            const link = document.createElement('a');
            link.href = url;
            link.download = `расчётный_счёт_№${order.id}.xlsx`;
            document.body.appendChild(link);
            link.click();
            link.remove();

            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Ошибка при скачивании Excel-файла:', error);
        }
    }

    const listPosition = (props) => {
        if(!!props){
            return props.map(prop => 
                <CardOrderPosition prop={prop}/>
            )
        }
    }

    return(
        <div className="DivPageOrderDitail">
            <StatusList status={order.status}/>
            <div className="DivDetail">
                <div className="DivButonsDoc">
                    <button className="Contract" onClick={handleDownload}>Договор</button>
                    {order.status !=="Приём" && <button className="Pay" onClick={handleCreatePay}>Счёт на оплату</button>}
                </div>
                <div className="DivInfo">
                    <HeaderListPosition/>
                    <div className="DivListPosition">
                        {orderPosition && listPosition(orderPosition)}
                    </div>
                    <div className="LineTotal">
                        <Total prop={orderPosition}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageOrderDitail;