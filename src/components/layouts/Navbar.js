import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand text-warning" href="#">mPharma</a>
            <button
                type="button"
                aria-expanded="false"
                data-toggle="collapse"
                className="navbar-toggler"
                aria-label="Toggle navigation"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/products">Products <span className="sr-only">(current)</span></NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
