import React from 'react'
import {Link, NavLink} from 'react-router-dom';


const Navbar = () => {
  return(
    <nav className="nav-wrapper orange darken-3">
      <div className="container">
        <a href="#" className="brand-logo">ReactRouter</a>
        <ul className="right">
          <li><NavLink to="/">Anasayfa</NavLink></li>
          <li><NavLink to="/about">Hakımızda</NavLink></li>
          <li><NavLink to="/contact">İletişim</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;