import React from 'react'
import { Eye,  FilePenLine, Trash2 } from "lucide-react";
const Card = ({ student , openModal }) => {
    return (
        <React.Fragment>
            <div className={`w-44 h-48 border-t-2 ${ student['status'] === 'Nouveau' ? 'border-blue-500' : student['status'] === 'Transfert' ? 'border-cyan-500' : 'border-red-500' } bg-white shadow-md rounded-es-lg rounded-ee-lg flex flex-col justify-between`}>
                <div className='text-center flex flex-col gap-3 justify-center items-center h-full'>
                    <div className='bg-gray-100 p-5 rounded-full w-fit '><p className='text-4xl text-gray-800 '>{student['firstname'].slice(0, 1).toUpperCase()}{student['lastname'].slice(0, 1).toUpperCase()}</p></div>
                    <p className=''>{student['firstname'].toUpperCase()}</p>
                </div>
                <div className='flex justify-between items-center p-3'>
                    <button onClick={() => openModal('read', student['id']) } 
                    className={` ${ student['status'] === 'Nouveau' ? 'bg-blue-500' : student['status'] === 'Transfert' ? 'bg-cyan-500' : 'bg-red-500' } text-white p-1 rounded-lg hover:animate-pulse`}><Eye /></button>
                    <button onClick={() => openModal('update', student['id']) } 
                    className={` ${ student['status'] === 'Nouveau' ? 'bg-blue-500' : student['status'] === 'Transfert' ? 'bg-cyan-500' : 'bg-red-500' } text-white p-1 rounded-lg hover:animate-pulse`}><FilePenLine /></button>
                    <button  onClick={() => openModal('delete', student['id']) } 
                        className={` ${ student['status'] === 'Nouveau' ? 'bg-blue-500' : student['status'] === 'Transfert' ? 'bg-cyan-500' : 'bg-red-500' } text-white p-1 rounded-lg hover:animate-pulse`}
                        ><Trash2 /></button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Card
