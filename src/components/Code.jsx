import React from 'react'

function Code({c}) {
  return (
    <div className='snippet'>
      <pre><code>{c}</code></pre>
    </div>
  )
}

export default Code
