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
    case types.uiStartLoading:
      return {
        ...state,
        loading: true
      }
    case types.uiFinishLoading:
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}
