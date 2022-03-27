import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm'
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/authAction'
import { removeError, setError } from '../../actions/uiAction'
import isEmail from 'validator/lib/isEmail'

export const LoginScreen = () => {
  const dispatch = useDispatch()
  const { msgError } = useSelector(state => state.ui)

  const [formValues, handleInputChange] = useForm({
    email: '',
    password: ''
  })

  const { email, password } = !!formValues && formValues

  const handleLogin = e => {
    e.preventDefault()

    if (isFormValid()) {
      startLoginEmailPassword(email, password)(dispatch)
    }
  }

  const handleGoogleLogin = () => {
    startGoogleLogin()(dispatch)
  }

  const isFormValid = () => {
    if (!isEmail(email)) {
      dispatch(setError('Email is not valid'))
      return false
    } else if (password.length < 5) {
      dispatch(setError('Password should be at least 6 characters and match each other'))
      return false
    }

    dispatch(removeError())
    return true
  }

  return (
    <form
      className='auth__form'
      onSubmit={handleLogin}
    >
      <h2 className='auth__form__title'>Login</h2>
      {msgError && (
        <div className='alert alert-danger' role='alert'>
          <strong>Error:</strong> {msgError}
        </div>
      )}
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
      <button
        className='btn btn-lg btn-outline-secondary w-100'
      >
        Login
      </button>
      <div className='auth__form__social'>
        <p className='auth__form__social__title'>Login with social network</p>
        <button
          className='auth__form__social__btn'
          type='button'
          onClick={handleGoogleLogin}
        >
          <figure>
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'
              alt='google button'
            />
          </figure>
          <p>Sign in with google</p>
        </button>
      </div>
      <Link
        to='/auth/register'
        className='auth__form__subtitle'
      >
        Create new account
      </Link>
    </form>
  )
}
