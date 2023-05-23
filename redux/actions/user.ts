import {
    GET_USER
} from '../types'
export const getUser = (user: any) => {
    return {
        type: GET_USER,
        payload: user,
    }
}