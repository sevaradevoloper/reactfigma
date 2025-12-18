import React from 'react'; 
import './Hero.css'; 
import HeroImg from "./image/hero.svg";

// 1. Har bir rasmga alohida nom bering
import Marquee1 from "./image/marquee1.svg";
import Marquee2 from "./image/marquee2.svg";
import Marquee3 from "./image/marquee3.svg";
import Marquee4 from "./image/marquee4.svg";

function Hero() {
  return (
    // 2. Fragment (<> ... </>) bilan hamma narsani bitta qutiga o'raymiz
    <>
      <section className="hero">
        <div className="container">
          <div className="hero__container">
            <div className="hero__box">
              <b className="hero__subtitle">Next Generation Platform</b>
              <h1 className="hero__title">
                Artificial intelligence & Cyber security
              </h1>
              <p className="hero__text">
                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries.
              </p>
              <div className="hero__buttons">
                  <button className="btn-primary">Get Started</button>
                  <button className="btn-secondary">Watch Video</button>
              </div>
            </div>
              
            <div className="hero__image-side">
              <img src={HeroImg} alt="Hero illustration" className="hero__img" />
            </div>
          </div>
        </div>
      <div className="marquee-container">
        <marquee behavior="scroll" direction="left" scrollamount="20">
          <img src={Marquee1} alt="Partner 1" className="marquee-img" />
          <img src={Marquee2} alt="Partner 2" className="marquee-img" />
          <img src={Marquee3} alt="Partner 3" className="marquee-img" />
          <img src={Marquee4} alt="Partner 4" className="marquee-img" />
          <img src={Marquee1} alt="Partner 1" className="marquee-img" />
          <img src={Marquee2} alt="Partner 2" className="marquee-img" />
          <img src={Marquee3} alt="Partner 3" className="marquee-img" />
          <img src={Marquee4} alt="Partner 4" className="marquee-img" />
        </marquee>
      </div>
      </section>

      
    </>
  );
}

export default Hero;