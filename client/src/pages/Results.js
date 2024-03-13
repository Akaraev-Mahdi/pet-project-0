import React, { useEffect, useState } from "react";
import ActorItem from "../components/ActorItem";
import { fetchActor } from "../http/actorAPI";
import '../style/Results.css'

const Results = () => {

    var [actor, setActor] = useState([])
    var [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchActor().then((obj) => {setActor(obj)}).finally(() => setLoading(false))
    }, [])

    if(loading) {
        return (
            <div className="result-text">
                Загрузка...
            </div>
        )
    }

    if(!loading){
        actor.sort((a, b) => b.score - a.score)
    }

    return (
        <div className="result-items">
            <a className="results-link" href="/personal_results">Посмотреть личный итог</a>
            {actor.map((atr, index) => <ActorItem index={index} atr={atr}/>)}
        </div>
    )
}

export default Results