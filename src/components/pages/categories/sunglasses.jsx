import { useState, useEffect, useContext } from "react";
import { Appcontext } from "../../../context/context";
import { API_URL, doApiGet } from "../../../services/apiServices";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./app.css";

const Sunglasses = () => {
  const [chains, setChains] = useState([]);
  const { addToCart, addTofavourites, buttonColors ,removeFromfavourites,quantity } =
    useContext(Appcontext);

  const doApi = async () => {
    try {
      const _url = API_URL + "/jewelry?category=sunglasses";
      const data = await doApiGet(_url);
      console.log(data);
      setChains(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    doApi();
  }, []);

  return (
    <div className="container-fluid pt-5">
      <div className="container text-center">
        <div className="row g-4 g-md-5 pt-3 pb-5 ">
          {chains.map((obj, i) => {
            return (
              <div key={i} className="col-6 col-lg-4 col-xxl-3 ">
                <div className="card boxs1">
                  <div className="text-end">
                    <button
                      className="btn border border-0 "
                      onClick={() => {
                        if (buttonColors[obj._id] === "red") {
                          removeFromfavourites(obj._id);
                        } else {
                          addTofavourites(obj);
                        }
                      }}
                    >
                      <FontAwesomeIcon
                        className="b"
                        icon={faHeart}
                        size="2xl"
                        style={{
                          color: buttonColors[obj._id] === "red" ? "red" : "",
                        }}
                      />
                    </button>
                  </div>
                  <Link to={`/productInfo/${obj._id}`}>
                    <img
                      src={obj.img_url}
                      className="card-img-top responsive-imag"
                      alt={obj.name}
                    />
                  </Link>
                  <div className="card-body">
                    <h5 style={{ height: "48px" }} className="card-title">
                      {obj.name}
                    </h5>
                    <p className="card-text fw-bold">
                      {obj.price.toFixed(2)} <span className="fs-5">₪</span>
                    </p>
                  </div>
                  <div>
                    <button
                      className="btn1 col-12 py-2 "
                      onClick={() => addToCart(obj,quantity)}
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
export default Sunglasses;
