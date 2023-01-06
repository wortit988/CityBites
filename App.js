import React from "react";
import ReactDOM from "react-dom/client";

//React-Element
const title = (
    <h1 id="title" key="h5" className="heading">
        Namaste React!
    </h1>)

//React-Component - Functional Component

const HeaderComponent = () => {
    return (
        <div>
            {title}
            <h2>Namste Everyone using Functional Component</h2>
            <h3>This is a demo h3 tag</h3>
        </div>
    )
}

//creating root in React

const root = ReactDOM.createRoot(document.getElementById("root"));

//Rendering container using React

root.render(<HeaderComponent />);






