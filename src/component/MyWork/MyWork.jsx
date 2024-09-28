import React from 'react'
import './MyWork.css'
import dsn_img from '../../assets/dsn_img.jpg'
import webdsn_img from '../../assets/webdsn_img.jpg'
import web_img from '../../assets/web_img.jpg'
const MyWork = () => {
  return (
    <div className='MyWork'>
      <div className="MyWork-title">
        <h1>My Latest work</h1>
      </div>
        <ul>
          <li className='listen'><img style={{width: 500,}} src={dsn_img} alt="dsn_img"/></li>
          <li className='webdsn_img'><img style={{width: 500,}} src={webdsn_img} alt="{webdsn_img"/></li>
          <li className='web_img'> <img  style={{width: 500,}} src={web_img} alt="web_im"/></li>
        </ul>
   </div>
  )
}

export default MyWork
