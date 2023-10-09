import React, { useState } from 'react';
import './addContactForm.css';
import { AiOutlinePlus } from 'react-icons/ai';
import { useContacts } from '../../Context/ContactsContext'
import { useNavigate } from 'react-router-dom';

const AddContactForm = () => {

  const navigate = useNavigate()
  const { contacts, setContacts, addContact } = useContacts()

  const [filled, setFilled] = useState(false)


  const newId = contacts.length + 1

  const [data, setData] = useState({
    id: newId,
    firstName: '',
    lastName: '',
    company: '',
    phoneNumber: '',
  });

    const handleSubmit = async (e) => {
      e.preventDefault();

      addContact(data);
  
      setData({
        id: newId,
        firstName: '',
        lastName: '' && null,
        company: '' && null,
        phoneNumber: '',
      });
      navigate('/')
    };



  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [open, setOpen] = useState(false);

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
