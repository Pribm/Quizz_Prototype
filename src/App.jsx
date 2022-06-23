import React from 'react'
import Navbar from './components/navbar/Navbar'
import Routes from './routes/routes'

const App = () => {
    return (
        <>
            <header>
                <Navbar/>
            </header>
            <main>
                <Routes/>
            </main>
            <footer>
                
            </footer>
        </>
    )
}

export default App