import React, { useEffect, useState } from "react";
import { createPersonalActor, fetchActor, putActor } from "../http/actorAPI";
import { isAuth, setAuth } from "../store/UserStore";
import { chek, putUser } from '../http/userAPI';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";
import '../style/Quiz.css';

const Quiz = () => {

    var user = localStorage.getItem('token')

    if(user){
        user = jwtDecode(user)
    }

    var [actor, setActor] = useState([])
    var [resultActor, setResultActor] = useState([])

    var [loading, setLoading] = useState(true)
    var [isloading, setIsLoading] = useState(true)

    var [step, setStep] = useState(0)
    var [raund, setRaund] = useState(1)

    useEffect(() => {
        chek().then(data => {setAuth(true)}).finally(() => setIsLoading(false))
        fetchActor().then((obj) => {const sortObject = obj.sort((a, b) => a.id - b.id); setResultActor(sortObject); setActor(sortObject)}).finally(() => setLoading(false))
    }, [])

    if(loading) {
        return (
            <div className="img-line">
                Загрузка...
            </div>
        )
    }

    if(isloading && isAuth === false){
        return (
            <div className="img-line">
                Сначало зарегистрируйтесь.
            </div>
        )
    }

    const putScore = (index) => {
        actor[index].score = actor[index].score + 1
        actor[index].personalscore = actor[index].personalscore + 1
        setStep(step + 2)
    }

    if(step === actor.length) {
        setActor(actor = actor.filter(atr => atr.personalscore === raund))
        setRaund(raund + 1)
        setStep(step = 0)
    }

    return (
        <div>
            {actor.length === 1 ? <End user={user} resultActor={resultActor}/> : <Next user={user} actor={actor} step={step} putScore={putScore}/>}
        </div>
    )

}

const Next = ({actor, step, putScore, user}) => {

    if(user.passed === true){
        return (
            <div className="img-line">
                Тест пройден!
            </div>
        )
    }

    return (
        <div className="img-line">
            <img className="img-1" onClick={() => putScore(step)} src={'http://localhost:5000/' + actor[step].img} alt="i1"/>
            <div className="or">ИЛИ</div>
            <img className="img-1" onClick={() => putScore(step + 1)} src={'http://localhost:5000/' + actor[step + 1].img} alt="i2"/>
        </div>
    )
}

const End = ({resultActor, user}) => {

    const navigate = useNavigate()

    const update = () => {
        putUser(user.id)
        resultActor.map((actor) => putActor(actor.score, actor.id))
        resultActor.map((actor) => createPersonalActor(actor.personalscore, actor.img, actor.name, actor.gender, user.id))
        navigate('/personal_results')
    }
    
    return (
        <div className="quiz-btn">
            <div>
                Тест пройден! Нажмите "СОХРАНИТЬ" чтобы увидеть итог.
            </div>
            <button onClick={update} className="quiz-button">СОХРАНИТЬ</button>
        </div>
    )
}

export default Quiz