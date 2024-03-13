import {$host} from './index'
import { jwtDecode } from "jwt-decode";

export const registr = async (email, password) => {
    const {data} = await $host.post('api/user/registration', {email, password})
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const login = async (email, password) => {
    const {data} = await $host.post('api/user/login', {email, password})
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const putUser = async (id) => {
    const {data} = await $host.put(`api/user/auth?id=${id}`)
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const chek = async () => {
    const {data} = await $host.get('api/user/auth')
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}