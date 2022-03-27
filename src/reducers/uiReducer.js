import { types } from '../types'

const initialState = {
  loading: false,
  msgError: null
}

export const uiReducer = (state = initialState, action) => {
  const { type, payload } = !!action && action

  switch (type) {
    case types.uiSetError:
      return {
        ...state,
        msgError: payload
      }
    case types.uiRemoveError:
      return {
        ...state,
        msgError: null
      }
    default:
      return state
  }
}
