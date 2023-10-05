import './App.css'
import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Contacts from './Pages/ContactsPage/Contacts'
import AddContact from './Pages/AddContactPage/AddContact'
import Contact from './Pages/ContactPage/Contact'

function App() {
   
    const router = createBrowserRouter([
      {
        path: '/',
        element: <Contacts />
      },
      {
        path: '/add-contact',
        element: <AddContact />
      },
      {
        path: '/:id',
        element: <Contact />
      }
    ])

  return(
    <RouterProvider router={router} />
  )
}

export default App
