import {
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="content">
        <div className="container">
          <div className="brandSection">
            <h3>Dr.Corneaud Dental Clinic</h3>
            <p>
              Mauris non nisi semper, lacinia neque in, dapibus leo. Curabitur
              sagittis libero tincidunt tempor finibus. Mauris at dignissim
              ligula, nec tristique orci.Quisque vitae metus.
            </p>
            <div className="time">
              <FontAwesomeIcon icon={faClock} className="icon" />
              <div className="info">
                <p>
                  Monday - Saturday:
                  <br />
                </p>
                <p>9:00am - 10:00Pm</p>
              </div>
            </div>
          </div>
          <div className="section">
            <h3>Other Links</h3>
            <ul>
              <li>
                <NavLink
                  to=""
                  end
                  className={({ isActive }) =>
                    isActive ? "active" : undefined
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="services"
                  end
                  className={({ isActive }) =>
                    isActive ? "active" : undefined
                  }
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="aboutus"
                  end
                  className={({ isActive }) =>
                    isActive ? "active" : undefined
                  }
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="team"
                  end
                  className={({ isActive }) =>
                    isActive ? "active" : undefined
                  }
                >
                  Team
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="blog"
                  end
                  className={({ isActive }) =>
                    isActive ? "active" : undefined
                  }
                >
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="section">
            <h3>Our Services</h3>
            <ul>
              <li>Root Canal</li>
              <li>Alignment Teeth</li>
              <li>Cosmetic Teeth</li>
              <li>Oral Hygiene</li>
              <li>Live Advisory</li>
              <li>Cavity Inspection</li>
            </ul>
          </div>
          <div className="contactSection">
            <h3>Contact Us</h3>
            <ul>
              <li>
                <FontAwesomeIcon icon={faLocationDot} className="icon" />
                <span>1247 Wolf street, New York City.</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faPhone} className="icon" />
                <span>+99-5439-341-796</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} className="icon" />
                <span>dentalclinic@example.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copywrite">
        <div className="container">
          <p>
            © 2023 All Rights Reserved by {""}
            <a
              href="https://mohamedfahmy.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <span>Mohamed Fahmy</span>.
            </a>
          </p>
          <div className="social">
            <FontAwesomeIcon icon={faFacebook} className="icon" />
            <FontAwesomeIcon icon={faTwitter} className="icon" />
            <FontAwesomeIcon icon={faInstagram} className="icon" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
