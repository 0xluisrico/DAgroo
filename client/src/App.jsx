
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
        <Route path='/Home' element={<Home/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
