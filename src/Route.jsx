import { createBrowserRouter, Outlet } from "react-router";
import { Body } from "./components/Body.jsx";
import { LoginPage } from "./Pages/LoginPage.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { Footer } from "./components/Footer.jsx";
import { Finddeals } from "./components/Finddeals.jsx";

const Mainroute = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

// /,/find-deals,/how-it-works,/for-partners,/login

export const router = createBrowserRouter([{
    path: '/',
    element: <Mainroute />,
    children: [
        { index: true, Component: Body },
        { path: "login", Component: LoginPage },
        { path: 'find-deals', Component: Finddeals },]
}])

