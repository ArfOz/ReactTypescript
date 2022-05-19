import React from 'react'
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom'
import Header from '../components/header'
import HomePage from '../pages/homePage'
import DetailsPage from '../pages/detailsPage'

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/details' element={<DetailsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router
