import React, { useEffect, useState } from 'react'

import Modal from './Modal'
const Update = ({ close , id }) => {
    const [updateStd, setUpdateStd] = useState({
    })
    const [error, setError] = useState({
      state: false,
      firstname: '',
      lastname: '',
      email: '',
  })
    const verifyEnter = () => {
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      let objError = {};
      console.log(!updateStd['firstname'], !updateStd['lastname'], !emailRegex.test(updateStd['email']))
      if (!updateStd['firstname']) {
          objError['firstname'] = 'Insérer votre nom !';
      }
      if (!updateStd['lastname']) {
          objError['lastname'] = 'Insérer votre nom !';
      }
      if (!emailRegex.test(updateStd['email'])) {
          objError['email'] = 'Email invalide !';
      }
      if (Object.keys(objError).length === 0) {
          return true;
      } else {
          setError(error => ({ state: true, ...objError }))

      }
  }
    const handleSubmit = (event) => {
        event.preventDefault()
        let prevStudents = []
        prevStudents= localStorage.getItem('students') ? JSON.parse(localStorage.getItem('students')) : [];
        if (verifyEnter()) {
          for (let i = 0; i < prevStudents.length; i++) {
            if (prevStudents[i]['id'] === id) {
              prevStudents[i] = updateStd;
            }
            
          }
          localStorage.setItem( 'students',JSON.stringify(prevStudents))
          close()
        }
    }

    useEffect(() => {
      setUpdateStd(prev => (JSON.parse(localStorage.getItem('students')).filter(student => student['id'] === id )[0]))
    }, [])
  return (
    <Modal close={close}>
      <div className='min-w-80 max-w-lg bg-white rounded-md sm:p-8 p-3 '>
        <form action="post" onSubmit={(e) => handleSubmit(e) }>
            <div className='mb-4'  >
                <label htmlFor="firstname">Nom</label>
                <input 
                value={updateStd["firstname"]}
                onChange={(e) => setUpdateStd(prev => ({...prev, firstname : e.target.value}))} type="text" name="firstname" id="firstname" className='bg-blue-50 w-full block mt-2 border-b-2 border-blue-300 outline-none  px-2 py-1.5' />
                {error['state'] && <p className='text-sm text-red-600'>{error['firstname']}</p>}
            </div>
            <div className='mb-4' >
                <label htmlFor="lastname">Prénom</label>
                <input 
                value={updateStd["lastname"]}
                onChange={(e) => setUpdateStd(prev => ({...prev, lastname : e.target.value}))} type="text" name="lastname" id="lastname" className='bg-blue-50 w-full  block mt-2 border-b-2 border-blue-300 outline-none  px-2 py-1.5' />
                {error['state'] && <p className='text-sm text-red-600'>{error['lastname']}</p>}
            </div>
            <div className='mb-4' >
                <label htmlFor="email">Email</label>
                <input 
                value={updateStd["email"]}
                onChange={(e) => setUpdateStd(prev => ({...prev, email : e.target.value}))} type="email" name="email" id="email" className='bg-blue-50 block w-full mt-2 border-b-2 border-blue-300 outline-none  px-2 py-1.5' />
                {error['state'] && <p className='text-sm text-red-600'>{error['email']}</p>}
            </div>
            <div className='mb-4' >
                <label htmlFor="class">Classe</label>
                <select 
                value={updateStd["class"]}
                onChange={(e) => setUpdateStd(prev => ({...prev, class : e.target.value}))} name="class" id="class" className='bg-blue-50 block w-full mt-2 border-b-2 border-blue-300 outline-none  px-2 py-1.5' >
                    <option value="6 ème"  >6 ème</option>
                    <option value="5 ème">5 ème</option>
                    <option value="4 ème">4 ème</option>
                    <option value="3 ème">3 ème</option>
                </select>
            </div>
            <div className='mb-4' >
                <label htmlFor="status">Statue</label>
                <select value={updateStd["status"]} onChange={(e) => setUpdateStd(prev => ({...prev, status : e.target.value}))} name="status" id="status" className='bg-blue-50 block w-full mt-2 border-b-2 border-blue-300 outline-none  px-2 py-1.5' >
                    <option value="Nouveau" >Nouveau</option>
                    <option value="Transfert">Transfert</option>
                    <option value="Redoublant">Redoublant</option>
                </select>
            </div>
            <input type="submit" onClick={(e) => handleSubmit(e) } value="Modifier" className='bg-blue-700 px-5 py-2 text-white rounded-md block mt-8 mx-auto' />
        </form>
      </div>
    </Modal>
  )
}

export default Update
