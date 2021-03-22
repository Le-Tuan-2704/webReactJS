import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router';
import { BrowserRouter, Link } from 'react-router-dom';

NavbarContent.propTypes = {

};

function NavbarContent(props) {
    return (
        <div>
            <nav class="navbar bg-dark navbar-dark">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <Link className="nav-link" to='/'>Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link" to='/Product'>Product</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link" to='/Author'>Author</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link" to='/Introduce'>Introduce</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link" to='/Contact'>Contact</Link>
                    </li>

                </ul>

            </nav>
        </div>
    );
}

export default NavbarContent;