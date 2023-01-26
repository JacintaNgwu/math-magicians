import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/Navigation.css';

const Navigation = () => (
  <nav>
    <h1 className="navHead">Math Magicians</h1>
    <div className="list">
      <NavLink exact="true" to="/" activeClassName="active" className="link">
        Home
      </NavLink>
      <span className="vr" />
      <NavLink to="/calculator" activeClassName="active" className="link">
        Calculator
      </NavLink>
      <span className="vr" />
      <NavLink to="/quote" activeClassName="active" className="link">
        Quotes
      </NavLink>
    </div>
  </nav>
);
export default Navigation;
