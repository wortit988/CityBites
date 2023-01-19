const Title = () =>{
    return (
        <a href="/">
            <img className="logo"
             alt="logo" 
             src="https://i.pinimg.com/564x/d8/4b/dd/d84bdd461f90e48f481ccb20baedde12.jpg" />
        </a>)
    }

const Header = () => {
    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    ) 
};

export default Header;