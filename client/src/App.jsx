
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import './App.css'

function App() {
  

  return (
    <>
      <Router>
      <Header/>
      <Routes>
      <Route path='/Home' element={<Home/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
