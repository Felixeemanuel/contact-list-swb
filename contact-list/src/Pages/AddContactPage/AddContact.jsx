import React from 'react'
import { IoChevronBackOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import AddContactForm from '../../Components/AddContactForm/AddContactForm'
import './addContact.css'
import { motion } from 'framer-motion'
import { mainVariants } from '../../variants'

const AddContact = () => {
  return (
    <>
    <motion.div className="add-contact-wrapper"
    variants={mainVariants}
    initial='hidden'
    animate='visible'

    >
      <div className="add-contact-upper-div">
        <Link className='add-contact-link' to={'/'}>
          <IoChevronBackOutline className='back-icon' />
          <p>Back</p>
        </Link>
        <h1>New Contact</h1>
        <div className='add-contact-link '>
          {/* <p className='add-contact-done-btn'>Done</p> */}
        </div>  
      </div>
      <div className="add-contact-form-wrapper">
        <AddContactForm />
      </div>
    </motion.div>
    </>
  )
}

export default AddContact