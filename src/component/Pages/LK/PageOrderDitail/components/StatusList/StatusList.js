import React, { useEffect, useState } from "react";
import "./StatusList.css";

const StatusList = ({status}) => {

    const [numStatus, setNumStatus] = useState(0);
    const [LeftEdge, setLeftEdge] = useState("NotCompleted")
    const [LeftEdgeEnd, setLeftEdgeEnd] = useState("LeftEdgeEndNotCom")

    const [Center, setCenter] = useState("NotCompleted")
    const [CenterEnd, setCenterEnd] = useState("CenterEndNotCom")

    const [Center2, setCenter2] = useState("NotCompleted")
    const [CenterEnd2, setCenterEnd2] = useState("CenterEndNotCom")

    const [RightEdge, setRightEdge] = useState("NotCompleted")
    useEffect(() => {
        switch (status) {
            case "Приём":
                setNumStatus(1);
                setLeftEdge("Completed")
                setLeftEdgeEnd("LeftEdgeEndCom")
                break;
            case "Подписание":
                setNumStatus(2);
                setLeftEdge("Completed");
                setLeftEdgeEnd("LeftEdgeEndCom")
                setCenter("Completed");
                setCenterEnd("CenterEndCom")
                break;
            case "На производстве":
                setNumStatus(3);
                setLeftEdge("Completed");
                setLeftEdgeEnd("LeftEdgeEndCom")
                setCenter("Completed");
                setCenterEnd("CenterEndCom")
                setCenter2("Completed");
                setCenterEnd2("CenterEndCom");
                break;
            case "Готово":
                setNumStatus(4);
                setLeftEdge("Completed");
                setLeftEdgeEnd("LeftEdgeEndCom")
                setCenter("Completed");
                setCenterEnd("CenterEndCom")
                setCenter2("Completed");
                setCenterEnd2("CenterEndCom");
                setRightEdge("Completed");
                break;
            default:
                break;
        }
    }, [status])
    
    const definitionClassname = (numStatus) => {
        let classname = "NotCompleted";
        if (numStatus > 1) {
            classname = "Completed"
        }
        classname = classname + " Center";
        return (classname)
    }

    return(
        <div className="DivStatusList">
            <div className={LeftEdge + " LeftEdgeFirst"}/>
            <div className={LeftEdge + " LeftEdge"}>
                <h2>Приём заказа</h2>
            </div>
            <div className={LeftEdgeEnd + " LeftEdgeEnd"}/>
            
            <div className="CenterFirst"/>
            <div className={Center + " Center"}>
                <h2>Подписание соглашения</h2>
            </div>
            <div className={CenterEnd + " CenterEnd"}/>

            <div className="CenterFirst"/>
            <div className={Center2 + " Center"}>
                <h2>На производстве</h2>
            </div>
            <div className={CenterEnd2 + " CenterEnd"}/>

            <div className="RightEdgeFirst"/>
            <div className={RightEdge + " RightEdge"}>
                <h2>Готово к выдаче</h2>
            </div>
            <div className={RightEdge + " RightEdgeEnd"}/>
        </div>
    )
}

export default StatusList;