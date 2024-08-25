import React from 'react'
import InputForm from '../Elements/Input/Index'
import Button from '../Elements/Button/Index'

const FormRegister = () => {
    return (
        <form action="">
            {/* Input name */}
            <InputForm
                label="Full Name"
                name="fullname"
                type="text"
                placeholder="John Doe"
            />

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

            {/* Input Confirm Password */}
            <InputForm
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                placeholder="*****"
            />

            {/* Button */}
            <Button variant="bg-blue-600 w-full">Register</Button>
        </form>
    )
}

export default FormRegister