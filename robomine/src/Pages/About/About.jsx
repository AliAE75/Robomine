import React from 'react'
import AboutComponent from '../../components/About/About'
import Header from '../Layout/Header/Header'
import Footer from '../Layout/Footer/Footer'

export default function index() {
  return (
    <div>
      <Header />
      <AboutComponent />
      <Footer />
    </div>
  )
}
