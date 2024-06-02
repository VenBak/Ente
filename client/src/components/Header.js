import React, {useState, useEffect} from 'react';

import logo from '../assets/duck.gif';
import staticlogo from '../assets/duck_static.png'

const Header = () => {
    const [currentImage, setCurrentImage] = useState(staticlogo);

    const handleClick = () => {
        setCurrentImage(logo);
        setTimeout(() => {
            setCurrentImage(staticlogo);
        }, 2000);
    };

    return (
    <header className="App-header">
        <img src={currentImage} alt="Duck" onClick={handleClick}/>
        {/* <button>
            Login
        </button>    */}
    </header>
    );
};

export default Header;