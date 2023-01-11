import React from "react";
import Head from './head';
import { Link } from "react-router-dom";
// Organize Dark Mode
import {useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Header = () => {
  const {theme, toggleTheme} = useContext(ThemeContext);
  return (
    <>
    <Head />
      <header className="profile container">
        <span onClick={() => {
          toggleTheme(theme === "Light"? "Dark" : "Light")
        }} className="darkBtn">{theme}</span>
        <div className="profile--container grid">
          <div className="profile--data">
            <div className="profile--border">
              <div className="profile--perfil">
                
                <Link to="/"><img src="img/67.jpg" alt="" /></Link>
              </div>
            </div>
            <h2 className="profile--name">Mervat Mohamed</h2>
            <h3 className="profile--profession">Frontend developer</h3>
            <ul className="profile--social">
              <li>
                <a
                  href="https://twitter.com/home"
                
                  rel="noopener"
                  className="profile--social-link"
                  title="twitter"
                >
                  <i className="ri-twitter-fill" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/mynetwork/discover-hub/"
              
                  rel="noopener"
                  className="profile--social-link"
                  title="linkdin"
                >
                  <i className="ri-linkedin-box-line" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/"
              
                  rel="noopener"
                  className="profile--social-link"
                  title="github"
                >
                  <i className="ri-github-line" />
                </a>
              </li>
            </ul>
          </div>
          <div className="profile--info grid">
            <div className="profile--info-group">
              <h3 className="profile-info-number">7</h3>
              <p className="profile-info-description">
                Years of
                <br />
                Work
              </p>
            </div>
            <div className="profile--info-group">
              <h3 className="profile-info-number">+124</h3>
              <p className="profile-info-description">
                Complete
                <br />
                Projects
              </p>
            </div>
            <div className="profile--info-group">
              <h3 className="profile-info-number">90</h3>
              <p className="profile-info-description">
                Satisfied
                <br />
                Customers
              </p>
            </div>
          </div>
          <div className="profile--buttons">
            <a href="./pdf/cv .docx" className="button">
              Download CV
              <i className="ri-download-line" />
            </a>
            <div className="profile--buttons-small">
              <a
                href="https://web.whatsapp.com/send?phone01006781684"
                className="button button--small button--gray"
                title="whatsapp"
              >
                <i className="ri-whatsapp-line" />
              </a>
              <a
                href="https://www.facebook.com/people/Mervat-Mohamed/100080114771110/"
                className="button button--small button--gray"
                title="messenger"
              >
                <i className="ri-facebook-line" />
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
