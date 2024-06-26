import React from 'react'
import FormRegister from '../components/Fragments/FormRegister'
import AuthLayout from '../components/Layouts/AuthLayout'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
  return (
    <AuthLayout title="Register">
        <FormRegister />
        <p className='text-slate-500 mt-3'>
          Already have an account? <Link to="/login" className='text-blue-600 underline'>Login</Link>
        </p>
    </AuthLayout>
  )
}

export default RegisterPage