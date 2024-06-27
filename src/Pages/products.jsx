import React from 'react'
import CardProduct from '../components/Fragments/CardProduct'
import Button from '../components/Elements/Button/Index'

const ProductsPage = () => {
    return (
        <div className="flex justify-center py-5">
            <CardProduct>
                <CardProduct.Header image="/images/shoes-1.jpg"></CardProduct.Header>
                <CardProduct.Body title="Sepatu Baru">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas culpa accusantium, esse eveniet, ex aliquam itaque expedita quaerat ad, illum ullam est alias perferendis unde eos consequatur reiciendis magni veritatis.
                </CardProduct.Body>
                <CardProduct.Footer price="Rp. 1.000.000"></CardProduct.Footer>
            </CardProduct>
        </div>
    )
}

export default ProductsPage