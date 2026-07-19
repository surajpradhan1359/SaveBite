import { createBrowserRouter, Outlet } from "react-router";
import { Body } from "./components/Body.jsx";
import { LoginPage } from "./Pages/LoginPage.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { Footer } from "./components/Footer.jsx";
<<<<<<< HEAD
import { BrowseByCategory } from "./Pages/BrowseByCategory.jsx";
=======
import { Finddeals } from "./components/Finddeals.jsx";
import { Signup } from "./Pages/Signup.jsx";
>>>>>>> 12da0fe1571dc6d9c0707bc3b534036260fddcbe

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
<<<<<<< HEAD
        { path: "", Component: BrowseByCategory}
        ]
},
{
 
}])
=======
        { path: 'find-deals', Component: Finddeals },
        { path: 'signup', Component: Signup }
    ]
}])

>>>>>>> 12da0fe1571dc6d9c0707bc3b534036260fddcbe
