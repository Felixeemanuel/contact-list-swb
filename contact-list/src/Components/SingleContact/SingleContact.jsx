import React from 'react'
import './singleContact.css'
import { Link } from 'react-router-dom'

const SingleContact = ({contact}) => {

  const formatPhoneNumber = () => {
    if (contact.phoneNumber !== null && contact.phoneNumber !== undefined) {

      const numericPhoneNumber = contact.phoneNumber.toString();
      const formattedPhoneNumber = numericPhoneNumber.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, '$1-$2 $3 $4');
      return formattedPhoneNumber;
    }
    return '';  
  };

  const formattedPhoneNumber = formatPhoneNumber();


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