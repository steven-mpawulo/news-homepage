import React from 'react'
import ItemCard from '../common/ItemCard'
import Retro from '../../images/image-retro-pcs.jpg'

const Footer = () => {
  return (
    <ItemCard image={Retro} number={"01"} title={"Reviving Retro PCs"} message={"What happens when old PCs are given modern upgrades?"}/>
  )
}

export default Footer