import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { Appcontext } from "../../context/context";
import "./payment.css";


const Payment = () => {
  const nav = useNavigate();
  const { cart, calculateTotal ,selectedShippingOption,handleShippingOptionChange,
    shipping1,shipping2,shippingPrice} = useContext(Appcontext);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();



  const onSubForm = (_bodyData) => {
    console.log(_bodyData);
     nav("/paymentPaypal")
  };


 
  
  return (
    <div dir="rtl">
      <div className="p-5 mt-5">
        <form onSubmit={handleSubmit(onSubForm)} id="id_form">
          <div className=" row g-5">
            <div className="col-md-7 ">
              <div className="row  g-3 mt-1 pt-2  border-top border-3">
                <h5 className="fw-bold">כתובת למשלוח</h5>
                <div className="div">
                  <label>כתובת אימייל</label>
                  <input
                    {...register("email", {
                      required: true,
                      minLength: 2,
                    })}
                    className="form-control"
                    type="email"
                  />
                  {errors.email && (
                    <div className="colertecxt">* הכנס כתובת אימייל</div>
                  )}
                </div>
                <div className="col-6 ">
                  <label>שם פרטי</label>
                  <input
                    {...register("firstName", { required: true, minLength: 2 })}
                    className="form-control"
                    type="text"
                  />
                  {errors.firstName && (
                    <div className="colertecxt">* הכנס שם</div>
                  )}
                </div>
                <div className="col-6 ">
                  <label>שם משפחה</label>
                  <input
                    {...register("lastName", { required: true, minLength: 2 })}
                    className="form-control"
                    type="text"
                  />
                  {errors.lastName && (
                    <div className="colertecxt">* הכנס משפחה</div>
                  )}
                </div>
                <div className="col-6 ">
                  <label>רחוב</label>
                  <input
                    {...register("street", { required: true, minLength: 2 })}
                    className="form-control"
                    type="text"
                  />
                  {errors.street && (
                    <div className="colertecxt">* הכנס רחוב</div>
                  )}
                </div>
                <div className="col-6 ">
                  <label>דירה</label>
                  <input
                    {...register("apartment", { required: true, minLength: 1 })}
                    className="form-control"
                    type="text"
                  />
                  {errors.apartment && (
                    <div className="colertecxt">* הכנס דירה</div>
                  )}
                </div>
                <div className="">
                  <label>עיר</label>
                  <input
                    {...register("city", { required: true, minLength: 2 })}
                    className="form-control"
                    type="text"
                  />
                  {errors.city && <div className="colertecxt">* הכנס עיר</div>}
                </div>
                <div className="">
                  <label>טלפון</label>
                  <input
                    {...register("phone", { required: true, minLength: 9 })}
                    className="form-control"
                    type="tel"
                  />
                  {errors.phone && (
                    <div className="colertecxt">* הכנס טלפון</div>
                  )}
                </div>
                <div className="div">
                  <label>הערות</label>
                  <textarea
                    {...register("comments")}
                    className="form-control"
                    type="textarea"
                    defaultValue=""
                    placeholder=""
                  ></textarea>
                </div>
               
              </div>
            </div>
            <div className="col-md-5 ">
              <div className="row  mt-5 mt-md-0 border border-4 border-black py-4 ps-4 ps-md-2 ps-lg-4 pe-4 pe-md-3 pe-lg-4 bgForomBy">
                <h5 className="fw-bold pe-0 pb-3">פרטי הזמנה</h5>
                <table>
                  <thead>
                    <tr className="borderBotom">
                      <th>פריטים</th>
                      <th className="text-start">סה"כ</th>
                    </tr>
                  </thead>

                  <tbody>
                    {cart.map((obj, i) => (
                      <tr key={i} className="border-bottom ">
                        <td className="py-3">
                          <span className="ps-3 ps-md-0 ps-lg-3 fsAmount">
                            x {obj.count}
                          </span>
                          <span className="fsName">{obj.name}</span>
                        </td>
                        <td className="text-start pricePayment">
                          <span className="fsPrice">
                            {obj.price * obj.count} ₪
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="d-flex justify-content-between border-bottom border-top pt-2 mt-4">
                  <p className="fw-bold">סכום ביניים</p>
                  <p className="fsPriceTotle">
                    {calculateTotal().toFixed(2)} ₪
                  </p>
                </div>
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
                      <span className="fw-bold">
                        משלוח עד הבית 1-5 ימי עסקים:
                      </span>
                      <span className="pricePayment">
                        {shipping1.toFixed(2)} ₪
                      </span>
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
                  
                  <div className="small text-start"> <Link className="linkToCity fw-bold" to="/cityListPage"><span>לחצו לרשימת הערים </span> </Link> </div>
                </div>
                <div className="d-flex justify-content-between  borderBotom border-top pt-2 mt-4">
                  <p className="fw-bold">סה"כ</p>
                  <p className="fsPriceTotle">
                    {(calculateTotal() + shippingPrice).toFixed(2)} ₪
                  </p>
                </div>
               
                <div className="mt-3 align-items-center">
                  <input
                    {...register("tarms", { required: true })}
                    className=""
                    type="checkbox"
                 
                  />
                  <label className="me-2">קראתי ומסכים לתקנון האתר *</label>
                  {errors.tarms && (
                    <div className="colertecxt">שדה זה חובה * </div>
                  )}
                </div>
        <button  className="mt-3  btn btn-dark">לתשלום</button>
    
              </div>
            </div>
          </div>
        </form>
      
      </div>
    </div>
  );
};

export default Payment;

