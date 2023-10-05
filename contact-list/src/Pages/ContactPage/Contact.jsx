import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

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


  return (
    <div>{contact && contact.firstName}</div>
  )
}

export default Contact