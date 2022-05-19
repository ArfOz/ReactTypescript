import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Product from '../components/products-homepage'
import Dropdown from '../components/dropdown'

const HomePage = () => {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // setLoading(true);
    axios({
      method: 'GET',
      url: 'https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/',
    })
      .then((res) => {
        console.log(res?.data)
        setProducts(res?.data)
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false))

    axios({
      method: 'GET',
      url: 'https://62286b649fd6174ca82321f1.mockapi.io/case-study/categories/',
    })
      .then((response) => {
        console.log(response?.data)
        setCategories(response?.data)
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className='bg-slate-200'>
      <div className='flex justify-center'>
        <div className='w-4/6 mt-6 rounded-lg text-black '>
          <div className='flex justify-between'>
            <div className='justify-start'>
              <input type='text' className='px-4 py-2 w-80 rounded-lg ' placeholder='Search...' />
            </div>
            <div className='justify-end'>
              <Dropdown />
            </div>
          </div>
        </div>
      </div>
      <div className='flex place-content-center'>
        <div className='w-4/6 mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
          {products.map((product: any) => (
            <Product product={product} key={product?.id} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomePage
