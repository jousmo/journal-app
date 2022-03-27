import React from 'react'
import { Sidebar } from './Sidebar'
// import { NothingSelected } from './NothingSelected'
import { NotesScreen } from '../notes/NotesScreen'

export const JournalScreen = () => {
  return (
    <section className='journal'>
      <Sidebar />
      <main>
        {/* <NothingSelected /> */}
        <NotesScreen />
      </main>
    </section>
  )
}
