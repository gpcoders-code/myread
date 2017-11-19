import React from 'react';
import { NavLink, Link } from 'react-router-dom';

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
                                                <a href="#"><i className="fa fa-phone"></i>+91-12345-67890</a>
                                                <span>/</span>
                                                <a href="mailto:support@libraria.com"><i className="fa fa-envelope"></i>pardipbhatti@gpcoders.com</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="navbar-collapse hidden-sm hidden-xs">
                                    <ul className="nav navbar-nav">
                                        <li activeClassName="active">
                                            <NavLink to="/currently-reading" >Currently Reading</NavLink>
                                        </li>
                                        <li activeClassName="active">
                                            <NavLink to="/wanted-to-read" >Want To Read</NavLink>
                                        </li>
                                        <li activeClassName="active">
                                            <NavLink to="/read" >Read</NavLink>
                                        </li>
                                        <li activeClassName="active">
                                            <NavLink to="/search" >Search Library</NavLink>
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