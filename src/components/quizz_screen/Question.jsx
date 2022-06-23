import React from 'react'

import { motion, useAnimation } from 'framer-motion'

const Question = ({ currentQuestion, questions, setAnswer, handleAnswer }) => {

  const controls = useAnimation()

  return (
    <>
      <motion.div
        animate={controls}
        className='quizz__container-content'>
        <div className='quizz__questionContainer-wrapper'>
          <div className="quizz__questionContainer">
            <div className='quizz__questionContainer-header'>
              <span>Questions</span><span>{currentQuestion + 1}</span><span>/10</span>
            </div>

            <div className="quizz__questionContainer-body">
              <h4>{questions[currentQuestion].question}</h4>
            </div>
          </div>

          <div className="quizz__answerContainer">
            {
              questions[currentQuestion].answers.map((answer, index) => (
                <motion.button
                  key={'answer' + index} className='quizz__answerContainer-answer' onClick={() => setAnswer(answer)}>
                  {answer}
                </motion.button>
              ))
            }
          </div>
        </div>

        <div className="quizz__confirmButton">
          <button onClick={() => handleAnswer()}>Answer</button>
        </div>
      </motion.div>
    </>
  )
}

export default Question