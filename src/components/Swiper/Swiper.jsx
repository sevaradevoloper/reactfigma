import React from 'react'; 
import './Swiper.css'; 


import Swiper1 from "./image/swiper1.svg";
import Swiper2 from "./image/swiper2.svg";
import Swiper3 from "./image/swiper3.svg";
import Swiper4 from "./image/swiper4.svg";
import Swiper5 from "./image/swiper5.svg";
function Swiper() {
  return (
    <>
      <section className="swiper">
        <div className="container">
          <div className="swiper__container">
            <ul className="swiper__list">
                <li className="swiper__items">
                    <img src={Swiper1} alt="Swiperimages" />
                    <h4>Naxly as the Winners in Global Agency Awards</h4>
                    <p>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</p>
                </li>
                <li className="swiper__items">
                    <img src={Swiper2} alt="Swiperimages" />
                    <h4>Expert Prespective Agency Awards</h4>
                    <p>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</p>
                </li>
                <li className="swiper__items">
                    <img src={Swiper3} alt="Swiperimages" />
                    <h4>Business Prespective Global Agency Awards</h4>
                    <p>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</p>
                </li>
                <li className="swiper__items">
                    <img src={Swiper4} alt="Swiperimages" />
                    <h4>Value for Results in Global Agency Awards</h4>
                    <p>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</p>
                </li>
                <li className="swiper__items">
                    <img src={Swiper5} alt="Swiperimages" />
                    <h4>Global Experience in Agency Awards</h4>
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