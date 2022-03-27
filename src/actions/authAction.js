import { types } from '../types'
import {
  auth,
  signInWithPopup,
  googleAuthProvider,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut
} from '../firebase/firebase-config'
import { finishLoading, startLoading } from './uiAction'

export const startLoginEmailPassword = (email, password) => {
  return dispatch => {
    dispatch(startLoading())
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        const { uid, displayName } = !!user && user
        dispatch(login(uid, displayName))
      })
      .catch(console.error)
      .finally(() => dispatch(finishLoading()))
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

export const logout = () => ({
  type: types.logout
})

export const startLogout = () => {
  return dispatch => {
    signOut(auth)
      .then(() => dispatch(logout()))
      .catch(console.error)
  }
}
