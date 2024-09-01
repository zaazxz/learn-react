import React from 'react'
import CardProduct from '../components/fragments/CardProduct'

const products = [
    {
        id: 1,
        title: 'Playstation 5',
        price: 'Rp. 5.000.000',
        image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptatum iusto! Hic, nemo labore. Voluptatibus adipisci illum cupiditate nobis, tenetur voluptatum, similique sequi temporibus itaque pariatur magni eveniet eaque hic?"
    },
    {
        id: 2,
        title: 'Nintendo Switch',
        price: 'Rp. 3.000.000',
        image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptatum iusto! Hic, nemo labore. Voluptatibus adipisci illum cupiditate nobis, tenetur voluptatum, similique sequi temporibus itaque pariatur magni eveniet eaque hic?"
    }
]

const ProductPage = () => {
    return (
        <div className='flex justify-center py-5'>

            {/* Products Iteration */}
            {products.map((product) => (
                <CardProduct>

                    {/* Product Image */}
                    <CardProduct.Header image={product.image} />

                    {/* Description Product */}
                    <CardProduct.Body title={product.title}>
                        {product.desc}
                    </CardProduct.Body>

                    {/* Price Product */}
                    <CardProduct.Footer price={product.price} />

                </CardProduct>
            ))}

        </div>
    )
}

export default ProductPage