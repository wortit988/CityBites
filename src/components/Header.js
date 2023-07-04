import Logo from "../assets/imgs/Logo.jpg"
import {Link} from "react-router-dom";
import { useState } from "react";
import useOnline from "../utils/useOnline";

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
    const isOnline = useOnline();
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
                    <li>
                        <Link to="/citymart">Citymart</Link>
                    </li>
                </ul>
            </div>
            <h1>{isOnline?"Online":"Offline"}</h1>
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