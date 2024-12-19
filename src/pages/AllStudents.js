import React, { useEffect, useState } from 'react'
import { Plus, UserRoundSearch } from "lucide-react";
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
            //console.log(listStudent)
            listStudent = listStudent.filter(student =>  student['id'] !== id)
            localStorage.setItem('students', JSON.stringify(listStudent))
            //console.log(listStudent)
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
            <main className='bg-blue-50  '>
                <section className='max-w-2xl mx-auto relative min-h-screen p-5'>
                <p className='text-gray-800 text-2xl lg:text-3xl py-3 text-center'>Système crud avec React Js</p>
                    {localStorageStd.length === 0 && <div className='flex items-center justify-center min-h-96 flex-col gap-5'>
                            <UserRoundSearch className='w-52 h-52 text-gray-800' />
                            <p className='text-center max-w-xs '> Veuillez cliquer <button onClick={() => openModal('add')} className='text-blue-700 text-medium' >ici</button>  sur le bouton en dessous pour ajouter des étudiants, Merci.</p>
                        </div>
                    }
                    {localStorageStd.length > 0 && <div className='grid grid-cols-2 lg:grid-cols-3 place-items-center w-full gap-6 mt-2  mb-14'>
                        {
                            localStorageStd.map((student) => {
                                return (<div key={student['id']}>
                                    <Card student={student} openModal={openModal} />
                                </div>
                                )
                            })
                        }
                    </div>}
                    <button onClick={() => openModal('add')} className='bg-blue-700 text-white left-1/2 -translate-x-1/2 w-fit p-2 rounded-full fixed bottom-5 '><Plus />
                    </button>
                </section>

            </main>
            {action === 'add' && <Add close={closeModal} />}
            {action === 'read' && <Read id={id} close={closeModal} />}
            {action === 'update' && <Update id={id} close={closeModal} />}
        </React.Fragment>
    )
}

export default AllStudents
