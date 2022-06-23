import React from 'react'
import './Answers.scss'
import {HiCheckCircle} from 'react-icons/hi'
import {IoIosCloseCircle} from 'react-icons/io'
import {IoChevronBack, IoChevronUp} from 'react-icons/io5'

const Answers = ({correct, wrong, setShowResults, setViewAnswers}) => {
    
  return (
    <div className="answers">
        <div className="answers__container">
            <div className="answers__container-right">
                <h3 className='mb-2 color-white'>Right Answers</h3>
                {
                    correct.map(item => (
                        <div className='answer__card d-flex shadow-bottom'>
                            <div className='answer__card-text d-flex flex-column'>
                                <span>Question: {item.question}</span>
                                <h4>{item.answer}</h4>
                            </div>
                            <HiCheckCircle/>
                        </div>
                    ))
                }
            </div>
            <div className="answers__container-wrong">
                <h3 className='mb-2 color-white'>Wrong Answers</h3>
                {
                    wrong.map(item => (
                        <div className='answer__card d-flex shadow-bottom '>
                            <div className="answer__card-text d-flex flex-column">
                                <span>Question: {item.question}</span>
                                <h4>{item.answer}</h4>
                            </div>
                            <IoIosCloseCircle color='#f00'/>
                        </div>
                    ))
                }
            </div>
        </div>

        <button onClick={() => {
            setViewAnswers(false)
            setShowResults(true)
            }}>
            <IoChevronUp />
        </button>
    </div>
  )
}

export default Answers