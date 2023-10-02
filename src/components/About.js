import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";
import React from "react";
import UserContext from "../utils/userContext";

class About extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <h2>About Us!</h2>
                <UserContext.Consumer>
                    {({ user })=> <h1 className="font-bold text-xl p-10">{user.name} - {user.email}</h1> }
                </UserContext.Consumer>
                <Profile />
                <ProfileClass />
            </div>
        )
    }
}
export default About;