import React from "react";
import { Link, NavLink } from "react-router-dom";
import HeadOnLineStor from "../components/HeadOnLineStor";
import App from "../App";


const HeaderOnLinestor = () => {

  return (
  
      <div>
        <HeadOnLineStor />
        <header className="myheader" id="header">
          <Link className="mywebsite" to="/OnlineStore">
            <h1 id="website">online Store👔🕶👗🥾</h1>
          </Link>
          <nav>
            <ul className="parent">
              <li>
                <NavLink to="/Glasses">Glasses</NavLink>
              </li>
              <li>
                <NavLink to="/Clothes">Clothes</NavLink>
              </li>
              <li>
                <NavLink to="/FootWears">Foot Wears</NavLink>
              </li>
              <li>
                <NavLink to="/LotOfBags">Lot Of Bags</NavLink>
              </li>
              <li>
                <NavLink to="/ContactUs">Contact Us</NavLink>
              </li>

              <li id="changecolor">
                change color
                <ul id="hiddenul">
                  <li id="headerbg">Header BG</li>
                  <li id="titlebg">Title BG</li>
                  <li id="titlecolor">Title color</li>
                  <li id="sectionbg">section BG</li>
                </ul>
              </li>
            </ul>
          </nav>
        </header>
      </div>
  
  );
};

export default HeaderOnLinestor;
