import React from 'react'
import './singleContact.css'
import { Link } from 'react-router-dom'

const SingleContact = ({contact}) => {

  return (
    <Link to={`/${contact.id}`} className='singleContact-link'>
      <div className='singleContact'>
          <p>{contact && contact.firstName}</p>
      </div>
    </Link>
  )
}

export default SingleContact