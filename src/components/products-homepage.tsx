import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ProductType } from './types/product'

// navigate(`/detail/${product.id}`)

const Product = ({ product }: { product: ProductType }) => {
  const navigate = useNavigate()
  return (
    <button className='group relative' onClick={() => navigate(`/details/${product.id}`)}>
      <div className='w-full min-h-80 bg-white aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none'>
        <button
          type='button'
          className='w-1/2 h-1/2 object-scale-down object-fill lg:w-full lg:h-full'
          onClick={() => navigate(`/detail/${product.id}`)}
        >
          <img src={product!.avatar} alt={product!.name} />
        </button>
      </div>

      <div className='mt-4 flex justify-between'>
        <div>
          <h3 className='text-sm text-gray-700'>
            <span aria-hidden='true' className='absolute inset-0' />
            {product.name}
          </h3>
        </div>
        <p className='text-sm font-medium text-gray-900'>{product!.price}</p>
      </div>
    </button>
  )
}

export default Product
