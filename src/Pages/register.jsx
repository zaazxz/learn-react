import React from 'react'
import AuthLayouts from '../components/Layouts/AuthLayouts'
import FormRegister from '../components/fragments/FormRegister'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
  return (
    <AuthLayouts title="Register">
      <FormRegister />
      <p className="mt-4 text-sm text-center">
        Already have an account? <Link to="/login" className="font-bold text-blue-600">Sign in</Link>
      </p>
    </AuthLayouts>
  )
}

export default RegisterPage