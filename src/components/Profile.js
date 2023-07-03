import React from "react";
import { useEffect } from "react";



const Profile = () => {

    useEffect(() => {
        // API Call
        const timer = setInterval(() => {
          console.log("Timer from FB Component ");
        }, 1000);
        console.log("useEffect");
        return () => {
          clearInterval(timer);
          console.log("useEffect Return");
        };
      }, []);


    return (
        <div>
        <h2>Profile Section</h2></div>
    )
}



export default Profile;