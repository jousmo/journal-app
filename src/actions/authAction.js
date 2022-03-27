import { types } from '../types'
import { getAuth, signInWithPopup, googleAuthProvider } from '../firebase/firebase-config'

export const startLoginEmailPassword = (email, password) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(login(1234, 'hey'))
    }, 3500)
  }
}

export const startGoogleLogin = () => {
  return dispatch => {
    const auth = getAuth()
    signInWithPopup(auth, googleAuthProvider)
      .then(({ user }) => {
        const { uid, displayName } = !!user && user
        dispatch(login(uid, displayName))
      })
      .catch(console.error)
  }
}

export const login = (uid, displayName) => ({
  type: types.login,
  payload: { uid, displayName }
})
