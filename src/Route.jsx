import { createBrowserRouter, Outlet } from "react-router";
import { Body } from "./components/Body.jsx";
import { LoginPage } from "./Pages/LoginPage.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { Footer } from "./components/Footer.jsx";
import { Finddeals } from "./components/Finddeals.jsx";
import { Signup } from "./Pages/Signup.jsx";
import { Deals } from "./Pages/Deals.jsx";
import { ForPartners } from "./Pages/ForPrtner.jsx";
import { HowItWorks } from "./Pages/HowItWork.jsx";
import { Dish } from "./Pages/Dish.jsx";

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
        { path: 'find-deals', Component: Finddeals },
        { path: 'signup', Component: Signup },
        { path: 'deal', Component:Deals },
        { path: 'how_it_works', Component: HowItWorks },
        { path: 'for_partners', Component: ForPartners },
        {path:'deals/:restaurant_name/:dish_name',Component:Dish}
    ]
}])

