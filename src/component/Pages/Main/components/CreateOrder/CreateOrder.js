import React, { useEffect, useState } from "react";
import "./CreateOrder.css";
import { useNavigate } from "react-router-dom";

const CreateOrder = ({prop}) => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [errCount, setErrCount] = useState()
    const [id_order, setIdOrder] = useState(0);

    const idCompany = localStorage.getItem("idClient");

    const [order, setFormOrder] = useState({
        id_company: idCompany,
        status: 'Приём',
        acceptance_date: new Date(),
        term: ''
    });

    useEffect(()=>{
        fetch('http://localhost:3000/products',{
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
            setProducts(data);
            setLoading(false);
        })
        .catch((err) => {
            setError(err.message);
            setLoading(false);
        });
    }, [])

    const handleChangeDeadline = (e) => {
        const { name, value } = e.target;

        setFormOrder((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const [quantities, setQuantities] = useState(() =>
        Object.fromEntries(products.map((p) => [String(p.id), 0]))
    );

    const increase = (id) => {
        setQuantities((prev) => {
            const key = String(id);
            return { ...prev, [key]: (prev[key] || 0) + 10 };
        });
    };

    const decrease = (id) => {
        setQuantities((prev) => {
            const key = String(id);
            return { ...prev, [key]: Math.max((prev[key] || 0) - 10, 0) };
        });
    };

    const total = products.reduce((sum, product) => {
        const qty = quantities[String(product.id)] ?? 0; 
        return sum + product.price * qty;
    }, 0);

    const postPosOrder = async (orderItems) => {
        try {
            for (const item of orderItems) {
                await fetch('http://localhost:3000/orderposition', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', 
                        'Authorization': `Bearer ${localStorage.getItem("accessToken")}`
                    },
                    withCredentials: true,
                    body: JSON.stringify(item),
                });
            }
        } catch (err) {
            console.error('Ошибка отправки заказа:', err);
            alert('Ошибка при отправке заказа');
        }
    }

    const postOrder = () => {
        fetch('http://localhost:3000/order', {
            method: 'POST',
            headers: {'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("accessToken")}`
            },
            withCredentials: true,
            body: JSON.stringify(order),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Ошибка при создании компании и заказа');
            }
            return response.json();
        })
            .then(data => {
                setIdOrder(data.order_id);
            })
    }

    const handleSubmit = () => {
        postOrder();
    };

    useEffect(()=>{
        if(id_order > 0){
            const orderItems = products
                .filter((p) => quantities[p.id] > 0)
                .map((p) => ({
                    id_order,
                    id_product: p.id,
                    count: quantities[p.id],
                }));

            postPosOrder(orderItems);
            setIdOrder(0);
            prop.toggle();
            navigate(`/lotusclient/PersonalAccount/${idCompany}`);
        }
    }, [id_order])


    const handleChandge = (e,id) =>{
        const newValue = e.target.value;

        setQuantities((prev) => {
            const key = String(id);
            return{...prev, [key]: Number(newValue)}
        });
    }

    const handleBlur = () => {
        const ourCount = products.reduce((sum, product) => {
            const qty = quantities[String(product.id)] ?? 0; 
            return sum + qty;
        }, 0)

        if (ourCount < 3000){
            setErrCount("Мы работаем только от партий 3000 шт.")
        }else{
            setErrCount();
        }
    }

    return(
    <>
        <div onClick={prop.toggle} className="overlay"></div>
        <div className="DivCreateOrder">
            <div className="DivCreateCataloge">
                {products.map((product) => (
                    <div className="DivCardProduct" key={product.id}>
                        <img className="ImageProductCreate" src={`${process.env.PUBLIC_URL}${product.photo}`}/>
                        <div className="TextProductCreate" style={{ flex: 1 }}>{product.name} — {product.price}₽</div>
                        <div className="DivButtonsCount">
                            <button onClick={() => decrease(product.id)}>-</button>
                            <input className="no-spinner" onChange={(e) => handleChandge(e, product.id)} onBlur={handleBlur} type="number" value={(quantities[String(product.id)] || 0)}/> 
                            <button onClick={() => increase(product.id)}>+</button>
                        </div>
                    </div>
            ))}
            </div>
            {errCount && <h3 className="errCount">{errCount}</h3>}
            <div className="DivFutterCreateOrder">
                <div className="DivCreateTerm">
                    <h3>Срок: </h3>
                    <input 
                        className="inputTerm"
                        type="date"
                        name="term"
                        value={order.term}
                        onChange={handleChangeDeadline}
                    />
                </div>
                <div className="Total">{total}₽</div>
                <button className="ButtonCreateOrder" onClick={handleSubmit}>Создать</button>
            </div>
        </div>
    </>
    )
}

export default CreateOrder;