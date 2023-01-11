import React from "react";
import { Link, NavLink } from "react-router-dom";
import HeadSipec from "./HeadSipec";

const HeaderSipec = () => {
  return (
    <div>
      <HeadSipec />
      <header className="hide-when-mobile">
        <h1 className="spiceKing">
          <img src="imgSipec/mint.jfif" width={44} height={44} alt="mints" />

          <Link to="/">
            <span>Spice King</span>
          </Link>
        </h1>
        <ul id="navbarr" className="flex">
          <li className="main-list">
            <NavLink className="main-link" to="www" data-scroll="home">
              Home
            </NavLink>
          </li>
          <li className="main-list">
            <NavLink className="main-link" to="www" data-scroll="about-us">
              About Us
            </NavLink>
          </li>
          <li className="main-list">
            <NavLink className="main-link" to="www" data-scroll="services">
              Services
            </NavLink>
          </li>
          <li className="main-list">
            <NavLink className="main-link" to="www" data-scroll="products">
              Products
            </NavLink>
          </li>
          <li className="main-list">
            <NavLink className="main-link" to="www" data-scroll="recently">
              Recently
            </NavLink>
          </li>
          <li className="main-list">
            <NavLink className="main-link" to="www" data-scroll="others">
              Others
            </NavLink>
          </li>
          <li className="main-list">
            <NavLink className="main-link" to="www" data-scroll="contact-us">
              Contact Us
            </NavLink>
          </li>
        </ul>
      </header>
      <header className="show-when-mobile">
        <h1 className="spiceKing">
          <img src="imgSipec/mint.jfif" width={44} height={44} alt="mint" />
        
          <Link to="/">
            <span>Spice King</span>
          </Link>
        </h1>
        <label className="absolute" htmlFor="burger">
          <i className="fa fa-bars" />
        </label>
        <input id="burger" type="checkbox" />
        <div className="show-on-click">
          <div className="main-div">
            <label htmlFor="html">Home</label>
            <input id="html" type="checkbox" />
          </div>
          <div className="main-div">
            <label htmlFor="css">About Us</label>
            <input id="css" type="checkbox" />
          </div>
          <div className="main-div">
            <label htmlFor="js">Services</label>
            <input id="js" type="checkbox" />
          </div>
          <div className="main-div">
            <label htmlFor="js">Products</label>
            <input id="js" type="checkbox" />
          </div>
          <div className="main-div">
            <label htmlFor="js">Recently</label>
            <input id="js" type="checkbox" />
          </div>
          <div className="main-div">
            <label htmlFor="js">Others</label>
            <input id="js" type="checkbox" />
          </div>
          <div className="main-div">
            <label htmlFor="js">Contact Us</label>
            <input id="js" type="checkbox" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default HeaderSipec;
