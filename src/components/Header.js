import Logo from "../assets/imgs/Logo.jpg"
import {Link} from "react-router-dom";
import { useState } from "react";

const Title = () =>{
    return (
        <a href="/">
            <img className="logo"
             alt="logo" 
             src={Logo} />
        </a>)
    }



const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/cart">Cart</Link>
                    </li>
                </ul>
            </div>
            <div className="login-btn">
            {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}</div>
        </div>
    ) 
};

export default Header;