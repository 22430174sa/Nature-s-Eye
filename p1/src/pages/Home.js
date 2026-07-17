import React, { useState, useEffect } from 'react';
import "../Style/Home.css"; 
import amjad1 from '../assets/AMJAD 1.jpg';
import amjad2 from '../assets/AMJAD AYOUB 3.jpg';
import amjad3 from '../assets/AMJAD AYOUB 2.jpg';
import card1 from '../assets/Card3 - Copy.jpg';
import card2 from '../assets/Card2.jpg';
import card3 from '../assets/Card1.jpg';

const Home=()=> {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides =3

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides - 1 ? 0 : prev + 1));
  };
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 4000); 
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="photo-gallery-container ">
      <div className="center-text">
        <h2>On Fire! Meet the Photographer Behind the Month's Viral Photos</h2>
        <p className="subtitle">
          The lens that stole the spotlight: <strong>Lebanese photographer Amjad Ayoub</strong> tops the most engaged list with an incomparable artistic vision.
        </p>
      </div>
      <div className="slide ">  
       <div className="dots-container">
          <button className={`dot ${currentSlide === 0 ? 'active' : ''}`} onClick={() => setCurrentSlide(0)}></button>
          <button className={`dot ${currentSlide === 1 ? 'active' : ''}`} onClick={() => setCurrentSlide(1)}></button>
          <button className={`dot ${currentSlide === 2 ? 'active' : ''}`} onClick={() => setCurrentSlide(2)}></button>
        </div>
        <div className={`slide-item ${currentSlide === 0 ? 'active' : ''}`}>
          <img src={amjad1} alt="Wadi Al Milh" />
          <div className="slide-caption">
            <h3>United Arab Emirates</h3>
            <p>Wadi Al Milh-Fujairah</p>
          </div>  
        </div>
        <div className={`slide-item ${currentSlide === 1 ? 'active' : ''}`}>
          <img src={amjad2} alt="Mountain Road" />
          <div className="slide-caption">
            <h3>North Lebanon</h3>
            <p>Mountain Road - Cedars region</p>
          </div>
        </div>
        <div className={`slide-item ${currentSlide === 2 ? 'active' : ''}`}>
          <img src={amjad3} alt="Baatara Gorge Waterfall" />
          <div className="slide-caption">
            <h3>North Lebanon</h3>
            <p>Baatara Gorge Waterfall - Tannourine</p>
          </div>
        </div>
        <button className="nav-btn prev-btn" onClick={handlePrev}>&#10094;</button>
        <button className="nav-btn next-btn" onClick={() => handleNext()}>&#10095;</button>
      </div> 
      <div>
        <h2 className="center-text ">Different places around the world through the lenses of our photographers!
        </h2>
        <div className="grid-container">
          <div className="card">
            <img src={card1} alt="Northeastern Italy"  />
            <div className="card-overlay">
              <h4>Northeastern Italy</h4>
            
            </div>
          </div>
          <div className="card">
            <img src={card2} alt="Southern Africa" />
            <div className="card-overlay">
              <h4>Southern Africa</h4>
             
            </div>
          </div>
          <div className="card">
            <img src={card3} alt="Thailand" />
             
            <div className="card-overlay">
              <h4>Thailand</h4>
             
            </div>
          </div>
        </div>

        <div className="footer-box">
          <a href="/" className="btn-outline-green">View More Photos</a>
        </div>
      </div>
    </div>
  );
}
export default  Home;
