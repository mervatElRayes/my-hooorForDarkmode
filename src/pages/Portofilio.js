import React from "react";
import Headerporto from "../components/Headerporto";
import Footer from "../components/Footer";

const Portofilio = () => {
  return (
    <>
      <Headerporto />

      <div className="fixed-menu">
        <i className="icon-gear" />
        <h3>Change Colors</h3>
        <ul className="change-colors">
          <li data-color="red" />
          <li data-color="blue" />
          <li data-color="green" />
          <li data-color="yellow" />
          <li data-color="black" />
        </ul>
      </div>
      
      <div id="home" className="skin-background blockk">
        <div className="container-fluid">
          <div className="movy row">
            <div className="col-lg-6">
              <p className="typer" data-text="HI, I'M A FREELANCER" />
              <div className="boxx">
                <div className="box">
                  <div className="lightbar" />
                  <div className="topLayer" />
                  <h2>Sherif Shick00</h2>
                </div>
              </div>
              <div className="links">
                <button className="veiw">
                  <a href="my-work/index.html">Veiw My Works</a>
                </button>
                <button className="contct">
                  <a className="contactMe" href="#contact" ></a>
                  <span className="icon-arrow-circle-down" />
                </button>
              </div>
            </div>
            <div className="col-lg-6">
              <img
                className="hero"
                src="imgPorto/29.jpg"
                title="shickoo"
                alt="img29"
              />
            </div>
          </div>
          <div className="arrow">
            <div className="icon-arrow-down1" />
          </div>
        </div>
      </div>
      {/* End home */}
      {/* start About Me Section*/}
      <div id="about" className="skin-background blockk">
        <h4 id="skin-background" className="skin-color">
          About Me
        </h4>
        <h1 className="text-center">Know Me More</h1>
        <div id="skin-background" className="yearsExper text-center">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-lg-6">
                <div className="hi">
                  <h2>
                    Hi, I'm<span className="sherif">Sherif Shickoo</span>
                  </h2>
                  <p className="pragrph">
                    I'm a designer &amp; developer with a passion for web
                    design. I enjoy developing simple, clean and slick websites
                    that provide real value to the end user. Thousands of
                    clients have procured exceptional results while working with
                    me. Delivering work within time and budget which meets
                    client’s requirements is our moto.
                  </p>
                </div>
              </div>
              <div className="col-sm-12 col-lg-6">
                <div className="twinty">
                  <p>20</p>
                </div>
                <h5 className="year">
                  Years of <b className="experiance">Experiance</b>
                </h5>
              </div>
            </div>
          </div>
        </div>
        {/* start second Pasted*/}
        <div id="skin-background" className="text-center">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="dataA">
                  <i className="icon-user-circle-o" aria-hidden="true" />
                  <h6>Name:</h6>
                  <p className="pastedPragraph">Sherif Shickoo</p>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="dataA">
                  <i className="icon-envelope-o" aria-hidden="true" />
                  <h6>Email:</h6>
                  <p className="pastedPragraph">Shickoo@gmail.com</p>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="dataA">
                  <i className="icon-calendar" aria-hidden="true" />
                  <h6>Date of birth:</h6>
                  <p className="pastedPragraph">28 September, 1991</p>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="dataA">
                  <i className="icon-address-card-o" aria-hidden="true" />
                  <h6>From:</h6>
                  <p className="pastedPragraph">Alexandria,ARE.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End second Pasted*/}
      </div>
      {/*End About Me Section */}
      <div id="what-i-do" className="skin-background blockk">
        <h4 id="skin-background" className="skin-color">
          what i do ?
        </h4>
        <h1 className="text-center">How I can help your next project</h1>
        {/* start help project section*/}
        <div id="skin-background" className="helped text-center">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="helpA">
                  <i className="icon-snowflake-o" aria-hidden="true" />
                  <h6 className="text-center">Graphic Design</h6>
                  <p className="helpPragraph">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry’s
                    standard dummy text.
                  </p>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="helpA">
                  <i className="icon-display" aria-hidden="true" />
                  <h6 className="text-center">Web Design</h6>
                  <p className="helpPragraph">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry’s
                    standard dummy text.
                  </p>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="helpA">
                  <i className="icon-airplane" aria-hidden="true" />
                  <h6 className="text-center">Web Development</h6>
                  <p className="helpPragraph">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry’s
                    standard dummy text.
                  </p>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="helpA">
                  <i className="icon-paint-brush" aria-hidden="true" />
                  <h6 className="text-center">Brand Identity</h6>
                  <p className="helpPragraph">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry’s
                    standard dummy text.
                  </p>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="helpA">
                  <i className="icon-bullhorn" aria-hidden="true" />
                  <h6>Digital Marketing</h6>
                  <p className="helpPragraph">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry’s
                    standard dummy text.
                  </p>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="helpA">
                  <i className="icon-address-card-o" aria-hidden="true" />
                  <h6>Business Analysis</h6>
                  <p className="helpPragraph">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry’s
                    standard dummy text.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="skills" className="blockk">
        <h4>Skills</h4>
        <div className="allSkills">
          <div className="col-12 col-sm-6 col-lg-6">
            <div className="progrs">
              <div className="mainProgress">
                <div className="animation-bar-1">
                  <span data-label="75%" />
                </div>
                <div className="animation-bar-2">
                  <span data-label="100%" />
                </div>
                <div className="animation-bar-3">
                  <span data-label="80%" />
                </div>
                <div className="animation-bar-A">
                  <span data-label="93%" />
                </div>
                <div className="animation-bar-B">
                  <span data-label="66%" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-6">
            <div className="progrs2">
              <div className="mainProgress2">
                <div className="animation-bar-4">
                  <span data-label="65%" />
                </div>
                <div className="animation-bar-5">
                  <span data-label="77%" />
                </div>
                <div className="animation-bar-6">
                  <span data-label="95%" />
                </div>
                <div className="animation-bar-C">
                  <span data-label="55%" />
                </div>
                <div className="animation-bar-D">
                  <span data-label="75%" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="mycv">
        <div className="col-12 myCV">
          <a href="pdf/cV.docx" className="buttoncv">
            Download CV
            <span className="downcv">⇣</span>
          </a>
        </div>
      </div>

      <div id="clientSpeak" className="blockk skin-background">
        <h4 className="skin-color">client speak</h4>

        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-ride="carousel"
        >
          <h1 className="text-center">What Some of my Clients Say</h1>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                id="pic"
                src="imgPorto/666.jpg"
                className="d-block w-100"
                alt="..."
                style={{ width: "100%", height: 675 }}
              />
              <div className="carousel-caption d-none d-md-block">
                <p>
                  “I have used them twice now. Good rates, very efficient
                  service and priced simply dummy text of the printing and
                  typesetting industry quidam interesset his et. simply dummy
                  text of the printing and typesetting industry. Excellent.”
                </p>
                <img
                  alt="sm1"
                  id="client"
                  src="imgPorto/client-sm-1.jpg"
                  width={80}
                  height={80}
                  style={{ borderRadius: "50%" }}
                />
                <h5>Jay Shah</h5>
                <h6 className="text-center">Founder at Icomatic PVt Ltd</h6>
              </div>
            </div>
            <div className="carousel-item">
              <img
                id="pic"
                src="imgPorto/666.jpg"
                className="d-block w-100"
                alt="..."
                style={{ width: "100%", height: 675 }}
              />
              <div className="carousel-caption d-none d-md-block">
                <p>
                  “I have used them twice now. Good rates, very efficient
                  service and priced simply dummy text of the printing and
                  typesetting industry quidam interesset his et. simply dummy
                  text of the printing and typesetting industry. Excellent.”
                </p>
                <img
                  alt="sm2"
                  id="client"
                  src="imgPorto/client-sm-2.jpg"
                  width={80}
                  height={80}
                  style={{ borderRadius: "50%" }}
                />
                <h5>Patrick Cary</h5>
                <h6 className="text-center">Freelancer From USA</h6>
              </div>
            </div>
            <div className="carousel-item">
              <img
                id="pic"
                src="imgPorto/666.jpg"
                className="d-block w-100"
                alt="..."
                style={{ width: "100%", height: 675 }}
              />
              <div className="carousel-caption d-none d-md-block">
                <p>
                  “I have used them twice now. Good rates, very efficient
                  service and priced simply dummy text of the printing and
                  typesetting industry quidam interesset his et. simply dummy
                  text of the printing and typesetting industry. Excellent.”
                </p>
                <img
                  alt="sm3"
                  id="client"
                  src="imgPorto/client-sm-3.jpg"
                  width={80}
                  height={80}
                  style={{ borderRadius: "50%" }}
                />
                <h5>Dennis Jacques</h5>
                <h6 className="text-center">Noon Inc</h6>
              </div>
            </div>
            <div className="carousel-item">
              <img
                id="pic"
                src="imgPorto/666.jpg"
                className="d-block w-100"
                alt="..."
                style={{ width: "100%", height: 675 }}
              />
              <div className="carousel-caption d-none d-md-block">
                <p>
                  “I have used them twice now. Good rates, very efficient
                  service and priced simply dummy text of the printing and
                  typesetting industry quidam interesset his et. simply dummy
                  text of the printing and typesetting industry. Excellent.”
                </p>
                <img
                  alt="sm4"
                  id="client"
                  src="imgPorto/client-sm-4.jpg"
                  width={80}
                  height={80}
                  style={{ borderRadius: "50%" }}
                />
                <h5>Third slide label</h5>
                <h6 className="text-center">Company CEO From UK</h6>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-target="#carouselExampleCaptions"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-target="#carouselExampleCaptions"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </button>
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleCaptions"
              data-slide-to={0}
              className="active"
            />
            <li data-target="#carouselExampleCaptions" data-slide-to={1} />
            <li data-target="#carouselExampleCaptions" data-slide-to={2} />
            <li data-target="#carouselExampleCaptions" data-slide-to={3} />
          </ol>
        </div>
      </div>

      <div id="contact" className="blockk skin-background">
        <h4 className="skin-color">Contact</h4>
        <div className="container">
          <div className="row Hour">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="contactLeft">
                <h1 className="skin-color">Let's get in touch</h1>
                <p className="injoy">
                  I enjoy discussing new projects and design challenges. Please
                  share as much info, as possible so we can get the most out of
                  our first catch-up...I strongly encourage development and
                  modernization in development the front End field And I hope to
                  be up to date with the challenges of the times
                </p>
                <div className="shamandPhon">
                  <h5>Living In:</h5>
                  <p className="sham">
                    50 El Esawy street, Sidi Bisher, Alexandria, ARE.
                  </p>
                  <h5>Call:</h5>
                  <p className="phone">(+020) 755 434 104</p>
                  <h5>FAX</h5>
                  <p className="phone">(+020) 755 434 106</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="contactRight">
                <h1 id="skin-color" className="text-center contactUs">
                  Contact Us
                </h1>
                <div className="wrapper text-center">
                  <div id="error_message" />
                  <form id="myform" onsubmit="return validation()">
                    <div className="input_field">
                      <input
                        type="text"
                        placeholder="Enter Name large than 5 character"
                        id="name"
                      />
                    </div>
                    <div className="input_field">
                      <input
                        type="text"
                        placeholder="Enter Subject large than 10 character"
                        id="subject"
                      />
                    </div>
                    <div className="input_field">
                      <input
                        type="text"
                        placeholder="Enter phone 10 number"
                        id="phone"
                      />
                    </div>
                    <div className="input_field">
                      <input type="text" placeholder="Email" id="email" />
                    </div>
                    <div className="input_field">
                      <textarea
                        id="message"
                        placeholder="Enter message at least 140 character"
                        defaultValue={""}
                      />
                    </div>
                    <div className="btnn">
                      <input type="submit" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="progressbar to-top-btn center">
        <div className="half-circle" />
        <div className="half-circle" />
        <div className="half-circle-top" />
        <div id="skin-background" className="progressbar-circle center">
          <div className="icon-chevron-up" />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Portofilio;
