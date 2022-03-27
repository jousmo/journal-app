import { types } from '../types'

export const authReducer = (state = {}, action) => {
  const { type, payload } = !!action && action

  switch (type) {
    case types.login:
      return {
        uid: payload.uid,
        name: payload.displayName
      }
    case types.logout:
      return {}
    default:
      return state
  }
}
