import React from 'react'
import {useLottie} from 'lottie-react'

import trophy from '../../assets/trophy.json'
import fiveStars from '../../assets/five-stars.json'
import failure from '../../assets/sad-tear.json'
import {VscDebugRestart} from 'react-icons/vsc'
import {IoMdBook} from 'react-icons/io'


import './Result.scss'


const Animation = ({animation, height, stopFrame, loop}) => {

    const style = {
        height: height,
       // border: 'solid green'
    }

    const options = {
        animationData: animation,
        loop: loop,
        autoplay: true,
        initialSegment: stopFrame ? [0, stopFrame] : ''
    }

    const {View}  = useLottie(options, style)


    return View
}

const Result = ({restart, correctAnswers, setViewAnswers, viewAnswers}) => {

    let totalStars = Math.ceil(((correctAnswers.length * 5) / 10))
    let totalStarFrames = (correctAnswers.length !== 0) ? Math.ceil(((correctAnswers.length * 5) / 10))*15 : 15

  return (
    <div className='result'>
        <div className="result__image">
            {
                totalStars > 3 ?
                <>
                    <h1 className='result__image-text'>Congratulations, You dig it!</h1>
                    <Animation animation={trophy} height='50%' loop={false}/>
                </>
                :
                <>
                    <h1 className='result__image-text'>Too bad, you can do better next time!</h1>
                    <Animation animation={failure} height='50%'loop={true}/>
                </>
            }
            <Animation animation={fiveStars} height='4rem' stopFrame={totalStarFrames || 15} loop={false}/>
        </div>
        <div className="result__info">
            <h1>Results:</h1>
            <h2>{correctAnswers.length} correct answers</h2>
            <div className="result__buttons">
                <div onClick={restart} className="result__buttons-button">
                    <VscDebugRestart/>
                    <h5>Try Again</h5>
                </div>
            </div>
            <div className="result__buttons-button2" onClick={() => setViewAnswers(!viewAnswers)}>
                <IoMdBook/>
                {!viewAnswers ? "See" : "Hide"} your Answers
            </div>
            <a href='/'>Return To main Menu</a>
        </div>
    </div>
  )
}

export default Result