import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthRouter } from './AuthRouter'
import { JournalScreen } from '../components/journal/JournalScreen'
import { useDispatch } from 'react-redux'
import { auth, onAuthStateChanged } from '../firebase/firebase-config'
import { login } from '../actions/authAction'
import { PrivateRouter } from './PrivateRouter'
import { PublicRouter } from './PublicRouter'
import { loadNotes } from '../actions/notesAction'

export const AppRouter = () => {
  const dispatch = useDispatch()
  const [globalLoading, setGlobalLoading] = useState(true)
  const [isLoggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName } = user
        dispatch(login(uid, displayName))
        setLoggedIn(true)
        dispatch(loadNotes())
      } else {
        setLoggedIn(false)
      }
      setGlobalLoading(false)
    })
  }, [dispatch, setGlobalLoading])

  if (globalLoading) {
    return (
      <div className='d-flex justify-content-center align-items-center h-100'>
        <div className='spinner-grow' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </div>
      </div>
    )
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <PrivateRouter isLoggedIn={isLoggedIn}>
              <JournalScreen />
            </PrivateRouter>
          }
        />
        <Route
          path='/auth/*'
          element={
            <PublicRouter isLoggedIn={isLoggedIn}>
              <AuthRouter />
            </PublicRouter>
          }
        />
        <Route path='*' element={<Navigate replace to='/auth' />} />
      </Routes>
    </BrowserRouter>
  )
}
