import React, { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import SingleContact from '../../Components/SingleContact/SingleContact';
import { Link } from 'react-router-dom';
import { useContacts } from '../../Context/ContactsContext';
import './contacts.css';

const Contacts = () => {
  const { contacts } = useContacts();
  const [searchTerm, setSearchTerm] = useState('');

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
