import React from 'react'
import './itemcard.css'

const ItemCard = ({image, number, title, message}) => {
  return (
    <div className='item-card'>
        <img src={image} alt="" />
        <div className="item-inner-container">
            <p>{number}</p>
            <p>{title}</p>
            <p>{message}</p>
        </div>
    </div>
  )
}

export default ItemCard