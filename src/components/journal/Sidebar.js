import React from 'react'
import { useDispatch } from 'react-redux'
import { JournalEntries } from './JournalEntries'
import { startLogout } from '../../actions/authAction'

export const Sidebar = () => {
  const dispatch = useDispatch()

  const handleLogout = () => {
    startLogout()(dispatch)
  }

  return (
    <aside className='journal__sidebar'>
      <div className='journal__sidebar__container'>
        <h2 className='journal__sidebar__account'>
          <i className='far fa-moon' />
          <span>José Uscanga</span>
        </h2>
        <button
          className='btn btn-secondary'
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
      <div className='journal__sidebar__calendar'>
        <i className='far fa-calendar-plus fa-5x' />
        <p className='mt-3'>New Entry</p>
      </div>
      <JournalEntries />
    </aside>
  )
}
