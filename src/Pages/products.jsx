import React from 'react'
import CardProduct from '../components/Fragments/CardProduct'

const products = [
    {
        id: 1,
        title: "Sepatu Baru",
        price: "Rp. 1.000.000",
        image: "/images/shoes-1.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, earum!"
    },
    {
        id: 2,
        title: "Sepatu Lama",
        price: "Rp. 100.000",
        image: "/images/shoes-1.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, earum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, earum!"
    }
];

const ProductsPage = () => {
    return (
        <div className="flex justify-center py-5">
            {products.map((product) => (
                <CardProduct key={product.id}>
                    <CardProduct.Header image={product.image}></CardProduct.Header>
                    <CardProduct.Body title={product.title}>
                        {product.description}
                    </CardProduct.Body>
                    <CardProduct.Footer price={product.price}></CardProduct.Footer>
                </CardProduct>
            ))}
        </div>
    )
}

export default ProductsPage