import { useContext } from "react";
import { Appcontext } from "../../../context/context";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./app.css";
import { Badge } from "react-bootstrap";

const Fivorit = () => {
  const { favourites, removeFromfavourites, addToCart } =
    useContext(Appcontext);

  return (
    <div className="container-fluid pt-5">
      <div className="container text-center">
        {favourites.length <= 0 ? (
          <h2 className="mb-5">עגלת המועדפים ריקה </h2>
        ) : (
          ""
        )}
        <div className="row g-4 g-md-5 pt-3 pb-5">
          {favourites.map((obj, i) => {
            return (
              <div key={i} className="col-6 col-lg-4 col-xxl-3">
                <div className="card boxs1">
                  <div className="text-end">
                    <button
                      className="btn border border-0"
                      onClick={() => removeFromfavourites(obj._id)}
                    >
                      <FontAwesomeIcon icon={faTrash} size="xl" />
                    </button>
                  </div>
                  <Link to={`/productInfo/${obj._id}`} className="link">
                    <img
                      src={obj.img_url}
                      className="card-img-top responsive-imag"
                      alt={obj.name}
                    />
                    <div className="card-body ">
                      <h5 style={{ height: "48px" }} className="card-title">
                        {obj.name}
                      </h5>
                      <p className="card-text fw-bold">
                        {obj.price.toFixed(2)} <span className="fs-5">₪</span>
                      </p>
                    </div>
                  </Link>
                  <div >
                    <button
                      className="btn1 col-12 py-2"
                      onClick={() => addToCart(obj)}
                    >
                      הוספה לסל
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Fivorit;
