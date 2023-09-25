import React from "react";
import doctorTwoImage from "../../images/doc2.png";

const SecondSection = () => {
  return (
    <article className="secondSection">
      <div className="container">
        <section className="left">
          <img src={doctorTwoImage} alt="doctor" />
        </section>
        <section className="right">
          <p>Book Dentail Appointment</p>
          <h2>We Are open And Welcoming Patients</h2>
          <button className="main-btn">BOOK APPOINTMENT</button>
        </section>
      </div>
    </article>
  );
};

export default SecondSection;
