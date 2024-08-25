import React from 'react'
import InputForm from '../Elements/Input/Index'
import Button from '../Elements/Button/Index'

const FormLogin = () => {
    return (
        <form action="">
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
            <Button variant="bg-blue-600 w-full">Login</Button>
        </form>
    )
}

export default FormLogin