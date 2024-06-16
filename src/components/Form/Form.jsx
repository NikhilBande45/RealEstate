import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <div className="connect-form">
      <div className="connect-form-heading">
        <h2>Connect with Our Digital Marketing Experts</h2>
        <p>
          Reach Out for Tailored Strategies and Results-Driven Solutions. Let's
          Elevate Your Online Presence Together
        </p>
      </div>
      <form className="form-container">
        <div className="form-data">
          <div className="form-left">

            <div className="form-field">
              <label>Name</label>
              <input type="text" placeholder="Enter your name" />
            </div>

            <div className="form-field">
              <label>Phone</label>
              <input type="text" placeholder="Enter your Number" />
            </div>

            <div className="form-field">
              <label>Email</label>
              <input type="text" placeholder="Enter your Email" />
            </div>
          </div>

          <div className="form-right form-field">
            <label>Message</label>
            <textarea
              name=""
              id=""
              cols="50"
              rows="10"
              placeholder="Enter your Message"
            ></textarea>
          </div>
            </div>
            <button>Get Started</button>
      </form>
    </div>
  );
};

export default Form;
