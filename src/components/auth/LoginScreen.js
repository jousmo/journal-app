import React from 'react'

export const LoginScreen = () => {
  return (
    <form className='auth__form'>
      <h2 className='auth__form__title'>Login</h2>
      <div className='form-floating mb-3'>
        <input
          className='form-control'
          id='email'
          type='email'
        />
        <label htmlFor='email'>Email address</label>
      </div>
      <div className='form-floating mb-3'>
        <input
          className='form-control'
          id='password'
          type='password'
        />
        <label htmlFor='password'>Password</label>
      </div>
      <button
        className='btn btn-lg btn-outline-secondary w-100'
        type='submit'
      >
        Submit
      </button>
      <div className='auth__form__social'>
        <p className='auth__form__social__title'>Login with social network</p>
        <button className='auth__form__social__btn'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg' alt='google button' />
          <span>Sign in with google</span>
        </button>
      </div>
      <p className='auth__form__subtitle'>Create new account</p>
    </form>
  )
}
