import React from "react";
import doctorImage from "../../images/doc1.png";

const FirstSection = () => {
  return (
    <div className="firstSection">
      <div className="left">
        <div className="mainHeading">
          <p>WELCOME TO Dr.Corneaud Dental Clinic</p>
          <h1>We Are The Best Dental Service</h1>
        </div>
        <p>
          Donec vitae libero non enim placerat eleifend aliquam erat volutpat.
          Curabitur diam ex, dapibus purus sapien, cursus sed nisl tristique,
          commodo gravida lectus non.
        </p>
        <form action="">
          <input
            type="email"
            placeholder="Your Email Address..."
            name="email"
          />
          <input
            type="submit"
            name="GetCallBack"
            value="Get Call Back"
            className="main-btn"
          />
        </form>
      </div>
      <div className="right">
        <img src={doctorImage} alt="Doctor" />
      </div>
    </div>
  );
};

export default FirstSection;
