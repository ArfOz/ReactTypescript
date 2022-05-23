import React, { useState } from 'react'
import axios from 'axios'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'

type Errors = {
  name?: string
  imageUrl?: string
  price?: number
  categories?: string
  description?: string
}

const apiUrl = 'https://62286b649fd6174ca82321f1.mockapi.io/case-study/products'

const RegisterPage = () => {
  const navigate = useNavigate()
  const errors: Errors = {}

  const validate = (values: any) => {
    if (!values.name) {
      errors.name = 'Required'
    } else if (values.name.length < 5) {
      errors.name = 'Must be 5 characters or more'
    }

    if (!values.description) {
      errors.description = 'Required'
    } else if (values.description.length < 20) {
      errors.description = 'Must be 20 characters or more'
    }

    // if (!values.imageUrl) {
    //   errors.imageUrl = 'Required'
    // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    //   errors.imageUrl = 'Invalid email address'
    // }

    if (!values.categories) {
      errors.categories = 'Required'
    } else if (values.categories.length === 0) {
      errors.categories = 'Must be category selected'
    }

    return errors
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      imageUrl: '',
      categories: '',
      price: '',
    },
    validate,

    onSubmit: (values) => {
      axios.post(apiUrl, values, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      navigate({
        pathname: '/',
      })
    },
  })

  return (
    <div className='min-h-screen bg-slate-200'>
      <div className='min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 '>
        <div className='max-w-md w-full space-y-8'>
          <div>
            <img
              className='mx-auto h-12 w-auto'
              src='https://panfinance.net/wp-content/uploads/2021/11/Upayments.png'
              alt='Workflow'
            />

            <p className='mt-2 text-center text-sm text-gray-600'>Create a Product</p>
          </div>

          <form className='mt-8 space-y-6' onSubmit={formik.handleSubmit}>
            <input type='hidden' name='remember' defaultValue='true' />
            <div className='rounded-md shadow-sm -space-y-px'>
              <div>
                <label htmlFor='name' className='sr-only'>
                  Product Name
                </label>
                <input
                  id='name'
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  name='name'
                  type='text'
                  autoComplete='name'
                  required
                  className='appearance-none rounded-none relative block
              w-full px-3 py-2 border border-gray-300
              placeholder-gray-500 text-gray-900 rounded-t-md
              focus:outline-none focus:ring-indigo-500
              focus:border-indigo-500 focus:z-10 sm:text-sm'
                  placeholder='Product Name'
                />
                {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}
              </div>
            </div>
            <div className='rounded-md shadow-sm -space-y-px'>
              <div>
                <label htmlFor='description' className='sr-only'>
                  Description
                </label>
                <input
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  id='description'
                  name='description'
                  type='description'
                  required
                  className='appearance-none rounded-none relative block
              w-full px-3 py-2 border border-gray-300
              placeholder-gray-500 text-gray-900 rounded-t-md
              focus:outline-none focus:ring-indigo-500
              focus:border-indigo-500 focus:z-10 sm:text-sm'
                  placeholder='Description'
                />
                {formik.touched.description && formik.errors.description ? (
                  <div>{formik.errors.description}</div>
                ) : null}
              </div>
            </div>
            <div className='rounded-md shadow-sm -space-y-px'>
              <div>
                <label htmlFor='imageUrl' className='sr-only'>
                  ImageUrl
                </label>
                <input
                  value={formik.values.imageUrl}
                  onChange={formik.handleChange}
                  id='imageUrl'
                  name='imageUrl'
                  type='imageUrl'
                  required
                  className='appearance-none rounded-none relative block
              w-full px-3 py-2 border border-gray-300
              placeholder-gray-500 text-gray-900 rounded-t-md
              focus:outline-none focus:ring-indigo-500
              focus:border-indigo-500 focus:z-10 sm:text-sm'
                  placeholder='Image Url'
                />
                {formik.touched.imageUrl && formik.errors.imageUrl ? (
                  <div>{formik.errors.imageUrl}</div>
                ) : null}
              </div>
            </div>

            <div className='rounded-md shadow-sm -space-y-px'>
              <div>
                <label
                  htmlFor='categories'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'
                ></label>
                <select
                  value={formik.values.categories}
                  onChange={formik.handleChange}
                  id='categories'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                >
                  <option value='' label='Select a category'>
                    Select a category{''}
                  </option>
                  <option value='Electronic' label='Electronic'>
                    Electronic
                  </option>
                  <option value='Furnitures' label='Furnitures'>
                    Furnitures
                  </option>
                  <option value='Clothing' label='Clothing'>
                    Clothing
                  </option>
                  <option value='Accessories' label='Accessories'>
                    Accessories
                  </option>
                </select>
              </div>
            </div>

            <div className='rounded-md shadow-sm -space-y-px'>
              <div>
                <label htmlFor='price' className='sr-only'>
                  Price
                </label>
                <input
                  value={formik.values.price}
                  onChange={formik.handleChange}
                  id='price'
                  name='price'
                  type='text'
                  required
                  className='appearance-none rounded-none relative block
              w-full px-3 py-2 border border-gray-300
              placeholder-gray-500 text-gray-900 rounded-t-md
              focus:outline-none focus:ring-indigo-500
              focus:border-indigo-500 focus:z-10 sm:text-sm'
                  placeholder='Price'
                />
                {formik.touched.price && formik.errors.price ? (
                  <div>{formik.errors.price}</div>
                ) : null}
              </div>
            </div>

            <div className='rounded-md shadow-sm -space-y-px'>
              <div>
                <label>Submit</label>
                <input
                  id='price'
                  name='price'
                  type='submit'
                  value='Submit'
                  required
                  className='appearance-none rounded-none relative block
              w-full px-3 py-2 border border-gray-300
              placeholder-gray-500 text-gray-900 rounded-t-md
              focus:outline-none focus:ring-indigo-500
              focus:border-indigo-500 focus:z-10 sm:text-sm'
                  placeholder='Submit'
                />
              </div>
            </div>

            {/* <div className='rounded-md shadow-sm -space-y-px'>
              <button
                type='submit'
                className='group relative w-full flex justify-center
            py-2 px-4 border border-transparent text-sm font-medium
            rounded-md text-black'
                onClick={handleRegister}
              >
                <span className='absolute left-0 inset-y-0 flex items-center pl-3'></span>
                SUBMIT
              </button>
            </div> */}
          </form>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
