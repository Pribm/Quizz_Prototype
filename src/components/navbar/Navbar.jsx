import React from 'react'
import './Navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbar__container">
            <div className="navbar__brand">
                <span>Test</span><span>Quizz</span>
            </div>
            <div className="navbar__icons">
                <h5>Share with your friends</h5>
            </div>
        </div>
    </div>
  )
}

export default Navbar