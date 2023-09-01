import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Appcontext } from "../../../context/context";
import { API_URL, doApiGet } from "../../../services/apiServices";
import { Link } from "react-router-dom";
import "./app.css";

const ProductInfo = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
    const { handleIncrement, handleDecrement,addToCart,  quantity } =useContext(Appcontext);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const data = await doApiGet(`${API_URL}/jewelry/single/${id}`);
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    };

    getProduct();
  }, [id]);

  return (
    <div className="container-fluid p-5">
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-8 mx-auto d-flex">
            <div className="col-sm-6">
              <img
                src={product.img_url}
                alt={product.name}
                className="col-8 col-sm-10"
              />
            </div>
            <div className="col-sm-6 text-center text-lg-end">
              <h5>{product.name}</h5>
              <p>{product.price?.toFixed(2)} ₪</p>
              <div className=" d-md-flex justify-content-between mt-4 ">
                <div className="text-center">
                  <button onClick={handleDecrement} className="btnPlusAndMinus">-</button>
                  <button className="btnCounterInfo">{quantity}</button>
                  <button onClick={handleIncrement} className=" btnPlusAndMinus">+</button>
                </div>
                <div>
                  <button
                    className="btn1 col-12 col-lg  py-2 px-2 px-lg-5  mt-4 mt-md-0"
                    onClick={() => addToCart(product, quantity)}
                  >
                    הוספה לסל
                  </button>
                </div>
              </div>

              <div
                className="accordion accordion-flush mt-4"
                id="accordionExample"
              >
                <div className="accordion-item">
                  <h5 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button1  py-2 col-12 collapsed d-flex justify-content-between"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <span className="bbttnn fw-bold"> תיאור מוצר</span>
                      <span>
                        <FontAwesomeIcon icon={faAngleRight} rotation={90} />
                      </span>
                    </button>
                  </h5>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">{product.info}</div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h5 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button1 py-2 col-12 collapsed d-flex justify-content-between"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      <span className="bbttnn fw-bold">כמה זמן משלוח?</span>
                      <span>
                        <FontAwesomeIcon icon={faAngleRight} rotation={90} />
                      </span>
                    </button>
                  </h5>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <strong>כמה זמן משלוח?</strong> <br />
                      יש 2 אופציות משלוח: <br />
                      משלוח עד הבית עד 5 ימי עסקים: ₪24.
                      <br /> משלוח אקספרס עד 2 ימי עסקים: ₪29.90 (מגיע מהיום
                      למחר למזמינים בימים א-ה עד השעה 14:00). <br />
                      תקף לערים ספציפיות בלבד.
                      <Link className="linkToCity fw-bold" to="/cityListPage">

                        <span>לרשימת הערים לחץ כאן</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;


