import React from 'react'
import '../mainBody/mainBody.css'
import card1 from '../images/card1.jpg'
import card2 from '../images/card2.webp'
import card3 from '../images/card3.jpg'

function MainBody() {
  return (
    <>
    <div className="container">
        <div className="cardss">
            <div style={{background: `url(${card2})  no-repeat center/cover` }} className="card1">
                <div className="navv">
                    <h4 className='h4'>Everyday Fresh & Clean with Our Products</h4>
                    <button>Shop Now</button>
                </div>
            </div>
            <div style={{background: `url(${card1})  no-repeat center/cover` }} className="card1">
                <div className="navv">
                    <h4 className='h4'>Make your Breakfast Healthy and Easy</h4>
                    <button>Shop Now</button>
                </div>
            </div>
            <div style={{background: `url(${card3})  no-repeat center/cover` }} className="card1">
                <div className="navv">
                    <h4 className='h4'>The best Organic Products Online</h4>
                    <button>Shop Now</button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default MainBody