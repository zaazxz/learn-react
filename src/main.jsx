import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import LoginPage from "./Pages/login.jsx";
import RegisterPage from "./Pages/register.jsx";
import NotFoundPage from "./Pages/notFound.jsx";
import ProductPage from "./Pages/products.jsx";
import ProfilePage from "./Pages/profile.jsx";
import DetailProductPage from "./Pages/detailProduct.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World!</div>,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/products",
    element: <ProductPage />
  },
  {
    path: "/profile",
    element: <ProfilePage />
  },
  {
    path: "/product/:id",
    element: <DetailProductPage />
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
