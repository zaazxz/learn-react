import React, { useEffect, useRef, useState } from 'react'
import CardProduct from '../components/fragments/CardProduct'
import Button from '../components/Elements/Button/Index'
import Counter from '../components/fragments/Counter'
import getProducts from '../service/product.service'
import { getUsername } from '../service/auth.service'

const ProductPage = () => {

    // Creating State
    const [cart, setCart] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [products, setProducts] = useState([])
    const [username, setUsername] = useState('')

    // Consume API
    useEffect(() => {
        getProducts((data) => {
            setProducts(data)
        })
    }, [])

    useEffect(() => {

        // Get Token
        const token = localStorage.getItem('token')

        if (!token) {
            window.location = '/login'
        } else {
            setUsername(getUsername(token))
        }

    }, [])

    // Component Did Mount & Component Did Update
    /* Set Deafult Value */
    useEffect(() => {

        // Getting Cart from Local Storage
        setCart(JSON.parse(localStorage.getItem('cart')) || [])

    }, [])

    /* Component Updating */
    useEffect(() => {
        if (products.length > 0 && cart.length > 0) {

            // Updating Process
            const sum = cart.reduce((acc, item) => {
                const product = products.find(product => product.id === item.id)
                return acc + product.price * item.qty
            }, 0)

            // Set Total Price
            setTotalPrice(sum)

            // Set Local Storage
            localStorage.setItem('cart', JSON.stringify(cart))

        }
    }, [cart])

    // Cart Process
    const handleAddToCart = (id) => {
        if (cart.find(item => item.id === id)) {
            setCart(
                cart.map(item => item.id === id ? { ...item, qty: item.qty + 1 } : item)
            )
        } else {
            setCart([...cart, { id, qty: 1 }])
        }
    }


    // Logout Process
    const handleLogout = () => {

        // Clear Local Storage
        localStorage.removeItem('token');

        // Redirect
        window.location.href = '/login'

    }

    // useRef 
    const cartRef = useRef(JSON.parse(localStorage.getItem('cart')) || []);
    const totalPriceRef = useRef(null);

    const handleAddToCartRef = (id) => {
        cartRef.current = [...cartRef.current, { id, qty: 1 }];
        localStorage.setItem('cart', JSON.stringify(cartRef.current));
    }

    useEffect(() => {
        if (cart.length > 0) {
            totalPriceRef.current.style.display = 'table-row';
        } else {
            totalPriceRef.current.style.display = 'none';
        }
    }, [cart])

    return (
        <>

            {/* Header Section */}
            <div className="flex justify-end h-16 bg-blue-600 text-white items-center px-10">
                Hello, {username}
                <Button variant="ml-5 bg-black" onclick={handleLogout}>Logout</Button>
            </div>

            {/* Products Section */}
            <div className='flex justify-center py-5'>

                {/* Products Iteration */}
                <div className="w-4/6 flex flex-wrap">
                    {products.length > 0 &&
                        products.map((product) => (
                            <CardProduct key={product.id}>

                                {/* Product Image */}
                                <CardProduct.Header image={product.image} />

                                {/* Description Product */}
                                <CardProduct.Body title={product.title}>
                                    {product.description}
                                </CardProduct.Body>

                                {/* Price Product */}
                                <CardProduct.Footer
                                    price={product.price}
                                    id={product.id}
                                    handleAddToCart={handleAddToCart}
                                />

                                {/* Price Product with Ref */}
                                {/* <CardProduct.Footer
                                price={product.price}
                                id={product.id}
                                handleAddToCart={handleAddToCartRef}
                            /> */}

                            </CardProduct>
                        ))}
                </div>

                {/* Products Pricing and Total */}
                <div className="w-2/6">
                    <h1 className='text-3xl font-bold text-blue-600 ml-5 mb-2'>Cart</h1>

                    {/* Trying Cart iteration with state */}
                    {/* <ul>
                        {cart.map((item) => (
                            <li key={item}>{item.id}</li>
                        ))}
                    </ul> */}

                    {/* Cart Iteration */}
                    <table className='text-left table-auto border-separate border-spacing-x-5'>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>

                            {/* List Cart Products */}
                            {products.length > 0 &&
                                cart.map((item) => {
                                    const product = products.find(product => product.id === item.id)
                                    return (
                                        <tr key={item.id}>
                                            <td>{product.title}</td>
                                            <td>
                                                ${product.price.toLocaleString('en-US', { styles: 'currency', currency: 'USD' })}
                                            </td>
                                            <td>{item.qty}</td>
                                            <td>
                                                ${(product.price * item.qty).toLocaleString('en-US', { styles: 'currency', currency: 'USD' })}
                                            </td>
                                        </tr>
                                    )
                                })}

                            {/* List Cart Products with ref */}
                            {/* {cartRef.current.map((item) => {
                                const product = products.find(product => product.id === item.id)
                                return (
                                    <tr key={item.id}>
                                        <td>{product.title}</td>
                                        <td>
                                            Rp. {product.price.toLocaleString('id-ID', { styles: 'currency', currency: 'IDR' })}
                                        </td>
                                        <td>{item.qty}</td>
                                        <td>
                                            Rp. {(product.price * item.qty).toLocaleString('id-ID', { styles: 'currency', currency: 'IDR' })}
                                        </td>
                                    </tr>
                                )
                            })} */}

                            {/* Total */}
                            <tr ref={totalPriceRef}>
                                <td colSpan={3} className='font-bold'>Total Price</td>
                                <td className='font-bold'>
                                    ${(totalPrice).toLocaleString('en-US', { styles: 'currency', currency: 'USD' })}
                                </td>
                            </tr>

                        </tbody>
                    </table>
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