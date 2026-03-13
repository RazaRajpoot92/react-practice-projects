import React from 'react'
import carImg from '../assets/car-img.png'

const ProductCard = (props) => {
    const data = {...props}
    const product = data.product
    
  return (
    <div className='flex hover:scale-105 transition-all p-2 h-90 flex-col w-70 rounded-2xl bg-gray-100'>
        <img className='w-full  h-50' src={product.image} alt="" />
        
        <div className=' h-full flex flex-col justify-around'>
            <h2 className='font-semibold text-xl'>{product.title.substring(0,25)}</h2>
            <p className='text-sm text-gray-600'>{product.title.substring(0,80)}</p>
            <h2 className='mx-auto bg-black text-white rounded-md px-7 py-1 font-bold'>$800</h2>
        </div>   
    </div>
  )
}

export default ProductCard