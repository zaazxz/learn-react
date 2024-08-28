import React from 'react';
import Button from '../Elements/Button/Index';

const CardProduct = (props) => {

    const { children } = props;

    return (
        <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg">
            {children}
        </div>
    )
}

export const Header = (props) => {

    const { image } = props;

    return (
        <a href="#">
            <img src={image} alt="product" className='p-8 rounded' />
        </a>
    )
}


export const Body = (props) => {

    const { children, title } = props;

    return (
        <div className="px-5 pb-5">
            <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-white">
                    {title}
                </h5>
            </a>
            <p className='text-sm text-white'>
                {children}
            </p>
        </div>
    )
}

export const Footer = (props) => {

    const { price } = props;

    return (
        <div className="flex items-center justify-between px-5 pb-5">
            <span className="text-xl font-bold text-white">
                Rp. {price}
            </span>
            <Button variant="bg-blue-600" type="submit">
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