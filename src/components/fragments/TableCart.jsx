import React, { useContext, useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { DarkMode } from '../../context/DarkMode'
import { useTotalPrice, useTotalPriceDispatch } from '../../context/TotalPrice'

const TableCart = (props) => {

    // Destructuring
    const { products } = props
    const cart = useSelector((state) => state.cart.data)
    const dispatch = useTotalPriceDispatch()
    const { total } = useTotalPrice()
    const totalPriceRef = useRef(null);
    const { isDarkMode, setIsDarkMode } = useContext(DarkMode)

    useEffect(() => {
        if (products.length > 0 && cart.length > 0) {

            // Updating Process
            const sum = cart.reduce((acc, item) => {
                const product = products.find(product => product.id === item.id)
                return acc + product.price * item.qty
            }, 0)

            // Set Total Price
            dispatch({
                type: "UPDATE",
                payload: {
                    total: sum
                }
            }) 

            // Set Local Storage
            localStorage.setItem('cart', JSON.stringify(cart))

        }
    }, [cart])

    useEffect(() => {
        if (cart.length > 0) {
            totalPriceRef.current.style.display = 'table-row';
        } else {
            totalPriceRef.current.style.display = 'none';
        }
    }, [cart])

    return (
        <>
            <table className={`text-left table-auto border-separate border-spacing-x-5 ${isDarkMode && 'text-white'}`}>
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

                    {/* Total */}
                    <tr ref={totalPriceRef}>
                        <td colSpan={3} className='font-bold'>Total Price</td>
                        <td className='font-bold'>
                            ${(total).toLocaleString('en-US', { styles: 'currency', currency: 'USD' })}
                        </td>
                    </tr>

                </tbody>
            </table>
        </>
    )
}

export default TableCart