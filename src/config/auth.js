import { instance } from "../axios/instance"

export const login = async (data) => {
    return (await instance.post('/login', data)).data
}