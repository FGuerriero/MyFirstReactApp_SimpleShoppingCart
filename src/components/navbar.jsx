import React, { Component } from 'react';

const Navbar = (props) => {
    return ( 
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                Cart Items: <span className="badge badge-pill m-2 badge-secondary"> { props.totalItems } </span>
            </a>
        </nav>
     );
}
 
export default Navbar;