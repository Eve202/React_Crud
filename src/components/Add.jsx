import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'

import Modal from './Modal'
const Add = ({ close }) => {
    const [fetchAll , setFetchAll ] = useState()
    const [newStd, setNewStd] = useState({
        firstname : '', 
        lastname : '',
        email : '',
        classe : '6 ème',
        status: 'Nouveau',
    })
    const handleSubmit = (event) => {
        event.preventDefault()
        let prevStudents = []
        let idStd = uuid()
        prevStudents= localStorage.getItem('students') ? JSON.parse(localStorage.getItem('students')) : [];
         prevStudents.push({id : idStd , ...newStd }) 
         console.log(prevStudents.length)
         localStorage.setItem( 'students',JSON.stringify(prevStudents))
        //console.log(prevStudents)
        close()
    }

  return (
    <Modal close={close}>
      <div className='max-w-lg bg-white rounded-md sm:p-8 p-3 '>
        <form action="post" onSubmit={(e) => handleSubmit(e) }>
            <div className='mb-4'  >
                <label htmlFor="firstname">Nom</label>
                <input onChange={(e) => setNewStd(prev => ({...prev, firstname : e.target.value}))} type="text" name="firstname" id="firstname" className='bg-blue-50 block mt-2 border-b-2 border-blue-300 outline-none  px-2 py-1.5' />
            </div>
            <div className='mb-4' >
                <label htmlFor="lastname">Prénom</label>
                <input onChange={(e) => setNewStd(prev => ({...prev, lastname : e.target.value}))} type="text" name="lastname" id="lastname" className='bg-blue-50 block mt-2 border-b-2 border-blue-300 outline-none  px-2 py-1.5' />
            </div>
            <div className='mb-4' >
                <label htmlFor="email">Email</label>
                <input onChange={(e) => setNewStd(prev => ({...prev, email : e.target.value}))} type="email" name="email" id="email" className='bg-blue-50 block mt-2 border-b-2 border-blue-300 outline-none  px-2 py-1.5' />
            </div>
            <div className='mb-4' >
                <label htmlFor="classe">Classe</label>
                <select onChange={(e) => setNewStd(prev => ({...prev, classe : e.target.value}))} name="classe" id="classe" className='bg-blue-50 block w-full mt-2 border-b-2 border-blue-300 outline-none  px-2 py-1.5' >
                    <option value="6 ème"  >6 ème</option>
                    <option value="5 ème">5 ème</option>
                    <option value="4 ème">4 ème</option>
                    <option value="3 ème">3 ème</option>
                </select>
            </div>
            <div className='mb-4' >
                <label htmlFor="status">Statue</label>
                <select onChange={(e) => setNewStd(prev => ({...prev, status : e.target.value}))} name="status" id="status" className='bg-blue-50 block w-full mt-2 border-b-2 border-blue-300 outline-none  px-2 py-1.5' >
                    <option value="Nouveau" >Nouveau</option>
                    <option value="Transfert">Transfert</option>
                    <option value="Redoublant">Redoublant</option>
                </select>
            </div>
            <input type="submit" onClick={(e) => handleSubmit(e) } value="Ajouter" className='bg-blue-700 px-5 py-2 text-white rounded-md block mt-8 mx-auto' />
        </form>
      </div>
    </Modal>
  )
}

export default Add
