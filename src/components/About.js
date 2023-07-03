import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";
import React from "react";

class About extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <h2>About Us!</h2>
                <Profile />
                <ProfileClass />
            </div>
        )
    }
}
export default About;