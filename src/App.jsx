import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import "./App.css"


function App() {
  return (
    <BrowserRouter>
    <header className='header'>
      <nav className='nav'>
        <Link to={"/"} className="logo">#VANLIFE</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/vans"}>Vans</Link>
      </nav>
    </header>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path='/about' element={<About />}/>
    </Routes> 
    {/* <footer className='footer'>Ⓒ 2022 #VANLIFE</footer> */}
  </BrowserRouter>
  )
}

export default App
