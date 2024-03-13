import Results from './pages/Results'
import PersonalResults from './pages/PersonalResults'
import Quiz from './pages/Quiz'
import Regist from './pages/Regist'
import Login from './pages/Login'

export const AuthRouts = [
    {
        path: '/results',
        component: <Results/>
    },

    {
        path: '/personal_results',
        component: <PersonalResults/>
    }
]

export const PublicRouts = [
    {
        path: '/registration',
        component: <Regist/>
    },

    {
        path: '/login',
        component: <Login/>
    },

    {
        path: '/',
        component: <Quiz/>
    }
]