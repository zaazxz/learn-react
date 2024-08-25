import React from "react";
import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormLogin from "../components/fragments/FormLogin";

const LoginPage = (props) => {
  return (
    <AuthLayouts title="Login">
      <FormLogin />
    </AuthLayouts>
  );
};

export default LoginPage;
