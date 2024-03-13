import React from "react";
import { jwtDecode } from "jwt-decode";
import '../style/NavBar.css'

const NavBar = () => {

    var user = localStorage.getItem('token')

    if(user){
        user = jwtDecode(user)
    }

    return (
        <div className="header">
            <div className="container">
                <div className="header-line">
                    <h1 className="text">ActorQuiz</h1>
                    <div className="nav">
                        {user?.email === "user1@mail.ru" ? <a className="nav-items" href="/admin">ДОБАВИТЬ АКТЁРА</a> : null}
                        <a className="nav-items" href="/results">ИТОГИ</a>
                        <a className="nav-items" href="/">ГЛАВНАЯ</a>
                    </div>
                    <div className="btn">
                        <a className="button" href="/login">ВОЙТИ</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar