import React from 'react'
import Question from './Question'
import Code from './Code'
import Questions from '../assets/questions'
function Content({q}) {
  return (
    <div className='content'>
      <Question q={Questions[q].q} />
      <Code c={Questions[q].code} />
    </div>
  )
}

export default Content
