import React, { useEffect, useState } from 'react'
import { Plus } from "lucide-react";
import Add from '../components/Add';
import Update from '../components/Update';
import Read from '../components/Read';
import Card from '../components/Card';
const AllStudents = () => {

    const [action, setAction] = useState('')
    const [id, setid] = useState(0)
    const [localStorageStd, setLocalStorageStd] = useState([])
    const openModal = (text, id) => {
        setAction(action => text)
        setid(prev => id)
        if (text === 'delete') {
            let listStudent = JSON.parse(localStorage.getItem('students'));
            console.log(listStudent)
            listStudent = listStudent.filter(student =>  student['id'] !== id)
            localStorage.setItem('students', JSON.stringify(listStudent))
            console.log(listStudent)
            setAction(prev => '')
            fetchStudents()
        }
    }
    const closeModal = () => {
        setAction(action => '')
        fetchStudents();
    }
    const fetchStudents = () => {
        if (localStorage.getItem('students')) {
            setLocalStorageStd(prev => JSON.parse(localStorage.getItem('students')))
        }
    }
    
    useEffect(() => {
        fetchStudents()
    }, [])

    return (
        <React.Fragment>
            <main className='bg-blue-50 p-5 '>
                <section className='max-w-lg mx-auto relative min-h-screen'>
                <p className='text-gray-800 text-2xl lg:text-3xl py-3 text-center'>Système crud avec React Js</p>
                    <div className='grid grid-cols-2 lg:grid-cols-3 w-full gap-5'>
                        {
                            localStorageStd.map((student) => {
                                return (<div key={student['id']}>
                                    <Card student={student} openModal={openModal} />
                                </div>
                                )
                            })
                        }
                    </div>
                    <button onClick={() => openModal('add')} className='bg-blue-700 text-white p-2 rounded-full absolute bottom-8 right-2'><Plus /></button>
                </section>

            </main>
            {action === 'add' && <Add close={closeModal} />}
            {action === 'read' && <Read id={id} close={closeModal} />}
            {action === 'update' && <Update id={id} close={closeModal} />}
        </React.Fragment>
    )
}

export default AllStudents
