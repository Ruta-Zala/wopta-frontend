import { GET_USER } from '../types'

const INITIAL_STATE = {
  data: null,
}

const user = (state = INITIAL_STATE, { type, payload } = {} as any) => {
  switch (type) {
    case GET_USER:
      return {
        ...state,
        data: payload,
      }
    default:
      return state
  }
}

export default user
