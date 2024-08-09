import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <>
      <div className="hero">
        <div className="hero__content">
          <h1 className="hero__title">YOUR FEET DESERVE THE BEST</h1>
          <p className="hero__text">
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
          <button className="hero__button">SHOP NOW</button>
          <div className="also">
            <p>Also Available On</p>
            <div className="shops">
            <img src="/images/amazon.png" alt="Shoe Image" />
            <img src="/images/flipkart.png" alt="Shoe Image" />

            </div>
          </div>
        </div>
        <div className="hero-img">
          <img src="/images/shoe_image.png" alt="Shoe Image" />
        </div>
      </div>
    </>
  );
}

export default Hero;
