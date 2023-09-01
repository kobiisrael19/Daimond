import { useContext} from "react";
import { Appcontext } from "../../context/context";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCartShopping,
  faMagnifyingGlass,
  faHeart,
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";
import "./carouselUp.css";
import { useState } from "react";
import ModalConnection from "./modleconnection";
import Input from "./input";
import WelcomeMessageOverlay from "./welcomeMessageOverlay"; 
import { TOKEN_KEY } from "../../services/apiServices";




const CarouselUp = () => {
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const { handleShow,isLoggedIn } = useContext(Appcontext);
  const [modalShow, setModalShow] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [username, setUsername] = useState("");
  const [inputShow, setInputShow] = useState(false);
  const nav = useNavigate();
  
  const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    nav("/");
    window.location.reload();
  };

  // פונקציה שמופעלת בהרשמה מוצלחת וסוגרת את המודל
  const handleLoginSuccess = (username) => {
    setModalShow(false);
    setIsRegistered(true);
    setUsername(username);

    setTimeout(() => {
      setIsRegistered(false);
      setUsername("");
    }, 5000);
    setModalShow(true)
  };




  return (
    <div
    className={`d-flex justify-content-between align-items-center ${isLoggedIn ? 'isLoggedIn' : ''}`} style={{ backgroundColor: "black", minHeight: "60px" }}
    >
         {/* Conditionally render the welcome message overlay */}
         {isRegistered && <WelcomeMessageOverlay username={username}  />}
      
      <div>
        <ul className="d-flex list-unstyled ">
          <li className="mt-2 ">
          {isLoggedIn ? (
              <div>
                <button
                  className="btn border-success rounded-circle"
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                >
                  <FontAwesomeIcon icon={faUser} style={{ color: "#03c447" }} />
                </button>
                {userMenuOpen && (
                  <ul className="user-menu mt-2 ">
                    <li>
                      <Link to="/personalArea" className="link">
                     <button className="btn ccoolloorrBBttnnI  ps-2"
                      onClick={() => {
                        setUserMenuOpen(!userMenuOpen);
                      }}>
                      לאיזור האישי
                     </button></Link>
                    </li>
                    <li>
                    <button className="btn btn-danger" onClick={logout}>
                        <FontAwesomeIcon icon={faSignOutAlt} />
              התנתקות
                      </button>
                    </li>
                  </ul>
                )}
              </div>
            ) : (
              <button
                className="btn"
                onClick={() => setModalShow(true)}
              >
                <FontAwesomeIcon
                  icon={faUser}
                  size="lg"
                  className="color1"
                />
              </button>
            )}

            <ModalConnection show={modalShow} onHide={() => setModalShow(false)}  handleLoginSuccess={handleLoginSuccess}/>

          </li>
          <li className="nav-item mt-2 pe-2">
            <button className="btn me-2" onClick={() => setInputShow(true)}>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                size="lg"
                className="color1"
              />
            </button>
            <Input show={inputShow} onHide={() => setInputShow(false)} />
          </li>
        </ul>
      </div>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide  d-none d-sm-block"
        data-bs-ride="carousel"
      >
        <div  className="carousel-inner text-center ">
          <div className="carousel-item active mt-3">
            <p style={{ color: "white" }}> משלוח חינם בקנייה מעל 250₪</p>
          </div>
          <div className="carousel-item mt-3">
            <p style={{ color: "white" }}> משלוח עד הבית תוך 3-5 ימי עסקים</p>
          </div>
        </div>
      </div>
      <div className="">
        <ul className="d-flex list-unstyled ps-5 mt-2">
          <li className="nav-item ps-5">
            <Link className="nav-link " to="/fivorit">
              <FontAwesomeIcon icon={faHeart} size="xl" className="color1" />
            </Link>
          </li>

          <li className="nav-item">
              <button className="nav-link btn border-0" onClick={handleShow}>
              <FontAwesomeIcon icon={faCartShopping} size="xl" className="color1" />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CarouselUp;
