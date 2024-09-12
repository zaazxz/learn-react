import React, { useContext, useEffect, useState } from 'react'
import { useLogin } from '../../hooks/useLogin'
import Button from '../Elements/Button/Index'
import { useSelector } from 'react-redux'
import { DarkMode } from '../../context/DarkMode'
import { useTotalPrice } from '../../context/TotalPrice'

const Navbar = () => {

    const username = useLogin()
    const [totalCart, setTotalCart] = useState(0)
    const cart = useSelector((state) => state.cart.data)
    const { isDarkMode, setIsDarkMode } = useContext(DarkMode)
    const { total } = useTotalPrice()

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
                    Item : {totalCart} | price : ${total}
                </div>

                {/* Toggle Dark Mode */}
                <Button variant="ml-5 bg-black" onclick={() => setIsDarkMode(!isDarkMode)}>
                    {isDarkMode ? 'Light' : 'Dark'}
                </Button>

            </div>
        </>
    )
}

export default Navbar