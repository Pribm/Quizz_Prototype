import React from 'react'
import Navbar from './components/navbar/Navbar'
import Routes from './routes/routes'

const App = () => {

    const screen = React.useRef(null)

   React.useEffect(() => {
    screen.current.addEventListener('click', function() {
        screen.current.requestFullscreen();
    })
   }, [])

    return (
        <div ref={screen}>
            <header>
                <Navbar/>
            </header>
            <main>
                <Routes/>
            </main>
            <footer>
                
            </footer>
        </div>
    )
}

export default App