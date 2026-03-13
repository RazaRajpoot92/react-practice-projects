import { useContext, useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { ContestStore } from '../context/ContextWrapper'

const PRODUCT_API = "https://fakestoreapi.com/products"

const ProductSection = () => {

    const [products, setProducts] = useState([])
    const [darkTheme, setDarkTheme] = useContext(ContestStore)

    const getProducts = async ()=>{
        const response = await fetch(PRODUCT_API)
        const data = await response.json()
        setProducts(data)
        console.log(data)
    }

    useEffect(()=>{
      getProducts()
    },[products])

  return (
    <div className={` ${darkTheme?"dark":"light"}`}>
        <h1 className={` ${darkTheme?"text-white":"text-black"} transition-all duration-400 text-center text-5xl font-semibold `}>Our <span className='text-violet-500'>Top</span> Products</h1>
        <div className='p-4 flex gap-4 justify-center flex-wrap'>
           {
            products.map((product)=>(
                <ProductCard key={product.id} product = {product} />
            ))
           }
           
        </div>
    </div>
  )
}

export default ProductSection