import "./HomePage.scss";
import FirstSection from "../components/homepage/FirstSection";
import SecondSection from "../components/homepage/SecondSection";
const HomePage = () => {
  return (
    <div className="homepage">
      <div className="container">
        <FirstSection />
      </div>
      <SecondSection />
    </div>
  );
};

export default HomePage;
