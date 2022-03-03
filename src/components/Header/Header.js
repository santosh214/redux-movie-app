import React from 'react';
import { Link } from 'react-router-dom';
import User from '../../images/user.jpg'
import './Header.scss'
const Header = () => {
    return (

        <div className="header">
            <Link to="/">
            <div className="logo">
                Movie App
            </div>
            </Link>
            <div className="user-image">

                <img src={User} alt="img"  />
            </div>
        </div>
    );
};

export default Header;