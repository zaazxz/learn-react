import React from 'react'

const AuthLayout = (props) => {
    return (
        <div className="flex justify-center min-h-screen items-center">
            <div className="w-full max-w-xs">
                <h1 className="text-blue-600 text-3xl font-bold mb-2">{props.title}</h1>
                <p className="font-medium mb-8 text-slate-500">
                    Welcome, please enter your details!
                </p>
                {props.children}
            </div>
        </div>
    )
}

export default AuthLayout