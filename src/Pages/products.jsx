import React from 'react'
import CardProduct from '../components/fragments/CardProduct'

const ProductPage = () => {
    return (
        <div className='flex justify-center py-5'>
            <CardProduct>

                {/* Product Image */}
                <CardProduct.Header image="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />

                {/* Description Product */}
                <CardProduct.Body title="Shoes">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptatum iusto! Hic, nemo labore. Voluptatibus adipisci illum cupiditate nobis, tenetur voluptatum, similique sequi temporibus itaque pariatur magni eveniet eaque hic?
                </CardProduct.Body>

                {/* Price Product */}
                <CardProduct.Footer price="100.000" />
            </CardProduct>
        </div>
    )
}

export default ProductPage