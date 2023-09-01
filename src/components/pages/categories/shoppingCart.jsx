import React, { useContext, useState } from "react";
import { Appcontext } from "../../../context/context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import "./app.css";
import { Link, useNavigate } from "react-router-dom";
import { API_URL, TOKEN_KEY, doApiMethod } from "../../../services/apiServices";
const ShoppingCart = () => {
  const nav = useNavigate();
  const [updateButtonColor, setUpdateButtonColor] = useState("#666666"); 
  const [updateTextColor, setUpdateTextColor] = useState("white"); 
  const handleButtonClick = () => {
    const event = new Event('updateSpinner');
    window.dispatchEvent(event);
  };

  const {
    quantities,
    setQuantities,
    cart,
    setCart,
    setCartCount,
    setUserCart,
    calculateTotal,
    removeFromCart,
    selectedShippingOption,
    handleShippingOptionChange,
    shipping1,
    shipping2,
    shippingPrice,
  } = useContext(Appcontext);

  const toBack = () => {
    nav(-1);
  };

  return (
    <div dir="rtl">
      {cart.length <= 0 ? (
        <h2 className="py-5 text-center">עגלת הקניות ריקה</h2>
      ) : (
        <div className="row p-5">
          <div className="col-lg-7 ps-lg-4 ps-xl-5">
            <table className="table ">
              {cart.length > 0 && (
                <thead>
                  <tr className="borderBottom">
                    <th>מוצר</th>
                    <th className="d-none d-md-table-cell d-lg-none d-xl-table-cell bbttnn">מחיר </th>
                    <th>כמות</th>
                    <th className="d-none d-sm-table-cell bbttnn">סכום ביניים</th>
                  </tr>
                </thead>
              )}
              <tbody>
                {cart.map((obj, i) => (
                  <tr key={i} className="table-secondary borderTr ">
                    <td className="d-flex p-0 align-items-center col">
                      <button
                        className="btn border-0 pe-1"
                        onClick={() => removeFromCart(obj)}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                      <img
                        src={obj.img_url}
                        alt={obj.name}
                        width={95}
                        className="responsive-image"
                      />
                      <span className="me-2 ">{obj.name} <br /> <span className="d-md-none d-lg-table-cell d-xl-none bbttnn">{obj.price.toFixed(2)} ₪</span></span>

                    </td>
                    <td className="align-middle col bbttnn d-none d-md-table-cell d-lg-none d-xl-table-cell">
                      {obj.price.toFixed(2)} ₪
                    </td>
                    <td className="align-middle col bbttnn">
                      <button
                        className="btnPlusAndMinusCart"
                        onClick={() => {
                          setQuantities((prevQuantities) => ({
                            ...prevQuantities,
                            [obj._id]:
                              (prevQuantities[obj._id] || obj.count) - 1,
                          }));
                          setUpdateButtonColor("black"); 
                          setUpdateTextColor("#ffffff");
                        }}
                      >
                        -
                      </button>
                      <button className="btnCounterInfoCart">
                        {quantities[obj._id] || obj.count}
                      </button>
                      <button
                        className="btnPlusAndMinusCart"
                        onClick={() => {
                          setQuantities((prevQuantities) => ({
                            ...prevQuantities,
                            [obj._id]:
                              (prevQuantities[obj._id] || obj.count) + 1,
                          }));
                          setUpdateButtonColor("black"); 
                          setUpdateTextColor("#ffffff");
                        }}
                      >
                        +
                      </button>
                    </td>

                    <td className="align-middle col bbttnn d-none d-sm-table-cell pe-4">
                      {(obj.price * obj.count).toFixed(2)} ₪
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <button onClick={toBack} className="py-2 px-4 continueShopping ">
              <FontAwesomeIcon className="ps-2 " icon={faArrowRightLong} />
              להמשיך לקנות
            </button>
            <button
              className="py-2 px-5 ShoppingBasketUpdate me-4"
              style={{ backgroundColor: updateButtonColor,color:updateTextColor }}
              onClick={async () => {
                const updatedCart = cart.map((item) => ({
                  ...item,
                  count: quantities[item._id] || item.count,
                }));
                setCart(updatedCart);
                const newCartCount = updatedCart.reduce(
                  (total, item) => total + (quantities[item._id] || item.count),
                  0
                );
                setCartCount(newCartCount);

                try {
                  const token = localStorage[TOKEN_KEY];
                  if (token) {
                    const url = API_URL + "/users/updateCart";
                    const userCartResponse = await doApiMethod(url, "PATCH", {
                      cart_ar: updatedCart,
                    });
                    setUserCart(userCartResponse);
                    setUpdateButtonColor("#666666");
                    setUpdateTextColor("white");
                    handleButtonClick();
                  }
                } catch (error) {
                  console.error("Error updating user cart:", error);
                }
              }}
            >
              עדכן סל קניות
            </button>
          </div>
          <div className="col-lg-5 mt-5 mt-lg-2 pe-lg-4 pe-xl-5  border-end borderEndNane">
            <div className="">
              <h5 className="fw-bold borderBottom pb-2"> סה"ה בסל הקניות</h5>
            </div>
            <div className="d-flex justify-content-between border-bottom  pt-2 mt-4">
              <p className="fs-5">סכום ביניים</p>
              <p className="fsPriceTotle">{calculateTotal().toFixed(2)} ₪</p>
            </div>
            <p className="mt-2 fw-bold">משלוח:</p>
            <div className="border p-3 mt-4 d-flex align-items-center small bgColorRadio">
              <div>
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  value="option1"
                  checked={selectedShippingOption === "option1"}
                  onChange={handleShippingOptionChange}
                />
              </div>
              <div>
                <label
                  className="form-check-label me-2"
                  htmlFor="exampleRadios1"
                >
                  <span className="fw-bold">משלוח עד הבית 1-5 ימי עסקים:</span>
                  <span className="pricePayment">{shipping1.toFixed(2)} ₪</span>
                </label>
              </div>
            </div>
            <div className="border p-3 mt-2  d-flex align-items-center justify-content-between small bgColorRadio">
              <div className=" d-flex align-items-center ">
                <div>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios2"
                    value="option2"
                    checked={selectedShippingOption === "option2"}
                    onChange={handleShippingOptionChange}
                  />
                </div>
                <div>
                  <label
                    className="form-check-label me-2"
                    htmlFor="exampleRadios2"
                  >
                    <span className="fw-bold">
                      משלוח אקספרס עד 2 ימי עסקים:
                    </span>
                    <span className="pricePayment">
                      {shipping2.toFixed(2)} ₪
                    </span>
                  </label>
                </div>
              </div>

              <div className="small text-start">
                <Link className="linkToCity fw-bold" to="/cityListPage">
                  <span>לחצו לרשימת הערים </span>
                </Link>
              </div>
            </div>
            <div className="d-flex justify-content-between  borderBotom border-top pt-2 mt-4">
              <p className="fw-bold">סה"כ</p>
              <p className="fsPriceTotle">
                {(calculateTotal() + shippingPrice).toFixed(2)} ₪
              </p>
            </div>
            <Link to="/payment">
              <button className="mt-3  btn btn-dark col-12">מעבר לתשלום</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
