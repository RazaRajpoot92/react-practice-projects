import React from 'react'
import HeroLeftContainer from './HeroLeftContainer'
import HeroRightContainer from "./HeroRightContainer"


const Hero = () => {
  return (
    <div className=' h-[75vh] flex mt-8'>
        <HeroLeftContainer />
        <HeroRightContainer />
          
    </div>
  )
}

export default Hero