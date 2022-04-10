import React, { useEffect, useRef } from 'react'
import { NotesAppBar } from './NotesAppBar'
import PropTypes from 'prop-types'
import { useForm } from '../../hooks/useForm'
import { useDispatch } from 'react-redux'
import { activeNote } from '../../actions/notesAction'

export const NotesScreen = ({ noteActive }) => {
  const dispatch = useDispatch()
  const activeId = useRef(noteActive.id)
  const [formValues, handleInputChange, reset] = useForm(noteActive)
  const { title, body, url } = !!formValues && formValues

  useEffect(() => {
    if (noteActive.id !== activeId.current) {
      reset({ ...noteActive })
      activeId.current = noteActive.id
    }
  }, [noteActive, reset])

  useEffect(() => {
    dispatch(activeNote(formValues.id, { ...formValues }))
  }, [formValues, dispatch])

  return (
    <section className='notes__wrapper'>
      <NotesAppBar />
      <section className='notes__content'>
        <input
          type='text'
          className='form-control mb-3'
          placeholder='Title'
          name='title'
          value={title}
          onChange={handleInputChange}
        />
        <textarea
          className='form-control mb-3'
          name='body'
          value={body}
          onChange={handleInputChange}
        />
        {url && (
          <figure className='notes__image'>
            <img src={url} alt='image' />
          </figure>
        )}
      </section>
    </section>
  )
}

NotesScreen.propTypes = {
  noteActive: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    url: PropTypes.string
  })
}
