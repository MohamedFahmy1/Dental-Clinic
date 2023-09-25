import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Team.scss";
import team1 from "../images/team1.png";
import team2 from "../images/team2.png";
import team3 from "../images/team3.png";
import team4 from "../images/team4.png";
const Team = () => {
  return (
    <main className="team">
      <div className="container">
        <div className="mainHeading">
          <p>OUR DOCTOR</p>
          <h1>Best Expert Dentists</h1>
        </div>
        <div className="boxContainer">
          <div className="box">
            <img src={team1} alt="team member" />
            <h3>Howard Hamlit</h3>
            <p>Dentist</p>
            <div className="social">
              <FontAwesomeIcon icon={faFacebook} className="icon" />
              <FontAwesomeIcon icon={faTwitter} className="icon" />
              <FontAwesomeIcon icon={faInstagram} className="icon" />
            </div>
          </div>
          <div className="box">
            <img src={team2} alt="team member" />
            <h3>Jessica Magiel</h3>
            <p>Dentist</p>
            <div className="social">
              <FontAwesomeIcon icon={faFacebook} className="icon" />
              <FontAwesomeIcon icon={faTwitter} className="icon" />
              <FontAwesomeIcon icon={faInstagram} className="icon" />
            </div>
          </div>
          <div className="box">
            <img src={team3} alt="team member" />
            <h3>Saul Goodman</h3>
            <p>Dentist</p>
            <div className="social">
              <FontAwesomeIcon icon={faFacebook} className="icon" />
              <FontAwesomeIcon icon={faTwitter} className="icon" />
              <FontAwesomeIcon icon={faInstagram} className="icon" />
            </div>
          </div>
          <div className="box">
            <img src={team4} alt="team member" />
            <h3>Skylar White</h3>
            <p>Dentist</p>
            <div className="social">
              <FontAwesomeIcon icon={faFacebook} className="icon" />
              <FontAwesomeIcon icon={faTwitter} className="icon" />
              <FontAwesomeIcon icon={faInstagram} className="icon" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Team;
