import { useState } from 'react'
import {getFirestore, collection, addDoc, doc, getDoc, query, where, getDocs, updateDoc } from 'firebase/firestore'
import './App.css'
import {app} from './firebase'

const firestore = getFirestore(app)

function App() {

  const writeData = async () => {
    const result = await addDoc(collection(firestore, 'cities'), {
      name: "Dehradun",
      pinCode: 248009,
      lat: 123,
      long: 456
    });
    console.log("Result,", result);
    
  }

  const makeSubCollection = async () => {
    await addDoc(collection(firestore, 'cities/tRBqWncXcnFsTz2b5bM7/places'), {
      name: 'Rajpur',
      desc: 'Awsm place',
      date: Date.now()
    })
  }

  const getDocument = async () => {
    const ref = doc(firestore, 'cities', 'tRBqWncXcnFsTz2b5bM7');
    const snap = await getDoc(ref);
    console.log(snap.data());
    
  }

  const getDocumentByQuery = async () => {
    const collectionRef = collection(firestore, 'users')
    const q = query(collectionRef, where('isMale' , '==', true));
    const snapshot = await getDocs(q);
    snapshot.forEach((data) => console.log(data.data()));
  }

  const update = async () => {
    const docRef = doc(firestore, 'cities', 'tRBqWncXcnFsTz2b5bM7');
    const ss = await updateDoc(docRef, {
      name: 'New Dehradun'
    })
  }

  return (
    <div
      className=''>
      <h1 
      className='text-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl'>
        Firebase Firestorm
      </h1>
      <button
        onClick={writeData}
        className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
      >
        Put Data
      </button>
      <button
        onClick={makeSubCollection}
        className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
      >
        Put Sub Data
      </button>
      <button
        onClick={getDocument}
        className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
      >
        Get Document
      </button>
      <button
        onClick={getDocumentByQuery}
        className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
      >
        Get Document By Query
      </button>
      <button
        onClick={update}
        className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
      >
        Update
      </button>
    </div>
  )
}

export default App
