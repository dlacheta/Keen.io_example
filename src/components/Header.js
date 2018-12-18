import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <React.Fragment>
    <nav className="navbar">
      <div className="navbar-brand" to="/">
        Keen.io use example
      </div>
      <Link to="/dashboard">Dashboard</Link>
    </nav>
    <div className="btn-group" role="group">
      <Link to="/">
        <button type="button" className="btn btn-info">
          Home
        </button>
      </Link>
      <Link to="/info">
        <button type="button" className="btn btn-info">
          Info
        </button>
      </Link>
      <Link to="/about">
        <button type="button" className="btn btn-info">
          About
        </button>
      </Link>
      <Link to="/pricing">
        <button type="button" className="btn btn-info">
          Pricing
        </button>
      </Link>
      <Link to="/company">
        <button type="button" className="btn btn-info">
          Company
        </button>
      </Link>
      <Link to="/documentation">
        <button type="button" className="btn btn-info">
          Documentation
        </button>
      </Link>
      <Link to="/contact">
        <button type="button" className="btn btn-info">
          Contact
        </button>
      </Link>
    </div>
  </React.Fragment>
);

export default Header;
