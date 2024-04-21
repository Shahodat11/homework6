import React from 'react'
import svg from '../images/header.svg'
import img from '../images/iphone.jpg'
import MainTop from '../main/MainTop'
import form from '../images/Form.png'

function Navbar() {
let text = "100% Organic Vegetables"
let title = "The best way tostuff your wallet."
let price = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ametreiciendis beatae consequuntur."
  return (
    <>
    <div className='container'>
        <img src={svg} alt="" />
    </div>
    <MainTop
    nav = {text}
    price = {price}
    title = {title}
    logo= {form}
    url = {img}
    />
    </>
  )
}

export default Navbar