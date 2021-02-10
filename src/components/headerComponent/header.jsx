import React from 'react';
import { Link } from "react-router-dom";
import NavBar from '../navbarComponent/navbar'


class Header extends React.Component {
  
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return <header>
      <div className="container">
        <img className="bg"></img>
        <div className="logo" href="/">
          <Link to="/">Luuk Geelen</Link>
        </div>
        {/* className='collapse navbar-collapse navbar-right */}
        <NavBar />
      </div>
    </header>
  }
}

export default Header;
