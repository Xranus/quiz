import React, { useRef, useState } from 'react'
import Questions from '../assets/questions'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Answers from './Answers'
import Content from './Content'
import { useEffect } from 'react'


function Quiz() {
    const qRef = useRef(null)
    const aRef = useRef(null)
    const [q, setq] = useState(0)
    useEffect(()=>{
        AOS.init()
    },[])
    function handleNext() {
        if(q < Questions.length-1){
            setq(q+1)
        }else{
            qRef.current.style = 'display: none'
            aRef.current.style = 'display: block'
        }
    }
  return (
    <>
    <div>
        <h1 style={{textAlign:'center', marginTop: 80}}>JavaScript Quiz</h1>
        <div key={q} className='quiz' data-aos="zoom-in" ref={qRef}>
            <Content q={q} />
            <Answers a={Questions[q].answers} />
        </div>
        <h2 ref={aRef} className='aMessage'>Hurray! You have completed the quiz</h2>
        <button className='nxtBtn' onClick={handleNext}>Next</button>
    </div>

    </>
  )
}

export default Quiz
