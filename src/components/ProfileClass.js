import React from "react";

class ProfileClass extends React.Component {
    constructor(props){
        super(props);
        //create State
        this.state = 
        {
            userInfo : {
                name : "Wortit",
                location : "India"
            },
        }
    }

    componentDidMount(){
        this.timer = setInterval(() => {
            console.log("Time Interval of 1 Second!")
    }, 1000);
        console.log("componentDidMount");
    }

    componentDidUpdate(){
        if (this.state.count !== prevState.count) {
            //
          }
          if (this.state.count2 !== prevState.count2) {
            // code
          }
        console.log("componentDidUpdate");
    }

    componentWillUnmount(){
        clearInterval(this.timer);
        console.log("componentWillUnmount");
    }

    render(){
        return (<div>
                    <h1>Profile Class Section!</h1>
                    <h2>Name : {this.state.userInfo.name}</h2>
                    <h2>Location : {this.state.userInfo.location}</h2>
               </div>)
    }
}

export default ProfileClass;