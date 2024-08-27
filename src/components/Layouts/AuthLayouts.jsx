import React from 'react'
import { Link } from 'react-router-dom';

const AuthLayouts = (props) => {

    const { children, title, type } = props;

    return (
        <div className="flex justify-center min-h-screen items-center">
            <div className="w-full max-w-xs">
                <h1 className="text-3xl mb-2 font-bold text-blue-600">{title}</h1>
                <p className="font-medium text-slate-500 mb-8">
                    Welcome, please enter your details.
                </p>
                {children}

                {/* Ternary operator */}
                {/* <p className="mt-4 text-sm text-center">
                    {type === 'login' ? "Don't have an account? " : "Already have an account? "}
                    {type === 'login'
                        ? <Link to="/register" className="text-blue-600">Register</Link>
                        : <Link to="/login" className="text-blue-600">Login</Link>
                    }
                </p> */}

                {/* And operator */}
                {/* <p className="mt-4 text-sm text-center">
                    {type === 'login' && (
                        <>
                            Don't have an account? <Link to="/register" className="text-blue-600">Register</Link>
                        </>
                    )}

                    {type === 'register' && (
                        <>
                            Already have an account? <Link to="/login" className="text-blue-600">Login</Link>
                        </>
                    )}
                </p> */}

                {/* With Component Render Condition */}
                {/* <Navigation type={type} /> */}
                {Navigation({ type })}

            </div>
        </div>
    )
}

const Navigation = ({ type }) => {
    if (type === 'login') {
        return (
            <p className="mt-4 text-sm text-center">
                Don't have an account? <Link to="/register" className="text-blue-600">Register</Link>
            </p>
        )
    } else {
        return (
            <p className="mt-4 text-sm text-center">
                Already have an account? <Link to="/login" className="text-blue-600">Login</Link>
            </p>
        )
    }
}

export default AuthLayouts