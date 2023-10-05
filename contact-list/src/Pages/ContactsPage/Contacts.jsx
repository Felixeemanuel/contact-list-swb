import React, { useEffect, useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { BiSearch } from 'react-icons/bi'
import SingleContact from '../../Components/SingleContact/SingleContact'
import { Link } from 'react-router-dom'
import './contacts.css'

const Contacts = () => {

  const [contacts, setContacts] = useState([])

  const getContacts = async () => {
    fetch('contacts.json',
    {
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
    )
    .then(function(response){
      return response.json();
    })
    .then(function(myJson) {
      setContacts(myJson)
    })
  }

  useEffect(() => {
    getContacts()
  }, [])

  return (
    <>
    <div className="contacts-wrapper">
      <div className="upper-div">
        <div>
          <h1>Contacts</h1>
          <Link to={'/add-contact'}>
            <AiOutlinePlus className='plus-icon' />
          </Link>
        </div>
        <div className="search-div">
          <input type="text" placeholder= 'Search'/>
          <div className='search-icon'>
            <BiSearch />
          </div>
        </div>
      </div>
      <div className="contacts-list">
        {
          contacts && contacts.map((contact) => {
            return (
              <SingleContact contacts={contacts} contact={contact} key={contact.id}/>
            )
          })
        }
      </div>
    </div>
    </>
  )
}

export default Contacts