import React from "react";
import "../Style/About.css";

const AboutUs = () => {
  return (
    <div className="about-container">

      <div className="about-top">
        <h1>About Nature's Eye 🌍</h1>
        <p>Capturing Earth's Hidden Wonders</p>
      </div>

      <div className="about-content">
        <h2>Who We Are</h2>
        <p>
          Nature's Eye is a global platform dedicated to showcasing the most
          breathtaking natural landscapes around the world. From Turquoise beaches
          to silent forests, high mountains, and deep oceans — we bring nature
          closer to you Through an impactful visual narrative.
        </p>

        <h2>Our Mission</h2>
        <p>
         Our mission is to inspire people to explore the beauty of nature,
          appreciate its wonders, 
           and connect with different environments through photography and travel experiences.
        </p>

        <h2>What You Will Find Here</h2>
        <ul>
          <li>🌊 Beaches, Islands, Forests, Mountains & Oceans</li>
          <li>📸 Talented photographers from around the world</li>
          <li>🌍 Unique destinations and hidden places</li>
          <li>🖼️ Stunning nature gallery collections</li>
        </ul>

        <h2>Our Vision</h2>
        <p>
          To become a leading platform that inspires millions to explore and
          respect the natural world through an impactful visual narrative.
        </p>

        <div className="about-footer">
          🌿 Explore. Discover. Capture. Nature’s Eye.
        </div>
      </div>

    </div>
  );
};

export default AboutUs;