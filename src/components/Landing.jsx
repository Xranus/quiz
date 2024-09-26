import React from 'react'
import { Link } from 'react-router-dom'


export default function Landing({btnText, headingText, styleClass, reff}) {
  return (
    <div className={styleClass} ref={reff}>
      
      <h1>{headingText}</h1>
      <Link to={'/quiz'}><button>{btnText}</button></Link>
    </div>
  )
}
