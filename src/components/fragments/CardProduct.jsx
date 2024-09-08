import React from 'react';
import Button from '../Elements/Button/Index';
import { Link } from 'react-router-dom';

const CardProduct = (props) => {

    const { children } = props;

    return (
        <div className="w-full max-w-xs bg-gray-800 border border-gray-700 rounded-lg mx-2 flex flex-col justify-between my-2">
            {children}
        </div>
    )
}

export const Header = (props) => {

    const { image, id } = props;

    return (
        <Link to={`/product/${id}`}>
            <img src={image} alt="product" className='p-8 rounded-t h-60 w-full object-cover' />
        </Link>
    )
}


export const Body = (props) => {

    const { children, title } = props;

    return (
        <div className="px-5 pb-5 h-full">
            <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-white">
                    {title}
                </h5>
            </a>
            <p className='text-sm text-white'>
                {children.substring(0, 100) + '...'}
            </p>
        </div>
    )
}

export const Footer = (props) => {

    const { price, handleAddToCart, id } = props;

    return (
        <div className="flex items-center justify-between px-5 pb-5">
            <span className="text-xl font-bold text-white">
                ${price.toLocaleString('en-US', { styles: 'currency', currency: 'USD' })}
            </span>
            <Button variant="bg-blue-600" type="submit" onclick={() => handleAddToCart(id)}>
                Add to cart
            </Button>
        </div>
    )
}

// Nested Components
CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct