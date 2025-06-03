import React, { useEffect, useState } from "react";
import "./PageOrder.css";
import HeaderOrders from "./Components/HeaderOrders";
import CreateOrder from "../../Main/components/CreateOrder/CreateOrder";
import CardOrder from "./Components/CardOrder/CardOrder";

const PageOrder = () => {
    const [dataOrders, setDataOrders] = useState([]);
    const [toggleCreateOrder, setToggleCreateOrder] = useState(false);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const idClient = localStorage.getItem("idClient");
    const [update , setUpdate] = useState(false);

    const handleUpdate = () => {
      setUpdate(!update);
    }

    useEffect(() => {
        fetch(`http://localhost:3000/OrdersClient/${idClient}`,{
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
        setDataOrders(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
        setLoading(false);
      });
    }, [update])

    const togglerCreateOrder = () => {
        setToggleCreateOrder(!toggleCreateOrder);
    }

    const listOrders = (orders) => {
      return orders.map((order) => (
            <CardOrder prop={{prop: order, update: handleUpdate}}/>
        ))
    }

    return(
        <>
            {toggleCreateOrder && <CreateOrder prop={{toggle: togglerCreateOrder}}/>}
            <div className="DivPageOrders">
                <button className="buttonAccCreateOrder" onClick={togglerCreateOrder}>Добавить заказ</button>
                <HeaderOrders/>
                <div className="DivListOrder">
                    {dataOrders[0] && listOrders(dataOrders)}
                    {!dataOrders[0] && <h3 className="H3EmptyOrders">У вас пока-что нет заказов</h3>}
                </div>
            </div>
        </>
    )
}

export default PageOrder;