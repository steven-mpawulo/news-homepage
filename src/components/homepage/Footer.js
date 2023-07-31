import React from 'react'
import ItemCard from '../common/ItemCard'
import Retro from '../../images/image-retro-pcs.jpg'
import Laptop from '../../images/image-top-laptops.jpg'
import Games from '../../images/image-gaming-growth.jpg'
import './footer.css'

const Footer = () => {
    return (
        <div className='footer'>
<ItemCard image={Retro} number={"01"} title={"Reviving Retro PCs"} message={"What happens when old PCs are given modern upgrades?"} />
<ItemCard image={Laptop} number={"02"} title={"Top laptops of 2022"} message={"Our best picks for various needs and budgets"} />
<ItemCard image={Games} number={"03"} title={"The Growth of Gaming"} message={"How the pandemic has sparked fresh opportunities"} />
        </div>
        
        
    )
}

export default Footer