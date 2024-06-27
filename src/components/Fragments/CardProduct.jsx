import React from 'react'
import Button from '../Elements/Button/Index'

const CardProduct = (props) => {
    return (
        <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow">
            {props.children}
        </div>
    )
}

const Body = (props) => {
    return (
        <div className="px-5 pb-5">
            <a href="#">
                <h5 className='text-xl font-semibold tracking-tight text-white'>{props.title}</h5>
                <p className='text-m text-white'>
                    {props.children}
                </p>
            </a>
        </div>
    )
}

const Footer = (props) => {
    return (
        <div className="flex items-center justify-between px-5 pb-5">
            <span className="text-xl font-bold text-white">
                {props.price}
            </span>
            <Button classname="bg-blue-600">Add to cart</Button>
        </div>
    )
}

const Header = (props) => {
    return (
        <a href="#">
            <img src={props.image} alt="products" className='p-8 rounded-t-lg ' />
        </a>
    )
}

CardProduct.Header = Header
CardProduct.Body = Body
CardProduct.Footer = Footer

export default CardProduct