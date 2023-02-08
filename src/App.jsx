import { useState } from 'react'
import './sass/main.scss'
import Header from './components/header'
import Body from "./components/Body";
import Footer from "./components/Footer"
function App() {
  return (
<div className='app-container'>
  <Header/>
  <Body />
  <Footer />
    </div>
  )
}

export default App
