import React, { useEffect, useState } from "react";
import ActorItem from "../components/ActorItem";
import { GetPA } from "../http/actorAPI";
import { jwtDecode } from "jwt-decode";
import '../style/Results.css'

const Results = () => {

    var [actor, setActor] = useState([])
    var [loading, setLoading] = useState(true)

    var user = localStorage.getItem('token')

    if(user){
        user = jwtDecode(user)
    }

    useEffect(() => {
        GetPA(user.id).then((obj) => {setActor(obj)}).finally(() => setLoading(false))
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
            <a className="results-link" href="/results">Посмотреть общий итог</a>
            {actor.map((atr, index) => <ActorItem index={index} atr={atr}/>)}
        </div>
    )
}

export default Results