import React, { useContext, useEffect, useState } from 'react'
import CardProduct from '../components/fragments/CardProduct'
import { getProducts } from '../service/product.service'
import { useLogin } from '../hooks/useLogin'
import TableCart from '../components/fragments/TableCart'
import Navbar from '../components/Layouts/Navbar'
import { DarkMode } from '../context/DarkMode'

const ProductPage = () => {

    // Creating State
    const [products, setProducts] = useState([])

    // Context
    const { isDarkMode, setIsDarkMode } = useContext(DarkMode)

    // Custom Hooks
    useLogin()

    // Consume API
    useEffect(() => {
        getProducts((data) => {
            setProducts(data)
        })
    }, [])    

    return (
        <>

            {/* Navbar */}
            <Navbar />

            {/* Products Section */}
            <div className={`flex justify-center py-5 ${isDarkMode && 'bg-slate-900'}`}>

                {/* Products Iteration */}
                <div className="w-4/6 flex flex-wrap">
                    {products.length > 0 &&
                        products.map((product) => (
                            <CardProduct key={product.id}>

                                {/* Product Image */}
                                <CardProduct.Header image={product.image} id={product.id}/>

                                {/* Description Product */}
                                <CardProduct.Body title={product.title}>
                                    {product.description}
                                </CardProduct.Body>

                                {/* Price Product */}
                                <CardProduct.Footer
                                    price={product.price}
                                    id={product.id}
                                />

                            </CardProduct>
                        ))}
                </div>

                {/* Products Pricing and Total */}
                <div className="w-2/6">
                    <h1 className='text-3xl font-bold text-blue-600 ml-5 mb-2'>Cart</h1>

                    {/* Table Cart */}
                    <TableCart products={products}></TableCart>

                </div>

            </div>

            {/* Trying State */}
            {/* <div className='flex w-100 justify-center mb-5'>
                <Counter></Counter>
            </div> */}

        </>
    )
}

export default ProductPage