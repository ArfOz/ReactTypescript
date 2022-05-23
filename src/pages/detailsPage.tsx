import axios from 'axios'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ProductContext } from './homePage'

type detail = {
  createdAt: number
  name: string
  avatar: string
  developerEmail: string
  price: number
  id: string
  category: string
  description: string
}

const DetailsPage = () => {
  const { id } = useParams()
  const [details, setDetails] = useState<detail>()

  useEffect(() => {
    axios({
      method: 'GET',
      url: `https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/${id}`,
    })
      .then((res) => {
        console.log('arif', res?.data)
        setDetails(res?.data)
      })
      .catch((e) => console.log(e))
      .finally()
  }, [id])

  return (
    <div className='bg-slate-200 h-full grid grid-cols-1 justify-items-center'>
      <div className='bg-slate-200 min-h-screen'>
        <div className='flex flex-col md:flex-row min-w-[42%] border-4 border-b-black'>
          <img
            className=' w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg pt-8  pb-8'
            src={details?.avatar}
            alt={details?.name}
          />
          <div className='p-6 flex flex-col justify-between'>
            <div className='p-6 flex flex-col justify-start'>
              <h5 className='text-gray-900 text-xl font-medium mb-2'>{details?.name}</h5>
            </div>
            <div className='p-6 flex flex-col justify-end'>
              <p className='text-gray-600 text-xs'>${details?.price}</p>
            </div>
          </div>
        </div>
        <div>
          <p className='py-8 text-left'>Description</p>
          <div className='max-w-screen-sm'>{details?.description}</div>
        </div>
      </div>
    </div>
  )
}

export default DetailsPage
