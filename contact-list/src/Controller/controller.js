import {collection, getFirestore } from "firebase/firestore";
import { app } from '../Components/DB/config'

// Get a Firestore instance
export const firestore = getFirestore(app)
export const contactsCollection = collection(firestore, 'contacts')