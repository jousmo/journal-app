import React from 'react'

export const RegisterScreen = () => {
  return (
    <form className='auth__form'>
      <h2 className='auth__form__title'>Register</h2>
      <div className='form-floating mb-3'>
        <input
          className='form-control'
          id='name'
          type='name'
        />
        <label htmlFor='name'>Name</label>
      </div>
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
    </form>
  )
}
