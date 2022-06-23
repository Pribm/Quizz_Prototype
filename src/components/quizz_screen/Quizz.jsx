import React, { useEffect, useState } from 'react'
import { shuffleArray } from '../../utils/ArrayUtils'
import './Quizz.scss'


import Question from './Question'
import Result from './Result'
import Answers from './Answers'

const Quizz = () => {
    const [questions, setQuestions] = useState([])
    const [currentQuestion, setCurrentQuestion] = useState(0)

    const [answer, setAnswer] = useState('')
    const [correctAnswers, setCorrectAnswers] = useState([])
    const [wrongAnswers, setWrongAnswers] = useState([])

    const [showresults, setShowResults] = useState(false)
    const [viewAnswers, setViewAnswers] = useState(false)


    useEffect(() => {
        getQuestions()
    }, [])

    const getQuestions = async () => {
        try {
            let res = await fetch(`https://the-trivia-api.com/api/questions?categories=science&limit=10&region=BR&difficulty=medium`)
            let questionsResponse = await res.json()
            questionsResponse.map(qr => qr.answers = shuffleArray([...qr.incorrectAnswers, qr.correctAnswer]))
            setQuestions(questionsResponse)
        } catch (error) {
            console.log(error)
        }
    }

    const handleAnswer = () => {

        if(answer === questions[currentQuestion].correctAnswer){
            setCorrectAnswers([...correctAnswers, {question: questions[currentQuestion].question, answer: answer}])
        }else{
            setWrongAnswers([...wrongAnswers, {question: questions[currentQuestion].question, answer: answer}])
        }
        

        if (answer === '') {
            return alert('you must provide at least a answer')
        }

        if (currentQuestion + 1 > questions.length - 1) {
            setShowResults(true)
            return
        }
        setAnswer('')
        setCurrentQuestion(currentQuestion + 1)
    }

    const handleRestart = () => {
        getQuestions()
        setCurrentQuestion(0)
        setCorrectAnswers([])
        setWrongAnswers([])
        setShowResults(false)
        setViewAnswers(false)
    }


    return (

        <div className='quizz'>
            {questions.length > 0 &&
                <div className="quizz__container">
                    {(!showresults && !viewAnswers) &&
                        <Question
                        questions={questions}
                        currentQuestion={currentQuestion}
                        setAnswer={setAnswer}
                        handleAnswer={handleAnswer}
                    />
                    }

                    {showresults && 
                    <Result restart={handleRestart} correctAnswers={correctAnswers} setViewAnswers={setViewAnswers} viewAnswers={viewAnswers} setShowResults={setShowResults}/>
                    }

                    {(viewAnswers === true) &&
                        <Answers correct={correctAnswers} wrong={wrongAnswers} setShowResults={setShowResults} setViewAnswers={setViewAnswers}/>
                    }
                </div>
            }
        </div>
    )
}

export default Quizz