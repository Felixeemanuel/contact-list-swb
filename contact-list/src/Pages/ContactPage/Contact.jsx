import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { IoChevronBackOutline } from 'react-icons/io5'
import { AiFillMessage, AiFillPhone } from 'react-icons/ai'
import { BsFillCameraVideoFill } from 'react-icons/bs'
import './contact.css'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../Components/DB/config'

const Contact = () => {

  const { id } = useParams();

  const [contactDetails, setContactDetails] = useState({});

  const docRef = doc(db, 'contacts', id)

  useEffect(() => {
    const getContactDetails = async () => {
      const docSnap = await getDoc(docRef)

      if(docSnap.exists()) {
        const contactData = {
          id: docSnap.id,
          firstName: docSnap.data().firstName,
          lastName: docSnap.data().lastName,
          company: docSnap.data().company,
          phoneNumber: docSnap.data().phoneNumber
        }

        setContactDetails(contactData)
      } else {
        console.log('Contact not found')
      }
    }
    getContactDetails()
  }, [id])

  let arr = [];
  if (contactDetails && contactDetails.firstName) {
    arr = contactDetails.firstName.split('');
  }

  let phoneNumber = [];
  if (contactDetails && contactDetails.phoneNumber) {
    phoneNumber = contactDetails.phoneNumber.split('');
  }

  const formatPhoneNumber = () => {
    const numericPhoneNumber = contactDetails && contactDetails.phoneNumber ? contactDetails.phoneNumber.replace(/\D/g, '') : '';
    const formattedPhoneNumber = numericPhoneNumber.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, '$1-$2 $3 $4')
    return formattedPhoneNumber;
  }

  const formattedPhoneNumber = formatPhoneNumber(contactDetails && contactDetails.phoneNumber);


  if (!contactDetails) {
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
      </div>
      <div className="contact-lower">
        <div className="circle">
          <p>{arr[0]}</p>  
        </div>
        <h1 className="contact-name">{contactDetails.firstName + ' ' + contactDetails.lastName}</h1>
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