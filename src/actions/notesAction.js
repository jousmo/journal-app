import { db, collection, addDoc } from '../firebase/firebase-config'

export const startNewNote = () => {
  return (dispatch, getState) => {
    const { uid } = getState?.auth
    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime()
    }
  }
}
