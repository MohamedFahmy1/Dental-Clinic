import React from "react";
import doctorTwoImage from "../../images/doc2.png";
const SecondSection = () => {
  return (
    <div className="secondSection">
      <div className="container">
        <div className="left">
          <img src={doctorTwoImage} alt="doctor" />
        </div>
        <div className="right">
          <p>Book Dentail Appointment</p>
          <h2>We Are open And Welcoming Patients</h2>
          <button className="main-btn">BOOK APPOINTMENT</button>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
