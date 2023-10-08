import { useContext, createContext, useState, useEffect } from "react"
import react from 'react'


const ContactsContext = createContext()

export function useContacts() {
  return useContext(ContactsContext)
}

export function ContactsProvider({ children }) {

    const [contacts, setContacts] = useState([])

    useEffect(() => {
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
      }, [])

      const addContact = async (newContact) => {
        try {
          const response = await fetch('contacts.json', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newContact),
          });
    
          if (response.ok) {
            setContacts([...contacts, newContact]);
          } else {
            console.error('Failed to add contact.');
          }
        } catch (error) {
          console.error('Error adding contact:', error);
        }
      };

    return (
        <ContactsContext.Provider value={{
            addContact,
            contacts,
            setContacts,
        }}>
            {children}
        </ContactsContext.Provider>
    )
}