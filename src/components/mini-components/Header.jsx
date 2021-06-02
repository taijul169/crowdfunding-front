import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png'

const Header = () => {
    return (
        <div className="header-section">
            <header>
              <div className="container">
                  <div className="row">
                      <div className="col-md-4 col-sm-4 col-lg-4 col-4">
                          <div className="brand-logo-wrap">
                              <NavLink to="/"><img className="img-fluid" src={logo} alt="logo.png" /></NavLink>
                          </div>
                      </div>
                      <div className="col-md-8 col-sm-8 col-lg-8 col-8">
                          <div className="navigation h-100 d-flex align-items-center">
                              <nav>
                                  <ul>
                                      <li><NavLink to="/signin">Login</NavLink></li>
                                      <li><NavLink to="/signup">Register</NavLink></li>
                                      
                                  </ul>
                              </nav>
                          </div>
                      </div>
                  </div>
              </div>
            </header>
        </div>
    )
}

export default Header
