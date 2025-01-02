import React from 'react';


function Navbar() {
  return (
    <nav className="navbar">
      {/* <div className="navbar-logo">
        <h2>AdminPanel</h2>
      </div> */}
      <div className="navbar-links">
        <ul>
          <li><a href="#dashboard">Dashboard</a></li>
          <li><a href="#users">Users</a></li>
          <li><a href="#settings">Settings</a></li>
        </ul>
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="navbar-profile">
        <img src="/public/images.jpg" alt="Profile" />
        <div className="profile-dropdown">
          <a href="#profile">Profile</a>
          <a href="#logout">Logout</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
