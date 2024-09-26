import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Landing({btnText, headingText, styleClass, reff}) {
  useEffect(()=>{AOS.init()},[])
  return (
    <div className={styleClass} ref={reff} data-aos="zoom-in-up" >
      
      <h1>{headingText}</h1>
      <Link to={'/quiz'}><button>{btnText}</button></Link>
    </div>
  )
}
