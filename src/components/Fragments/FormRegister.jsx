import React from 'react'
import InputForm from '../Elements/Input/Index'
import Button from '../Elements/Button/Index'

const FormRegister = () => {
    return (
        <form action="">
            <InputForm title="Full Name" type="text" placeholder="Full Name" id="fullname" />
            <InputForm title="Email" type="email" placeholder="email@example.com" id="email" />
            <InputForm title="Password" type="password" placeholder="password" id="password" />
            <InputForm title="Confirm Password" type="password" placeholder="password" id="confirmPassword" />
            <Button classname="bg-blue-600 w-full">Register</Button>
        </form>
    )
}

export default FormRegister