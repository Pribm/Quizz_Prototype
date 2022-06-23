import React from 'react'
import {useNavigate} from 'react-router-dom'

import {CgSmileMouthOpen, CgSmileNeutral, CgSmileSad} from 'react-icons/cg'

const MainScreen = () => {

  const navigate = useNavigate()

  return (
    <div className='container d-flex center-all'>
        <div className="d-flex flex-column align-items-center card min-w-mobile">
          <h1 className='mb-4'>Test Quizz</h1>
          <div className='d-flex flex-column w-100'>
            <button className='mb-2 btn' onClick={() => navigate('quizz')}>Start Game</button>
            <div className='d-flex flex-column align-items-center mb-2'>
              <h4 className='mb-2'>Dificulty</h4>
              <div className="d-flex justify-content-between w-75">
                <div className="d-flex flex-column center-all">
                  <CgSmileMouthOpen size={'5rem'}/>
                  <h6>Easy</h6>
                </div>
                <div className="d-flex flex-column center-all">
                  <CgSmileNeutral size={'5rem'}/>
                  <h6>Medium</h6>
                </div>
                <div className="d-flex flex-column center-all ">
                  <CgSmileNeutral size={'5rem'}/>
                  <h6>Hard</h6>
                </div>
              </div>
            </div>
            <button className='mb-2 btn'>See Scores</button>
          </div>
        </div>
    </div>
  )
}

export default MainScreen