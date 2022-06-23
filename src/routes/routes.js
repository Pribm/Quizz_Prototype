import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import Quizz from "../components/quizz_screen/Quizz";
import Scores from "../components/scores/Scores";
import MainScreen from '../components/main_screen/MainScreen'

  const routes = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/">
              <Route index element={<MainScreen/>}/>
                <Route path='quizz' element={<Quizz/>}/>
                <Route path='scores' element={<Scores/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )

  export default routes