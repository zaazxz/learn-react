import React from 'react'
import { useRouteError } from 'react-router'

const ErrorPage = () => {
    const error = useRouteError()

    return (
        <div id="error-page" className='flex flex-col justify-center items-center h-screen'>
            <h1 className='text-3xl font-bold'>Oops!</h1>
            <p className='my-5 text-xl'>Sorry, an unexpected error has occurred.</p>
            <p className='text-lg'>{error.statusText || error.message}</p>
        </div>
    )
}

export default ErrorPage