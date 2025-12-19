import React from 'react'; 
import Slider from "react-slick";


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Swiper.css'; 


import Swiper1 from "./image/swiper1.svg";
import Swiper2 from "./image/swiper2.svg";
import Swiper3 from "./image/swiper3.svg";
import Swiper4 from "./image/swiper5.svg";
import Swiper5 from "./image/swiper5.svg";


export default function Swiper() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true, // Avtomatik aylanishni yoqing (tekshirish uchun)
    autoplaySpeed: 2000,
  };

  return (
    <section className="swiper-section">
      <div className="container">
        {/* Slider atrofida qo'shimcha div bo'lgani ma'qul */}
        <div className="slider-wrapper">
          <Slider {...settings}>
            <div key="1" className="swiper__item">
              <img src={Swiper1} alt="AI" />
              <h4>Naxly as the Winners in Global Agency Awards</h4>
              <p>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</p>
            </div>
            <div key="2" className="swiper__item">
              <img src={Swiper2} alt="AI" />
              <h4>Expert Prespective Agency Awards</h4>
              <p>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</p>
            </div>
            <div key="3" className="swiper__item">
              <img src={Swiper3} alt="AI" />
              <h4>Business Prespective Global Agency Awards</h4>
              <p>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</p>
            </div>
            <div key="1" className="swiper__item">
              <img src={Swiper4} alt="AI" />
              <h4>Value for Results in Global Agency Awards</h4>
              <p>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</p>
            </div>
            <div key="2" className="swiper__item">
              <img src={Swiper5} alt="AI" />
              <h4>Value for Results in Global Agency Awards</h4>
              <p>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</p>
            </div>
            
          </Slider>
        </div>
      </div>
    </section>
  );
}