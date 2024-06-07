import React, {useState, useEffect} from 'react';

import logo from '../assets/duck.gif';
import staticlogo from '../assets/duck_static.png';
import {Button} from 'react-bootstrap';
import Auth from '../utils/auth';

const Header = () => {
    const [currentImage, setCurrentImage] = useState(staticlogo);

    const handleClick = async () => {
        setCurrentImage(logo);
        await new Promise(resolve => setTimeout(resolve, 1000));
        setCurrentImage(staticlogo);
        window.location.assign("/");
    };

    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
        window.location.assign('/');
    };

    const routechangerules = () => {
        window.location.assign("/rules")
    };
    const routechangelogin = () => {
        window.location.assign("/login")
    };
    const routechangesignup = () => {
        window.location.assign("/signup")
    };

    return (
    
        
    <header className="App-header">
        <img src={currentImage} alt="Duck" onClick={handleClick} className="logo"/>
        <div>Ente</div>
        <div className='button-group'>
                <div>{Auth.loggedIn() ? (
                    <div className='button-layout'>
                        <Button className="nav-button d-flex justify-content-center align-items-center" onClick={routechangerules}>
                        Rules
                        </Button>
                        <Button className="nav-button d-flex justify-content-center align-items-center" onClick={logout}>
                        Logout
                        </Button>
                    </div>
                ): (
                <div className='button-layout'>  
                    <Button className="nav-button d-flex justify-content-center align-items-center" onClick={routechangerules}>
                    Rules
                    </Button>
                    <Button onClick={routechangelogin}>
                        Login
                    </Button>
                    <Button onClick={routechangesignup}>
                        Signup
                    </Button>
                </div>
                )}
                </div>
        </div>
    </header>
    );
};

export default Header;