import { createBrowserRouter, Outlet } from "react-router";
import { Body } from "./components/Body.jsx";
import { LoginPage } from "./Pages/LoginPage.jsx";
import { Navbar } from "./components/Navbar.jsx";

const Mainroute = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    )
}


export const router = createBrowserRouter([{
    path: '/',
    element: <Mainroute />,
    children: [
        { index: true, Component: Body },
        { path: "login", Component: LoginPage }]
}])