import { db, collection, addDoc, getDocs } from '../firebase/firebase-config'
import { types } from '../types'

export const startNewNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState()?.auth
    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime()
    }

    const docRef = await addDoc(collection(db, `${uid}/journal/notes`), newNote)
    dispatch(activeNote(docRef.id, newNote))
  }
}

export const loadNotes = () => {
  return async (dispatch, getState) => {
    const { uid } = getState()?.auth
    const notes = []
    const notesSnapshot = await getDocs(collection(db, `${uid}/journal/notes`))
    notesSnapshot.forEach(note => {
      notes.push({ id: note.id, ...note.data() })
    })
    dispatch(setNotes(notes))
  }
}

export const starSaveNote = note => {
  return async (dispatch, getState) => {
    const { uid } = getState()?.auth
  }
}

export const activeNote = (id, note) => ({
  type: types.notesActive,
  payload: {
    id,
    ...note
  }
})

export const setNotes = notes => ({
  type: types.notesLoad,
  payload: notes
})

export const saveNote = note => ({
  type: types.notesLoad,
  payload: notes
})
