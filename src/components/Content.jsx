import React from 'react'
import Question from './Question'
import Code from './Code'
import Questions from '../assets/questions'
function Content() {
  return (
    <div className='content'>
      <Question q={Questions[0].q} />
      <Code c={Questions[0].code} />
    </div>
  )
}

export default Content
