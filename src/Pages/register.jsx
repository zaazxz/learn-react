import React from 'react'
import AuthLayouts from '../components/Layouts/AuthLayouts'
import FormRegister from '../components/fragments/FormRegister'

const RegisterPage = () => {
  return (
    <AuthLayouts title="Register">
      <FormRegister />
    </AuthLayouts>
  )
}

export default RegisterPage