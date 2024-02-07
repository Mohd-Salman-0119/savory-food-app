import { faCcPaypal, faCcVisa, faSuperpowers } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const BankCard = () => {
  return (
    <div className='bg-primary/70 p-1 rounded-md'>
      <div className='bg-primary p-3 rounded-md -rotate-2 text-white'>
          <div className='flex justify-between items-center'>
               <h1 className='font-semibold'>ADR Bank</h1>
               <FontAwesomeIcon icon={faSuperpowers} className='text-lg'/>
          </div>
          <h1 className='my-5 text-lg font-semibold'>8763 2736 9873 0329</h1>
          <div className='flex justify-between items-center text-sm'>
               <div>
                    <p>Card Holder Name</p>
                    <h1 className='font-semibold'>Salman Qadri</h1>
               </div>
               <div>
                    <p>Expired Date</p>
                    <h1 className='font-semibold'>10/28</h1>
               </div>
               <div className='text-2xl '>
                    <FontAwesomeIcon icon={faCcVisa}/>
               </div>
          </div>
      </div>
    </div>
  )
}

export default BankCard
