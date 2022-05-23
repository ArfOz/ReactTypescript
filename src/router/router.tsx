import React from 'react'
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom'
import Header from '../components/header'
import HomePage from '../pages/homePage'
import DetailsPage from '../pages/detailsPage'
import RegisterPage from '../pages/registerPage'

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/details/:id' element={<DetailsPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/' element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router
