import { Fragment, useState, useEffect } from "react";
import MainNavigation from "../components/MainNavigation";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import ScrollToTop from "../helpers/scrollToTop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const RootLayout = () => {
  const [scrolly, setScrolly] = useState(0);
  useEffect(() => {
    const scrollHandler = () => {
      setScrolly(window.scrollY);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [scrolly]);
  const ScrollTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <Fragment>
      <MainNavigation />
      <main>
        <ScrollToTop />
        <button
          className={scrolly > 200 ? "scroll active" : "scroll"}
          onClick={ScrollTop}
        >
          <FontAwesomeIcon icon={faArrowUp} className="icon" />
        </button>
        <Outlet />
      </main>
      <Footer />
    </Fragment>
  );
};

export default RootLayout;
