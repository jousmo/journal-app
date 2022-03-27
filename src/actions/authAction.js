import { types } from '../types'
import {
  auth,
  signInWithPopup,
  googleAuthProvider,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword
} from '../firebase/firebase-config'

export const startLoginEmailPassword = (email, password) => {
  return dispatch => {
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        const { uid, displayName } = !!user && user
        dispatch(login(uid, displayName))
      })
      .catch(console.error)
  }
}

export const startGoogleLogin = () => {
  return dispatch => {
    signInWithPopup(auth, googleAuthProvider)
      .then(({ user }) => {
        const { uid, displayName } = !!user && user
        dispatch(login(uid, displayName))
      })
      .catch(console.error)
  }
}

export const startRegisterWithEmailPasswordName = (email, password, name) => {
  return dispatch => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
        await updateProfile(user, { displayName: name })
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
