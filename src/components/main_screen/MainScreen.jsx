import React from 'react'
import {useNavigate} from 'react-router-dom'

const MainScreen = () => {

  const navigate = useNavigate()

  return (
    <div className='container d-flex center-all'>
        <div className="d-flex flex-column align-items-center card min-vw-25">
          <h1 className='mb-4'>Test Quizz</h1>
          <div className='d-flex flex-column w-100'>
            <button className='mb-2 btn' onClick={() => navigate('quizz')}>Start Game</button>
            <button className='mb-2 btn'>Select Dificulty</button>
            <button className='mb-2 btn'>See Scores</button>
          </div>
        </div>
    </div>
  )
}

export default MainScreen