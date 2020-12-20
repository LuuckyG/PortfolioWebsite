import React from 'react';
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="container">
        <div className="logo" href="/">
          <Link to="/">LOGO</Link>
        </div>
        
        <nav>
          <ul>
            <li className="first">
              <Link to="/about">About Me</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/tutorials">Tutorials</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li className="last header-misc">
              <Link to="/email">Email Me</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
