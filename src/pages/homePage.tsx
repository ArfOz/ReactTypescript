import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Product from '../components/products-homepage'

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
      <div className='flex place-content-center'>
        <div className='w-4/6 bg-gray-700 flex justify-between mt-6 rounded-lg px-4 py-2 text-white'>
          <div>UPayments Store</div>
          <div>Register</div>
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
