import React from 'react'
import PropTypes from 'prop-types'

export const JournalEntry = ({ note }) => {
  const { title, body, url } = !!note && note

  return (
    <li className='journal__entry'>
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
