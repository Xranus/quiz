

import { useRef } from 'react'
import './App.css'
import Landing from './components/Landing'

function App() {


  return (
    <>
      <Landing
      btnText={'Start Quiz'}
      headingText={`Welcome! Here's a simple JavaScript quiz that might help you get better at it.`} 
      styleClass={'landing'} btnClick={btnClick} />
    </>
  )
}

export default App
