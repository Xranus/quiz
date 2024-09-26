import React from 'react'
import Questions from '../assets/questions'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Answers from './Answers'
import Content from './Content'
import { useEffect } from 'react'
function Quiz() {
    useEffect(()=>{AOS.init()},[])
  return (
    <div className='quiz' data-aos="zoom-in">
        <Content />
        <Answers a={Questions[0].answers} />
    </div>
  )
}

export default Quiz
