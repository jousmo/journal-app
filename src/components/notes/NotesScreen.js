import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NotesScreen = () => {
  return (
    <section className='notes__wrapper'>
      <NotesAppBar />
      <section className='notes__content'>
        <input type='text' className='form-control mb-3' placeholder='Title' />
        <textarea className='form-control' />
        <figure className='notes__image'>
          <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg' alt='image' />
        </figure>
      </section>
    </section>
  )
}
