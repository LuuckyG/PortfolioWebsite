import React from 'react';
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  
    constructor() {
        super();
        this.state = {};
    }
      
    render() {
        return ( 
            <nav >
                <ul>
                    <li className="first">
                        <Link to="/about">About Me</Link>
                    </li>
                    <li>
                        <Link to="/blogs">Blogs</Link>
                    </li>
                    <li>
                        <Link to="/courses">Courses</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li className="last header-misc">
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        )}
}

export default NavBar;