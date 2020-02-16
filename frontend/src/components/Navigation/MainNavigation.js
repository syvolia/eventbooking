import React from 'react';
import { NavLink } from 'react-router-dom';
import AuthContext from '../../context/auth-context';
import './MainNavigation.css';
import logo from "../../images/logo.png";

const mainNavigation = props => (
    <AuthContext.Consumer>
        {context => {
            return (
              <header className="main-navigation">
                <div className="main-navigation__logo">
                  <img src={logo} alt="Event" />
                </div>
                <nav className="main-navigation__items">
                  <ul>
                    {!context.token && (
                      <li>
                        <NavLink to="/auth">Authenticate</NavLink>
                      </li>
                    )}
                    <li>
                      <NavLink to="/events">Events</NavLink>
                    </li>
                    {context.token && (
                      <>
                        <li>
                          <NavLink to="/bookings">Bookings</NavLink>
                        </li>
                        <li>
                          <button onClick={context.logout}>Logout</button>
                        </li>
                      </>
                    )}
                  </ul>
                </nav>
              </header>
            );
        }}
    </AuthContext.Consumer>
);

export default mainNavigation;