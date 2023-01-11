import React from "react";
import Header from "../components/Header";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header />
      <main className="main">
        <section className="filters container">
          <ul className="filters--content">
            <li>
              <button
                type="button"
                className="filters--button filter-tab-active"
                data-target="#projects"
              >
                Projects
              </button>
            </li>
            <li>
              <button
                type="button"
                className="filters--button"
                data-target="#skills"
              >
                Skills
              </button>
            </li>
          </ul>
          <div className="filters--sections">
            <div
              className="projects--content grid filters--active"
              data-content=""
              id="projects"
            >
              <article className="projects-card">
                <img src="img/1.jpg" alt="" className="projects--img" />
                <div className="projects--modal">
                  <div>
                    <span className="projects--subtitle">online Store</span>
                    <h3 className="projects--title">First Project</h3>
                    <NavLink
                      to="OnlineStore"
                      className="projects--button button button--small"
                      title="probtn1"
                    >
                      <i className="ri-link" />
                    </NavLink>
                  </div>
                </div>
              </article>
              <article className="projects-card">
                <img src="img/desk5.jpg" alt="" className="projects--img" />
                <div className="projects--modal">
                  <div>
                    <span className="projects--subtitle">Portofilio</span>
                    <h3 className="projects--title">Second Project</h3>
                    <NavLink
                      to="./Portofilio"
                      className="projects--button button button--small"
                      title="probtn2"
                    >
                      <i className="ri-link" />
                    </NavLink>
                  </div>
                </div>
              </article>
              <article className="projects-card">
                <img src="img/5.jfif" alt="" className="projects--img" />
                <div className="projects--modal">
                  <div>
                    <span className="projects--subtitle">Sipec King</span>
                    <h3 className="projects--title">Third Project</h3>
                    <NavLink
                      to="/Sipec"
                      className="projects--button button button--small"
                      title="probtn3"
                    >
                      <i className="ri-link" />
                    </NavLink>
                  </div>
                </div>
              </article>
            </div>
            <div
              className="skills-content grid filters--active"
              data-content=""
              id="skills"
            >
              <div className="skills--area">
                <h3 className="skills--title">Frontend Developer</h3>
                <div className="skills--box">
                  <div className="skills--group">
                    <div className="skills--data">
                      <i className="ri-checkbox-circle-line" />
                      <div>
                        <h3 className="skills--name">HTML</h3>
                        <span className="skills--level">90%</span>
                      </div>
                    </div>
                    <div className="skills--data">
                      <i className="ri-checkbox-circle-line" />
                      <div>
                        <h3 className="skills--name">CSS</h3>
                        <span className="skills--level">95%</span>
                      </div>
                    </div>
                    <div className="skills--data">
                      <i className="ri-checkbox-circle-line" />
                      <div>
                        <h3 className="skills--name">Java Script</h3>
                        <span className="skills--level">90%</span>
                      </div>
                    </div>
                    <div className="skills--data">
                      <i className="ri-checkbox-circle-line" />
                      <div>
                        <h3 className="skills--name">JQuery</h3>
                        <span className="skills--level">90%</span>
                      </div>
                    </div>
                  </div>
                  <div className="skills--group">
                    <div className="skills--data">
                      <i className="ri-checkbox-circle-line" />
                      <div>
                        <h3 className="skills--name">bootStrap</h3>
                        <span className="skills--level">93%</span>
                      </div>
                    </div>
                    <div className="skills--data">
                      <i className="ri-checkbox-circle-line" />
                      <div>
                        <h3 className="skills--name">Github</h3>
                        <span className="skills--level">94%</span>
                      </div>
                    </div>
                    <div className="skills--data">
                      <i className="ri-checkbox-circle-line" />
                      <div>
                        <h3 className="skills--name">Gulp&amp; Pug</h3>
                        <span className="skills--level">95%</span>
                      </div>
                    </div>
                    <div className="skills--data">
                      <i className="ri-checkbox-circle-line" />
                      <div>
                        <h3 className="skills--name">React</h3>
                        <span className="skills--level">85%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer container">
        <span className="footer--copy">© MovyCat. All rights reserved</span>
      </footer>
    </>
  );
};

export default Home;
