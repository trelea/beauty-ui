import { Index } from "@/pages/index";
import { Login } from "@/pages/login/login";
import { Register } from "@/pages/register/register";

import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    { path: "/", element: <Index /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
]);
