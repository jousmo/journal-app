import React from 'react'
import { JournalEntries } from './JournalEntries'

export const Sidebar = () => {
  return (
    <aside className='journal__sidebar'>
      <div className='journal__sidebar__container'>
        <h2 className='journal__sidebar__account'>
          <i className='far fa-moon' />
          <span>José Uscanga</span>
        </h2>
        <p className='journal__sidebar__logout'>Logout</p>
      </div>
      <div className='journal__sidebar__calendar'>
        <i className='far fa-calendar-plus fa-5x' />
        <p className='mt-3'>New Entry</p>
      </div>
      <JournalEntries />
    </aside>
  )
}
