import React from 'react'
import Home from './components/Home'
import About from './components/About'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <h1>App</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
