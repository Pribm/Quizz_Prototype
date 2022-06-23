import React from 'react'
import Navbar from './components/navbar/Navbar'
import Routes from './routes/routes'

const App = () => {

    const screen = React.useRef(null)

   React.useEffect(() => {
    if(screen.current.clientWidth < 768){
        screen.current.addEventListener('click', function() {
            screen.current.requestFullscreen();
        }, false)
    }
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