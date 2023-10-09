import './App.css'
import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Contacts from './Pages/ContactsPage/Contacts'
import AddContact from './Pages/AddContactPage/AddContact'
import Contact from './Pages/ContactPage/Contact'
import RootLayout from './RootLayout'

function App() {
   
    const router = createBrowserRouter([

      {
        path: '/',
        element: <RootLayout />,
        children: [
          {
            index: true,
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
        ]
      }
    ])

  return(
    <RouterProvider router={router} />
  )
}

export default App
