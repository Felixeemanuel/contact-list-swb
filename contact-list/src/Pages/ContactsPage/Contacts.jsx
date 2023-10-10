import React, { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import SingleContact from '../../Components/SingleContact/SingleContact';
import { Link } from 'react-router-dom';
import './contacts.css';
import { useEffect } from 'react';
import { db } from '../../Components/DB/config';
import { collection, getDocs } from 'firebase/firestore';

const Contacts = () => {
  const [contacts, setContacts] = useState([])
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const orderRef = collection(db, 'contacts')
        const querySnapshot = await getDocs(orderRef)
  
        const contactData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          firstName: doc.data().firstName,
          lastName: doc.data().lastName,
          company: doc.data().company,
          phoneNumber: doc.data().phoneNumber
        }))
        setContacts(contactData)
      } catch (err) {
        console.log('Error fetching contacts', err)
      }
    }

    fetchContacts()
  }, [])

  const filteredContacts = contacts.filter((contact) => {
    const fullName = `${contact.firstName} ${contact.lastName}`.toLowerCase();
    return fullName.includes(searchTerm.toLowerCase());
  });

  return (
    <>
      <div className="contacts-wrapper">
        <div className="upper-div">
          <div>
            <h1>Contacts</h1>
            <Link to={'/add-contact'} contacts={contacts}>
              <AiOutlinePlus className='plus-icon' />
            </Link>
          </div>
          <div className="search-div">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className='search-icon'>
              <BiSearch />
            </div>
          </div>
        </div>
        <div className="contacts-list">
          {filteredContacts.map((contact) => (
            <SingleContact key={contact.id} contact={contact} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Contacts;
