import React from 'react'; 
import './Section.css'; 
import SectionImg from "./image/section.svg"; 

function Section() {
  return (
    <section className="section">
      <div className="container">
        <div className="section__container">
          

          <div className="section__image-side">
            <img src={SectionImg} alt="Section image by AI" className="section__img" />
           </div>

           
          <div className="section__box">
            <h1 className="section__title">
             Apply AI, Deep Learning and Data Sciece to solve
            </h1>
            <p className="section__text">
             Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
            </p>
            <div className="section__buttons">
                <button className="btn-primary">Learn More</button>
            </div>
          </div>
            

        </div>
      </div>
    </section>
  );
}

export default Section;