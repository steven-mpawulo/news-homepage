import React from 'react'
import Logo from '../../images/logo.svg'

const Header = () => {
  return (
    <div className='header'>
        <img src={Logo} alt="logo" />
        <ul>
            <li>Home</li>
            <li>New</li>
            <li>Popular</li>
            <li>Trending</li>
            <li>Categories</li>
        </ul>
    </div>
  )
}

export default Header