import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useForm } from '../../hooks/useForm'
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/authAction'

export const LoginScreen = () => {
  const dispatch = useDispatch()

  const [formValues, handleInputChange] = useForm({
    email: '',
    password: ''
  })

  const { email, password } = !!formValues && formValues

  const handleLogin = e => {
    e.preventDefault()
    startLoginEmailPassword(email, password)(dispatch)
  }

  const handleGoogleLogin = () => {
    startGoogleLogin()(dispatch)
  }

  return (
    <form
      className='auth__form'
      onSubmit={handleLogin}
    >
      <h2 className='auth__form__title'>Login</h2>
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
