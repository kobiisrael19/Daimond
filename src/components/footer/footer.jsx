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



// import React, { useState } from "react";
// import axios from "axios";

// const Footer = () => {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");

//   const handleFormSubmit = (event) => {
//     event.preventDefault();

//     const formData = new FormData();
//     formData.append("username", username);
//     formData.append("email", email);

//     axios
//       .post("/sendEmail", formData)
//       .then((response) => {
//         console.log(response.data.message); // הדפסה ללוג או מנוע פרסום תודה לשליחת המייל
//       })
//       .catch((error) => {
//         console.error("שגיאה בשליחת המייל:", error);
//       });
//   };

//   return (
//     <div>
//       <div className="footer-one container-fluid bg-color border border-top">
//         <div className="bg-color container d-flex justify-content-between align-items-center">
//           {/* ... קוד נוסף של תגית <div> וכפתורים המציגים את האייקונים והתכונות שלך ... */}
//         </div>
//       </div>
//       <div style={{ backgroundColor: "black", minHeight: "400px", color: "white" }} className="container-fluid">
//         <div className="container pt-5 text-center d-md-flex justify-content-between">
//           <div className="">
//             <h3 className="font p-4 ">צרו קשר</h3>
//             <p>052-824-0230</p>
//             <p>054-995-9443</p>
//             <p>dymond123@gmail.com</p>
//           </div>

//           <div className="mt-5 mt-md-0 p-4">
//             <h3 className="font">אודות האתר</h3>
//             <p><a className="Link" href="/about">אודות</a></p>
//             <p><a className="Link" href="/terms">תקנון ותנאי שימוש</a></p>
//             <p><a className="Link" href="/accessibility">הצהרת נגישות</a></p>
//           </div>

//           <div className=" col-md-5 mt-5 pb-5 p-4  mt-md-0">
//             <form onSubmit={handleFormSubmit}>
//               <h3 className="form-signin-heading font">הצטרפו לניוזלטר</h3>
//               <input
//                 type="text"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 placeholder="שם מלא"
//               />
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="הכנס אימייל"
//               />
//               <label className="checkbox mt-3 float-end">
//                 <input
//                   type="checkbox"
//                   value="remember-me"
//                   name="rememberMe"
//                 />
//                 <span className="me-2">מאשר\ת קבלת עידכונים למייל</span>
//               </label>
//               <button style={{ width: "100%" }} className="btn btn-warning btn-block mt-2" type="submit">
//                 שלח
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//       <div style={{ height: "60px" }} className="container-fluid text-center">
//         <p className="mt-4">כל הזכויות שמורות ליוסי 2023 ©</p>
//       </div>
//     </div>
//   );
// };

// export default Footer;
