import React from "react";
import { Link } from "react-router-dom";
import "./navBar.css";

const NavBar = () => {

  const handleButtonClick = () => {
    const event = new Event('updateSpinner');
    window.dispatchEvent(event);
  };

  return (
    <nav className="navbar navbar-expand-md bg-coler border ">
      <div className="container-fluid  ">
        <button
          className=" btn border-2  position-absolute top-0 and-0 mt-2 d-md-none "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div  className="collapse navbar-collapse me-2 me-md-0  " id="navbarNav">
          <ul  className="navbar-nav  mx-auto">
            <li className="nav-item">
              <Link onClick={handleButtonClick} className="nav-link color" to="/">
                דף הבית
              </Link>
            </li>
            <li className="nav-item">
              <Link onClick={handleButtonClick} className="nav-link color mx-md-3 mx-lg-5" to="/chains">
                שרשראות
              </Link>
            </li>
            <li className="nav-item">
              <Link onClick={handleButtonClick} className="nav-link color" to="/rings">
                טבעות
              </Link>
            </li>
            <li className="nav-item">
              <Link onClick={handleButtonClick} className="nav-link color mx-md-3 mx-lg-5" to="/bracelets">
                צמידים
              </Link>
            </li>
            <li className="nav-item">
              <Link onClick={handleButtonClick} className="nav-link color " to="/earrings">
                עגילים
              </Link>
            </li>
            <li className="nav-item">
              <Link onClick={handleButtonClick} className="nav-link color mx-md-3 mx-lg-5" to="/sunglasses">
                משקפי שמש
              </Link>
            </li>
            <li className="nav-item">
              <Link onClick={handleButtonClick} className="nav-link color " to="/man">
                גברים
              </Link>
            </li>
           
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
