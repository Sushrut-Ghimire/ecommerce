import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Frontend/Home'
import About from './Pages/Frontend/About'
import Contact from './Pages/Frontend/Contact'
import Category from './Pages/Frontend/Category'
import Detail from './Pages/Frontend/Detail'


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/category/:catId' element={<Category/>}/>
      <Route path='/detail/:id' element={<Detail/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
