import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the Adventure Newsletter to Receive our Best Vacation Deals
        </p>
        <p className="footer-subscription-text">
          You can Unsubscribe at anytime.
        </p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/signup">How it Works</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
