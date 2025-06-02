import React from "react";
import "./Company.css";

const Company = () => {
    return(
        <div className="DivCompany" id="About">
            <div className="DivFirst">
                <div className="DivText MarginText">
                    <div className="CompanyHeader">О Компании</div>
                    <h3 className="CompanyDitailFirst"><strong>Завод по производству гофротары и картонной упаковки</strong> – это основное направление нашей компании.</h3>
                    <div className="CompanyPoint">
                        <div className="sercal"><div className="Point">1</div></div>
                        <div className="sercal mixingsercal"></div>
                        <div className="CompanyPointText">Мы можем изготовить гофротару (картонную коробку) любых размеров на современном, <strong>высокотехнологичном оборудовании из высококачественного картона.</strong></div>
                    </div>
                </div>
                <div className="DivImageFirst"/>
            </div>
            <div className="DivFirst">
                <div className="DivImageSecond MarginText"/>
                <div className="DivText">
                    <div className="CompanyPoint">
                        <div className="sercal"><div className="Point">2</div></div>
                        <div className="sercal mixingsercal"></div>
                        <div className="CompanyPointText">Мы обладаем широкими возможностями по изготовлению гофрокартонной упаковки различных размеров, из <strong>3-х слойного и 5-ти слойного гофрокартона</strong>, а также из бурого и беленого картона.</div>
                    </div>
                    <div className="CompanyPoint">
                        <div className="sercal"><div className="Point">3</div></div>
                        <div className="sercal mixingsercal"></div>
                        <div className="CompanyPointText">Мы <strong>оперативно доставим</strong> картонную упаковку в любой регион РК и Омской области.</div>
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default Company;