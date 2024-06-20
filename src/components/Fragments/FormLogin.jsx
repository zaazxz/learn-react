import React from 'react'
import InputForm from '../Elements/Input/Index.jsx'
import Button from '../Elements/Button/Index.jsx'

const FormLogin = () => {
    return (
        <form action="">
            <InputForm title="Email" type="email" placeholder="email@example.com" id="email" />
            <InputForm title="Password" type="password" placeholder="password" id="password" />
            <Button classname="bg-blue-600 w-full">Login</Button>
        </form>
    )
}

export default FormLogin