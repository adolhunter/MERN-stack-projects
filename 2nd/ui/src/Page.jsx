import React from 'react';
import { NavLink } from 'react-router-dom';
import Contents from './Contents.jsx';

function NavBar() {
  return (
    <nav>
      <NavLink exact to="/">
        Home
      </NavLink>
      {' | '}
      <NavLink to="/issues">Issues</NavLink>
      {' | '}
      <NavLink exact to="/report">
        Report
      </NavLink>
    </nav>
  );
}

export default function page() {
  return (
    <div>
      <NavBar />
      <Contents />
    </div>
  );
}
