import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { DarkMode } from '../../context/DarkMode';

const AuthLayouts = (props) => {

    const { children, title, type } = props;
    const { isDarkMode, setIsDarkMode } = useContext(DarkMode)

    return (
        <div className={`flex justify-center min-h-screen items-center ${isDarkMode && 'bg-slate-900'}`}>
            <div className="w-full max-w-xs">
                <button className='absolute top-2 right-2 bg-blue-600 p-2 text-white rounded' onClick={() => setIsDarkMode(!isDarkMode)}>
                    {isDarkMode ? 'Light' : 'Dark'}
                </button>
                <h1 className="text-3xl mb-2 font-bold text-blue-600">{title}</h1>
                <p className="font-medium text-slate-500 mb-8">
                    Welcome, please enter your details.
                </p>
                {children}

                {/* Navigation */}
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