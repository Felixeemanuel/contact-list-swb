import React from 'react'
import './singleContact.css'
import { Link } from 'react-router-dom'

const SingleContact = ({contact}) => {

  let phoneNumber = [];
  if (contact && contact.phoneNumber) {
    phoneNumber = contact.phoneNumber.split('');
  }

  const formatPhoneNumber = () => {
    const numericPhoneNumber = contact && contact.phoneNumber ? contact.phoneNumber.replace(/\D/g, '') : '';
    const formattedPhoneNumber = numericPhoneNumber.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, '$1-$2 $3 $4')
    return formattedPhoneNumber;
  }

  const formattedPhoneNumber = formatPhoneNumber(contact && contact.phoneNumber);

  return (
    <Link to={`/${contact.id}`} className='singleContact-link'>
      <div className='singleContact'>
          <p>{contact && contact.firstName + ' ' + contact.lastName}</p>
          <p>{formattedPhoneNumber}</p>
      </div>
    </Link>
  )
}

export default SingleContact