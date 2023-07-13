import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import blog1 from "../images/blog1.jpg";
import blog2 from "../images/blog2.jpg";
import blog3 from "../images/blog3.jpg";
import "./Blog.scss";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
const Blog = () => {
  return (
    <div className="blog">
      <div className="container">
        <div className="mainHeading">
          <p>OUR BLOG</p>
          <h1>Latest Blog & News</h1>
        </div>
        <div className="boxContainer">
          <div className="box">
            <div className="dateCard">
              <FontAwesomeIcon icon={faCalendarDays} className="icon" />
              <p>15th Feb 2023</p>
            </div>
            <img src={blog1} alt="blog" />
            <div className="text">
              <h2>Dras accumsan nulla nec lacus ultricies placerat.</h2>
              <p>
                Curabitur sagittis libero tincidunt tempor finibus. Mauris at
                dignissim ligula, nec tristique orci.
              </p>
              <span>READ MORE</span>
            </div>
          </div>
          <div className="box">
            <div className="dateCard">
              <FontAwesomeIcon icon={faCalendarDays} className="icon" />
              <p>19th Sep 2023</p>
            </div>
            <img src={blog2} alt="blog" />
            <div className="text">
              <h2>Dras accumsan nulla nec lacus ultricies placerat.</h2>
              <p>
                Curabitur sagittis libero tincidunt tempor finibus. Mauris at
                dignissim ligula, nec tristique orci.
              </p>
              <span>READ MORE</span>
            </div>
          </div>
          <div className="box">
            <div className="dateCard">
              <FontAwesomeIcon icon={faCalendarDays} className="icon" />
              <p>5th Jun 2023</p>
            </div>
            <img src={blog3} alt="blog" />
            <div className="text">
              <h2>Dras accumsan nulla nec lacus ultricies placerat.</h2>
              <p>
                Curabitur sagittis libero tincidunt tempor finibus. Mauris at
                dignissim ligula, nec tristique orci.
              </p>
              <span>READ MORE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
