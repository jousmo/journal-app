import React from 'react'
import { Sidebar } from './Sidebar'
import { NothingSelected } from './NothingSelected'
import { NotesScreen } from '../notes/NotesScreen'
import { useSelector } from 'react-redux'

export const JournalScreen = () => {
  const { active } = useSelector(state => state?.notes)

  return (
    <section className='journal'>
      <Sidebar />
      <main>
        {active
          ? <NotesScreen />
          : <NothingSelected />}
      </main>
    </section>
  )
}
