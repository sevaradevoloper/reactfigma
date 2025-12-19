import React from 'react'; 
import './Testimonilas.css'; 
import TestimonilasImg from "./image/testimonials.svg";


function Testimonilas() {
  return (
    <>
      <section className="testimonilas">
        <div className="container">
          <div className="testimonilas__container">
            <div className="testimonilas__box">
              <h2 className="testimonilas__title">
                What our clients say about our awesome solutions
              </h2>
              <p className="testimonilas__text">
                To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it who do not know.
                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing .
                Lorem ipsum is placeholder previewing layouts and visual mockups.
                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
              </p>

            </div>
              
            <div className="testimonilas__image-side">
              <img src={TestimonilasImg} alt="testimonilas illustration" className="testimonilas__img" />
            </div>
          </div>
        </div>
      </section>

      
    </>
  );
}

export default Testimonilas;