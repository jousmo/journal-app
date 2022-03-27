import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthRouter } from './AuthRouter'
import { JournalScreen } from '../components/journal/JournalScreen'
import { useDispatch } from 'react-redux'
import { auth, onAuthStateChanged } from '../firebase/firebase-config'
import { login } from '../actions/authAction'

export const AppRouter = () => {
  const dispatch = useDispatch()
  const [globalLoading, setGlobalLoading] = useState(true)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName } = user
        dispatch(login(uid, displayName))
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
        <Route path='/' element={<JournalScreen />} />
        <Route path='/auth/*' element={<AuthRouter />} />
        <Route path='*' element={<Navigate replace to='/auth' />} />
      </Routes>
    </BrowserRouter>
  )
}
