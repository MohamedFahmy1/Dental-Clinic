import about from "../images/about.png";
import "./AboutUs.scss";
const AboutUs = () => {
  return (
    <main className="aboutus">
      <div className="container">
        <img src={about} alt="about" />
        <div className="mainHeading">
          <p>ABOUT US</p>
          <h1>We Care For Your Dental Health</h1>
          <span>
            Aliquam ac sem et diam iaculis efficitur. Morbi in enim odio. Nullam
            quis volutpat est, sed dapibus sapien. Cras condimentum eu velit id
            tempor. Curabitur purus sapien, cursus sed nisl tristique, commodo
            vehicula arcu.
          </span>
          <span>
            Aliquam erat volutpat. Aliquam enim massa, sagittis blandit ex
            mattis, ultricies posuere sapien. Morbi a dignissim enim. Fusce
            elementum, augue in elementum porta, sapien nunc volutpat ex, a
            accumsan nunc lectus eu lectus.
          </span>
          <button className="main-btn">READ MORE</button>
        </div>
      </div>
    </main>
  );
};

export default AboutUs;
