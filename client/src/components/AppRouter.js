import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { AuthRouts, PublicRouts } from '../routes';
import { jwtDecode } from "jwt-decode";
import Quiz from '../pages/Quiz';
import Admin from '../pages/Admin'

const AppRouter = () => {

    var user = localStorage.getItem('token')

    if(user){
      user = jwtDecode(user)
    }

    return (
      <Routes>
        {AuthRouts.map(route => {
            return <Route key={route.path} path={route.path} element={route.component}/>
        })}
        {PublicRouts.map(route => {
            return <Route key={route.path} path={route.path} element={route.component}/>
        })}
        {user?.email === "user1@mail.ru" ? <Route path='/admin' element={<Admin/>}/> : null}
        <Route path='*' element={<Quiz/>}/>
      </Routes>
    );
  }
  
  export default AppRouter;