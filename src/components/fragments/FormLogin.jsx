import React, { useEffect, useRef, useState } from 'react'
import InputForm from '../Elements/Input/Index'
import Button from '../Elements/Button/Index'
import { login } from '../../service/auth.service'

const FormLogin = () => {

    // State Declare
    const [loginStatus, setLoginStatus] = useState()

    const handleLogin = (e) => {
        e.preventDefault();

        // Login Process with local storage
        // localStorage.setItem('email', e.target.email.value);
        // localStorage.setItem('password', e.target.password.value);
        // window.location = '/products'
        
        // Sign in with API
        const data = {
            username: e.target.username.value,
            password: e.target.password.value
        }

        login(data, (status, res) => {
            if (status) {
                localStorage.setItem('token', res)
                window.location = '/products'
            } else {
                setLoginStatus(res.response.data)
            }
        })

        // Testing Login
        // alert(e.target.email.value + ' ' + e.target.password.value) 

    }

    const usernameRef = useRef();

    useEffect(() => {
        usernameRef.current.focus();
    }, [])

    return (
        <form onSubmit={handleLogin}>

            {/* Input Email */}
            <InputForm
                label="Username"
                name="username"
                type="text"
                placeholder="example"
                ref={usernameRef}
            />

            {/* Input Password */}
            <InputForm
                label="Password"
                name="password"
                type="password"
                placeholder="*****"
            />

            {/* Button */}
            <Button variant="bg-blue-600 w-full" type="submit">Login</Button>

            {/* Failed */}
            {loginStatus && <p className='text-red-500 mt-5 text-center'>{loginStatus}</p>}

        </form>
    )
}

export default FormLogin