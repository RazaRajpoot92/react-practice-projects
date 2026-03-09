import React from 'react'
import carImg from "../assets/car-img.png"
import { useEffect, useRef } from 'react'
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)


const IntroSection = () => {
    const imgRef = useRef()

    useEffect(()=>{
        gsap.to(imgRef.current, {
            x:-650,
            y:500,
            scrollTrigger:{
                trigger:".bottom-section",
                start:"top 80%",
                end:"top 20%",
                scrub:1.5,
            }
        })
    },[])


  return (
    <div className='h-[90vh] flex relative'>
        {/* divider */}
    
        <div className='w-1/2 h-full'></div>

        <div className='w-1/2 h-full flex items-center justify-center '>
            <img ref={imgRef} className='h-90 z-50' src={carImg} alt="" />

        </div>
    </div>
  )
}

export default IntroSection