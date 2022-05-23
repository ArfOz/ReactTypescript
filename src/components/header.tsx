import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-slate-200 flex place-content-center'>
      <div className='w-4/6 bg-white flex justify-between mt-6 rounded-lg px-4 py-2 text-black'>
        <div>
          <Link to='/'>
            <button type='button'>UPayments Store</button>
          </Link>
        </div>
        <div>
          <Link to='/register'>
            <button type='button'>Register</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
