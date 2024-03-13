import React from "react";
import '../style/Results.css'

const ActorItem = ({index, atr}) => {
    return (
        <div className="hr">
            <div className="result-item">
                <div className="result-number">
                    {index + 1}.
                </div>
                <img className="result-img" src={'http://localhost:5000/' + atr.img} alt="i3"/>
                <div className="actor-info">
                    <span>Имя:</span> {atr.name}
                    <br/>
                    <span>Очки:</span> {atr.score}
                    <br/>
                    <span>Пол:</span> {atr.gender}
                </div>
            </div>
            <hr/>
        </div>
    )
}

export default ActorItem