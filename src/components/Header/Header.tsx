import { Link } from 'react-router-dom';
import React from 'react';
import logo from '../../assets/img/logo.png';

const Header = () => {
    return (
        <header>
            <div className="wrapper">
                <div className="header">
                    <div className="header__logo">
                        <Link to="/">
                            <img className="logo" src={logo} alt="" />
                        </Link>
                    </div>
                    <nav className="nav">
                        <Link to="/">
                            <div className="nav__item">home</div>
                        </Link>
                        <Link to="/location">
                            <div className="nav__item">hours & location</div>
                        </Link>
                        <Link to="/menu">
                            <div className="nav__item">our beer</div>
                        </Link>
                        <Link to="/cart">
                            <div className="nav__item">cart</div>
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
