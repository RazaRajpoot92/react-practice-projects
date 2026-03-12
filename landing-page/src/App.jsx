import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import IntroSection from './components/IntroSection'
import BottomSection from './components/BottomSection'
import Form from "./components/Form"
import NoteApp from './components/NoteApp'
import ProductSection from './components/ProductSection'

const App = () => {
  return (
    <div className=' h-screen'>
      <div className='p-4'>
        <Navbar />
        <Form />
        <Hero />
        <IntroSection />
      </div>
      
      <BottomSection />
      <NoteApp />
      < ProductSection />
    </div>
  )
}

export default App