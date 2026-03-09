import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import IntroSection from './components/IntroSection'
import BottomSection from './components/BottomSection'

const App = () => {
  return (
    <div className=' h-screen'>
      <div className='p-4'>
        <Navbar />
        <Hero />
        <IntroSection />
      </div>
      
      <BottomSection />
    </div>
  )
}

export default App