import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import IntroSection from './components/IntroSection'
import BottomSection from './components/BottomSection'
import Form from "./components/Form"

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
    </div>
  )
}

export default App