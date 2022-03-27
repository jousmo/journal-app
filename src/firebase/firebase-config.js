import { initializeApp } from 'firebase/app'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBNqMq4a9XWUtpPCrb6qxrfu8c5awnx344',
  authDomain: 'react-curso-fh-59e42.firebaseapp.com',
  projectId: 'react-curso-fh-59e42',
  storageBucket: 'react-curso-fh-59e42.appspot.com',
  messagingSenderId: '441874545832',
  appId: '1:441874545832:web:e2a3f0b1e68d12c5c4169d'
}

initializeApp(firebaseConfig)
const db = getFirestore()
const googleAuthProvider = new GoogleAuthProvider()

export {
  getAuth,
  signInWithPopup,
  db,
  googleAuthProvider
}
