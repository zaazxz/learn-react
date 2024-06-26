import React from 'react'
import AuthLayout from '../components/Layouts/AuthLayout'
import FormLogin from '../components/Fragments/FormLogin'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  return (
    <AuthLayout title="Login">
        <FormLogin />
        <p className='text-slate-500 mt-3'>
          Don't have an account? <Link to="/register" className='text-blue-600 underline'>Register</Link>
        </p>
    </AuthLayout>
  )
}

export default LoginPage