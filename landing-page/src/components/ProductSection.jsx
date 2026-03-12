import { useState } from 'react'
import ProductCard from './ProductCard'

const PRODUCT_API = "https://fakestoreapi.com/products"

const ProductSection = () => {

    const [products, setProducts] = useState([])

    const getProducts = async ()=>{
        const response = await fetch(PRODUCT_API)
        const data = await response.json()
        setProducts(data)
        console.log(data)
    }

  return (
    <div className='mt-4 bg-gray-50'>
        <h1 onClick={getProducts} className='bg-yellow-50 text-center text-4xl font-semibold'>Our <span className='text-violet-500'>Top</span> Products</h1>
        <div className='p-4 flex gap-2 justify-center flex-wrap'>
           {
           products.length && products.map((product,idx)=>(
                <ProductCard key={product.id} product = {product} />
            ))
           }
           
        </div>
    </div>
  )
}

export default ProductSection