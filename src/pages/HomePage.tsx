import "./HomePage.scss";
import FirstSection from "../components/homepage/FirstSection";
import SecondSection from "../components/homepage/SecondSection";
const HomePage = () => {
  return (
    <main className="homepage">
      <div className="container">
        <FirstSection />
      </div>
      <SecondSection />
    </main>
  );
};

export default HomePage;
