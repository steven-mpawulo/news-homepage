import React from 'react'
import Header from './Header'
import Main from './Main'
import './homepage.css'
import Footer from './Footer'

const HomePage = () => {
  return (
    <div className='homepage-container'>
        <Header/>
        <Main/>
        <Footer/>
    </div>
  )
}

export default HomePage