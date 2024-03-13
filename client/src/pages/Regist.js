import React, { useState } from "react";
import '../style/Regist.css'
import { registr } from "../http/userAPI";
import { useNavigate } from 'react-router-dom'

const Regist = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [err, setErr] = useState('')

    const navigate = useNavigate()

    const regist = async () => {
        try {
            await registr(email, password)
            window.location.reload(navigate('/'))
        } catch (error) {
            setErr(error.response.data.message)
        }
    }

    return (
        <div className="input-column">
            <h1 className="input-text">РЕГИСТРАЦИЯ</h1>
            <input value={email} onChange={e => setEmail(e.target.value)} className="input-1" placeholder="Придумайте логин"></input>
            <input value={password} onChange={e => setPassword(e.target.value)} className="input-2" placeholder="Придумайте пароль"></input>
            <span className="err-text-regist">{err}</span>
            <div className="input-button">
                <a className="regist-href" href="/login">ВОЙТИ</a>
                <button onClick={regist} className="regist-btn">РЕГИСТРАЦИЯ</button>
            </div>
        </div>
    )
}

export default Regist