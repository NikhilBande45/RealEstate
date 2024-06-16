import React from "react";
import "./Footer.css";
import { assets } from "../../Assets/Assets";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="footer-left">
          <div className="footer-left-logo">
            <img src={assets.Logo} />
            <p>
              The best digital marketing agency in Pune with a proven track
              record of consistently delivering quality service.
            </p>
          </div>
          <div className="footer-address">
            <h4 className="footer-heading">Address</h4>
            <p>
              Survey No. 43, Pathare Thube Nagar, Nagar Road, Kharadi, Pune-14,
              Maharastra, India.
            </p>
          </div>

          <div className="footer-contact">
            <h3 className="footer-heading">Contacts</h3>
            <div className="email">
              <img src={assets.Email} />
              <div>hello@osumare.in</div>
            </div>

            <div className="phone">
              <img src={assets.Phone} />
              <div>+91 8459 8762 26</div>
            </div>
          </div>
        </div>
        <div className="footer-center">
            {/* <div className="footer-center-content"> */}
                <h3 className="footer-heading">Menu</h3>
                <ul className="footer-list-items">
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Work</li>
                    <li>Blog</li>
                    <li>Career</li>
                </ul>
            {/* </div> */}
          
        </div>
        <div className="footer-right">
          <h3 className="footer-heading">Social</h3>
          <div className="footer-social-icons">
            <div className="footer-social-icon-container">
              <img src={assets.Twitter} alt="" />
            </div>

            <div className="footer-social-icon-container">
              <img src={assets.Facebook} alt="" />
            </div>

            <div className="footer-social-icon-container">
              <img src={assets.Youtube} alt="" />
            </div>

            <div className="footer-social-icon-container">
              <img src={assets.Pintrest} alt="" />
            </div>

            <div className="footer-social-icon-container">
              <img src={assets.Whatsapp} alt="" />
            </div>

            <div className="footer-social-icon-container">
              <img src={assets.Instgram} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">© 2023 Osumare. All rights reserved.</div>
    </div>
  );
};

export default Footer;
