import { useState } from 'react'

function Answers({ a }) {
  const [clickedIndex, setClickedIndex] = useState(null)
  const [correctAnswer, setCorrectAnswer] = useState(null)
  const [answered, setAnswered] = useState(false) 

  function check(e, index) {
    if (!answered) { 
      const isCorrect = e.target.value === 'true'
      setClickedIndex(index)
      setCorrectAnswer(isCorrect)
      setAnswered(true)
    }
  }

  function getButtonStyle(index) {
    if (clickedIndex === index) {
      return correctAnswer ? { backgroundColor: 'green' } : { backgroundColor: 'red' }
    }
    return {}
  }

  return (
    <div className='ans'>
      {a.map((answer, index) => (
        <button
          key={index}
          onClick={(e) => check(e, index)}
          value={answer.correct}
          style={getButtonStyle(index)}
          disabled={answered}
        >
          {answer.text}
        </button>
      ))}
    </div>
  )
}

export default Answers
