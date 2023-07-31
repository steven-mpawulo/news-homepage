import React from 'react'
import Logo from '../../../images/logo.svg'
import './header.css'

const Header = () => {
  return (
    <header>
        <div className='header'>
        <img src={Logo} alt="logo" className='logo' />
        <nav>
        <ul>
            <li>Home</li>
            <li>New</li>
            <li>Popular</li>
            <li>Trending</li>
            <li>Categories</li>
        </ul>
        </nav>
    </div>
    </header>
  )
}

export default Header