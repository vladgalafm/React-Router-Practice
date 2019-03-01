import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

const Navigation = () => {
  return (
    <header className="navigation">
      <nav>
        <ul className="navigation__ul">
          <li className="navigation__li">
            <NavLink className="navigation__link" to={process.env.PUBLIC_URL + '/'} exact>
              Home
            </NavLink>
          </li>
          <li className="navigation__li">
            <NavLink className="navigation__link" to={process.env.PUBLIC_URL + '/contacts'}>
              Contacts
            </NavLink>
          </li>
          <li className="navigation__li">
            <NavLink className="navigation__link" to={process.env.PUBLIC_URL + '/users'}>
              Users
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;