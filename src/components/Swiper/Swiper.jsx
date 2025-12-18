import React from 'react'; 
import './Swiper.css'; 


import Swiper1 from "./image/swiper1.svg";
import Swiper2 from "./image/swiper2.svg";
import Swiper3 from "./image/swiper3.svg";
import Swiper4 from "./image/swiper4.svg";

function Swiper() {
  return (
    <>
      <section className="swiper">
        <div className="container">
          <div className="swiper__container">
            <ul className="swiper__list">
                <li className="swiper__items">
                    <img src="{Swiper1}" alt="Swiperimages" />
                    <h4>Naxly as the Winners in Global Agency Awards</h4>
                    <p>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</p>
                </li>
            </ul>
          </div>
        </div>
      </section>

      
    </>
  );
}

export default Swiper;