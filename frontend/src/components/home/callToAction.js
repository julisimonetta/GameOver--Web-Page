import React from 'react';
import '../../styles/buttonHero.css';
import '../../styles/callToAction.css';
import { Link } from "react-router-dom";

function CallToAction() {
  
  return (
    <>
        <div className="hero-container">
              <div className="hero1">
                <img className='img-hero' src={process.env.PUBLIC_URL + "/hero.image5.png"}></img>
              </div>
            <div className="hero2">
              <div className='hero-container-img-text'>
                <div className="hero-text">
                  <div className='container-paragraphs'>
                    <p className='hero-paragraph'>Looking for the best games and prices?</p>
                    <p className='hero-paragraph'>You came to the right place!</p>
                  </div>
                  <Link to="/games" className='text-reset'>
                    <div className='hero-anchor' href="#scroll3"><button className='hero-button hero-button2'>Browse Games</button></div>
                  </Link>
                </div>
              </div>
            </div>
        </div>
    </>
  );
}

export default CallToAction;


{/* <div className="hero-container">
            <div className="hero1">
            </div>
            <div className='product-image hero2'>
              <img className='img-hero' src={process.env.PUBLIC_URL + "/hero.image5.png"}></img>
            </div>
            <div className="hero-text">
                <p className='hero-paragraph'>Looking for the best games and prices? You've come to the right place!</p>                
                <Link to="/games" className='text-reset'>
                  <div className='hero-anchor' href="#scroll3"><button className='hero-button hero-button2'>Check Games</button></div>
                </Link>
            </div>
        </div> */}




/////////////////////////////////////////////////////ORIGINAL

        {/* <div className="hero-container">
            <div className="hero1">
              <img className='img-hero' src={process.env.PUBLIC_URL + "/hero.image5.png"}></img>
            </div>
            <div className="hero-text">
              <div className='container-paragraphs'>
                <p className='hero-paragraph'>Looking for the best games and prices?</p>
                <p className='hero-paragraph'>You've come to the right place!</p>
              </div>
              <Link to="/games" className='text-reset'>
                <div className='hero-anchor' href="#scroll3"><button className='hero-button hero-button2'>Check Games</button></div>
              </Link>
            </div>
        </div> */}