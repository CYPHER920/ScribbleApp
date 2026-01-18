import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './App.css'

import { Home } from './components/Home'
import { TopBar } from './components/Topbar'
import { Signup } from './components/Signup'
function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/top' element={<TopBar/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
