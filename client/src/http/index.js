import axios from 'axios'

const $host = axios.create({
    baseURL: 'http://localhost:5000/'
})

const Inter = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

$host.interceptors.request.use(Inter)

export {
    $host
}