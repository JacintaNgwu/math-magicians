import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <h1 className="navHead">Math Magicians</h1>
    <div className="list">
      <NavLink exact to="/" activeClassName="active" className="link">
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
