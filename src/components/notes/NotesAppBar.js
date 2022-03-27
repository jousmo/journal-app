import React from 'react'

export const NotesAppBar = () => {
  return (
    <article className='notes__appbar'>
      <span>28 de agosto 2020</span>

      <div>
        <button className='btn btn-light'>
          Picture
        </button>
        <button className='btn btn-light ms-2'>
          Save
        </button>
      </div>
    </article>
  )
}
