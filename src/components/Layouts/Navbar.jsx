import React, { useEffect, useState } from 'react'
import { useLogin } from '../../hooks/useLogin'
import Button from '../Elements/Button/Index'
import { useSelector } from 'react-redux'

const Navbar = () => {

    const username = useLogin()
    const [totalCart, setTotalCart] = useState(0)
    const cart = useSelector((state) => state.cart.data)

    useEffect(() => {
        const sum = cart.reduce((acc, item) => {
            return acc + item.qty
        }, 0)

        setTotalCart(sum)
    }, [cart])

    const handleLogout = () => {

        // Clear Local Storage
        localStorage.removeItem('token');

        // Redirect
        window.location.href = '/login'

    }

    return (
        <>
            <div className="flex justify-end h-16 bg-blue-600 text-white items-center px-10">
                Hello, {username}
                <Button variant="ml-5 bg-black" onclick={handleLogout}>Logout</Button>

                {/* Cart Count */}
                <div className='flex items-center bg-gray-800 p-2 rounded-md ml-5'>
                    {totalCart}
                </div>

            </div>
        </>
    )
}

export default Navbar