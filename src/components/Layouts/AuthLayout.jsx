import React from 'react'
import { Link } from 'react-router-dom'

const AuthLayout = (props) => {
    return (
        <div className="flex justify-center min-h-screen items-center">
            <div className="w-full max-w-xs">
                <h1 className="text-blue-600 text-3xl font-bold mb-2">{props.title}</h1>
                <p className="font-medium mb-8 text-slate-500">
                    Welcome, please enter your details!
                </p>
                {props.children}


                {/* <p className='text-slate-500 mt-3'>
                    {props.type === "login" ? "Don't have an account? " : "Already have an account? "}
                    {props.type === "login" && (
                        <Link to="/register" className='text-blue-600 underline'>Register</Link>
                    )}
                    {props.type === "register" && (
                        <Link to="/login" className='text-blue-600 underline'>Login</Link>
                    )}
                </p> */}

                <Navigation type={props.type} />
                
            </div>
        </div>
    )
}

const Navigation = (props) => {
    if (props.type === "login") {
        return (
            <>
                <p className='text-slate-500 mt-3'>
                    Don't have an account? {" "}
                    <Link to="/register" className='text-blue-600 underline'>Register</Link>
                </p>
            </>
        )
    }
    else if (props.type === "register") {
        return (
            <>
                <p className='text-slate-500 mt-3'>
                    Already have an account? {" "}
                    <Link to="/login" className='text-blue-600 underline'>Login</Link>
                </p>
            </>
        )
    }
}

export default AuthLayout