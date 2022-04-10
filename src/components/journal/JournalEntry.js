import React from 'react'
import PropTypes from 'prop-types'
import dayjs from 'dayjs'
import { useDispatch } from 'react-redux'
import { activeNote } from '../../actions/notesAction'

export const JournalEntry = ({ note }) => {
  const { id, title, body, url, date } = !!note && note
  const strDate = dayjs(date).format('DD/MM/YYYY')
  const dispatch = useDispatch()

  const handleEntryClick = () => {
    dispatch(activeNote(id, note))
  }

  return (
    <li
      onClick={handleEntryClick}
      className='journal__entry'
    >
      {url && (
        <div
          className='journal__entry__picture'
          style={{
            backgroundSize: 'cover',
            backgroundImage: `url(${url})`
          }}
        />
      )}

      <div className='journal__entry__body'>
        <h3>{title}</h3>
        <p>{body}</p>
        <p className='text-end fw-lighter m-0'>
          {strDate}
        </p>
      </div>
    </li>
  )
}

JournalEntry.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    url: PropTypes.string
  })
}
