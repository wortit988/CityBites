import React from "react";
import ReactDOM from "react-dom/client";
import {IMG_CDN_URL, restaurantList} from "./Constants";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer"


const AppLayout = () => {
    return(
        <>
            <Header />
            <Body />
            <Footer />
        </>
    )
};

//creating root in React

const root = ReactDOM.createRoot(document.getElementById("root"));

//Rendering container using React

root.render(<AppLayout />);






