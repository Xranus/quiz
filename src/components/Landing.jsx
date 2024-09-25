import React from 'react'

export default function Landing({btnText, headingText, styleClass, reff, btnClick}) {
  return (
    <div className={styleClass} ref={reff}>
      <h1>{headingText}</h1>
      <button onClick={btnClick}>{btnText}</button>
    </div>
  )
}
