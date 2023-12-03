

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import './App.css'
import Vendedor from './components/Vendedor/Vendedor'
import Buscar from './components/Buscar/Buscar'
import Vendedor_exis from './components/Vendedor_exis/Vendedor_exis'




function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Vendedor' element={<Vendedor/>}/>
        <Route path='/Vendedor_exis' element={<Vendedor_exis/>}/>
        <Route path='/Buscar' element={<Buscar/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
