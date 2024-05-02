import { Route,Routes } from "react-router-dom"
import Home from './routes/home/home'
import './App.scss'
function App() {
  return(
    <Routes>
      <Route index element={<Home/>}/>
 
    </Routes>

)
}

export default App;
