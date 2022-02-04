import React from 'react'

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
    </aside>
  )
}
