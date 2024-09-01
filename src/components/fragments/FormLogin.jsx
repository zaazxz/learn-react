import React from 'react'
import InputForm from '../Elements/Input/Index'
import Button from '../Elements/Button/Index'

const FormLogin = () => {

    const handleLogin = (e) => {
        e.preventDefault();

        // Login Process
        localStorage.setItem('email', e.target.email.value);
        localStorage.setItem('password', e.target.password.value);

        if (localStorage.getItem('email') === e.target.email.value && localStorage.getItem('password') === e.target.password.value) {
            window.location.href = '/products'
        } else {
            alert('Login Failed')
        }

        // Testing Login
        // alert(e.target.email.value + ' ' + e.target.password.value) 

    }

    return (
        <form onSubmit={handleLogin}>
            {/* Input Email */}
            <InputForm
                label="E-mail"
                name="email"
                type="email"
                placeholder="example@gmail.com"
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
        </form>
    )
}

export default FormLogin