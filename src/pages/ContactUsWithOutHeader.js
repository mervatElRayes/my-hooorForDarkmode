import React from "react";


const ContactUs = () => {
  return (
    <div>
      
      <section id="contact">
        <h1>Registe Here 📞</h1>
        <div className="wrapper2">
          <div id="error_message" />
          <form id="myform" onsubmit="return validation()">
            <div className="input_field">
              <input id="name" placeholder="Name of Product" />
            </div>
            <div className="input_field">
              <input id="subject" placeholder="Kind of Product" />
            </div>
            <div className="input_field">
              <input id="phone" placeholder="Phone" />
            </div>
            <div className="input_field">
              <input id="email" placeholder="Email" />
            </div>
            <div className="input_field">
              <textarea
                id="message"
                placeholder="We are happy to receive your suggestions"
                defaultValue={""}
              />
            </div>
            <div className="btnn">
              <input type="submit" />
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
