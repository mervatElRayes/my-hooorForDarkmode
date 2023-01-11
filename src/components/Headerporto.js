import React from 'react';
import { Link, NavLink  } from "react-router-dom";
import HeadPortofilio from './headPortofilio';

const Header = () => {
  return (
    <div>
      <HeadPortofilio />
        <header>
      <nav>
        <Link to='/' className="navbar-brand">
          <p>
            Shick<span className="span">00</span>
          </p>
        </Link>
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink to="/home" className="nav-link active" data-scroll="home">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/about"
              className="nav-link"
              id="skin-color"
              data-scroll="about"
            >
              About
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/what-i-do"
              className="nav-link"
              id="skin-color"
              data-scroll="what-i-do"
            >
              What I Do
            </NavLink>
          </li>


          <li className="nav-item">
            <NavLink
              to="/skills"
              className="nav-link"
              id="skin-color"
              data-scroll="skills"
            >
              Skills
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/mycv"
              className="nav-link"
              id="skin-color"
              data-scroll="skills"
            >
              my CV
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/clientSpeak"
              className="nav-link"
              id="skin-color"
              data-scroll="clientSpeak"
            >
              Client Speak
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/contact"
              className="nav-link"
              id="skin-color"
              data-scroll="contact"
            >
              Contact Me
            </NavLink>
          </li>
          <li className="cantactIcon-i">
            <NavLink to='www'>
              <i
                className="skin-color text-center icon-twitter nav-link"
                aria-hidden="true"
                title="twitter"
              />
            </NavLink>
            <NavLink to='www'>
              <i
                className="skin-color text-center icon-github nav-link"
                aria-hidden="true"
                title="github"
              />
            </NavLink>
            <NavLink to='www'>
              <i
                className="skin-color text-center icon-instagram1 nav-link"
                aria-hidden="true"
                title="instagram"
              />
            </NavLink>
            <NavLink to='www'>
              <i
                className="skin-color text-center icon-facebook-square nav-link"
                aria-hidden="true"
                title="facebook"
              />
            </NavLink>
            <NavLink to='www'>
              <i
                className="skin-color text-center icon-dribbble nav-link"
                aria-hidden="true"
                title="dribbble"
              />
            </NavLink>
          </li>
        </ul>
        {/* start hamburger*/}
        <div className="menu-btn">
          <div className="menu-btn_burger" />
        </div>
        {/* End hamburger*/}
      </nav>
    </header>
    </div>
  );
}

export default Header;
