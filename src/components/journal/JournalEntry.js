import React from 'react'

export const JournalEntry = () => {
  return (
    <li className='journal__entry'>
      <div
        className='journal__entry__picture'
        style={{
          backgroundSize: 'cover',
          backgroundImage: 'url(https://i.picsum.photos/id/875/200/200.jpg' +
            '?hmac=5faXLEO5BJEKazGrYKfm2NgT97z_7xtPutRkFkPO8Dk)'
        }}
      />
      <div className='journal__entry__body'>
        <h3>Un nuevo dia</h3>
        <p>
          Lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
      </div>
    </li>
  )
}
