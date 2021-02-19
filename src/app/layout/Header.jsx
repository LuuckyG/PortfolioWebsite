import React from 'react';
import { NavLink } from "react-router-dom";


class Header extends React.Component {
  
  constructor() {
    super();
    this.state = {
      isActive: false,
    };
  }

  toggleNav = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }))
  }

  render() {
    return (
      <nav className="navbar is-transparant"
          aria-label="main navigation"
          // style={{
          //   // borderBottom: 'solid 1px #dddddd',
          // }}
          >
        <div className="container">
          <div className="navbar-brand logo">
            <NavLink
                className='navbar-item'
                to="/"
              >
              <span><b className="logo">Luuk Geelen</b></span>
            </NavLink>
            <button className="button navbar-burger" onClick={this.toggleNav} >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        <div className={ this.state.isActive ? 'navbar-menu is-active' : 'navbar-menu'}>
          <div className="navbar-start">
              <NavLink
                className="navbar-item"
                to="/about"
                activeClassName="is-active"
              >
                <span className="icon has-text-primary" style={{ marginRight: 5 }}>
                  <i className="fas fa-user-circle"></i>
                </span>
                About Me
              </NavLink>
              <NavLink
                className="navbar-item"
                to="/blog"
                activeClassName="is-active"
              >
                <span className="icon has-text-primary" style={{ marginRight: 5 }}>
                <i className="fas fa-code"></i>
                </span>
                Code Blog
              </NavLink>
              <NavLink
                className="navbar-item"
                to="/projects"
                activeClassName="is-active"
              >
                <span className="icon has-text-primary" style={{ marginRight: 5 }}>
                <i className="fas fa-chart-line"></i>
                </span>
                Projects
              </NavLink>
            <div className="navbar-item has-dropdown is-hoverable">
              <NavLink
                  className="navbar-item"
                  to="/courses"
                  activeClassName="is-active"
                >
                  <span className="icon has-text-primary" style={{ marginRight: 5 }}>
                    <i className="fas fa-book"></i>
                  </span>
                  Courses <span className="icon has-text-primary">
                    <i className="fas fa-sort-down" style={{ marginLeft: 3 }}></i>
                  </span>
              </NavLink>
              <div className="navbar-dropdown">
                <NavLink
                  className="navbar-item"
                  to="/courses/python"
                  activeClassName="is-active"
                >
                  <span className="icon has-text-link" style={{ marginRight: 5 }}>
                    <i className="fab fa-python"></i></span> 
                    Python
                </NavLink>
              </div>
            </div>
          </div>
          <div className="navbar-end">
            <NavLink
              className="navbar-item"
              to="/contact"
              activeClassName="is-active"
            >
              <span className="icon has-text-primary">
              <i className="fa-lg fas fa-envelope"></i>
              </span>
            </NavLink>
            <a className="navbar-item" href="https://medium.com/@lhc.geelen">
              <span className="icon has-text-primary">
              <i className="fab fa-lg fa-medium"></i>
              </span>
            </a>
            <a className="navbar-item" href="https://github.com/LuuckyG">
              <span className="icon">
                <i className="fab fa-lg fa-github"></i>
              </span>
            </a>
            <a className="navbar-item" href="https://www.linkedin.com/in/luuk-geelen-184806a9/" style={{ marginRight: 5 }}>
              <span className="icon" style={{ color: '#0077B5' }}>
                <i className="fab fa-lg fa-linkedin"></i>
              </span>
            </a>
          </div>
        </div>
        </div>
      </nav>
    )
  }
}

export default Header;
