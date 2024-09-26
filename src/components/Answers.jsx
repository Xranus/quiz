import React from 'react'
function Answers({a}) {
  return (
    <div className='ans'>
      <button>{a[0].text}</button>
      <button>{a[1].text}</button>
      <button>{a[2].text}</button>
      <button>{a[3].text}</button>
    </div>
  )
}

export default Answers
