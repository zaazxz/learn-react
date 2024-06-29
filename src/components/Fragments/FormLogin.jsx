import React from 'react'
import InputForm from '../Elements/Input/Index.jsx'
import Button from '../Elements/Button/Index.jsx'

const FormLogin = () => {

    const HandleLogin = (e) => {
        e.preventDefault();

        // TODO : Handle Login
        const email = e.target.email.value;
        const password = e.target.password.value;
        
        // TODO : Send data to local storage
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        
        // TODO : Redirect
        window.location.href = '/products';

        // Testing Value
        // console.log(e.target.email.value, e.target.password.value);

        // Testing Hit Button
        // console.log('you hit the login button!');
    }

    return (
        <form onSubmit={HandleLogin}>
            <InputForm title="Email" type="email" placeholder="email@example.com" id="email" />
            <InputForm title="Password" type="password" placeholder="password" id="password" />
            <Button classname="bg-blue-600 w-full" type="submit">Login</Button>
        </form>
    )
}

export default FormLogin