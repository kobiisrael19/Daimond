import React from "react";
import "./footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckFast , faComments , faShieldHalved , faGem , faScrewdriverWrench , faPhoneVolume , faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <div
        className="footer-one container-fluid bg-color border border-top "
      >
        <div className="bg-color container d-flex  justify-content-between align-items-center">
          <div className="text-center d-none d-md-block"><p><FontAwesomeIcon icon={faComments} flip="horizontal" size="2xl" style={{color: "#000000",}} /></p>
          <p>תמיכה ויעוץ אישי</p></div>
          <div className="text-center d-none d-md-block"><p><FontAwesomeIcon icon={faGem} size="2xl" style={{color: "#000000",}} /></p>
          <p>איכות מובטחת</p></div>
          <div className="text-center"><p><FontAwesomeIcon icon={faShieldHalved} size="2xl" style={{color: "#000000",}} /></p>
          <p>קניה מאובטחת</p></div>
          <div className="text-center"><p><FontAwesomeIcon icon={faScrewdriverWrench} size="2xl" style={{color: "#000000",}} /></p>
          <p>תיקון מידה ללא עלות</p></div>
          <div className="text-center"><p><FontAwesomeIcon icon={faTruckFast} size="2xl" style={{color: "#000000",}} /></p>
          <p>משלוחים חינם</p></div>
         
        </div>
      </div>
      <div
        style={{ backgroundColor: "black", minHeight: "400px", color: "white" }}
        className="container-fluid "
      >
      <div className="container pt-5 text-center d-md-flex justify-content-between">
          <div className="footer a">
            <h3 className="font p-4 ">צרו קשר</h3>
            <p><a href="tel:052-824-0230"><FontAwesomeIcon icon={faPhoneVolume} style={{color: "#f7fafd",}} /> 052-824-0230 </a></p>
            <p><a href="tel:054-995-9443"><FontAwesomeIcon icon={faPhoneVolume} style={{color: "#f7fafd",}} /> 054-995-9443</a></p>
            <p><a href="mailto:dymond123@gmail.com"><FontAwesomeIcon icon={faEnvelope} style={{color: "#f1f2f3",}} /> dymond123@gmail.com</a></p>
           
          </div>

          <div className="mt-5 mt-md-0 p-4">
            <h3 className="font ">אודות האתר</h3>
          <p ><Link className="Link" to="/about">אודות</Link></p>
          <p ><Link className="Link" to="/terms">תקנון ותנאי שימוש</Link></p>
          <p ><Link className="Link" to="/accessibility">הצהרת נגישות</Link></p>
 
          </div>

          <div className=" col-md-5 mt-5 pb-5 p-4  mt-md-0">
            <form className="form-signin">
              <h3 className="form-signin-heading font">
                הצטרפו לניוזלטר
              </h3>
              <input
                type="text"
                className="form-control mt-4"
                name="username"
                placeholder="שם מלא"
            
              />
              <input
                type="emile"
                className="form-control mt-4"
                name="emile"
                placeholder="הכנס אימייל"
               
              />
              <label className="checkbox mt-3 float-end">
                <input
                  type="checkbox"
                  value="remember-me"
                  name="rememberMe"
                />
                   <span className="me-2">מאשר\ת קבלת עידכונים למייל</span>
              </label>
              <button
              style={{ width: "100%" }}
              className="btn  btn-warning btn-block mt-2"
              type="submit"
            >
              Login
            </button>
            </form>
            
          </div>
        </div>
      </div>
      <div  className="container-fluid  text-center pb-3 pt-4">
        <p>כל הזכויות שמורות לקובי 2023 ©</p>
      </div>
    </div>
  );
};

export default Footer;

