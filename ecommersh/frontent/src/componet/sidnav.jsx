import React from 'react';
import {  NavLink } from 'react-router-dom';


function Sidnav() {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <h2>AdminPanel</h2>
      </div>
      <ul className="sidebar-menu">
        <li>
          <a href="#dashboard">
            <span className="icon">🏠</span>
            {/* <span className="text">Dashboard</span> */}
            <NavLink className="text"  to="/dashbord">Dashboard</NavLink>
          </a>
        </li>
        <li>
          <a href="#users">
            <span className="icon">👤</span>
            {/* <span className="text">Form</span> */}
            <NavLink className="text"  to="/admin">Form</NavLink>
          </a>
        </li>
        <li>
          <a href="#analytics">
            <span className="icon">📊</span>
            {/* <span className="text">Product</span> */}
            <NavLink className="text" to="/product">Product</NavLink>
          </a>
        </li>
        <li className="submenu">
          <a href="#settings">
            <span className="icon">⚙️</span>
            <span className="text">Settings</span>
          </a>
          <ul className="submenu-items">
    
            <li><a href="#app-settings">App Settings</a></li>
          </ul>
        </li>
        <li>
          <a href="#logout">
            <span className="icon">🚪</span>
            <span className="text">Logout</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidnav;
