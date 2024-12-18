import React, { useEffect} from 'react'

const Modal = ({ close , children }) => {
    useEffect(() =>{
        document.addEventListener('click',(e) => {
            if (e.target.id === 'modal') {
                // console.log(e.target.id)
                close()
            }
        })
    },[] )
  return (
    <div id='modal' className='bg-black bg-opacity-15 fixed top-0 h-screen w-screen flex items-center justify-center'>
      {children}
    </div>
  )
}

export default Modal
