import serv1 from "../images/download.png";
import serv2 from "../images/download (1).png";
import serv3 from "../images/download (2).png";
import serv4 from "../images/download (3).png";
import serv5 from "../images/download (4).png";
import serv6 from "../images/download (5).png";
import tooth from "../images/service-banner.png";
import "./Services.scss";

const Services = () => {
  return (
    <main className="services">
      <div className="container">
        <div className="mainHeading">
          <p>OUR SERVICES</p>
          <h1>What We Provide</h1>
        </div>
        <div className="content">
          <div className="textContent">
            <div className="box">
              <img src={serv1} alt="service" />
              <div className="info">
                <h3>Root Canal</h3>
                <p>
                  Aenean eleifend turpis tellus, nec laoreet metus elementum ac.
                </p>
              </div>
            </div>
            <div className="box">
              <img src={serv2} alt="service" />
              <div className="info">
                <h3>Cosmetic Teeth</h3>
                <p>
                  Aenean eleifend turpis tellus, nec laoreet metus elementum ac.
                </p>
              </div>
            </div>
            <div className="box">
              <img src={serv3} alt="service" />
              <div className="info">
                <h3>Live Advisory</h3>
                <p>
                  Aenean eleifend turpis tellus, nec laoreet metus elementum ac.
                </p>
              </div>
            </div>
          </div>
          <div className="image">
            <img src={tooth} alt="tooth" />
          </div>
          <div className="textContent">
            <div className="box">
              <img src={serv4} alt="service" />
              <div className="info">
                <h3>Alignment Teeth</h3>
                <p>
                  Aenean eleifend turpis tellus, nec laoreet metus elementum ac.
                </p>
              </div>
            </div>
            <div className="box">
              <img src={serv5} alt="service" />
              <div className="info">
                <h3>Oral Hygiene</h3>
                <p>
                  Aenean eleifend turpis tellus, nec laoreet metus elementum ac.
                </p>
              </div>
            </div>
            <div className="box">
              <img src={serv6} alt="service" />
              <div className="info">
                <h3>Cavity Inspection</h3>
                <p>
                  Aenean eleifend turpis tellus, nec laoreet metus elementum ac.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Services;
