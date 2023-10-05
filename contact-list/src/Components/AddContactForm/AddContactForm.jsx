import React from 'react'
import './addContactForm.css'
import { AiOutlinePlus } from 'react-icons/ai'

const AddContactForm = () => {
  return (
    <form className='add-contact-form'>
        <div className="add-contact-info-section">
            <input type="text" className="add-contact-input" placeholder='First name'/>
            <input type="text" className="add-contact-input" placeholder='Last name'/>
            <input type="text" className="add-contact-input" placeholder='Company'/>
        </div>

        <div className="input-number-div">
            <input type="number" className="input-number" placeholder='Enter phone number'/>
            <div className="add-contact-plus-icon-div">
                <AiOutlinePlus className='add-contact-plus-icon' />
            </div>
        </div>
    </form>
  )
}

export default AddContactForm