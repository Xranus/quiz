import React, { useRef, useState } from 'react'
import Questions from '../assets/questions'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Answers from './Answers'
import Content from './Content'
import { useEffect } from 'react'
import { GrLinkNext } from "react-icons/gr"
import { GrPowerReset } from "react-icons/gr"
import { useNavigate } from 'react-router-dom'


function Quiz() {
    const [showNext, setNext] = useState(false)
    const [isFinished, setIsFinished] = useState(false)
    const [score, setScore] = useState(0)

    const [q, setq] = useState(0)
    useEffect(()=>{
        AOS.init()
    },[])
    const navigate = useNavigate()
    function handleNext() {
        if(q < Questions.length-1){
            setq(q+1)
        }else{
            setIsFinished(true)
        }
        setNext(false)
    }
    function handleRetry() {
        setScore(0)
        setIsFinished(false)
        navigate('/quiz')
    }
  return (
    <>
    <div>
        <h1 style={{textAlign:'center', marginTop: 80}}>JavaScript Quiz</h1>
        {!isFinished && ( <div key={q} className='quiz' data-aos="zoom-in">
            <Content q={q} />
            <Answers setNext={setNext} setScore={setScore} score={score} a={Questions[q].answers} />
        </div>)}
        {isFinished && (<div style={{textAlign: 'center'}}>
            <h1 className='aMessage'>Hurray! You have compeleted the quiz.</h1>
            <h2 style={{marginTop: "2rem"}}>Your Score: {score} out of {Questions.length}</h2>
            <h3 style={{marginTop: '1rem'}}>That's about {(score / Questions.length) * 100}%</h3>
            <a href="/quiz"><GrPowerReset className="againBtn" /></a>
        </div>)}
        {showNext && <GrLinkNext className='nxtBtn' onClick={handleNext} />}
    </div>
    </>
  )
}

export default Quiz
