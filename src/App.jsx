import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'

function App () {
  return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route index path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </>
  )
}

export default App
