import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { LoginScreen } from '../components/auth/LoginScreen'
import { RegisterScreen } from '../components/auth/RegisterScreen'

export const AuthRouter = () => {
  return (
    <Routes>
      <Route path='login' element={<LoginScreen />} />
      <Route path='register' element={<RegisterScreen />} />
      <Route path='*' element={<Navigate replace to='login' />} />
    </Routes>
  )
}
