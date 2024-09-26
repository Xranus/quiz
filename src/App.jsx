
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useRef } from 'react'
import './App.css'
import Landing from './components/Landing'
import Quiz from './components/Quiz'
import MoivngDiv from './components/MovingDiv'

function App() {


  return (
    <>
      <MoivngDiv /> 
      <Router>
      <Routes>
        <Route exact path='/' element={
          <Landing
          btnText={'Start Quiz'}
          headingText={`Welcome! Here's a simple JavaScript quiz that might help you get better at it.`} 
          styleClass={'landing'}  />
        } />
        <Route exact path='/quiz' element={<Quiz />}/>
      </Routes>
      </Router>
    </>

  )
}

export default App
