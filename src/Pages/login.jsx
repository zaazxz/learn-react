import React from "react";
import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormLogin from "../components/fragments/FormLogin";
import { Link } from "react-router-dom";

const LoginPage = (props) => {
  return (
    <AuthLayouts title="Login">
      <FormLogin />
      <p className="mt-4 text-sm text-center">
        Don't have an account? <Link to="/register" className="font-bold text-blue-600">Sign up</Link>
      </p>
    </AuthLayouts>
  );
};

export default LoginPage;
