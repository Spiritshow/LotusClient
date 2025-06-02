import React from "react";
import "./MainComponent.css";

const MainComponent = () => {
    return(
        <div className="DivMainComponent" id="Main">
            <div className="DivImageBoxOne">
                <img src={`${process.env.PUBLIC_URL}/Boxs1.png`} className="ImageBoxOne" alt="Boxs"/>
            </div>
            <div className="DivDescription">
                <h1 className="HeaderTextDescription">
                    Производство <strong>гофротары</strong>
                    <br/>и картонной упаковки
                    <br/><strong>за 3 дня. работаем от</strong>
                    <br/><strong> 3000 шт</strong>
                </h1>
                <div className="DivDetail">
                    <div className="DivDetailText">
                        <div className="sercal"><img src={`${process.env.PUBLIC_URL}/Car.jpg`} className="ImageCar" alt=""/></div>
                        <div className="sercal mixingsercal"></div>
                        <div className="DetailText">Доставка по РК и РФ</div>
                    </div>
                    <img src={`${process.env.PUBLIC_URL}/detail.jpg`} className="ImageDetail" alt="Detail"/>
                </div>
                <div className="DivBottomDescription">
                    <div className="ColumnBottomDescription">
                        <div className="DivBottomDescriptionText">
                            <img src={`${process.env.PUBLIC_URL}/arrow.jpg`} className="ImageArrow" alt=">"/>
                            <h2 className="BottomDescriptionText">Коробки с логотипом – <br/>это лицо вашего бренда</h2>
                        </div>
                        <div className="DivBottomDescriptionText">
                            <img src={`${process.env.PUBLIC_URL}/arrow.jpg`} className="ImageArrow" alt=">"/>
                            <h2 className="BottomDescriptionText">Наносим любое изображение методом 3х цветной флексопечати</h2>
                        </div>
                    </div>
                    <img src={`${process.env.PUBLIC_URL}/Boxs2.png`} className="ImageBoxTwo" alt="Box2"/>
                </div>
            </div>
        </div>
    )
}

export default MainComponent;