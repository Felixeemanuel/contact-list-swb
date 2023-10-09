import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { IoChevronBackOutline } from 'react-icons/io5'
import { AiFillMessage, AiFillPhone } from 'react-icons/ai'
import { BsFillCameraVideoFill } from 'react-icons/bs'
import './contact.css'

const Contact = () => {

  const { id } = useParams();

  const [contact, setContact] = useState(null);

  const getContact = async (id) => {
    try {
      const response = await fetch('contacts.json', {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      const foundContact = data.find((contact) => contact.id === parseInt(id, 10));

      if (foundContact) {
        setContact(foundContact);
      } else {
        console.log('Contact not found');
      }
    } catch (error) {
      console.error('Error fetching contact:', error);
    }
  };

  useEffect(() => {
    getContact(id);
  }, [id]); 

  let arr = [];
  if (contact && contact.firstName) {
    arr = contact.firstName.split('');
  }

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


  if (!contact) {
    return (
      <>
      <div className='notFound'>
      <div >Could not find contact</div>
      <Link style={{ textDecoration: 'none'}} className='goBack' to={'/'}>Go back</Link>
      </div>
      </>
    )
  }

  return (
    <>
    <div className="contact-wrapper">
      <div className="contact-upper">
        <Link to={'/'} className="contact-upper-back">
          <IoChevronBackOutline className='back-icon' />
          <p>Contacts</p>
        </Link>
        <Link className='edit-link' to={'/edit-contact'}>Edit</Link>
      </div>
      <div className="contact-lower">
        <div className="circle">
          <p>{arr[0]}</p>  
        </div>
        <h1 className="contact-name">{contact.firstName + ' ' + contact.lastName}</h1>
        <div className="contact-lower-options">
          <div className="contact-box">
            <div className="contact-icon">{<AiFillMessage style={{ fill: '#529F83'}} />}</div>
            <p>Message</p>
          </div>
          <div className="contact-box">
            <div className="contact-icon">{<AiFillPhone style={{ fill: '#529F83'}} />}</div>
            <p>Call</p>
          </div>
          <div className="contact-box">
            
            <div className="contact-icon">{<BsFillCameraVideoFill style={{ fill: '#529F83'}} />}</div>
            <p>Video</p>
          </div>
        </div>
        <div className='contact-phonenumber'>
          <p style={{ fontSize: '1rem'}}>Phone</p>
          <p style={{ color: '#529F83', fontSize: '1rem', marginTop: '.3rem'}}>{formattedPhoneNumber}</p>
        </div>
        <textarea className='contact-textarea' name="" id="" cols="30" rows="10" placeholder='Notes'></textarea>
        <div className="contact-options-list">
          <div>Send message</div>
          <div>Share contact</div>
          <div>Set as favorite</div>
        </div>
        <div className="block">Block</div>
      </div>
    </div>
    </>
  )
}

export default Contact