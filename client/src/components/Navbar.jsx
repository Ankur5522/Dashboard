import profileImg from "../assets/profile.png";
import downImg from "../assets/down-arrow.png";
import { useState } from "react";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div className="navbarMain">
      <div className="navbar-info">
        <div>
          <div style={{ fontSize: "14px" }}>
            Free Trial |{" "}
            <span style={{ fontSize: "10px" }}>2 days left</span>
          </div>
          <div>
            <a href="#" className="navbar-link">
              Extend Free Trial
            </a>
          </div>
        </div>
        <div className="navbar-profile" onClick={handleClick}>
          <img src={profileImg} alt="profile" />
          <img
            src={downImg}
            alt="down-arrow"
            className={`navbar-down${clicked ? " rotate" : ""}`}
          />
        </div>
      </div>
      <div className={`navbar-profile-display${clicked ? " visible" : ""}`}>
        <p style={{ marginBottom: "10px" }}>Name</p>
        <p>Sign Out</p>
      </div>
    </div>
  );
};

export default Navbar;
