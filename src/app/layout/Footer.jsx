import React from 'react';

const Footer = () => (
  <footer className="container footer">
    <div className="footer-placeholder"></div>
    <div className="footer-socials">
      <ul>
        <li>
          <a className="navbar-item" href="/contact">
            <span className="icon has-text-dark">
              <i className="fa-lg fas fa-envelope"></i>
            </span>
          </a>
        </li>
        <li>
          <a className="navbar-item" href="https://medium.com/@lhc.geelen">
            <span className="icon has-text-dark">
              <i className="fab fa-lg fa-medium"></i>
            </span>
          </a>
        </li>
        <li>
          <a className="navbar-item" href="https://github.com/LuuckyG">
            <span className="icon has-text-dark">
              <i className="fab fa-lg fa-github"></i>
            </span>
          </a>
        </li>
        <li>
          <a className="navbar-item" href="https://www.linkedin.com/in/luuk-geelen-184806a9/" style={{ marginRight: 5 }}>
            <span className="icon has-text-dark"> 
              <i className="fab fa-lg fa-linkedin"></i>
            </span>
          </a>
        </li>
      </ul>
    </div>
    <p className="footer-copyright"><small> Copyright © Luuk Geelen 2021 </small></p>
  </footer>
)

export default Footer
