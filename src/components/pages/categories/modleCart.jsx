// import React, { useContext, useEffect } from "react";
// import { Appcontext } from "../../../context/context";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTrash } from "@fortawesome/free-solid-svg-icons";
// import { Link, useNavigate } from "react-router-dom";

// import Offcanvas from "react-bootstrap/Offcanvas";
// import { Badge } from "react-bootstrap";

// const ModleCart = () => {
//   const { cart, removeFromCart, calculateTotal, show, handleClose,cartCount } = useContext(
//     Appcontext
//   );
//   const nav = useNavigate();
//   const beyondToShoppingCart =() => {
//     // ספינר
//     const event = new Event('updateSpinner');
//     window.dispatchEvent(event);
//     nav("/shoppingCart");
//     handleClose();
//   }
//   const beyondToPayment =() => {
//         // ספינר
//         const event = new Event('updateSpinner');
//         window.dispatchEvent(event);
//     nav("/payment");
//     handleClose();
//   }
//   return (
//     <div>
//       <Offcanvas dir="rtl" show={show} onHide={handleClose}>
//         <Offcanvas.Header closeButton />
//         <h4 className="text-center">סל קניות</h4>
//         {cart.length <= 0 ? (
//           <p className="py-4 text-center">אין מוצרים בסל הקניות</p>
//         ) : (
//           <div style={{ maxHeight: "800px", overflowY: "auto" }}>
//             {cart.map((obj, i) => (
//               <div key={i} className="  pb-4">
//                 <div className=" d-flex bacColor justify-content-evenly">
//                   <div>
//                     <img
//                       className="imgge"
//                       src={obj.img_url}
//                       alt={obj.name}
//                       height={70}
//                       width={70}
//                     />
//                   </div>
//                   <div className="col-7 ">
//                     {obj.name}
//                     <div className="d-flex ">
//                       <p className="ms-4"> x {obj.count}</p>
//                       <p>
//                         {obj.price?.toFixed(2)}
//                         <span> ₪</span>
//                       </p>
//                     </div>
//                   </div>
//                   <div className="col-1">
//                     <button className="btn border-0" onClick={() => { removeFromCart(obj); }} > <FontAwesomeIcon icon={faTrash} size="xl" /> </button>
//                   </div>
//                 </div>
//               </div> ))}
//             <div className="container text-center">
//               <p className="border-bottom border-top fw-bold p-1"> סכום ביינים: {calculateTotal()?.toFixed(2)} ₪ </p>
//                 <button onClick={beyondToShoppingCart}  className="btn btnBtn1 mb-3 col-12">מעבר לסל הקניות</button>
//               <button onClick={beyondToPayment} className="btn btnBtn1 col-12 mb-3">מעבר לתשלום</button>
//             </div>
//           </div> )}
//       </Offcanvas>
//     </div>
//   );
// };

// export default ModleCart;



import React, { useContext, useEffect } from "react";
import { Appcontext } from "../../../context/context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

import Offcanvas from "react-bootstrap/Offcanvas";
import { Badge } from "react-bootstrap";

const ModleCart = () => {
  const { cart, removeFromCart, calculateTotal, show, handleClose, cartCount, userCart,fetchUserCart,
    token } = useContext(
    Appcontext
  );



  const nav = useNavigate();
  const beyondToShoppingCart = () => {
    // ספינר
    const event = new Event('updateSpinner');
    window.dispatchEvent(event);
    nav("/shoppingCart");
    handleClose();
  };
  const beyondToPayment = () => {
    // ספינר
    const event = new Event('updateSpinner');
    window.dispatchEvent(event);
    nav("/payment");
    handleClose();
  };


  const cartToDisplay = userCart.length > 0 ? userCart : cart;

  return (
    <div>
      <Offcanvas dir="rtl" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton />
        <h4 className="text-center">סל קניות</h4>
        {cartToDisplay.length <= 0 ? (
          <p className="py-4 text-center">אין מוצרים בסל הקניות</p>
        ) : (
          <div style={{ maxHeight: "800px", overflowY: "auto" }}>
            {cartToDisplay.map((obj, i) => (
              <div key={i} className="  pb-4">
                <div className=" d-flex bacColor justify-content-evenly">
                  <div>
                    <img
                      className="imgge"
                      src={obj.img_url}
                      alt={obj.name}
                      height={70}
                      width={70}
                    />
                  </div>
                  <div className="col-7 ">
                    {obj.name}
                    <div className="d-flex ">
                      <p className="ms-4"> x {obj.count}</p>
                      <p>
                        {obj.price?.toFixed(2)}
                        <span> ₪</span>
                      </p>
                    </div>
                  </div>
                  <div className="col-1">
                    <button className="btn border-0" onClick={() => { removeFromCart(obj); }} > <FontAwesomeIcon icon={faTrash} size="xl" /> </button>
                  </div>
                </div>
              </div>
            ))}
            <div className="container text-center">
              <p className="border-bottom border-top fw-bold p-1"> סכום ביינים: {calculateTotal()?.toFixed(2)} ₪ </p>
                <button onClick={beyondToShoppingCart}  className="btn btnBtn1 mb-3 col-12">מעבר לסל הקניות</button>
              <button onClick={beyondToPayment} className="btn btnBtn1 col-12 mb-3">מעבר לתשלום</button>
            </div>
          </div>
        )}
      </Offcanvas>
    </div>
  );
};

export default ModleCart;








