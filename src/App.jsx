import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/navBar/Navbar'
import { Routes , Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Coin from './pages/coin/Coin'
import Footer from './components/footer/Footer'
function App() {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/coin/:coinId' Component={Coin}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
