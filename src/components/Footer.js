import React from 'react';

const Footer = () => {
  return (
    <div>
        <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6">
            <p className="text-center copy">
              Copyright © 2023<a href="www">Sherif.</a> All Rights Reserved.
            </p>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6">
            <div className="text-center design">
              Designed by<a href="www"> Shickoo Design</a>
            </div>
          </div>
        </div>
        <div className="footerIcons text-center">
          <span>
            <i className="icon-twitter" />
          </span>
          <span>
            <i className="icon-dribbble" />
          </span>
          <span>
            <i className="icon-github" />
          </span>
          <span>
            <i className="icon-instagram1" />
          </span>
          <span>
            <i
              className="icon-facebook-square"
              aria-hidden="true"
              title="facebook"
            />
          </span>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Footer;
