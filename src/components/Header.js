import Logo from "../assets/imgs/Logo.jpg"
import {Link} from "react-router-dom";
import { useState } from "react";
import useOnline from "../utils/useOnline";

const Title = () =>{
    return (
        <a href="/">
            <img className="h-28 p-2 rounded-full"
             alt="logo" 
             src={Logo} />
        </a>)
    }



const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const isOnline = useOnline();
    return (
        <div className="flex justify-between bg-pink-50 shadow-lg">
            <Title />
            <div className="">
                <ul className="flex py-10 gap-x-4">
                    <li className="px-5 font-extrabold text-xl">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-5 font-extrabold text-xl">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="px-5 font-extrabold text-xl">
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className="px-5 font-extrabold text-xl">
                        <Link to="/cart">Cart</Link>
                    </li>
                    <li className="px-5 font-extrabold text-xl">
                        <Link to="/citymart">Citymart</Link>
                    </li>
                </ul>
            </div>
            <div>
            {isOnline ? (<h1 className="bg-green-400 rounded-full w-6 h-6 justify-center pl-2 pt-1">*</h1>) : (<h1 className="bg-red-400 rounded-full w-6 h-6 justify-center pl-2">!</h1>)

            }
            </div>
            <div className="py-10 m-2">
            {isLoggedIn ? (
        <button className="bg-red-400 rounded-lg w-20 font-extrabold text-xl" onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button className="bg-green-400 rounded-lg w-20 font-extrabold text-xl" onClick={() => setIsLoggedIn(true)}> Login </button>
      )}</div>
        </div>
    ) 
};

export default Header;