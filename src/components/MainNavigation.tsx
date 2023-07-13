import React, { useState, useEffect } from "react";
import logo from "../images/logo.jpg";
import { NavLink, useNavigate } from "react-router-dom";
import "./MainNavigation.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const MainNavigation: React.FC = () => {
  const [scrolly, setScrolly] = useState(0);
  const [activeMenu, setActiveMenu] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const scrollHandler = () => {
      setScrolly(window.scrollY);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [scrolly]);
  const clickHandler = () => {
    navigate("");
    window.scrollTo({
      top: 300,
      behavior: "smooth",
    });
  };
  const megaMenuHandler = () => {
    setActiveMenu((prevState) => !prevState);
  };
  const closeMenuHandler = () => {
    setActiveMenu(false);
  };
  return (
    <header className={scrolly >= 40 ? "sticky" : undefined}>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <FontAwesomeIcon
          icon={faBars}
          className="icon"
          onClick={megaMenuHandler}
        />
        <nav>
          <ul
            className={activeMenu ? "active" : undefined}
            onClick={closeMenuHandler}
          >
            <li>
              <NavLink
                to=""
                end
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="services"
                end
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="aboutus"
                end
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="team"
                end
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                Team
              </NavLink>
            </li>
            <li>
              <NavLink
                to="blog"
                end
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                Blog
              </NavLink>
            </li>
            <button className="main-btn" onClick={clickHandler}>
              BOOK APPOINTMENT
            </button>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default MainNavigation;
