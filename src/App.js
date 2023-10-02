import React, {lazy, Suspense, useState} from "react";
import ReactDOM from "react-dom/client";
import {IMG_CDN_URL, restaurantList} from "./Constants";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Error from "./components/Error";
import Profile from "./components/Profile";
import RestaurantDetails from "./components/RestaurantDetails";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/userContext";
import { Provider } from "react-redux";
import store from "./utils/store";

const Citymart = lazy(() => import ("./components/Citymart"));
const About = lazy(() =>  import ("./components/About"));
const AppLayout = () => {
    const [user, setUser] = useState({
        name: "Wortit",
        email: "wortit@gmail.com",
      });

    return(
        <div className="relative min-h-screen">
            <Provider store = {store}>
                <UserContext.Provider
                    value={{
                        user: user,
                        setUser: setUser,
                    }}>
                    <Header />
                    <Outlet />
                    <Footer />
                </UserContext.Provider>
            </Provider>
        </div>
    )
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <Suspense fallback={<h1>Loading...</h1>}><About /></Suspense>,
                children: [
                    {
                        path: "profile",
                        element: <Profile />
                    },]
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/restaurant/:id",
                element: <RestaurantDetails />
            },
            {
                path: "/citymart",
                element: <Suspense fallback={<Shimmer />}><Citymart /></Suspense>
            },
        ],
    },
]);

//creating root in React

const root = ReactDOM.createRoot(document.getElementById("root"));

//Rendering container using React

root.render(<RouterProvider router={appRouter}/>);






