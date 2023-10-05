import React from 'react'
import { IoChevronBackOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import AddContactForm from '../../Components/AddContactForm/AddContactForm'
import './addContact.css'

const AddContact = () => {
  return (
    <>
    <div className="add-contact-wrapper">
      <div className="add-contact-upper-div">
        <Link className='add-contact-link' to={'/'}>
          <IoChevronBackOutline className='back-icon' />
          <p>Back</p>
        </Link>
        <h1>New Contact</h1>
        <Link className='add-contact-link ' to={'/'}>
          <p className='add-contact-done-btn'>Done</p>
        </Link>
      </div>
      <div className="add-contact-form-wrapper">
        <AddContactForm />
      </div>
    </div>
    </>
  )
}

export default AddContact