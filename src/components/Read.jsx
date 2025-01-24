import React, { useEffect, useState } from 'react'
import Modal from './Modal'
const Read = ({ close , id }) => {
  let [studentSelect , setStudentSelect] = useState({})
 
  useEffect(() => {
    const std = JSON.parse(localStorage.getItem('students')).filter(student => student['id'] === id )[0];
    setStudentSelect(prev => std );
    
  }, [] )
  return (
    <Modal close={close} >
      <div className='min-w-72 max-w-80 md:max-w-fit flex items-stretch flex-col  bg-white p-5 rounded-lg '>
        <p className={`text-xl ${ studentSelect['status'] === 'Nouveau' ? 'text-blue-500' : studentSelect['status'] === 'Transfert' ? 'text-cyan-500' : 'text-red-500' } text-center font-semibold mb-5`}>Vos informations</p>
        <div className='flex md:flex-row flex-col gap-1 mb-2'>
          <p className={` ${ studentSelect['status'] === 'Nouveau' ? 'text-blue-500' : studentSelect['status'] === 'Transfert' ? 'text-cyan-500' : 'text-red-500' } underline `}>Nom :</p>
          <p>{studentSelect['firstname']}</p>
        </div>
        <div className='flex md:flex-row flex-col gap-1 mb-2'>
          <p className={` ${ studentSelect['status'] === 'Nouveau' ? 'text-blue-500' : studentSelect['status'] === 'Transfert' ? 'text-cyan-500' : 'text-red-500' } underline `}>Prénom :</p>
          <p>{studentSelect['lastname']}</p>
        </div>
        <div className='flex md:flex-row flex-col gap-1 mb-2'>
          <p className={` ${ studentSelect['status'] === 'Nouveau' ? 'text-blue-500' : studentSelect['status'] === 'Transfert' ? 'text-cyan-500' : 'text-red-500' } underline `} >Classe :</p>
          <p>{studentSelect['class']}</p>
        </div>
        <div className='flex md:flex-row flex-col gap-1 mb-2'>
          <p className={` ${ studentSelect['status'] === 'Nouveau' ? 'text-blue-500' : studentSelect['status'] === 'Transfert' ? 'text-cyan-500' : 'text-red-500' } underline `} >email :</p>
          <p>{studentSelect['email']}</p>
        </div>
        <div className='flex md:flex-row flex-col gap-1 mb-2'>
          <p className={` ${ studentSelect['status'] === 'Nouveau' ? 'text-blue-500' : studentSelect['status'] === 'Transfert' ? 'text-cyan-500' : 'text-red-500' } underline `} >Statut :</p>
          <p>{studentSelect['status']}</p>
        </div>
        <button onClick={() => close()} className={` ${ studentSelect['status'] === 'Nouveau' ? 'bg-blue-500' : studentSelect['status'] === 'Transfert' ? 'bg-cyan-500' : 'bg-red-500' } text-white px-3 py-1.5 rounded-md self-end `} >Ok</button>
      </div>
    </Modal>
  )
}

export default Read
