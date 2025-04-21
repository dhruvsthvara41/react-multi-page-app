import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <div className="about-hero">
        <img src="/image/3.avif" alt="About Us" className="about-image" />
        <div className="about-text">
          <h1>About Our Store</h1>
          <p>Your one-stop shop for the best products at unbeatable prices.</p>
        </div>
      </div>

      <div className="container mt-5">
        <h2 className="text-center mb-4">Why Shop With Us?</h2>
        <div className="row">
          <div className="col-md-4 text-center">
            <h4>High-Quality Products</h4>
            <p>
              We provide top-notch products that meet high-quality standards.
            </p>
          </div>
          <div className="col-md-4 text-center">
            <h4>Fast & Secure Delivery</h4>
            <p>
              Get your orders delivered quickly with our reliable shipping
              partners.
            </p>
          </div>
          <div className="col-md-4 text-center">
            <h4>24/7 Customer Support</h4>
            <p>
              Our support team is here to assist you at any time, day or night.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
