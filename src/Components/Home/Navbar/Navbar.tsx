import React from 'react';
import '../Navbar/Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='navbar'>
      <ul className='navbar-list'>
        <li className='navbar-item'>
          <Link to={"/"} className='navbar-link'>
            All-Dishes
          </Link>
        </li>
        <li className='navbar-item'>
          <Link to={"addnew"} className='navbar-link'>
            Add-new
          </Link>
        </li>
        <li className='navbar-item'>
          <Link to={"update"} className='navbar-link'>
            Update-dishes
          
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
