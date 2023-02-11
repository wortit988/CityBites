import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import {IMG_CDN_URL, restaurantList} from "./Constants";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Error from "./components/Error";
import RestaurantDetails from "./components/RestaurantDetails";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";


const AppLayout = () => {
    return(
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
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
                element: <About />
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
        ],
    },
]);

//creating root in React

const root = ReactDOM.createRoot(document.getElementById("root"));

//Rendering container using React

root.render(<RouterProvider router={appRouter}/>);






