import React from "react";
import "./Catalog.css";
import CardProduct from "./cardProduct/cardProduct";

const Catalog = ({prop}) => {
    return(
        <div className="DivCatalog" id="Catalog">
            <div className="HeaderCatalogText">Выделитесь среди конкурентов</div>
            <div className="DivProduct">
                <CardProduct prop={{url: "/Product1.png", product: "Четырехклапанная коробка", foo: prop.foo}}/>
                <CardProduct prop={{url: "/Product2.png", product: "Коробка под яйцо", foo: prop.foo}}/>
                <CardProduct prop={{url: "/Product3.png", product: "Коробка под мясо птицы", foo: prop.foo}}/>
                <CardProduct prop={{url: "/Product4.png", product: "Коробка под овощи", foo: prop.foo}}/>
                <CardProduct prop={{url: "/Product5.png", product: "Коробка под пиццу", foo: prop.foo}}/>
                <CardProduct prop={{url: "/Product6.png", product: "Коробка под кондитерские изделия", foo: prop.foo}}/>
            </div>
        </div>
    )
}

export default Catalog;