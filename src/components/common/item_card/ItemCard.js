import React from 'react'
import './itemcard.css'

const ItemCard = ({image, number, title, message}) => {
  return (
    <div className='item-card'>
        <img src={image} alt=""  className='image'/>
        <div className="item-inner-container">
            <p className='number'>{number}</p>
            <p className='title'>{title}</p>
            <p>{message}</p>
        </div>
    </div>
  )
}

export default ItemCard