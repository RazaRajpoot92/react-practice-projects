import React from 'react'
import {ArrowRight} from "lucide-react"
const Card = (props) => {
  return (
    <div className='w-60 relative rounded-4xl shrink-0 bg-amber-200 h-full'>
        
    <img className='h-full w-full rounded-3xl object-fill' src={props.url} alt="" />

    {/* Overlay layer */}
    <div className='absolute inset-0 bg-black/30 rounded-3xl z-10'></div>

    <div className='absolute top-0 p-4 flex flex-col h-full justify-between z-20'>
        <h1 className='h-8 w-8 rounded-full bg-white text-violet-500 flex justify-center items-center font-semibold'>{props.id+1}</h1>

        <div className='text-white'>
            <p className='mb-9 text-sm text-gray-100'>
                Lorem ipsum dolor sit amet consectetur adipisicing deleniti veritatis minus aliquid, quis porro dolorem iusto numquam neque autem perspiciatis.
            </p>
            <div className='flex justify-between items-center'>
                <button className='bg-white/30 text-black backdrop-blur-[1px] text-sm px-6 py-1 rounded-full'>
                    Satisfied
                </button>
                <ArrowRight size={20} color='white' />
            </div>
        </div>
    </div>
</div>
  )
}

export default Card