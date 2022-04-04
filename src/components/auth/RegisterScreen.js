import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm'
import isEmail from 'validator/lib/isEmail'
import { removeError, setError } from '../../actions/uiAction'
import { startRegisterWithEmailPasswordName } from '../../actions/authAction'

export const RegisterScreen = () => {
  const dispatch = useDispatch()
  const { msgError } = useSelector(state => state.ui)

  const [formValues, handleInputChange] = useForm({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const { name, email, password, confirmPassword } = !!formValues && formValues

  const handleRegister = e => {
    e.preventDefault()

    if (isFormValid()) {
      dispatch(startRegisterWithEmailPasswordName(email, password, name))
    }
  }

  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(setError('Name is required'))
      return false
    } else if (!isEmail(email)) {
      dispatch(setError('Email is not valid'))
      return false
    } else if (password !== confirmPassword || password.length < 5) {
      dispatch(setError('Password should be at least 6 characters and match each other'))
      return false
    }

    dispatch(removeError())
    return true
  }

  return (
    <form
      className='auth__form'
      onSubmit={handleRegister}
    >
      <h2 className='auth__form__title'>Register</h2>
      {msgError && (
        <div className='alert alert-danger' role='alert'>
          <strong>Error:</strong> {msgError}
        </div>
      )}
      <div className='form-floating mb-3'>
        <input
          className='form-control'
          id='name'
          type='name'
          name='name'
          onChange={handleInputChange}
          value={name}
        />
        <label htmlFor='name'>Name</label>
      </div>
      <div className='form-floating mb-3'>
        <input
          className='form-control'
          id='email'
          type='email'
          name='email'
          onChange={handleInputChange}
          value={email}
        />
        <label htmlFor='email'>Email address</label>
      </div>
      <div className='form-floating mb-3'>
        <input
          className='form-control'
          id='password'
          type='password'
          name='password'
          onChange={handleInputChange}
          value={password}
        />
        <label htmlFor='password'>Password</label>
      </div>
      <div className='form-floating mb-3'>
        <input
          className='form-control'
          id='password'
          type='password'
          name='confirmPassword'
          onChange={handleInputChange}
          value={confirmPassword}
        />
        <label htmlFor='password'>Confirm Password</label>
      </div>
      <button
        className='btn btn-lg btn-outline-secondary w-100'
      >
        Register
      </button>
      <Link
        to='/auth/login'
        className='auth__form__subtitle'
      >
        Already registered ?
      </Link>
    </form>
  )
}
