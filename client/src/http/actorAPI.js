import {$host} from './index'

export const fetchActor = async () => {
    const {data} = await $host.get('api/actor')
    return data
}

export const createActor = async (actor) => {
    const {data} = await $host.post('api/actor', actor)
    return data
}

export const createPersonalActor = async (score, img, name, gender, user_id) => {
    const {data} = await $host.post('api/actor/personal', {name, gender, score, img, user_id})
    return data
}

export const GetPA = async (id) => {
    const {data} = await $host.get(`api/actor/personal?id=${id}`)
    return data
}

export const deleteActor = async (id) => {
    await $host.delete(`api/actor?id=${id}`)
}

export const putActor = async (score, id) => {
    await $host.put(`api/actor?score=${score}&id=${id}`)
}