import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <header id="header-v1" className="navbar-wrapper inner-navbar-wrapper">
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-default">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="navbar-header">
                                    <div className="navbar-brand">
                                        <h1>
                                            <Link to="/">
                                                MY READ
                                            </Link>
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-9">
                                <div className="header-topbar hidden-sm hidden-xs">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="topbar-info">
                                                <a href="tel:+61-3-8376-6284"><i className="fa fa-phone"></i>+61-3-8376-6284</a>
                                                <span>/</span>
                                                <a href="mailto:support@libraria.com"><i className="fa fa-envelope"></i>support@libraria.com</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="navbar-collapse hidden-sm hidden-xs">
                                    <ul className="nav navbar-nav">
                                        <li className="dropdown active">
                                            <Link to="/">HOME</Link>
                                        </li>
                                        <li className="dropdown">
                                            <Link to="/currently-reading">Currently Reading</Link>
                                        </li>
                                        <li className="dropdown">
                                            <Link to="/wanted-to-read">Want To Read</Link>
                                        </li>
                                        <li className="dropdown">
                                            <Link to="/read">Read</Link>
                                        </li>
                                        <li className="dropdown">
                                            <Link to="/search">Search Library</Link>
                                        </li>
                                        <li>
                                            <Link to="/contact">Contact</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
        
            
    )
}

export default Header;