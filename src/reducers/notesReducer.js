import { types } from '../types'

const initialState = {
  notes: [],
  active: null
}

export const notesReducer = (state = initialState, action) => {
  const { type, payload } = !!action && action

  switch (type) {
    case types.notesActive:
      return {
        ...state,
        active: {
          ...payload
        }
      }
    case types.notesLoad:
      return {
        ...state,
        notes: [...payload]
      }
    default:
      return state
  }
}
