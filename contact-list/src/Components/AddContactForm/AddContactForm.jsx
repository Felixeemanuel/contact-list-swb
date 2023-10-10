import React, { useState } from 'react';
import './addContactForm.css';
import { AiOutlinePlus } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../DB/config';

const AddContactForm = () => {

  const navigate = useNavigate()

  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    phoneNumber: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const newContact = {
        firstName: data.firstName,
        lastName: data.lastName,
        company: data.company,
        phoneNumber: data.phoneNumber,
      };
  
      const contactsRef = await addDoc(collection(db, 'contacts'), newContact);
  
      console.log('Contact added successfully with ID: ', contactsRef.id);
      navigate('/');
    } catch (err) {
      console.error('Error adding contact: ', err);
    }
  };
  



  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const isFormValid = data.firstName.trim() !== '' && data.phoneNumber.trim() !== '';


  return (
    <form className="add-contact-form" onSubmit={(e) => handleSubmit(e)}>
      <div className="add-contact-info-section">
        <input
          name="firstName"
          onChange={handleChange}
          value={data.firstName}
          type="text"
          className="add-contact-input"
          placeholder="First name"
        />
        <input
          name="lastName"
          onChange={handleChange}
          value={data.lastName}
          type="text"
          className="add-contact-input"
          placeholder="Last name"
        />
        <input
          name="company"
          onChange={handleChange}
          value={data.company}
          type="text"
          className="add-contact-input"
          placeholder="Company"
        />
      </div>

      <div className="input-number-div">
        <input
          name="phoneNumber"
          onChange={handleChange}
          value={data.phoneNumber}
          type="number"
          className="input-number"
          placeholder="Enter phone number"
        />
        <div className="add-contact-plus-icon-div" onClick={() => setOpen(true)}>
          <AiOutlinePlus className="add-contact-plus-icon" />
        </div>
      </div>
      <button
        className={`contact-form-submit ${isFormValid ? '' : 'disabled'}`}
        type="submit"
        disabled={!isFormValid}
      >Done</button>
    </form>
  );
};

export default AddContactForm;
