import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./page404.css";


const Page404 = () => {
  return (
    <div className="container  containerr">
      <div className="error-container">
        <div className="error-code">404</div>
        <div className="error-message">היי, נראה שלא מצאנו את הדף שחיפשת.</div>
        <div className="error-description mt-3">
          Hi, it looks like we didn't find the page you were looking for.
        </div>
        <div><Link to="/"><button className="btn btn-dark mt-4"> לדף הבית <FontAwesomeIcon icon={faArrowRight} rotation={180} style={{color: "#ffffff",}} /></button></Link></div>
      </div>
    </div>
  );
};

export default Page404;
