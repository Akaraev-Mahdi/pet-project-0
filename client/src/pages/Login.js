import React, { useState } from "react";
import '../style/Login.css'
import { login } from "../http/userAPI";
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [err, setErr] = useState('')

    const navigate = useNavigate()

    const logins = async () => {
        try {
            await login(email, password)
            window.location.reload(navigate('/'))
        } catch (error) {
            setErr(error.response.data.message)
        }
    }

    return (
        <div className="input-column">
            <h1 className="input-text-login">ВОЙТИ</h1>
            <input value={email} onChange={e => setEmail(e.target.value)} className="input-1" placeholder="Логин"></input>
            <input value={password} onChange={e => setPassword(e.target.value)} className="input-2" placeholder="Пароль"></input>
            <span className="err-text">{err}</span>
            <div className="input-button">
                <a className="regist-href" href="/registration">РЕГИСТРАЦИЯ</a>
                <button onClick={logins} className="login-btn">ВОЙТИ</button>
            </div>
        </div>
    )
}

export default Login