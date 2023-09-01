import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TOKEN_KEY } from "../../services/apiServices";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useContext} from "react";
import { Appcontext } from "../../context/context";
import Page404 from "../routers/page404";

const HaderAdmin = () => {
  const { setIsLoggedIn } = useContext(Appcontext);
  const [isAdmin, setIsAdmin] = useState(false);
  const nav = useNavigate();

  useEffect(() => {
    checkAdmin();
  }, []);



  const checkAdmin = () => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (!token) {
      setIsAdmin(false);
    } else {
      try {
        const payload = JSON.parse(atob(token.split(".")[1]));
        setIsAdmin(payload.role === "admin");
      } catch (error) {
        setIsAdmin(false);
      }
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem(TOKEN_KEY);
    nav("/");
    // window.location.reload();
  };

  if (!isAdmin) {
    return (
      <div>
       <Page404/>
      </div>
    );
  }

  return (
    <div className="baccc">
      <header dir="rtl" className=" container-fluid bg-light p-3 baccc">
        <div className="container border-bottom">
          <div className="row align-items-center justify-content-between ">
            <div className="col">
              <button className="btn btn-dark" onClick={handleLogout}>
                <FontAwesomeIcon icon={faArrowRightFromBracket} />
                <span className="pe-2"> התנתק</span>
              </button>
            </div>
            <div className="col d-flex justify-content-center">
              <ul className="d-flex   align-items-center mt-4 mt-sm-3 list-unstyled">
                <li>
                  <Link className="navAdmin" to="/admin/usersAdmin">
                    משתמשים
                  </Link>
                </li>
                <li className="mx-4 mx-sm-5">
                  <Link className="navAdmin" to="/admin/jewelryAdmin">
                    מוצרים
                  </Link>
                </li>
                <li>
                  <Link className="navAdmin" to="/admin/categoriesAdmin">
                    קטגוריות
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center ptpt">
          <h1 className="colorTextAdmin">ברוך הבא לאיזור הניהול שלך</h1>
        </div>
      </header>
    </div>
  );
};

export default HaderAdmin;
