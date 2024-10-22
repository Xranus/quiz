import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'

function Code({c}) {
  return (
      <SyntaxHighlighter className='snippet' language='javascript' style={tomorrow}>
      {c}
      </SyntaxHighlighter>
  )
}

export default Code
