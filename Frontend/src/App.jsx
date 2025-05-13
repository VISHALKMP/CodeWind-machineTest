import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Sign from './Components/sign.jsx'
import SignUp  from './Components/login.jsx'
import Dash from './Components/dash.jsx'

function App() {


  return (
    <>
      
        <Routes>
          <Route path='/'element={<Sign/>} />
          <Route path='/SignUp'element={<SignUp/>} />
          
          <Route path='/dash' element={<Dash/>}>


          </Route>
        </Routes>
    
    
    </>
  )
}

export default App
