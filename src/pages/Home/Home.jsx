import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <img src="/image/2.avif" alt="Hero" className="hero-image" />
        <div className="hero-text">
          <h1>Welcome to Our Store</h1>
          <p>Find the best products at unbeatable prices!</p>
          <a href="/products" className="btn btn-danger">
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
