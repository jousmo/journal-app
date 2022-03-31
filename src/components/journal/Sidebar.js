import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { JournalEntries } from './JournalEntries'
import { startLogout } from '../../actions/authAction'
import { startNewNote } from '../../actions/notesAction'

export const Sidebar = () => {
  const { name } = useSelector(state => state?.auth)
  const dispatch = useDispatch()

  const handleLogout = () => {
    startLogout()(dispatch)
  }

  const handleAddNew = () => {
    startNewNote()(dispatch)
  }

  return (
    <aside className='journal__sidebar'>
      <div className='journal__sidebar__container'>
        <h2 className='journal__sidebar__account'>
          <i className='far fa-moon' />
          <span>
            {name.slice(0, 15).concat('...')}
          </span>
        </h2>
        <button
          className='btn btn-secondary'
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
      <div
        className='journal__sidebar__calendar'
        onClick={handleAddNew}
      >
        <i className='far fa-calendar-plus fa-5x' />
        <p className='mt-3'>New Entry</p>
      </div>
      <JournalEntries />
    </aside>
  )
}
