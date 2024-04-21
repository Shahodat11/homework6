import React, {memo} from 'react'
import '../main/main.css'

function MainTop(props) {
  console.log(props);
  return (
  <div 
    style={{background: `url(${props.url})  no-repeat center/cover` }}
     className='banner'>
      <h2>{props.nav}</h2>
      <h1 className='h1'>{props.title}</h1>
      <p className='p'>{props.price}</p>
      <img className='imgg' src={props.logo} alt="" />      
    </div>
  )
}

export default memo(MainTop) 