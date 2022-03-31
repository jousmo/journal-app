const initialState = {
  notes: [],
  active: null
}

export const notesReducer = (state = initialState, action) => {
  const { type } = !!action && action

  switch (type) {
    default:
      return state
  }
}
