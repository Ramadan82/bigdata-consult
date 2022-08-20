import React from "react";
import bigdataconsult from "../../static/bigdataconsult.png";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const [screenwidth, setScreenwidth] = useState(window.innerWidth);

  const toggleNav = (e) => setToggle(!toggle);

  useEffect(() => {
    const changeWidth = () => {
      setScreenwidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <div className="nav-container">
      <div className="logocontainer">
        <div className="logo">
          <img src={bigdataconsult} alt="logo" />
          <h5>
            Consult <span>Limited</span>
          </h5>
        </div>

        <div className="menuiconbutton">
          <button className="hamburger" onClick={toggleNav}>
            <FontAwesomeIcon
              icon={faBars}
              style={{ width: "60px", height: "30px" }}
            />
          </button>
        </div>
      </div>
      {(toggle || screenwidth > 900) && (
        <>
          <div className="center-navlinks">
            <button>Services</button>
            <button>Contact</button>
            <button>About</button>
            <button>Register</button>
            <button>login</button>
          </div>
          <div className="left-navlinks">
            <input type="text" placeholder="Search ...." />
            <button className="search">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Nav;
